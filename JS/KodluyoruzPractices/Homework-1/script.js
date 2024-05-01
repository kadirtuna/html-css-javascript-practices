// let name = prompt("Please enter your name: ");
let name = "Kadir";
let content = document.querySelector("#content");
let date = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

content.innerHTML = `
    <h1>Kadir Tuna</h1>
    <h3>Hello, ${name} Welcome to my JavaScript Homework</h2>
    <h2>${date.getHours()}:${date.getMinutes()} ${days[date.getDay()]}</h3>
    <h3>You are at the first homework of the "JavaScript Tutorial" made by "Kadir Tuna" </h3>
`;


content.style.textAlign = "center";
content.style.color = "orange";
document.querySelector("body").style.backgroundColor = "rgb(50, 50, 50";