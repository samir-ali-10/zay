let menu = document.querySelector(".landing .menu"),
    list = document.querySelector(".landing .navigation ul");


menu.addEventListener("click", () => {
    list.classList.toggle("show");
})