let warning = alert("This webpage is made for Desktops and Laptops, if you're using a cell phone I request you to Switch");
let userName = prompt("ENTER YOUR NAME");
let date = new Date();
const options = {weekday: 'short', year : 'numeric', month: 'short', day: 'numeric'};

while(userName.length > 30){
    alert("Name Too Long!!");
    userName = prompt("ENTER YOUR NAME AGAIN");
}

let namestorage = sessionStorage.setItem("Name", userName);

if(userName != ""){
    document.getElementById('user-name').innerHTML = userName;
}

fullDate = date.toLocaleDateString(undefined, options);
document.getElementById('for-date').innerHTML = fullDate;
