<?php   
    $_session_id = sha1(microtime().$_SERVER['REMOTE_ADDR']);
    $entityBody = preg_replace('/^/m', "$_session_id,", file_get_contents('php://input'))."\n";
    if (!is_dir("res")) mkdir("res");
    file_put_contents("res/$_session_id.csv", $entityBody, FILE_APPEND);
