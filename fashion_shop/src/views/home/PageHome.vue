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
                    <!-- <div class="item"><img src="../imgs/img1.jpg" alt=""><a href="#">Khuyến mãi Grab this convenient and free menu with social icons template that can easily work for your page’s header section. There’s also a search bar and a dropdown for you to benefit from.</a></div>
                <div class="item"><img src="../imgs/img1.jpg" alt=""><a href="#">Khuyến mãi</a></div>
                <div class="item"><img src="../imgs/img1.jpg" alt=""><a href="#">Khuyến mãi</a></div>
                <div class="item"><img src="../imgs/img1.jpg" alt=""><a href="#">Khuyến mãi</a></div>
                <div class="item"><img src="../imgs/img1.jpg" alt=""><a href="#">Khuyến mãi</a></div>
                <div class="item"><img src="../imgs/img1.jpg" alt=""><a href="#">Khuyến mãi</a></div>
                <div class="item"><img src="../imgs/img1.jpg" alt=""><a href="#">Khuyến mãi</a></div>
                <div class="item"><img src="../imgs/img1.jpg" alt=""><a href="#">Khuyến mãi</a></div> -->

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
                    <div class="card-product">
                        <a href="#" class="img-product">
                            <!-- <img src="../imgs/fbi-meme-1470_0011_4.webp" alt="ảnh-sản-phẩm" class="img"> -->
                            <div class="number-product">4 sao | bán : 120 sp</div>
                            <!-- <div class="promotional-products"><img src="../imgs/promotional-products.jpg" alt=""></div> -->
                            <div class="sale">10%</div>
                            <div class="middle">
                                <div class="detail-product">Xem thêm</div>
                            </div>
                        </a>
                        <div class="title-product">Sản phẩm test</div>
                        <!-- <div class="sale-price price">100.565 <span class="face-value">&nbspVNĐ&nbsp</span><span class="sale">(-10%)</span></div> -->
                        <!-- <div class="original-price price"><del>100.565<span class="face-value">&nbspVNĐ</span></del></div> -->
                        <div class="list-color">xanh , đỏ , tím , vàng</div>
                    </div>
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
export default {
    name: 'PageHome',
    components: {
        VueperSlides,
        VueperSlide
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
@media (max-width:800px)
{
    .vueperslides--fixed-height {
        height: 35rem;
    }
}
</style>
  