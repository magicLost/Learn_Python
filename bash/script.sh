#!/bin/bash

if [ "$1" == "Vasya" ]; then
    echo "Privet $1"
elif [ "$1" == "Trump" ]; then
    echo "Hello $1"
else echo "Zdarovo $1"
fi

read -p "Enter something: " x

echo "Starting CASE selection..."

case $x in
      1) echo "This is one";;
  [2-9]) echo "Two-Nine";;
"Petya") echo "Privet $x";;
      *) echo "Parameter Unknown, sorry!"
esac