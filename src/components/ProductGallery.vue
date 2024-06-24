<template>
    <div class="product-gallery">
        <div class="slider">
            <img @click="showLightbox" :src="images[imgIndex]" alt="">
            <div class="slider-control" :class="[lightbox ? 'lightbox-mode' : '']">
                <div @click="previous" class="control-circle previous">
                    <img src="/images/icon-previous.svg" alt="">
                </div>
                <div @click="next" class="control-circle next">
                    <img src="/images/icon-next.svg" alt="">
                </div>
            </div>
        </div>
        <div v-for="thumbnail, index in thumbnails" :key="index" @click="imgIndex = index" :class="[imgIndex === index ? 'thumbnail active' : 'thumbnail']">
            <img :src="thumbnail"  alt="thumbnail image">
            <div class="overlay"></div>
        </div>
    </div>
    <Teleport to="body">
    <Lightbox v-if="lightboxOpen" @closeLightbox="lightboxOpen = false" :images="images" :thumbnails="thumbnails" lightbox="true"/>
    </Teleport>

</template>

<script setup>
import { ref } from 'vue'
import Lightbox from '@/components/Lightbox.vue'

const props = defineProps({
    images: Array,
    thumbnails: Array,
    lightbox: Boolean
})
const imgIndex = ref(0)
const lightboxOpen = ref(false)
const showLightbox = () => {
    if(!props.lightbox && window.screen.width >= 768) {
        lightboxOpen.value = true
    }
}
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
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 1.5rem;
}

.slider {
    grid-area: 1 / 1 / span 4 / span 4;
    position: relative;
}

.slider img {
    border-radius: 1rem;
}

.slider-control {
    display: none;
    position: absolute;
    top: 50%;
    left: 1rem;
    right: 1rem;
    justify-content: space-between;
    align-items: center;
    transform: translateY(-50%);
}

.slider-control.lightbox-mode {
    display: flex;
    left: -1.25rem;
    right: -1.25rem;
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
    position: relative;
    border-radius: 0.8rem;
    overflow: hidden;
    cursor: pointer;
}

.thumbnail.active,
.thumbnail:hover {
    border: 2px solid var(--Orange);
}

.thumbnail.active .overlay {
    opacity: 1;
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}
@media screen and (width < 768px) {
    .product-gallery {
        grid-template-rows: repeat(4, 1fr);
        gap: 0;
    }

    .slider img {
        border-radius: 0;
    }

    .slider-control {
        display: flex;
    }

    .thumbnail {
        display: none;
    }
}
</style>