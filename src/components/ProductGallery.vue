<template>
    <div class="product-gallery">
        <div class="slider">
            <img :src="images[imgIndex]" alt="">
            <div class="slider-control">
                <div @click="previous" class="control-circle previous">
                    <img src="/images/icon-previous.svg" alt="">
                </div>
                <div @click="next" class="control-circle next">
                    <img src="/images/icon-next.svg" alt="">
                </div>
            </div>
        </div>
        <img v-for="thumbnail, index in thumbnails" :key="index" @click="imgIndex = index" class="thumbnail"
            :src="thumbnail" alt="">
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    images: Array,
    thumbnails: Array
})
const imgIndex = ref(0)

function next() {
    if (imgIndex.value < 3) {
        imgIndex.value++
    } else {
        imgIndex.value = 0
    }
}

function previous() {
    if (imgIndex.value > 0) {
        imgIndex.value--
    } else {
        imgIndex.value = 3
    }
}
</script>

<style scoped>
.product-gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 1.5rem;
}

.slider {
    grid-area: 1 / 1 / span 4 / span 4;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
}

.slider-control {
    display: none;
}

.control-circle {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--White);
    cursor: pointer;
}

.thumbnail {
    border-radius: 0.8rem;
    cursor: pointer;
}

@media screen and (width < 768px) {
    .product-gallery {
        grid-template-rows: repeat(4, 1fr);
        gap: 0;
    }

    .slider {
        border-radius: 0;
    }

    .slider-control {
        display: flex;
        position: absolute;
        top: 50%;
        left: 1rem;
        right: 1rem;
        justify-content: space-between;
        align-items: center;
        transform: translateY(-50%);


    }

    .thumbnail {
        display: none;
    }
}
</style>