<template>
    <footer>
        <div class="container-xxl">
            <div class="row">
                <div class="col-xl-4 col-sm-6">
                    <div class="icon"><img :src="logo" alt="icon"><span>SHOP</span></div>
                    <div class="list-trademark">
                        <img :src="facebook" alt="logo-facebook">
                        <img :src="logoInstagram" alt="logo-instagram">
                        <img :src="logoTwitter" alt="logo-twitter">
                        <img :src="logoZalo" alt="logo-zalo">
                    </div>
<<<<<<< Updated upstream
                    <div class="sologan">
<<<<<<< HEAD
                        <span>"</span>Slogan là một câu văn ngắn gọn cô đọng đầy đủ ý nghĩa, thông điệp với mục đích mô tả
                        hoặc thuyết phục vấn đề nào đó. Thông thường, Slogan rất nổi bật, dễ nhớ và thu hút đối với mọi
                        người.<span>"</span>
=======
                        <span>"</span>Slogan là một câu văn ngắn gọn cô đọng đầy đủ ý nghĩa, thông điệp với mục đích mô tả hoặc thuyết phục vấn đề nào đó. Thông thường, Slogan rất nổi bật, dễ nhớ và thu hút đối với mọi người.<span>"</span>
=======
                    <div class="sologan mt-2">
                        <span>"</span>Slogan là một câu văn ngắn gọn cô đọng đầy đủ ý nghĩa, thông điệp với mục đích mô tả
                        hoặc thuyết phục vấn đề nào đó. Thông thường, Slogan rất nổi bật, dễ nhớ và thu hút đối với mọi
                        người.<span>"</span>
>>>>>>> Stashed changes
>>>>>>> Layout
                    </div>
                    <div class="hotline">
                        <font-awesome-icon class="me-2" icon="fa-solid fa-phone" />   0833.872.6589
                    </div>
                </div>
                <div class="col-xl-2 col-sm-6">
                    <div class="title">
                        Về shop<i class="fa-solid fa-caret-down icon"></i>
                    </div>
                    <ul class="sub">
                        <li>Giới thiêu</li>
                        <li>Liên hệ</li>
                        <li>Tuyển dụng</li>
                        <li>Tin tức</li>
                        <li>Hệ thống cửa hàng</li>
                    </ul>
                </div>
                <div class="col-xl-2 col-sm-6">
                    <div class="title">
                        Các chính sách và hỗ trợ<i class="fa-solid fa-caret-down icon"></i>
                    </div>
                    <ul class="sub">
                        <li>Chính sách</li>
                        <li>Bảo mật thông tin</li>
                        <li>Tiếp nhận phản hồi</li>
                    </ul>
                </div>
                <div class="col-xl-4 col-sm-6">
                    <div class="title">
                        Chi nhánh<i class="fa-solid fa-caret-down icon"></i>
                    </div>
                    <ul class="sub">
                        <li><i class="fa-solid fa-location-dot"></i>&nbsp;Shop 1, 103 Đ. Cầu Diễn, Phúc Diễn, Bắc Từ Liêm,
                            Hà Nội, Việt Nam</li>
                        <li><i class="fa-solid fa-location-dot"></i>&nbsp;Shop 1, 103 Đ. Cầu Diễn, Phúc Diễn, Bắc Từ Liêm,
                            Hà Nội, Việt Nam</li>
                        <li><i class="fa-solid fa-location-dot"></i>&nbsp;Shop 1, 103 Đ. Cầu Diễn, Phúc Diễn, Bắc Từ Liêm,
                            Hà Nội, Việt Nam</li>
                        <li><i class="fa-solid fa-location-dot"></i>&nbsp;Shop 1, 103 Đ. Cầu Diễn, Phúc Diễn, Bắc Từ Liêm,
                            Hà Nội, Việt Nam</li>
                        <li><i class="fa-solid fa-location-dot"></i>&nbsp;Shop 1, 103 Đ. Cầu Diễn, Phúc Diễn, Bắc Từ Liêm,
                            Hà Nội, Việt Nam</li>
                    </ul>
                </div>
            </div>
            <div class="copyright text-center">
                <hr>
                <span>© Shop - Bản quyền thuộc về Công ty cổ phần thời trang </span>
            </div>
        </div>
        <button id="back-to-top" :class="{ show: btnOnTopVisible }" @click="scrollToTop"><font-awesome-icon
                icon="fa-solid fa-chevron-up" style="color: #1a71ff;" /></button>
    </footer>
</template>
  
<<<<<<< HEAD
<script>
export default {
=======
<<<<<<< Updated upstream
  <script>
  export default {
=======
<script>
import logoPage from "@/assets/images/logo/logoPage.png";
import LogoFacebook from "@/assets/images/logo/logoFacebook.png"
import instagram from "@/assets/images/logo/instagram.png"
import twitter from "@/assets/images/logo/twitter.png"
import zalo from "@/assets/images/logo/zalo.png"
export default {
>>>>>>> Stashed changes
>>>>>>> Layout
    name: 'FooterLayout',
    components: {
    },
    setup() {
    },
    directives: {
    },
    data() {
<<<<<<< HEAD
        return {
            btnOnTopVisible: true,
        };
=======
<<<<<<< Updated upstream
      return {
        // Dữ liệu của component
      };
=======
        return {
            btnOnTopVisible: true,
            logo: logoPage,
            facebook:LogoFacebook,
            logoInstagram:instagram,
            logoTwitter:twitter,
            logoZalo:zalo,
        };
>>>>>>> Stashed changes
>>>>>>> Layout
    },
    created() {
        // Logic khi component được khởi tạo
    },
    mounted() {
        window.addEventListener('scroll', this.scrollHandler);
    },
    computed() {
        // được sử dụng để định nghĩa các thuộc tính tính toán
    },
    updated() {

    },
    unmounted() {

    },
    methods: {
        scrollHandler() {
            if (window.pageYOffset > 300) {
                this.btnOnTopVisible = true;
            } else {
                this.btnOnTopVisible = false;
            }
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },
};
</script>
  
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
  <style>
  /* CSS cho component */
  </style>
=======
>>>>>>> Layout
<style scoped>
#back-to-top {
    display: inline-block;
    color: red;
    background-color: #FAF0E4;
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 4px;
    position: fixed;
    bottom: 80px;
    right: 45px;
    transition: background-color .3s, opacity .5s, visibility .5s;
    opacity: 0;
    visibility: hidden;
    z-index: 1000;
    border: none !important;
}

/* #back-to-top::after {
    content: "\f077";
    font-family: FontAwesome;
    font-weight: normal;
    font-style: normal;
    font-size: 2em;
    line-height: 50px;
    color: #fff;
} */

#back-to-top:hover {
    cursor: pointer;
    background-color: #9BCDD2;
<<<<<<< HEAD
=======
    -webkit-animation: rotate-center 0.6s ease-in-out both;
    animation: rotate-center 0.6s ease-in-out both;
>>>>>>> Layout
}

#back-to-top:active {
    background-color: #A2CDB0;
<<<<<<< HEAD
=======
    -webkit-animation: rotate-center 0.6s ease-in-out both;
    animation: rotate-center 0.6s ease-in-out both;
>>>>>>> Layout
}

#back-to-top.show {
    opacity: 1;
    visibility: visible;
}

.show-titles {
    height: auto;
    opacity: 1;
    transition: height 15ms 18ms, opacity 641ms 24ms;
<<<<<<< HEAD
}</style>
=======
}

@-webkit-keyframes rotate-center {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes rotate-center {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
>>>>>>> Stashed changes
>>>>>>> Layout
  