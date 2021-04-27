<?php

$message = $_POST['name'] . ', ' . $_POST['phone'];

if (mail('events848@gmail.com', 'Заявка с service.ars-pt.ru', $message, "Content-type:text/plain; charset = utf-8\r\nFrom:$email")) {
    echo 1;
} else {
    echo 0;
}

?>