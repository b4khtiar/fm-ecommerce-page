<template>
    <div class="product-gallery">
            <div class="slider">
                <img src="/images/image-product-1.jpg" alt="">
            </div>
            <img class="thumbnail" src="/images/image-product-1-thumbnail.jpg" alt="">
            <img class="thumbnail" src="/images/image-product-2-thumbnail.jpg" alt="">
            <img class="thumbnail" src="/images/image-product-3-thumbnail.jpg" alt="">
            <img class="thumbnail" src="/images/image-product-4-thumbnail.jpg" alt="">
        </div>  
</template>

<script setup>
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
}

.thumbnail {
    border-radius: 0.8rem;
    cursor: pointer;
}

@media screen and (width <= 768px) {
.product-gallery {
    grid-template-rows: repeat(4, 1fr);
    gap: 0;
}

.slider {
    border-radius: 0;
}
.thumbnail {
    display: none;
}
}
</style>