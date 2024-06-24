<template>
    <article class="card--cart">
        <header>
            <b>Cart</b>
        </header>
        <div class="cart-items">
            <p v-if="items.length === 0" class="empty-cart">Your cart is empty.</p>
            <div v-for="item in items" :key="item.id" class="cart__item">
                <div class="cart__item--left">
                    <img src="/images/image-product-1-thumbnail.jpg" alt="sneaker image">
                    <div>
                        <p class="model">{{ item.model }}</p>
                        <div class="price">
                            <span class="discount-price">
                                ${{ (item.price.base * item.price.discount).toFixed(2) + ' x ' + item.quantity }}
                            </span>
                            <span class="total">${{ (item.price.base * item.price.discount * item.quantity).toFixed(2)
                                }}</span>
                        </div>
                    </div>
                </div>
                    <button @click="removeItem(item.id)" class="outline secondary">
                        <img src="/images/icon-delete.svg" alt="trash icon">
                    </button>
            </div>
            <div v-show="items.length > 0" class="checkout">
                <button @click="removeItem(1)">Checkout</button>
            </div>
        </div>
    </article>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'

const { items } = storeToRefs(useCartStore())
const { removeFromCart } = useCartStore()
const removeItem = (id) => {
    removeFromCart(id)
}
</script>

<style scoped>
.card--cart {
    position: absolute;
    top: 4.5rem;
    right: 0rem;
    background-color: var(--White);
    color: var(--Black);
    width: 24rem;
    -webkit-box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
}

.cart-items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.cart__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 0;
}

.cart__item--left {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
}

.cart__item--left>div {
    width: 100%;
}

.cart__item--left>img {
    width: 3rem;
    height: 3rem;
    border-radius: 0.25rem;
}

.model {
    color: var(--Dark-grayish-blue);
    line-height: 1.15;
    font-weight: 700;
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
}

.price {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem
}

.discount-price {
    color: var(--Dark-grayish-blue);
}

.total {
    font-weight: 700;
}

.secondary {
    border-color: transparent;
}

.secondary:hover {
    border-color: var(--Dark-grayish-blue);
}

.empty-cart {
    text-align: center;
    padding: 2.5rem 0;
    color: var(--Dark-grayish-blue);
    font-weight: 700;
}

.checkout {
    padding: 1rem 0;
}

.checkout>button {
    width: 100%;
    font-weight: 700;
}

@media screen and (width <=768px) {
    .card--cart {
        width: auto;
        left: 0.5rem;
        right: 0.5rem;
        z-index: 10;
        -webkit-box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.75);
    }
}
</style>