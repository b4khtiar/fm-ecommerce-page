<template>
    <div class="hamburger-menu" :class="[isOpen ? 'active' : 'inactive']" @click="toggle">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggle = () => {
    isOpen.value = !isOpen.value
}
</script>

<style scoped>
.hamburger-menu {
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.hamburger-menu span {
    display: block;
    height: 4px;
    background-color: var(--Dark-grayish-blue);
    padding: 0;
    margin-bottom: 4px;
    transform-origin: 0% 0%;
}

.hamburger-menu span:last-child {
    margin-bottom: 0px;
}

.hamburger-menu.inactive span {
    width: 20px;
    transition: width .3s ease-out;
}

.hamburger-menu.inactive span:nth-child(1) {
    transform: rotate(0deg);
    transition: transform .3s ease-out;
}

.hamburger-menu.inactive span:nth-child(2) {
    transition-delay: 0.1s;
}

.hamburger-menu.inactive span:nth-child(3) {
    transform: rotate(0deg);
    transition: transform .3s ease-out;
}

.hamburger-menu span:nth-child(3) {
    margin-bottom: 0;
    transform-origin: 0% 100%;
}

.hamburger-menu.active span:nth-child(1) {
    transform: rotate(45deg);
    width: 24px;
    transition: transform .3s, width .3s ease-out;
}

.hamburger-menu.active span:nth-child(2) {
    width: 0;
    transform-origin: 50% 50%;
    transition: width .2s ease-out;
}

.hamburger-menu.active span:nth-child(3) {
    transform: rotate(-45deg);
    width: 24px;
    transition: transform .3s, width .3s ease-out;
}
</style>