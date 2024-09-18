document.addEventListener('DOMContentLoaded', function() {
    var addToCartButtons = document.querySelectorAll('.product__add-to-cart');
    var cart = document.querySelector('.cart');
    var cartButton = document.querySelector('.header__cart'); 
    var cartCount = document.querySelector('.cart-count'); 
    var itemCount = 0;

    function toggleCart() {
        if (cart.style.display === 'block') {
            cart.style.display = 'none';
        } else {
            cart.style.display = 'block';
        }
    }

    if (cartButton) {
        cartButton.addEventListener('click', toggleCart);
    }

    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var product = this.closest('.product');
            var productName = product.querySelector('.product__description').textContent;
            var productPrice = product.querySelector('.product__price').textContent;
            var productImage = product.querySelector('.product__image').src;

            var cartItem = document.createElement('div');
            cartItem.classList.add('cart__item');

            cartItem.innerHTML = `
                <i class="cart__item-delete"><img src="assets/close.png" alt="Icono Quitar" class="cart__item-delete-icon"></i>
                <img src="${productImage}" alt="${productName}" class="product__image" width="300">
                <span class="cart__item-description">${productName}</span>
                <p class="cart__price">${productPrice}</p>
            `;

            cart.appendChild(cartItem);

            itemCount++;
            cartCount.textContent = itemCount;

            var deleteButton = cartItem.querySelector('.cart__item-delete-icon');
            deleteButton.addEventListener('click', function() {
                cartItem.remove();
                
                itemCount--;
                cartCount.textContent = itemCount;
            });
        });
    });
});
