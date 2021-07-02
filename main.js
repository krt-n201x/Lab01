const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            descrippro: 'describtion',
            image: './assets/images/socks_green.jpg',
            linkcamt: 'https://www.camt.cmu.ac.th/index.php/th/',
            inStock: true,
            inventory: 20,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
            ],
            cart: 0,
            pick: 0,
            //let owner chang it
            sale: false
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        pickup() {
            this.pick += 1,
            this.inventory -= 1
        }
    }
})