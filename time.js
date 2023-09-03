let warning = alert("This webpage is made for Desktops and Laptops, if you're using a cell phone you need to switch");
let userName = prompt("ENTER YOUR NAME");
let date = new Date();

const options = {weekday: 'short', year : 'numeric', month: 'short', day: 'numeric'};
document.getElementById('user-name').innerHTML = userName;

fullDate = date.toLocaleDateString(undefined, options);
document.getElementById('for-date').innerHTML = fullDate;