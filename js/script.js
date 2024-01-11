/**
 * document.getElementById("logo").innerHTML = "Shop";
 * document.getElementById("logo").style.color = 'rgba(25, 142, 25, 1)';
*/

let h1 = document.getElementById('logo');
  let ausgabe = document.getElementById('logo');
  h1.addEventListener('mouseover', mouseOver);
  h1.addEventListener('mouseout', mouseOut);

  function mouseOver() {
    ausgabe.innerHTML = ' ';
    h1.innerHTML = 'Shop';
  }

  function mouseOut() {
    ausgabe.innerHTML = ' ';
	h1.innerHTML = 'Logo';
  }

/** 
 * Warenkorb ein- und ausblenden
* document.getElementById("cart").addEventListener("click", function() {
*    toggleBasket();
* });

* function toggleBasket() {
*    let basket = document.getElementById("basket");
*    basket.classList.toggle("hidden");
* }
*/

// Warenkorb ein- und ausblenden
const cartIcon = document.getElementById("cart");
const basket = document.getElementById("basket");

cartIcon.addEventListener("click", function (event) {
    toggleBasket();
    event.stopPropagation();
});

document.addEventListener("click", function (event) {
    // Überprüfen, ob das geklickte Element nicht Teil des Warenkorbs oder des Warenkorbicons ist
    if (!basket.contains(event.target) && event.target !== cartIcon) {
        basket.classList.add("hidden");
    }
});

function toggleBasket() {
    basket.classList.toggle("hidden");
}
