function verify(){
    if(checkUserName()&&checkName()&&checkEmail()&&checkPassword()){
        alert("注册成功!");
        let un = document.getElementById("userName").value;
        let ne = document.getElementById("name").value;
        let el = document.getElementById("email").value;
        let pd = document.getElementById("psg").value;
        let userName = el.concat("_userName");
        let Name1 = el.concat("_Name");
        let password1 = el.concat("_password");
        localStorage.setItem(userName,un);
        localStorage.setItem(Name1,ne);
        localStorage.setItem(el,el);
        localStorage.setItem(password1,pd);
        let Name2 = un.concat("_Name");
        let email = un.concat("_email");
        let password2 = un.concat("_password");
        localStorage.setItem(un,un);
        localStorage.setItem(Name2,ne);
        localStorage.setItem(email,un);
        localStorage.setItem(password2,pd);
        history.go(-1);
    }
}
function checkUserName(qualifiedName, value){
    let un = document.getElementById("userName").value;
    let judge = /^[A-z0-9_-]{3,16}$/;
    if(un.length===0){
        alert("用户名不能为空");
        return false;
    }
    if(!judge.test(un)){
        let hint = document.getElementById("hintUserName");
        hint.style.color = "red";
        return false
    }else
    {
        let hint = document.getElementById("hintUserName");
        hint.style.color = "gray";
    }
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if(un === localStorage.getItem(key)){
            alert("该用户名已被注册，请重新输入");
            return false;
        }
    }
    return true;
}
function checkName(){
    let ne = document.getElementById("name").value;
    let judge1 = /^[A-z0-9_-]{3,21}$/;
    let judge2 = /[\u4E00-\u9FA5]{3,21}/;
    if(ne.length===0){
        alert("昵称不能为空");
        return false;
    }
    if (!(judge1.test(ne)||judge2.test(ne))){
        let hint = document.getElementById("hintName");
        hint.style.color = "red";
        return false
    }else
    {
        let hint = document.getElementById("hintUserName");
        hint.style.color = "gray";
    }
    return true;
}
function checkEmail(){
    let el = document.getElementById("email").value;
    let judge = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(el.length===0){
        alert("邮箱不能为空");
        return false;
    }
    if (!judge.test(el)){
        let hint = document.getElementById("hintEmail");
        hint.style.color = "red";
        return false;
    }else
    {
        let hint = document.getElementById("hintUserName");
        hint.style.color = "gray";
    }
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if(el === localStorage.getItem(key)){
            alert("该邮箱已被注册，请重新输入");
            return false;
        }
    }
    return true;
}
function checkPassword(){
    let pd = document.getElementById("psg").value;
    let judge = /^[A-z0-9_-]{6,21}$/;
    if(pd.length===0){
        alert("密码不能为空");
        return false;
    }
    if (!judge.test(pd)){
        let hint = document.getElementById("hintPsg");
        hint.style.color = "red";
        return false;
    }else
    {
        let hint = document.getElementById("hintUserName");
        hint.style.color = "gray";
    }
    return true;
}
