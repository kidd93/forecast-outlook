let currentDay = moment().format("H");
document.querySelector("#currentDate").textContent = moment().format("MMMM Do YYYY");


// const dates = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]


let futureDay = moment().format("H");

document.querySelector(".box1").textContent = moment().add(1, "days").calendar("MMMM Do YYYY");

document.querySelector(".box2").textContent = moment().add(2, "days").calendar("MMMM Do YYYY");
document.querySelector(".box3").textContent = moment().add(3, "days").calendar("MMMM Do YYYY");
document.querySelector(".box4").textContent = moment().add(4, "days").calendar("MMMM Do YYYY");
document.querySelector(".box5").textContent = moment().add(5, "days").calendar("MMMM Do YYYY");


