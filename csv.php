<?php   
    $_session_id = sha1(microtime()+$_SERVER['REMOTE_ADDR']);
    $entityBody = preg_replace('/^/m', "$_SESSION[id], ", file_get_contents('inp.txt'))."\n";
    file_put_contents("res/$_SESSION[id].csv", $entityBody, FILE_APPEND);