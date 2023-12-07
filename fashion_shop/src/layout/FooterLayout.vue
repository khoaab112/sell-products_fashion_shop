<template>
    <footer id="footer">
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
                    <div class="sologan mt-2">
                        <span>"</span><strong>Slogan là một câu văn ngắn gọn cô đọng đầy đủ ý nghĩa, thông điệp với mục đích
                            mô tả
                            hoặc thuyết phục vấn đề nào đó. Thông thường, Slogan rất nổi bật, dễ nhớ và thu hút đối với mọi
                            người.</strong><span>"</span>
                    </div>
                    <div class="hotline">
                        <font-awesome-icon class="me-2" icon="fa-solid fa-phone" /> 0833.872.6589
                    </div>
                </div>
                <div class="col-xl-2 col-sm-6">
                    <div class="title">
                        Về shop<i class="fa-solid fa-caret-down icon"></i>
                    </div>
                    <ul class="sub">
                        <li><router-link :to="{ name: 'TestView' }">Giới thiêu</router-link></li>
                        <li><router-link :to="{ name: 'TestView' }">Liên hệ</router-link></li>
                        <li><router-link :to="{ name: 'TestView' }">Tuyển dụng</router-link></li>
                        <li><router-link :to="{ name: 'TestView' }">Tin tức</router-link></li>
                        <li><router-link :to="{ name: 'TestView' }">Hệ thống cửa hàng</router-link></li>
                    </ul>
                </div>
                <div class="col-xl-2 col-sm-6">
                    <div class="title">
                        Các chính sách và hỗ trợ<i class="fa-solid fa-caret-down icon"></i>
                    </div>
                    <ul class="sub">
                        <li><router-link :to="{ name: 'TestView' }">Chính sách</router-link></li>
                        <li><router-link :to="{ name: 'TestView' }">Bảo mật thông tin</router-link></li>
                        <li><router-link :to="{ name: 'TestView' }">Tiếp nhận phản hồi</router-link></li>
                    </ul>
                </div>
                <div class="col-xl-4 col-sm-6">
                    <div class="title">
                        Chi nhánh<i class="fa-solid fa-caret-down icon"></i>
                    </div>
                    <ul class="sub">
                        <li><router-link :to="{ name: 'TestView' }"><font-awesome-icon
                                    icon="fa-solid fa-location-dot" />&nbsp;Shop 1, 103 Đ. Cầu Diễn, Phúc Diễn, Bắc Từ Liêm,
                                Hà Nội, Việt Nam</router-link></li>
                        <li><router-link :to="{ name: 'TestView' }"><font-awesome-icon
                                    icon="fa-solid fa-location-dot" />&nbsp;Shop 1, 103 Đ. Cầu Diễn, Phúc Diễn, Bắc Từ Liêm,
                                Hà Nội, Việt Nam</router-link></li>
                        <li><router-link :to="{ name: 'TestView' }"><font-awesome-icon
                                    icon="fa-solid fa-location-dot" />&nbsp;Shop 1, 103 Đ. Cầu Diễn, Phúc Diễn, Bắc Từ Liêm,
                                Hà Nội, Việt Nam</router-link></li>
                        <li><router-link :to="{ name: 'TestView' }"><font-awesome-icon
                                    icon="fa-solid fa-location-dot" />&nbsp;Shop 1, 103 Đ. Cầu Diễn, Phúc Diễn, Bắc Từ Liêm,
                                Hà Nội, Việt Nam</router-link></li>
                        <li><router-link :to="{ name: 'TestView' }"><font-awesome-icon
                                    icon="fa-solid fa-location-dot" />&nbsp;Shop 1, 103 Đ. Cầu Diễn, Phúc Diễn, Bắc Từ Liêm,
                                Hà Nội, Việt Nam</router-link></li>
                        <li class="text-end more"><router-link :to="{ name: 'TestView' }">Xem
                                thêm</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="copyright text-center">
                <hr>
                <strong>© Shop - Bản quyền thuộc về Công ty cổ phần thời trang </strong>
            </div>
        </div>
        <button id="back-to-top" :class="{ show: btnOnTopVisible }" @click="scrollToTop"><font-awesome-icon
                icon="fa-solid fa-chevron-up" style="color: #1a71ff;" /></button>
    </footer>
</template>
  
<script>
import logoPage from "@/assets/images/logo/logoPage.png";
import LogoFacebook from "@/assets/images/logo/logoFacebook.png"
import instagram from "@/assets/images/logo/instagram.png"
import twitter from "@/assets/images/logo/twitter.png"
import zalo from "@/assets/images/logo/zalo.png"
export default {
    name: 'FooterLayout',
    components: {
    },
    setup() {
    },
    directives: {
    },
    data() {
        return {
            btnOnTopVisible: true,
            logo: logoPage,
            facebook: LogoFacebook,
            logoInstagram: instagram,
            logoTwitter: twitter,
            logoZalo: zalo,
        };
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
    -webkit-animation: rotate-center 0.6s ease-in-out both;
    animation: rotate-center 0.6s ease-in-out both;
}

#back-to-top:active {
    background-color: #A2CDB0;
    -webkit-animation: rotate-center 0.6s ease-in-out both;
    animation: rotate-center 0.6s ease-in-out both;
}

#back-to-top.show {
    opacity: 1;
    visibility: visible;
}

.show-titles {
    height: auto;
    opacity: 1;
    transition: height 15ms 18ms, opacity 641ms 24ms;
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

footer li>a {
    color: black;
    text-decoration: none;
    font-weight: bold;
}

footer li>a:hover {
    color: blue;
}

ul.sub {
    text-align: left;
}
</style>

  