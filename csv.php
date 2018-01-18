<?php   
    $_session_id = sha1(microtime().$_SERVER['REMOTE_ADDR']);
    $entityBody = preg_replace('/^/m', "$_session_id,", file_get_contents('php://input'))."\n";

    // make sure results exists and is not accessable from the web
    if (!is_dir("results")) {
        if (!@mkdir("results")) {
            $error = error_get_last();
            echo $error['message'];
        }
    }

    if (!file_exists("results/.htaccess")) file_put_contents("results/.htaccess", "
        # Apache 2.4
        <IfModule mod_authz_core.c>
            Require all denied
        </IfModule>

        # Apache 2.2
        <IfModule !mod_authz_core.c>
            Order Allow,Deny
            Deny from all
        </IfModule>
    ");

    file_put_contents("results/$_session_id.csv", $entityBody);
