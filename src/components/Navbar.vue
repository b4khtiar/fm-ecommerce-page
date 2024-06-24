<template>
    <nav class="container">
        <ul>
            <li class="hamburger">
                <HamburgerMenu @click="menuVisible = !menuVisible"/>
                <div class="mobile-menu" :class="[menuVisible ? 'active' : '']">
                    <ul class="navbar-links">
                        <li v-for="link in menuLinks" :key="link.name" class="navbar-links__item">
                            <a :href="link.href">{{ link.name }}</a>
                        </li>
                    </ul>
                </div>
            </li>

            <li>
                <img class="logo" src="/images/logo.svg" alt="sneakers logo">
            </li>
            <li class="navbar-links--left">
                <ul class="navbar-links">
                    <li v-for="link in menuLinks" :key="link.name" class="navbar-links__item">
                        <a :href="link.href">{{ link.name }}</a>
                    </li>
                </ul>
            </li>
        </ul>
        <ul>
            <li @click="cartOpen = !cartOpen" class="cart">
                <img src="/images/icon-cart.svg" alt="cart icon">
                <span v-if="totalItems > 0" class="cart-pill">{{ totalItems }}</span>
            </li>
            <li>
                <img src="/images/image-avatar.png" width="36" height="36" class="user-avatar" alt="user avatar">
            </li>
        </ul>
        <Cart v-if="cartOpen && !menuVisible" />
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'
import HamburgerMenu from '@/components/HamburgerMenu.vue'
import Cart from '@/components/Cart.vue'

const {totalItems} = storeToRefs(useCartStore())
const menuLinks = [
    {
        name: 'Collections',
        href: '#'
    },
    {
        name: 'Men',
        href: '#'
    },
    {
        name: 'Women',
        href: '#'
    },
    {
        name: 'About',
        href: '#'
    },
    {
        name: 'Contact',
        href: '#'
    }
]
const cartOpen = ref(false)
const menuVisible = ref(false)
</script>
<style scoped>
nav {
    position: relative;
    border-bottom: 1px solid var(--Grayish-blue);
}

.hamburger {
    display: none;
}

.logo {
    margin-bottom: 0.4rem;
}

.navbar-links--left {
    padding: 0 0.5rem;
}

.navbar-links {
    margin-left: 2rem;
}

.navbar-links__item {
    padding: 1.5rem 0;
    margin: 0 1rem;
    cursor: pointer;
}

.navbar-links__item::after {
    content: "";
    display: block;
    position: relative;
    bottom: -1.5rem;
    width: 0;
    height: 4px;
    background-color: var(--Orange);
    transition: width .3s;
}

.navbar-links__item:hover::after {
    width: 100%;
}

.navbar-links a {
    color: var(--Dark-grayish-blue);
}

.navbar-links a:hover {
    text-decoration: none;
    color: var(--Black);
}

.cart {
    position: relative;
    margin-right: 1rem;
    cursor: pointer;
}

.cart-pill {
    position: absolute;
    top: 0.5rem;
    right: 0;
    background-color: var(--Orange);
    color: var(--White);
    border-radius: 0.75rem;
    font-size: 0.75rem;
    padding: 0 0.5rem;
    cursor: pointer;
}

.user-avatar {
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid transparent
}

.user-avatar:hover {
    border-color: var(--Orange);
}

.mobile-menu {
    display: none;
}

@media screen and (width < 1024px) {
    .navbar-links--left {
        display: none;
    }

    .hamburger {
        display: block;
        position: relative;    }

    .mobile-menu {
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        width: 50%;
        height: 100vh;
        background-color: var(--White);
        padding-left: 3rem;
        z-index: 1;
        transform: translateX(-100%);
        transition: transform .3s;
    }

    .mobile-menu.active {
        transform: translateX(0);
        transition: transform .3s ease-in-out;
    }

    .navbar-links {
        margin-left: 0;
        margin-top: 6rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .navbar-links__item a {
        color: var(--Black);
        font-weight: 700
    }

}

@media screen and (width < 768px) {
    .mobile-menu {
        width: 70%;
        padding-left: 1rem;
    }
}

@media (prefers-color-scheme: dark) {
    .logo {
        filter: invert(100%);
    }

    .navbar-links a:hover {
        color: var(--White);
    }
}
</style>