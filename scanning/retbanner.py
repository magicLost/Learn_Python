#!/usr/bin/python

import socket

def retBanner(ip, port):
    try: 
        socket.setdefaulttimeout(2)
        s = socket.socket()
        s.connect((ip, port))
        banner = s.recv(1024)
        return banner
    except:
        print("Except")
        return

def main():
    port = int(input("[*] Enter target port: "))
    ip = "192.168.56.1"
    #port = 22
    banner = retBanner(ip, port)
    if banner:
        try:
            print("[+]" + ip + ":" + str(port) + ": " + banner.decode().strip("\n"))
        except:
            print(banner)

main()