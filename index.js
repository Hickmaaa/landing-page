function club() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  if (name === "") {
    alert("We can't send an invitation without your name☹️");
  } else {
    if (email === "") {
      alert("We can't send an invitation without your email☹️");
    } else {
      alert(
        "Thank you " + name + ", we'll send you a club invitation shortly🏸"
      );
    }
  }
}

let badmintonClubButton = document.querySelector("button");
badmintonClubButton.addEventListener("click", club);
