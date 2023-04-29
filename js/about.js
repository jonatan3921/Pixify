// Dark Mode
const themeButton = document.querySelector("#darkmode");

const darkMode = () => {
  const body = document.querySelector("body");
  const heading = document.querySelector("h2");
  const aboutPara = document.querySelectorAll("p");
  const submitBtn = document.querySelector(".submit-btn")

  if (body.style.backgroundColor === "rgb(42, 59, 73)") {
    heading.style.color = "black";
    body.style.backgroundColor = "white";
    themeButton.innerHTML = "Dark Mode";
    submitBtn.style.border = "none";
    for (let i = 0; i < aboutPara.length; i++) {
      aboutPara[i].style.color = "black";
    }
  } else {
    heading.style.color = "white";
    body.style.backgroundColor = "#2a3b49";
    themeButton.innerHTML = "Light Mode";
    submitBtn.style.border = "1px solid #7BFFE9";
    for (let i = 0; i < aboutPara.length; i++) {
      aboutPara[i].style.color = "white";
    }
  }
}
themeButton.onclick = darkMode;