<?php

// if (mail('events848@gmail.com', 'Заявка с service.ars-pt.ru', "hello", "Content-type:text/plain; charset = utf-8\r\nFrom:")) {
//     echo 1;
// } else {
//     echo 0;
// }
$headers = array(
    'From' => 'info@service.ars-pt.ru',
    'Reply-To' => 'info@service.ars-pt.ru',
    'X-Mailer' => 'PHP/' . phpversion()
);

mail('events848@gmail.com', 'Заявка с service.ars-pt.ru', "hello", $headers);





?>