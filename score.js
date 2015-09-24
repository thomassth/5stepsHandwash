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
    } else {
        user = prompt("請輸入學生姓名", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
            setCookie("score", 0, 365);
            alert("done")
        }
    }
}

function clickScore(part){
    if (date > Number(getCookie(part))) {
        addScore(part);
    }else {
        alert("明天再來吧！")
    }
}

function addScore(part) {
    var scoreNow = getCookie("score");
    var scoreNew = Number(scoreNow) + 150;
    var count = Number(getCookie(part+"Count"));
    setCookie(part+"Count",count+1,365);
    setCookie("score", scoreNew, 365);
    setCookie(part,date,365);
    document.getElementById("demo").innerHTML = "✓";
}

function showScore(){
    var now = getCookie("score");
    document.getElementById("show").innerHTML = now;
    }
function result(){
    document.getElementById("why").innerHTML = getCookie("whyCount");
    document.getElementById("when").innerHTML = getCookie("whenCount");
    document.getElementById("steps").innerHTML = getCookie("stepsCount");
    document.getElementById("game").innerHTML = getCookie("gameCount");
    document.getElementById("score").innerHTML = getCookie("score");
}
function medal(){
    var x=Number(getCookie("score"));
    switch(true){
        case (x>=4500&&x<9000):
        document.getElementById("medal").setAttribute("src","img/medals/bronze.svg");
        setCookie("medal", 1, 365);
        break;
        case (x>=9000&&x<13500):
        document.getElementById("medal").setAttribute("src","img/medals/silver.svg");
        setCookie("medal", 2, 365);
        break;
        case (x>=13500&&x<18000):
        document.getElementById("medal").setAttribute("src","img/medals/gold.svg");
        setCookie("medal", 3, 365);
        break;
        case (x>=18000):
        document.getElementById("medal").setAttribute("src","img/medals/platinum.svg");
        setCookie("medal", 4, 365);
        break;
        default:

        break;
    }
}