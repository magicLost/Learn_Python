#!/bin/bash

myFunction()
{
    echo "This is function - $0"
    echo "First parametr is: $1"
    echo "Second param: $2"
}

summa=0

sum()
{
    summa=$(($1+$2))
}

myFunction 50 vasya