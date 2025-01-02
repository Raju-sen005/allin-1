// Paractice

// let b = prompt("Choose the background color:")
// document.body.style.background=b

let cn = "Raju";
let a;
do {
  a = prompt("Enter the Author name:");
  if (a != cn) {
    alert("You have entered the Wrong password.");
  }
} while (a != cn);
