<template>
    <main>
        <section id="slide">
            <vueper-slides autoplay id="slide-home" :fixed-height="true" :duration="1500">
                <vueper-slide v-for="(item, key) in slides" :key="key" :title="item.title" :image="item.img"
                    :content="item.content" :style="item.style" />
            </vueper-slides>
        </section>
        <section id="gif">
            <div class="container">
                <div class="list-gif">
                    <div class="item"><img src="https://i.pinimg.com/564x/d3/f7/74/d3f7742fce9a68304a3ebd04b2fb3580.jpg"
                            alt=""><a href="#">Khuyến mãi Grab this convenient and
                            free menu with social icons template that can easily work for your page’s header section.
                            There’s also a search bar and a dropdown for you to benefit from.</a></div>
                    <div class="item"><img src="https://i.pinimg.com/564x/af/9f/f5/af9ff5fde03cea0598da4e6ffc353623.jpg"
                            alt=""><a href="#">Khuyến mãi</a></div>
                    <div class="item"><img src="https://i.pinimg.com/564x/9c/8d/a6/9c8da6f5c47b6edc0696a41e59e2c174.jpg"
                            alt=""><a href="#">Khuyến mãi</a></div>
                    <div class="item"><img src="https://i.pinimg.com/564x/9c/8d/a6/9c8da6f5c47b6edc0696a41e59e2c174.jpg"
                            alt=""><a href="#">Khuyến mãi</a></div>
                    <div class="item"><img src="https://i.pinimg.com/564x/9c/8d/a6/9c8da6f5c47b6edc0696a41e59e2c174.jpg"
                            alt=""><a href="#">Khuyến mãi</a></div>
                    <div class="item"><img src="https://i.pinimg.com/564x/9c/8d/a6/9c8da6f5c47b6edc0696a41e59e2c174.jpg"
                            alt=""><a href="#">Khuyến mãi</a></div>
                    <div class="item"><img src="https://i.pinimg.com/564x/9c/8d/a6/9c8da6f5c47b6edc0696a41e59e2c174.jpg"
                            alt=""><a href="#">Khuyến mãi</a></div>
                    <div class="item"><img src="https://i.pinimg.com/564x/9c/8d/a6/9c8da6f5c47b6edc0696a41e59e2c174.jpg"
                            alt=""><a href="#">Khuyến mãi</a></div>
                </div>
            </div>
        </section>
        <section id="flash-sale">
            <div class="container">
                <div class="title-section flash-sale">
                    <div class="time-title">
                        <h4>FLASH SALE</h4><span>1</span>:<span>1</span>:<span>1</span>
                    </div>
                    <span class="more">Xem thêm &ensp; <i class="fa-solid fa-angles-right"
                            style="color: blue;"></i></span>
                </div>
                <div class="list-product-flash-sale">
                    <vueper-slides class="no-shadow" id="slide-flash-sale" :visible-slides="visibleSlides"
                        :slide-ratio="1 / 4" :dragging-distance="70" :fixed-height="true" :touchable="false"
                        :bullets="false" slide-multiple>
                        <vueper-slide v-for="(item, key) in listProduct" :key="key">
                            <template #content>
                                <Product :data="item" :arrows="false"></Product>
                            </template>
                        </vueper-slide>
                    </vueper-slides>
                </div>
            </div>
        </section>
        <section id="top-selling-item" class="container">
            <div class="title-section">
                <h4>SẢN PHẨM BÁN CHẠY</h4>
                <span class="more">Xem thêm &ensp; <i class="fa-solid fa-angles-right" style="color: blue;"></i></span>
            </div>
        </section>
        <section id="top-selling-item" class="container">
            <div class="title-section">
                <h4>SẢN PHẨM BÁN CHẠY</h4>
                <span class="more">Xem thêm &ensp; <i class="fa-solid fa-angles-right" style="color: blue;"></i></span>
            </div>
        </section>
        <section id="sale-items-list" class="container">
            <div class="title-section">
                <h4>GIẢM GIÁ</h4>
                <span class="more">Xem thêm &ensp; <i class="fa-solid fa-angles-right" style="color: blue;"></i></span>
            </div>
        </section>
        <section id="product-with-positive-feedback" class="container">
            <div class="title-section">
                <h4>Sản phẩm có lượt tương tác tốt</h4>
                <span class="more">Xem thêm &ensp; <i class="fa-solid fa-angles-right" style="color: blue;"></i></span>
            </div>
        </section>
    </main>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import Product from "@/components/ProductItem.vue"
