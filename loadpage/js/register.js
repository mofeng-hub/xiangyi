        
window.onload = function onld() {
    window.status = "正在注册...";
}
//验证用户名
var username;
var cn;
function checkusername() {
    username = document.getElementById("username").value;
    cn = document.getElementById('y_username');
    var reg = /^[\D][\w]{1,9}$/; //可以输入用户名,但必须是非数字开头，长度为2-10位;
    if (reg.test(username) == false) {
        y_username.innerHTML = "请正确输入用户名";
        cn.className = 'r_span';
        return false;
    } else {
        y_username.innerHTML = "*";
        cn.className = 'g_span';
        return true;
    }

    //alert(username);

}
//验证密码
var userpass;
function checkuserpass() {
    userpass = document.getElementById("userpass").value;
    cn = document.getElementById('y_userpass');
    var reg = /^.{4,10}$/; //密码长度可以为非换行符的任意字符，长度必须在4-10位以内;
    if (reg.test(userpass) == false) {
        y_userpass.innerHTML = "密码长度必须为4-10位以内";
        cn.className = 'r_span';
        return false;
    } else {
        y_userpass.innerHTML = "*";
        cn.className = 'g_span';
        return true;
    }

}
//确认密码验证
var yzpwd;

function yzcheckpass() {
    yzpwd = document.getElementById("checkpass").value;
    cn = document.getElementById('y_checkpass');
    if (yzpwd != "") {
        if (yzpwd == userpass) {
            y_checkpass.innerHTML = "*";
            cn.className = 'g_span';
            return true;
        } else {
            y_checkpass.innerHTML = "两次输入密码不一致，请重新输入";
            cn.className = 'r_span';
            return false;
        }
    } else {
        y_checkpass.innerHTML = "必填";
        cn.className = 'r_span';
    }

}

//验证性别选择
var sex;
var b;

function checksex() {
    sex = document.getElementsByName("sex");
    cn = document.getElementById('y_sex');
    for (var i = 0; i < sex.length; i++) {
        if (sex[i].checked) //验证两个单选框的选择情况
        {
            document.getElementById("y_sex").innerHTML = "已选择";
            cn.className = 'g_span';
            b = true;
            break;
        } else {
            document.getElementById("y_sex").innerHTML = "未选择";
            cn.className = 'r_span';
            b = false;
        }

    }
}

//电子邮箱验证
var email;

function checkemail() {
    cn = document.getElementById('y_email');
    email = document.getElementById("email").value;
    var reg = /^[a-zA-Z0-9]+\w+@\w+(\.[a-zA-Z]{2,3})$/; //邮箱必须以字母或者数字开头，不能为特殊字符
    //var reg=/^[0-9a-zA-Z_-]+@[0-9a-zA-Z-]+(\.[a-zA-Z]{2,3})$/
    if (reg.test(email) == false) {
        y_email.innerHTML = "请输入正确的邮箱格式";
        cn.className = 'r_span';
        return false;
    } else {
        y_email.innerHTML = "*";
        cn.className = 'g_span';
        return true;
    }
}

//验证手机号码
var phone;

function checkphone() {
    phone = document.getElementById("phone").value;
    cn = document.getElementById('y_phone');
    var reg = /^1\d{10}$/;
    if (reg.test(phone) == false) {
        y_phone.innerHTML = "请输入正确的手机号";
        cn.className = 'r_span';
        return false;
    } else {
        y_phone.innerHTML = "*";
        cn.className = 'g_span';
        return true;
    }
}

//验证出生年月
var bday;

function checkday() {
    cn = document.getElementById('y_brithday');
    bday = document.getElementById("brithday").value;
    var reg = /^((19\d{2})|(200\d)|(201[0-7]))-((0?[1-9])|(1[0-2]))-((0?[1-9])|([1-2]\d)|(3[0-1]))$/; //生日年限范围为1900-2017
    if (reg.test(bday) == false) {
        y_brithday.innerHTML = "请输入正确的出生日期";
        cn.className = 'r_span';
        return false;
    } else {
        y_brithday.innerHTML = "*";
        cn.className = 'g_span';
        return true;
    }
}

//注册验证
function zhuce() {
    if (checkusername() && checkusername() && yzcheckpass() && checkemail() && checkphone() && checkday() && checksex()) {
        alert(username + "：注册成功！");
        var s = document.getElementsByTagName("input").length;
        //提交后，清除文本框，提示框内容，并取消单选框选择
        for (var i = 0; i < s; i++) {
            document.getElementsByTagName("input")[i].value = "";
            document.getElementsByTagName("span")[i].innerHTML = "";
            document.getElementsByTagName("input")[i].checked = false;;
        }

    } else {
        alert("对不起，注册失败！");
    }
}
//退出方法
function out() {
    if (window.confirm("确定退出系统吗？")) {
        window.close();
    }

}


