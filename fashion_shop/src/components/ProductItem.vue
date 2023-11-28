<template>
    <div class="card-product">
        <a href="#" class="img-product">
            <img :src="product.img" :alt="'Sản phẩm ' + product.name" class="img">
            <div class="number-product">{{ product.vote }} sao | bán : {{ product.quantitySold }} sp</div>
            <div class="promotional-products"><img :src="product.imgGift" :alt="'Quà ' + product.name"></div>
            <div class="sale">-{{ product.sale }}%</div>
            <div class="middle">
                <div class="detail-product">Xem thêm</div>
            </div>
        </a>
        <div class="title-product">{{ product.name }} </div>
        <div class="sale-price price">{{ Number(product.price) * Number(product.sale) / 100 }}<span class="face-value"> VNĐ
            </span><span class="sale">(-{{ product.sale }}%)</span></div>
        <div class="original-price price"><del>{{ product.price }}<span class="face-value"> VNĐ</span></del></div>
        <div class="list-color">
            <vueper-slides class="no-shadow" :visible-slides="3" :slide-ratio="1 / 4" :dragging-distance="70" fixed-height="2rem">
                <vueper-slide v-for="i in 9" :key="i" :title="i.toString()" />
            </vueper-slides>
        </div>
    </div>
</template>
      
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
//   data = name , img , vote , quantitySold ,sale ,price,imgGift ,
export default {
    name: 'ProductItem',
    props: ['data'],
    components: {
        VueperSlides, VueperSlide
    },
    setup() {
    },
    directives: {
    },
    data() {
        return {
            product: this.data,
        };
    },
};
</script>
      
<style></style>