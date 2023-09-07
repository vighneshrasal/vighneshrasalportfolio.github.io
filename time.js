let warning = alert("This webpage is made for Desktops and Laptops, if you're using a cell phone I request you to Switch");
let userName = prompt("ENTER YOUR NAME");
let date = new Date();
const options = {weekday: 'short', year : 'numeric', month: 'short', day: 'numeric'};

let namestorage = sessionStorage.setItem("Name", userName);

if(userName != ""){
    document.getElementById('user-name').innerHTML = userName;
}

fullDate = date.toLocaleDateString(undefined, options);
document.getElementById('for-date').innerHTML = fullDate;

console.log("We're no strangers to love");
console.log("You know the rules and so do I (do I)");
console.log("A full commitment's what I'm thinking of");
console.log("You wouldn't get this from any other guy");
console.log("I just wanna tell you how I'm feeling");
console.log("Gotta make you understand");
console.log("Never gonna give you up");
console.log("Never gonna let you down");
console.log("Never gonna run around and desert you");
console.log("Never gonna make you cry");
console.log("Never gonna say goodbye");
console.log("Never gonna tell a lie and hurt you");
