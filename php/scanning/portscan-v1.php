<?php
    

    /* if(!extension_loaded('sockets'));
        die("The sockets extension is not loaded."); */

    $socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

    //socket_set_option($socket, SOL_TCP, )

    if($socket === false){
        echo 'Unabel to create AF_UNIX socket';
        var_dump(socket_strerror(socket_last_error()));
    }else{
        echo "OK. \n";
    }
    
    //$ip = gethostbyname('www.google.com');
    $ip = "192.168.1.231";
    $port = 631;
    
    $result = socket_connect($socket, $ip, $port);

    //var_dump($result);
    //var_dump("HELLOOOOOOOO");

    if($result !== false){
        echo "Connecton success on port - 8080";
        //socket_close($socket);
    }else{
        echo "No socket connection\n";
        var_dump(socket_strerror(socket_last_error()));
        die();
    }

    $buf = 'This is my buffer';

    $bytes = socket_recv($socket, $buf, 2048, MSG_WAITALL);

    if($bytes !== false){
        echo "Read $bytes ...";
        var_dump($buf);
    }else{
        echo "socket_recv do not work...";
        var_dump(socket_strerror(socket_last_error()));
    } 