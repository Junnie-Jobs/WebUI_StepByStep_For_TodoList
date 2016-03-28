<?php

header('Content-Type: application/json;charset=utf-8');
// header('Content-Type: type/text;charset=utf-8');
// http_response_code(304);
// sleep(5);

if($_GET['param']){
    echo "{\"method\":\"get\",\"param\":\"".$_REQUEST['param']."\"}";    
} else {
    echo "{\"method\":\"post\",\"param\":\"".$_REQUEST['param']."\"}";    
}
?>