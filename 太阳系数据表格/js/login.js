function judge_log(){
    if(!(localStorage.getItem("loggingStatus") === null)){
        alert("欢迎回来");
        location.href="index.html"
    }
}
function logIn() {
    let text = document.getElementById("name").value;
    let password = document.getElementById("pst").value;
    if (text.length === 0){
        alert("账号不能为空");
    }else if (password.length === 0){
        alert("密码不能为空");
    }else if (judge_name()&&judge_password()){
        localStorage.setItem("loggingStatus",text);
        alert("用户:"+localStorage.getItem(text+"_Name")+"   欢迎回来");
        location.href="index.html"
    }else {
        alert("账号或密码错误")
    }
}
function judge_name(){
    let text = document.getElementById("name").value;
    if (localStorage.getItem(text) === null){
        return false;
    }
    return true;
}
function judge_password(){
    let text = document.getElementById("name").value;
    let id = text.concat("_password");
    let password = document.getElementById("pst").value;
    if (localStorage.getItem(id) === password){
        return true;
    }else {
        return false;
    }
}