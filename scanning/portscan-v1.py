#!/usr/bin/python 

import socket
from termcolor import colored

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
socket.setdefaulttimeout(2)

port = 3306
host = "192.168.1.231"
#host = input("[*] Enter the host to scan: ")

def portScanner(host, port):
    if sock.connect_ex((host, port)):
        print (colored("Port %d is closed" % port, "red"))
    else:
        print (colored("Port %d is open" % port, 'green'))

#for port in range(22, 23):
 #   portScanner(host, port)

portScanner(host, port)