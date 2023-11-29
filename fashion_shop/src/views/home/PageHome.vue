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
                    <div class="item"><img src="https://i.pinimg.com/564x/d3/f7/74/d3f7742fce9a68304a3ebd04b2fb3580.jpg" alt=""><a href="#">Khuyến mãi Grab this convenient and
                            free menu with social icons template that can easily work for your page’s header section.
                            There’s also a search bar and a dropdown for you to benefit from.</a></div>
                    <div class="item"><img src="https://i.pinimg.com/564x/af/9f/f5/af9ff5fde03cea0598da4e6ffc353623.jpg" alt=""><a href="#">Khuyến mãi</a></div>
                    <div class="item"><img src="https://i.pinimg.com/564x/9c/8d/a6/9c8da6f5c47b6edc0696a41e59e2c174.jpg" alt=""><a href="#">Khuyến mãi</a></div>
                    <div class="item"><img src="https://i.pinimg.com/564x/9c/8d/a6/9c8da6f5c47b6edc0696a41e59e2c174.jpg" alt=""><a href="#">Khuyến mãi</a></div>
                    <div class="item"><img src="https://i.pinimg.com/564x/9c/8d/a6/9c8da6f5c47b6edc0696a41e59e2c174.jpg" alt=""><a href="#">Khuyến mãi</a></div>
                    <div class="item"><img src="https://i.pinimg.com/564x/9c/8d/a6/9c8da6f5c47b6edc0696a41e59e2c174.jpg" alt=""><a href="#">Khuyến mãi</a></div>
                    <div class="item"><img src="https://i.pinimg.com/564x/9c/8d/a6/9c8da6f5c47b6edc0696a41e59e2c174.jpg" alt=""><a href="#">Khuyến mãi</a></div>
                    <div class="item"><img src="https://i.pinimg.com/564x/9c/8d/a6/9c8da6f5c47b6edc0696a41e59e2c174.jpg" alt=""><a href="#">Khuyến mãi</a></div>

                </div>
            </div>
        </section>
        <section id="flash-sale">
            <div class="container">
                <div class="title-section flash-sale">
                    <div class="time-title">
                        <h4>FLASH SALE</h4><span>1</span>:<span>1</span>:<span>1</span>
                    </div>
                    <span class="more">Xem thêm &ensp; <i class="fa-solid fa-angles-right" style="color: blue;"></i></span>
                </div>
                <div class="list-product-flash-sale">
                    <Product :data="item"></Product>
                </div>
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
                    {name:'xanh',img:'https://i.pinimg.com/564x/11/7b/ae/117bae9845cd9758c8323639a28b663e.jpg'},
                    {name:'Dổ',img:'https://i.pinimg.com/564x/67/af/b3/67afb335f3e0cf5ba519ac29b19ee383.jpg'},
                    {name:'xanh',img:'https://i.pinimg.com/564x/12/52/f7/1252f7650a473bbbef328d1b0a4d72ce.jpg'},
                    {name:'vang',img:'https://i.pinimg.com/564x/bb/3b/30/bb3b3033c79b78c5582acb274bacee72.jpg'},
                    {name:'xanh',img:'https://i.pinimg.com/736x/b3/77/a5/b377a5c3bd632c04f40caf17661fd655.jpg'},
                    {name:'xanh',img:'https://i.pinimg.com/564x/b7/c3/92/b7c392a35e18cb1133a50006dda4356d.jpg'},
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
                    img: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-20.jpg',
                    vote: '3.2',
                    quantitySold: '333',
                    sale: '10%',
                    price: '203222',
                },
                {
                    name: 'product_1',
                    img: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-20.jpg',
                    vote: '3.2',
                    quantitySold: '333',
                    sale: '10%',
                    price: '203222',
                },
                {
                    name: 'product_1',
                    img: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-20.jpg',
                    vote: '3.2',
                    quantitySold: '333',
                    sale: '10%',
                    price: '203222',
                },
                {
                    name: 'product_1',
                    img: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-20.jpg',
                    vote: '3.2',
                    quantitySold: '333',
                    sale: '10%',
                    price: '203222',
                },
                {
                    name: 'product_1',
                    img: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-20.jpg',
                    vote: '3.2',
                    quantitySold: '333',
                    sale: '10%',
                    price: '203222',
                },
            ]
        };
    },
    created() {
        // Logic khi component được khởi tạo
    },
    mounted() {
        // Logic sau khi component được gắn kết (render) vào DOM
    },
    computed() {
        // được sử dụng để định nghĩa các thuộc tính tính toán
    },
    updated() {

    },
    unmounted() {

    },
    methods: {
        // Các phương thức xử lý sự kiện hoặc logic khác
    },
};
</script>
  
<style scoped>
.vueperslides--fixed-height {
    height: 35rem;
}

@media (max-width:800px) {
    .vueperslides--fixed-height {
        height: 35rem;
    }
}
</style>
  