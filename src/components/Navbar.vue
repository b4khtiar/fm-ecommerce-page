<template>
    <nav class="container">
        <ul>
            <li class="hamburger">
                <HamburgerMenu />
            </li>

            <li>
                <img class="logo" src="/images/logo.svg" alt="sneakers logo">
            </li>
            <li class="navbar-links--left">
                <ul class="navbar-links">
                    <li class="navbar-links__item">
                        <a href="#">Collections</a>
                    </li>
                    <li class="navbar-links__item">
                        <a href="#">Men</a>
                    </li>
                    <li class="navbar-links__item">
                        <a href="#">Women</a>
                    </li>
                    <li class="navbar-links__item">
                        <a href="#">About</a>
                    </li>
                    <li class="navbar-links__item">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </li>
        </ul>
        <ul>
            <li>
                <img src="/images/icon-cart.svg" alt="cart icon">
            </li>
            <li>
                <img src="/images/image-avatar.png" width="36" height="36" alt="user avatar">
            </li>
        </ul>
    </nav>
</template>

<script setup>
import HamburgerMenu from '@/components/HamburgerMenu.vue' 
</script>

<style scoped>
nav {
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

.navbar-links a:hover {
    text-decoration: none;
    color: var(--Black);
}

@media screen and (width <= 1024px) {
    .navbar-links--left {
        display: none;
    }

    .hamburger {
        display: block;
    }
}
</style>