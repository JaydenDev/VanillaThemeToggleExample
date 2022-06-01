/* Simple Light/Dark mode toggle example
by JaydenDev MIT License 2022 */

if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "light");
} else {
  var mode = localStorage.getItem("mode");
}

function switchTheme() {
  if (mode === "light") {
    document.querySelector("#body").classList.remove("light");
    document.querySelector("#body").classList.add("dark");
    mode = "dark";
    localStorage.setItem("mode", mode);
    return;
  } else if (mode === "dark") {
    document.querySelector("#body").classList.remove("dark");
    document.querySelector("#body").classList.add("light");
    mode = "light";
    localStorage.setItem("mode", mode);
    return;
  }
}