export default {
    name: 'PageHome',
    components: {
        VueperSlides,
        VueperSlide,
        Product
    },
    setup() {
    },
    directives: {
    },
    data() {
        return {
            visibleSlides: 5,
            slides: [
                {
                    title: '',
                    content: 'áda',
                    link: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-1.jpg',
                    img: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-1.jpg',
                    style: 'width:100%; height:100%;object-fit:cover',
                },
                {
                    title: '',
                    content: '',
                    link: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-16.jpg',
                    img: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-16.jpg',
                    style: '',
                }, {
                    title: '',
                    content: '',
                    link: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-17.jpg',
                    img: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-17.jpg',
                    style: '',
                }, {
                    title: '',
                    content: '',
                    link: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-10.jpg',
                    img: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-10.jpg',
                    style: '',
                }, {
                    title: '',
                    content: '',
                    link: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-20.jpg',
                    img: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-20.jpg',
                    style: '',
                },
            ],
            item: {
                name: 'product_1',
                imgs: [
                    { name: 'xanh', img: 'https://i.pinimg.com/564x/11/7b/ae/117bae9845cd9758c8323639a28b663e.jpg' },
                    { name: 'Dổ', img: 'https://i.pinimg.com/564x/67/af/b3/67afb335f3e0cf5ba519ac29b19ee383.jpg' },
                    { name: 'xanh', img: 'https://i.pinimg.com/564x/12/52/f7/1252f7650a473bbbef328d1b0a4d72ce.jpg' },
                    { name: 'vang', img: 'https://i.pinimg.com/564x/bb/3b/30/bb3b3033c79b78c5582acb274bacee72.jpg' },
                    { name: 'xanh', img: 'https://i.pinimg.com/736x/b3/77/a5/b377a5c3bd632c04f40caf17661fd655.jpg' },
                    { name: 'xanh', img: 'https://i.pinimg.com/564x/b7/c3/92/b7c392a35e18cb1133a50006dda4356d.jpg' },
                ],
                vote: '3.2',
                quantitySold: '333',
                sale: '10',
                price: '203222',
                imgGift: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-17.jpg'
            },
            listProduct: [
                {
                    name: 'product_1',
                    imgs: [
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/11/7b/ae/117bae9845cd9758c8323639a28b663e.jpg' },
                        { name: 'Dổ', img: 'https://i.pinimg.com/564x/67/af/b3/67afb335f3e0cf5ba519ac29b19ee383.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/12/52/f7/1252f7650a473bbbef328d1b0a4d72ce.jpg' },
                        { name: 'vang', img: 'https://i.pinimg.com/564x/bb/3b/30/bb3b3033c79b78c5582acb274bacee72.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/736x/b3/77/a5/b377a5c3bd632c04f40caf17661fd655.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/b7/c3/92/b7c392a35e18cb1133a50006dda4356d.jpg' },
                    ],
                    vote: '3.2',
                    quantitySold: '333',
                    sale: '10',
                    price: '203222',
                    imgGift: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-17.jpg'
                },
                {
                    name: 'product_2',
                    imgs: [
                        { name: 'xanh', img: 'https://www.pinterest.com/pin/582582901826138192/' },
                        { name: 'Dổ', img: 'https://i.pinimg.com/564x/67/af/b3/67afb335f3e0cf5ba519ac29b19ee383.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/12/52/f7/1252f7650a473bbbef328d1b0a4d72ce.jpg' },
                        { name: 'vang', img: 'https://i.pinimg.com/564x/bb/3b/30/bb3b3033c79b78c5582acb274bacee72.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/736x/b3/77/a5/b377a5c3bd632c04f40caf17661fd655.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/b7/c3/92/b7c392a35e18cb1133a50006dda4356d.jpg' },
                    ],
                    vote: '3.2',
                    quantitySold: '333',
                    sale: '10',
                    price: '203222',
                    imgGift: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-17.jpg'
                },
                {
                    name: 'product_3',
                    imgs: [
                        { name: 'xanh', img: 'https://www.pinterest.com/pin/582582901816088821/' },
                        { name: 'Dổ', img: 'https://i.pinimg.com/564x/67/af/b3/67afb335f3e0cf5ba519ac29b19ee383.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/12/52/f7/1252f7650a473bbbef328d1b0a4d72ce.jpg' },
                        { name: 'vang', img: 'https://i.pinimg.com/564x/bb/3b/30/bb3b3033c79b78c5582acb274bacee72.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/736x/b3/77/a5/b377a5c3bd632c04f40caf17661fd655.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/b7/c3/92/b7c392a35e18cb1133a50006dda4356d.jpg' },
                    ],
                    vote: '3.2',
                    quantitySold: '333',
                    sale: '10',
                    price: '203222',
                    imgGift: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-17.jpg'
                },
                {
                    name: 'product_4',
                    imgs: [
                        { name: 'xanh', img: 'https://i.pinimg.com/236x/88/25/dd/8825dd195accfe22207d6b235d7d5829.jpg' },
                        { name: 'Dổ', img: 'https://i.pinimg.com/564x/67/af/b3/67afb335f3e0cf5ba519ac29b19ee383.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/12/52/f7/1252f7650a473bbbef328d1b0a4d72ce.jpg' },
                        { name: 'vang', img: 'https://i.pinimg.com/564x/bb/3b/30/bb3b3033c79b78c5582acb274bacee72.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/736x/b3/77/a5/b377a5c3bd632c04f40caf17661fd655.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/b7/c3/92/b7c392a35e18cb1133a50006dda4356d.jpg' },
                    ],
                    vote: '3.2',
                    quantitySold: '333',
                    sale: '10',
                    price: '203222',
                    imgGift: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-17.jpg'
                },
                {
                    name: 'product_5',
                    imgs: [
                        { name: 'xanh', img: 'https://i.pinimg.com/236x/5b/f4/29/5bf429c2ebaf6107bba20b94bfb0bbab.jpg' },
                        { name: 'Dổ', img: 'https://i.pinimg.com/564x/67/af/b3/67afb335f3e0cf5ba519ac29b19ee383.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/12/52/f7/1252f7650a473bbbef328d1b0a4d72ce.jpg' },
                        { name: 'vang', img: 'https://i.pinimg.com/564x/bb/3b/30/bb3b3033c79b78c5582acb274bacee72.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/736x/b3/77/a5/b377a5c3bd632c04f40caf17661fd655.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/b7/c3/92/b7c392a35e18cb1133a50006dda4356d.jpg' },
                    ],
                    vote: '3.2',
                    quantitySold: '333',
                    sale: '10',
                    price: '203222',
                    imgGift: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-17.jpg'
                },
                {
                    name: 'product_6',
                    imgs: [
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/24/c9/e1/24c9e1b0856037f442528fe3b3373dca.jpg' },
                        { name: 'Dổ', img: 'https://i.pinimg.com/564x/67/af/b3/67afb335f3e0cf5ba519ac29b19ee383.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/12/52/f7/1252f7650a473bbbef328d1b0a4d72ce.jpg' },
                        { name: 'vang', img: 'https://i.pinimg.com/564x/bb/3b/30/bb3b3033c79b78c5582acb274bacee72.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/736x/b3/77/a5/b377a5c3bd632c04f40caf17661fd655.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/b7/c3/92/b7c392a35e18cb1133a50006dda4356d.jpg' },
                    ],
                    vote: '3.2',
                    quantitySold: '333',
                    sale: '10',
                    price: '203222',
                    imgGift: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-17.jpg'
                },

            ]
        };
    },
    created() {
        // Logic khi component được khởi tạo
        console.log(this.$store.state.STATUS_LOGIN);
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    computed() {
        // được sử dụng để định nghĩa các thuộc tính tính toán
    },
    updated() {
    },
    unmounted() {

    },

    methods: {
        handleResize() {
            var screenWidth = window.innerWidth;
            if (screenWidth < 500) {
                this.visibleSlides = 2;
            }
            else if (screenWidth < 780) {
                this.visibleSlides = 3;
            }
            else if (screenWidth < 1000) {
                this.visibleSlides = 4;
            }
            else {
                this.visibleSlides = 5;
            }
        },
    },
};
</script>

<style scoped>
#slide .vueperslides--fixed-height {
    height: 35rem;
}

