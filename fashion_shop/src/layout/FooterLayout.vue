<template>
    <footer>
        <div class="container-xxl">
            <div class="row">
                <div class="col-xl-4 col-sm-6">
                    <!-- <div class="icon"><img src="../imgs/logoAdmin.png" alt="icon"><span>SHOP</span></div> -->
                    <div class="list-trademark">
                        <!-- <img src="../imgs/fb.png" alt="">
                        <img src="../imgs/fb.png" alt="">
                        <img src="../imgs/fb.png" alt="">
                        <img src="../imgs/fb.png" alt="">
                        <img src="../imgs/fb.png" alt="">
                        <img src="../imgs/fb.png" alt="">
                        <img src="../imgs/fb.png" alt="">
                        <img src="../imgs/fb.png" alt="">
                        <img src="../imgs/img1.jpg" alt=""> -->
                    </div>
                    <div class="sologan">
                        <span>"</span>Slogan là một câu văn ngắn gọn cô đọng đầy đủ ý nghĩa, thông điệp với mục đích mô tả
                        hoặc thuyết phục vấn đề nào đó. Thông thường, Slogan rất nổi bật, dễ nhớ và thu hút đối với mọi
                        người.<span>"</span>
                    </div>
                    <div class="hotline">
                        0833.872.6589
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
  
<script>
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
}

#back-to-top:active {
    background-color: #A2CDB0;
}

#back-to-top.show {
    opacity: 1;
    visibility: visible;
}

.show-titles {
    height: auto;
    opacity: 1;
    transition: height 15ms 18ms, opacity 641ms 24ms;
}</style>
  