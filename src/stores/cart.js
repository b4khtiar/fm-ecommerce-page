import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const totalItems = computed(() => {
    let total = 0
    items.value.forEach((item) => {
      total += item.quantity
    })
    return total
  })
  const totalPrice = computed(() => {
    let total = 0
    items.value.forEach((item) => {
      let price = item.price.base - (item.price.base * item.price.discount)
      total += (price * item.quantity)
    })
    return total
  })
  function addToCart(item) {
    if (items.value.find((i) => i.id === item.id)) {
      items.value.find((i) => i.id === item.id).quantity += item.quantity
    } else {
      items.value.push(item)
    }
  }
  function removeFromCart(id) {
    let itemIndex = items.value.findIndex((i) => i.id === id)
    items.value.splice(itemIndex, 1)
  }

  return { items, totalItems, totalPrice, addToCart, removeFromCart }
})