.list-product-flash-sale {
    padding: 0 3rem;
}

.vueperslides--fixed-height {
    height: 25rem;
}

@media (max-width:1200px) {
    .card-product {
        width: 10rem;
        height: 23rem;
    }

    .vueperslides--fixed-height {
        height: 28rem;
    }
}

@media (max-width:1000px) {
    .card-product {
        width: 9rem;
        height: 22rem;
    }

    .vueperslides--fixed-height[data-v-74021e98] {
        height: 24rem;
    }
}

@media (max-width:800px) {
    .vueperslides--fixed-height {
        height: 22rem;
    }

    .card-product .middle button {
        width: 5rem;
        height: 3rem;
        font-size: 11px;
    }

    .card-product .middle .detail-product {
        padding: 0;
        font-size: 11px;
        padding-top: 5px;
    }

    #slide .vueperslides--fixed-height {
        height: 25rem;
    }

    #slide {
        min-height: 25rem;
        max-height: 25rem;
    }
}

@media (max-width:780px) {
    .card-product {
        width: 12rem;
        height: 22rem;
    }
}

@media (max-width:770px) {
    .card-product {
        width: 8rem;
        height: 20rem;
    }
}

@media (max-width:500px) {
    .vueperslides--fixed-height {
        height: 24rem;
        border-bottom: 1px solid;
    }
}
</style>