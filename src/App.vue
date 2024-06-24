<template>
  <Navbar />
  <main>
    <section>
      <div class="container product-details">
        <div>
          <ProductGallery :images="product.images" :thumbnails="product.thumbnails" />
        </div>
        <div>
          <p class="brand">{{ product.brand }}</p>
          <h1 class="model">{{ product.model }}</h1>
          <p class="description">{{ product.description }}</p>
          <div class="price">
            <div class="final-price">
              <span class="discount-price">${{ (product.price.base * product.price.discount * quantity).toFixed(2) }}</span>
              <span class="discount">{{ product.price.discount * 100 }}%</span>
            </div>
            <span class="base-price">${{ (product.price.base * quantity).toFixed(2) }}</span>
          </div>
          <div class="order">
            <Counter @setCount="setQuantity" :key="updateKey" />
            <button @click="addToCart" class="add-to-cart">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="hsl(220, 13%, 13%)" fill-rule="nonzero" />
              </svg>
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import Navbar from '@/components/Navbar.vue'
import ProductGallery from '@/components/ProductGallery.vue'
import Counter from '@/components/Counter.vue'

const cart = useCartStore()
const product = {
  id: 1,
  brand: 'Sneaker Company',
  model: 'Fall Limited Edition Sneakers',
  description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: {
    base: 250.00,
    discount: 0.5
  },
  stock: 50,
  images: [
    '/images/image-product-1.jpg',
    '/images/image-product-2.jpg',
    '/images/image-product-3.jpg',
    '/images/image-product-4.jpg'
  ],
  thumbnails: [
    '/images/image-product-1-thumbnail.jpg',
    '/images/image-product-2-thumbnail.jpg',
    '/images/image-product-3-thumbnail.jpg',
    '/images/image-product-4-thumbnail.jpg',
  ]
}
const quantity = ref(1)
const updateKey= ref(0)
const setQuantity = (qty) => {
  if (qty < 1) {
    quantity.value = 1
    return
  }
  quantity.value = qty
  }

const addToCart = () => {
  let item = {
    id: product.id,
    brand: product.brand,
    model: product.model,
    price: product.price,
    thumbnails: product.thumbnails[0],
    quantity: quantity.value
  }
  cart.addToCart(item)
  alert(`Added ${quantity.value} item(s) to cart`)
 setQuantity(1)
 updateKey.value++
}
</script>

<style scoped>
section {
  margin: 2.5rem 0;
}

.product-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2.5rem;
  padding: 0 1rem;
}

.product-details>div {
  padding: 1.5rem;
}

.brand {
  color: var(--Dark-grayish-blue);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
}

.model {
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 2rem;
}

.description {
  line-height: 1.5;
  color: var(--Dark-grayish-blue);
  margin-bottom: 1.5rem;
}

.price {
  margin-bottom: 1.5rem;
}

.final-price {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.discount-price {
  font-size: 1.5rem;
  font-weight: 700;
}

.discount {
  background-color: var(--Very-vark-blue);
  color: var(--White);
  padding: 0.15rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
}

.base-price {
  flex-wrap: wrap;
  color: var(--Dark-grayish-blue);
  font-weight: 700;
  text-decoration: line-through;
}

.order {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.add-to-cart {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-weight: 700;
  color: var(--Very-vark-blue);
}

@media screen and (width <=1024px) {
  .product-details {
    padding: 0;
  }
  .product-details>div:nth-of-type(2) {
    padding: 0;
  }

  .price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem
  }
}

@media screen and (width <=768px) {
  section {
    margin-top: 0;
  }
  .product-details {
    grid-template-columns: 1fr;
    gap: 0;
  }
    .product-details>div:nth-of-type(1) {
    padding: 0;
  }
  .product-details>div:nth-of-type(2) {
    padding: 1.5rem;
  }

  .order {
    flex-direction: column;
  }
}

@media (prefers-color-scheme: dark) {
  .discount {
    border: 1px solid var(--Dark-grayish-blue);
  }
  .add-to-cart {
    background-color: var(--Orange);
    border: 0;
  }
}
</style>
