<?php   
    if(!session_id())
    {
        session_start();
        if(!isset($_SESSION['id']))
            $_SESSION['id'] = sha1(microtime()+$_SERVER['REMOTE_ADDR']);
    }
    $entityBody = preg_replace('/^/m', $_SESSION['id'], file_get_contents('php://input'))."\n";
    file_put_contents('res.csv', $entityBody, FILE_APPEND);
