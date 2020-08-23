#!/usr/bin/python 

from socket import *
import optparse
from threading import *

def connScan(targetHost, targetPort):
    try: 
        sock = socket(AF_INET, SOCK_STREAM)
        sock.connect((targetHost, targetPort))
        print('[+] %d/tcp open' %targetPort)
    except:
        print('[+] %d/tcp closed' %targetPort)
    finally:
        sock.close()

def portScan(targetHost, targetPorts):
    try:
        targetIP = gethostbyname(targetHost)
    except:
        print('Unknown host %s' %targetHost)
    
    try:
        targetName = gethostbyaddr(targetIP)
        print('[+] Scan results for: ' + targetName[0])
    except:
        print('[+] Scan results for: ' + targetIP)

    setdefaulttimeout(1)
    for targetPort in targetPorts:
        t = Thread(target=connScan, args=(targetHost, int(targetPort)))
        t.start()

def main():
    parser = optparse.OptionParser('Usage of program: ' + '-H <target host> -p <target port>')
    parser.add_option('-H', dest="targetHost", type='string', help='specify target host')
    parser.add_option('-p', dest="targetPort", type='string', help='specify target ports separated by comma')
    (options, args) = parser.parse_args()
    targetHost = options.targetHost
    targetPosts = str(options.targetPort).split(',')

    if(targetHost == None) | (targetPosts[0] == None):
        print (parser.usage)
        exit(0)

    portScan(targetHost, targetPosts)

if __name__ == '__main__':
    main()