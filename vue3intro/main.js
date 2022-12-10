const app = Vue.createApp({

    data() {
      return {
        product: 'iPhone 12',
        brand: 'Apple',
        image: './assets/images/iphone-12-red.png',
        description: 'New Apple A14 Bionic hight perfomance',
        url: 'https://www.apple.com',
        inStock: true,
        inventory: 20,
        details: ['64GB', '128GB', '256GB'],
        variants: [
          {id: 239, color: 'Red', image: './assets/images/iphone-12-red.png'},
          {id: 240, color: 'Purple', image: './assets/images/iphone-12-purple.png'},
          {id: 250, color: 'White', image: './assets/images/iphone-12-white.png'},
        ],
        cart: 0
      }
    },
  
    methods: {

      addToCart() {
        this.cart += 1
        this.inventory -= 1
      },
      updateImage(variantImage){
        this.image = variantImage;
      }
    },
  
    computed: {
      title() {
        return this.brand + ' ' + this.product
      }
    }
  
  }).mount('#app')
