#!/bin/bash

echo "Hello world"

myComp="Lenovo G510"
myOS=`uname -a`

echo "This script name is $0"
echo "Privet $1"
echo "Hello $2"
echo "From $myComp with OS - $myOS"

num1=50
num2=45
summa=$((num1 + num2))
echo "$num1 + $num2 = $summa"