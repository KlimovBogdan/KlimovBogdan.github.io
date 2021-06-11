<meta charset="utf-8"> 
<?php

error_reporting( E_ERROR );   //Отключение предупреждений и нотайсов (warning и notice) на сайте
// создание переменных из полей формы		
if (isset($_POST['name']))			{$name			= $_POST['name'];		if ($name == '')	{unset($name);}}
if (isset($_POST['phone']))			{$phone			= $_POST['phone'];		if ($phone == '')	{unset($phone);}}
if (isset($_POST['email']))		{$email		= $_POST['email'];		if ($email == '')	{unset($email);}}
if (isset($_POST['question']))			{$question			= $_POST['question'];		if ($question == '')	{unset($question);}}
if (isset($_POST['review']))			{$review			= $_POST['review'];		if ($review == '')		{unset($review);}}
//стирание треугольных скобок из полей формы
/* комментарий */
$note_text="Имя : $name";

if (isset($name) ) {
$name=stripslashes($name);
$name=htmlspecialchars($name);
}
if (isset($phone) ) {
$phone=stripslashes($phone);
$phone=htmlspecialchars($phone);
$note_text .= "\r\n Телефон : $phone";
}
if (isset($email) ) {
$email=stripslashes($email);
$email=htmlspecialchars($email);
$note_text .= "\r\n Email : $email";
}
if (isset($question) ) {
$question=stripslashes($question);
$question=htmlspecialchars($question);
$note_text .= "\r\n Вопрос : $question";
}
if (isset($review) ) {
$review=stripslashes($review);
$review=htmlspecialchars($review);
$note_text .= "\r\n Отзыв : $review";
}
// адрес почты куда придет письмо
$address="kancleryurist@yandex.ru";

if (isset($name)) {
mail($address,'Заявка с сайта',$note_text,"Content-type:text/plain; windows-1251"); 
// сообщение после отправки формы
    
echo "<p style='color:green;'>Уважаемый(ая) <b style='color:red;'>$name</b> Ваше письмо отправленно успешно. <br> Спасибо. ";
}

?>