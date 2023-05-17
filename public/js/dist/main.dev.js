"use strict";

var menu = document.querySelector(".landing .menu"),
    list = document.querySelector(".landing .navigation ul");
menu.addEventListener("click", function () {
  list.classList.toggle("show");
}); ////////////////////////////////////////////////////

var mybutton = document.getElementById("myBtn"); // When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
} // When the user clicks on the button, scroll to the top of the document


function topFunction() {
  document.body.scrollTop = 0; // For Safari

  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} ////////////////////////////////////////////////////////////////


var itemsCard = document.querySelector(".shop_categories .containing .cards"),
    loader = document.querySelector(".shop_categories .containing .cards img"),
    counter = 0;

function getRepos() {
  fetch("./json/shop.json").then(function (response) {
    return response.json();
  }).then(function (repositories) {
    repositories.forEach(function (repo) {
      itemsCard.innerHTML += "<div class=\"card\"><img src=\"".concat(repo.image, "\" alt=\"\">\n                    <div class=\"content p-4\"> \n                    <h4>").concat(repo.header, "</h4>\n                    <p>").concat(repo.description, "</p>\n                            <div class=\"cont text-center\">\n                            <div class=\"stars\"> <i class=\"fa-solid fa-star\"     style=\"color: #f7d918;\"></i><i class=\"fa-solid fa-star\" style=\"color: #f7d918;\"></i><i class=\"fa-solid fa-star\" style=\"color: #f7d918;\"></i><i class=\"fa-solid fa-star\" style=\"color: #8a8a8a;\"></i><i class=\"fa-solid fa-star\" style=\"color: #8a8a8a;\"></i> </div>\n                                <p>").concat(repo.price, "</p>\n                                </div>\n                                </div>\n                                </div>");
    });
  });
}

var myInterval = setInterval(function () {
  itemsCard.innerHTML = " ";
  getRepos();
  clearInterval(myInterval);
}, 3000); // function stopInterval() {
//     clearInterval(myInterval);
// }