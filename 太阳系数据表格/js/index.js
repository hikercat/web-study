function judge_log(){
    if(localStorage.getItem("loggingStatus") === null){
        alert("请先登录")
        location.href="login.html"
    }
}
function logout(){
    alert("注销成功");
    localStorage.removeItem("loggingStatus");
    location.reload();
}