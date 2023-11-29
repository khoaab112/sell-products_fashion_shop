<template>
    <div class="card-product">
        <a href="#" class="img-product">
            <img :src="showImage" :alt="'Sản phẩm ' + product.name" class="img">
            <div class="number-product">{{ product.vote }} <font-awesome-icon icon="fa-regular fa-star"  style="color: yellow;"/> | bán : {{ product.quantitySold }} sp</div>
            <div class="promotional-products"><img :src="product.imgGift" :alt="'Quà ' + product.name"></div>
            <div class="sale">-{{ product.sale }}%</div>
            <div class="middle">
                <button class="mb-2"><font-awesome-icon icon="fa-brands fa-shirtsinbulk" class="mt-2" />Mua</button>
                <button class="mb-2"><font-awesome-icon icon="fa-solid fa-cart-shopping" style="color: blue;"
                        class="mt-2" />Giỏ hàng</button>
                <router-link :to="{ name: 'Home' }" class="detail-product mb-2"><font-awesome-icon
                        :icon="['fas', 'angles-right']" style="color: #ffffff;" />Xem thêm</router-link>
            </div>
        </a>
        <div class="list-color">
            <vueper-slides class="no-shadow" id="product-img" :visible-slides="3" :slide-ratio="1 / 4"
<<<<<<< HEAD
                :dragging-distance="5" fixed-height="3rem" :arrows=true :bullets=false :slideMultiple=true>
=======
                :dragging-distance="5" fixed-height="3rem" :arrows=isArrows :bullets=false :slideMultiple=true :touchable="false">
>>>>>>> Layout
                <vueper-slide v-for="(i, key) in product.imgs" :key="key" :image="i.img" @click="selectPhoto(i.img)" />
            </vueper-slides>
        </div>
        <div class="title-product">{{ product.name }} </div>
        <div class="sale-price price">{{ Number(product.price) * Number(product.sale) / 100 }}<span class="face-value"> VNĐ
            </span><span class="sale">(-{{ product.sale }}%)</span></div>
        <div class="original-price price"><del>{{ product.price }}<span class="face-value"> VNĐ</span></del></div>
    </div>
</template>
      
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
//   data = name , imgs [ {key : ,img : }] , vote , quantitySold ,sale ,price,imgGift ,
export default {
    name: 'ProductItem',
<<<<<<< HEAD
    props: ['data'],
=======
    props: ['data','arrows'],
>>>>>>> Layout
    components: {
        VueperSlides, VueperSlide
    },
    setup() {
    },
    created() {
        this.getDefaultImage();
    },
    directives: {
    },
    data() {
        return {
            product: this.data,
            showImage: '',
<<<<<<< HEAD
=======
            isArrows:this.arrows,
>>>>>>> Layout
        };
    },
    methods: {
        selectPhoto(img) {
            this.showImage = img;
        },
        getDefaultImage() {
            if (this.product.imgs.length > 0) {
                this.showImage = this.product.imgs[0].img;
            }
        }
    },
};
</script>
      
<style >
#product-img .vueperslides__arrow {
    color: #f5222d !important;
    font-size: 7px;
}

#product-img .vueperslide__content-wrapper {
    height: 3rem !important;
}

#product-img .vueperslide {
    width: 3rem !important;
    height: 3rem !important;
    border-radius: 10px;
    margin-right: 0.5rem;
}

#product-img .vueperslide--active {
    transform: scale(1);
    box-shadow: 0 0 10px #0003;
    z-index: 1;
}

#product-img .vueperslide__content-wrapper:hover,
#product-img .vueperslide__content-wrapper:active {
    border: 1px solid #1677ff;
    border-radius: 10px;
}

.card-product .middle button {
    border: none;
    width: 7rem;
    height: 3rem;
    border-radius: 10px;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: center;
}

.card-product .middle button:first-child {
<<<<<<< HEAD
    background-color: #40b883;
=======
    background-color: #f1e4bd;
>>>>>>> Layout
}

.card-product .middle button:nth-child(2) {
    background-color: #e6f4ff;
}

.card-product .middle .detail-product {
    text-decoration: none;
    padding: 0.8rem 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.card-product .middle button:hover,
.card-product .middle .detail-product:hover {
    -webkit-animation: scale-down-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: scale-down-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}


 @-webkit-keyframes scale-down-center {
    0% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
    100% {
      -webkit-transform: scale(0.9);
              transform: scale(0.9);
    }
  }
  @keyframes scale-down-center {
    0% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
    100% {
      -webkit-transform: scale(0.9);
              transform: scale(0.9);
    }
  }
  
</style>