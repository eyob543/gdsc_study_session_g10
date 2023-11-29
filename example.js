let par = document.querySelector("p");
par.addEventListener("click", () => {
  par.innerText = par.innerHTML === "Hello World" ? "Bye World" : "Hello World"
})

