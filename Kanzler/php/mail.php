<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];

$headers = array(
    'From' => 'info@service.ars-pt.ru',
    'Reply-To' => 'info@service.ars-pt.ru',
    'X-Mailer' => 'PHP/' . phpversion()
);

$message = $name . ' оставил заявку, его телефон - ' . $phone;

if (mail('zakaz@ars-pt.ru', 'Заявка с service.ars-pt.ru', $message, $headers)) {
    echo 1;
} else {
    echo 0;
}

?>