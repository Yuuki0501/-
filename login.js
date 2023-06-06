//会員登録画面
document.getElementById("touroku").onclick = function() {
    const name = document.getElementById("name").value;
    const name_huri = document.getElementById("name_huri").value;
    const mail = document.getElementById("mail").value;
    const pass = document.getElementById("pass").value;
    const repass = document.getElementById("repass").value;
    const birth = document.getElementById("birth").value;

     

    var flag = 0;
    if(name.length == 0){flag = 1;}
    if(name_huri.length == 0){ flag = 1; }
    if(mail.length == 0){ flag = 1; }
    if(pass.length == 0){ flag = 1; }
    if(repass.length == 0){ flag = 1; }

    if(flag == 1){ alert('必須項目が未記入の箇所があります'); return false;}
    else{
        flag_chk = 0;

        var regexp = /[一-龠]/;
        if(regexp.test(name) != true){ document.getElementById('name_chk').style.display = "block"; flag_chk = 1; }
        else{ document.getElementById('name_chk').style.display = "none"; }

        var regexp = /^[\u{3000}-\u{301C}\u{3041}-\u{3093}\u{309B}-\u{309E}]+$/mu;
        if(regexp.test(name_huri) != true){ document.getElementById('name_huri_chk').style.display = "block"; flag_chk = 1; }
        else{ document.getElementById('name_huri_chk').style.display = "none"; }

        var regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
        if(regexp.test(mail) != true){ document.getElementById('mail_chk').style.display = "block"; flag_chk = 1; }
        else{ document.getElementById('mail_chk').style.display = "none"; }

        var regexp = /^([a-zA-Z0-9]{8,})$/;
        if(regexp.test(pass) != true){ document.getElementById('pass_chk').style.display = "block"; flag_chk = 1; }
        else{ document.getElementById('pass_chk').style.display = "none"; }

        if(pass != repass){ document.getElementById('repass_chk').style.display = "block"; flag_chk = 1; }
        else{ document.getElementById('repass_chk').style.display = "none"; }

        var regexp = /^\d{7}$/;
        if(regexp.test(yuubin) != true){ document.getElementById('yuubin_chk').style.display = "block"; flag_chk = 1; }
        else{ document.getElementById('yuubin_chk').style.display = "none"; }

        var regexp = /^(0{1}\d{9,10})$/;
        if(regexp.test(phone) != true){ document.getElementById('phone_chk').style.display = "block"; flag_chk = 1; }
        else{ document.getElementById('phone_chk').style.display = "none"; }

        if(flag_chk == 1){ return false; }
        else{ return ture; }

        
    }
    
};

//ログイン画面
document.getElementById("login").onclick = function() {
    const name_log = document.getElementById("name_log").value;
    const mail_log = document.getElementById("mail_log").value;
    const pass_log = document.getElementById("pass_log").value;
     

    var flag = 0;
    if(name_log.length == 0){flag = 1;}
    if(mail_log.length == 0){ flag = 1; }
    if(pass.length == 0){ flag = 1; }

    if(flag == 1){ alert('必須項目が未記入の箇所があります'); return false;}
    else{
        flag_chk = 0;

        var regexp = /[一-龠]/;
        if(regexp.test(name_log) != true){ document.getElementById('name_chk').style.display = "block"; flag_chk = 1; }
        else{ document.getElementById('name_chk').style.display = "none"; }


        var regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
        if(regexp.test(mail_log) != true){ document.getElementById('mail_chk').style.display = "block"; flag_chk = 1; }
        else{ document.getElementById('mail_chk').style.display = "none"; }

        var regexp = /^([a-zA-Z0-9]{8,})$/;
        if(regexp.test(pass_log) != true){ document.getElementById('pass_chk').style.display = "block"; flag_chk = 1; }
        else{ document.getElementById('pass_chk').style.display = "none"; }


        if(flag_chk == 1){ return false; }
        else{ return ture; }

        
    }
    
};
