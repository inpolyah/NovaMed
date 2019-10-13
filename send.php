<?php 

if(isset($_POST['submit'])){
    $to = "yaroslavabojko94@gmail.com"; // Здесь нужно написать e-mail, куда будут приходить письма
    $from = $_POST['name']; 
    $data = $_POST['data'];
    $tel = $_POST['tel']; 
    $doctor = $_POST['doctor'];
    $subject = "Онлайн-запис";
    $message = $from . " Бажає записатись до " . $doctor . " на " . $data . " телефон клієнта: " . $tel . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
	
    mail($to,$subject,$message,$headers);
   // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
    echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
	echo "<br /><br /><a href='https://epicblog.net'>Вернуться на сайт.</a>";

}

?>
<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="http://novamed.net.ua/appointment_successful-index.html");}
window.setTimeout("changeurl();",3000);
</script>