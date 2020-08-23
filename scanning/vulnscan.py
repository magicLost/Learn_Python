#!/usr/bin/python

import socket
import os
import sys
from termcolor import colored

def retBanner(ip, port):
    try: 
        socket.setdefaulttimeout(1)
        s = socket.socket()
        s.connect((ip, port))
        banner = s.recv(1024)
        return banner
    except:
        print(colored('[-] No connection for ip ' + ip + ":" + str(port), "cyan"))
        return

def checkVulns(banner, filename):
    """ decodeBanner = banner.decode()
    f = open(filename, "r")
    for line in f.readlines():
        print(colored(line, "green"))
        print(colored(decodeBanner), "green")
        if line.strip("\n") in decodeBanner:
            print(colored('[+] Server is vulnerable: ' + decodeBanner.strip("\n"), "magenta")) """
    try:
        decodeBanner = banner.decode()
        f = open(filename, "r")
        for line in f.readlines():
            #print(colored(line, "green"))
            #print(colored(decodeBanner), "green")
            if line.strip("\n") in decodeBanner:
                print(colored('[+] Server is vulnerable: ' + decodeBanner.strip("\n"), "magenta"))
    except UnicodeDecodeError:
        return
    except:
        print(colored("Exception: " + str(sys.exc_info()[0]), "red"))
        #print(vars(sys.exc_info()[0]))
        return
    

def main():
    if len(sys.argv) == 2:

        filename = sys.argv[1]

        if not os.path.isfile(filename):
            print(colored('[-] File does not exists ' + filename, "yellow"))
            exit(0)

        if not os.access(filename, os.R_OK):
            print(colored('[-] Access Denied ' + filename, "yellow"))
            exit(0)

    else:
        print(colored('[-] Usage: ' + str(sys.argv[0] + ' <vuln filename>'), "yellow"))
        exit(0)

    portList = [21,22,23,25,80,110,443,445]

    #scan all network - from 1 to 255
    for x in range(205, 207):
        ip = "192.168.1." + str(x)
        for port in portList:

            banner = retBanner(ip, port)

            if banner:
                try:
                    print(colored("[+]" + ip + ":" + str(port) + ": " + banner.decode().strip("\n"), "yellow"))
                except:
                    print(colored(banner, "blue"))

                checkVulns(banner, filename)


main()


