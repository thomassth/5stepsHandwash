var d = new Date();
var days = 1000*60*60*24;
var date = Math.ceil(d.getTime()/days);

function setCookie(cname, cvalue, exdays) {
    d.setTime(d.getTime() + (exdays*days));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("請輸入學生姓名", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
            setCookie("score", 0, 365);
            setCookie("lastTime",0,365);
            alert("done")
        }
    }
}

function clickScore(){
    if (date > Number(getCookie("lastTime"))){
        addScore();
    }else {
        alert("Try tomorrow!")
    }
}

function addScore() {
    var scoreNow = getCookie("score");
    var scoreNew = Number(scoreNow) + 150;
    setCookie("score", scoreNew, 365);
    setCookie("lastTime",date,365);
    document.getElementById("demo").innerHTML = "CLICKED!";
}