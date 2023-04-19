let cards = document.querySelectorAll(".card");
let addToCardButtons = [];


cards.forEach((card) => {
    addToCardButtons.push(card.children[[0].children[4]]);
})

cardToButtons.forEach((add) => {
    add.addEventListener("click", (e) => {
        let productName = e.target.previousElementSibling.previousElementSibling.previousElementSibling;
        let productPrice = e.target.previousElementSibling.textContent;
        let productDesc = e.target.previousElementSibling.previousElementSibling.textContent;
    })
});