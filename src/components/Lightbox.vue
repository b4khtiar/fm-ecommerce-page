<template>
    <div class="lightbox">
        <div class="wrapper">
            <div class="close__button">
                <svg @click="emit('closeLightbox')" class="close-icon" width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                        fill="currentColor" fill-rule="evenodd" />
                </svg>
            </div>
            <ProductGallery :images="images" :thumbnails="thumbnails" :lightbox="true"/>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductGallery from '@/components/ProductGallery.vue'
const props = defineProps({
    images: Array,
    thumbnails: Array
})
const emit = defineEmits(['closeLightbox'])
</script>

<style scoped>
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 0%, 0.75);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    backdrop-filter: blur(4px);
}

.wrapper {
    position: relative;
    max-width: 70vh;
}

.close__button {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.5rem;
}

.close-icon {
    cursor: pointer;
    color: var(--White);
}
.close-icon:hover {
    color: var(--Orange);
}
</style>