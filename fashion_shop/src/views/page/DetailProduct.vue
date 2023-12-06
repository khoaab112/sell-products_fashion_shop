<template>
    <main>
        <div class="container">
            <div class="row  pt-3">
                <section class="col-xl-6 col-sm-12"><img :src="imgDefault" alt=""
                        style="width: 100%; height: 25rem; object-fit: cover; display: block;">
                    <div class="product-escription">
                        <h4 class="title"><span>Mô tả:</span><i class="fa-solid fa-caret-down"></i></h4>
                        <p class="description">Đây là một trong những cách thức doanh nghiệp nên áp dụng thay vì tốn nhiều
                            chi phí cho các phương thức marketing đắt đỏ khác. Rõ ràng, khách hàng thường có xu hướng mua
                            những sản phẩm mình đã dùng thử và trải nghiệm (samples)
                            nhiều hơn là chỉ xem quảng cáo qua tivi, mạng xã hội… Theo báo cáo của Nielsen về sáng tạo và
                            đổi mới sản phẩm, Việt Nam là quốc gia có tỷ lệ người tiêu dùng sẵn sàng dùng thử sản phẩm mới
                            cao nhất trong khu vực Đông Nam Á.
                            Cụ thể, có đến 88% người Việt cho biết đã mua sản phẩm mới mà họ đã dùng thử, cao hơn 19% so với
                            mức trung bình của khu vực (69%).</p>
                    </div>
                </section>
                <section class="col-xl-6 col-sm-12">
                    <div class="place-an-order">
                        <h3 class="title">Quần áo ABC</h3>
                        <div class="short-description"><span>Đã bán : 123 sp | Đánh giá : 4,5 | bình luận : 123</span></div>
                        <div class="selling-price">
                            <img :src="imgDefault" alt="" class="banner-gif">
                            <div class="price">
                                <strong class="real-price">978.977 VNĐ (-10%)</strong>
                                <span class="original -price"><del>978.977 VNĐ</del></span>
                            </div>
                        </div>
                        <!-- màu -->
                        <div class="colors">
                            <strong class="color-name">Màu sắc : đỏ</strong>
                            <!-- <div class="list-color" v-for="(item, key) in listColor" :key="key">
                                <img :src="item.color" :alt="`img ${item.name}`">
                            </div> -->
                            <div class="list-color">
                                <vueper-slides class="no-shadow" :visible-slides="6" :bullets="false" :arrows="true"
                                    :gap="3" :fixed-height="true" slide-multiple>
                                    <template #arrow-left>
                                        <font-awesome-icon icon="fa-solid fa-angle-left" class="icon" />
                                    </template>
                                    <template #arrow-right>
                                        <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                                    </template>
                                    <vueper-slide v-for="(item, key) in listColor" :key="key" :image="item.color"
                                        class="item " :class="{ 'active': selectIndexColor == key }"
                                        @click="clickColor(item, key)" />
                                </vueper-slides>
                            </div>
                        </div>
                        <div class="size">
                            <strong class="size-name">Kích thước : {{ sizeDefault.size }} <font-awesome-icon
                                    icon="fa-solid fa-grip-lines-vertical" style="color: #ff0000;" /> Số lượng :
                                {{ sizeDefault.number }}</strong>
                            <div class="list-size">
                                <button v-for="(item, key) in listSize" :key="item.key"
                                    :class="{ 'active': selectIndexSize == key }" @click="clickSize(item, key)"
                                    :disabled="item.number < 1"> {{ item.size }}</button>
                            </div>
                        </div>
                        <div class="suggestion">
                            <strong class="title">Gợi ý phù hợp với bạn : </strong>
                            <form class="frm-suggestion">
                                <div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="sex" id="flexRadioMale">
                                        <label class="form-check-label" for="flexRadioMale">Nam</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="sex" id="flexRadioFemale"
                                            checked>
                                        <label class="form-check-label" for="flexRadioFemale">Nữ</label>
                                    </div>
                                </div>
                                <div class="body-measurements">
                                    <div class="height">
                                        <input type="number" placeholder="Chiều cao">
                                        <label class="height ms-2">cm</label>
                                    </div>
                                    <div>
                                        <input type="number" placeholder="Cân nặng">
                                        <label class="with ms-2">kg</label>
                                    </div>
                                </div>
                            </form>
                            <div class="result-suggestion">
                                <button>Tính</button>
                                <div class="result text-center">
                                    oh , có vẻ size 28 phù hợp với bạn
                                </div>
                            </div>
                            <div class="action">
                                <button class="support"><span>Hỗ trợ </span><font-awesome-icon icon="fa-solid fa-headset"
                                        class="icon" /></button>
                                <div class="order">
                                    <button class="cart">Thêm vào giỏ<br><font-awesome-icon
                                            icon="fa-solid fa-cart-shopping" /></button>
                                    <button class="buy">Mua<br><font-awesome-icon icon="fa-solid fa-credit-card" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section id="vote">
                <div class="row">
                    <div class="col-xl-6 col-sm-12">
                        <div class="vote">
                            <h4 class="title">Đánh giá :</h4>
                            <div class="form-vote">
                                <div class="number">
                                    <div class="number-reviews text-center">
                                        <span>5/5</span>
                                        <div class="star">
                                            <el-rate v-model="valueRate" size="large" />
                                        </div>
                                        <span>123 người đã đánh giá</span>
                                    </div>
                                    <div class="filter-vote row">
                                        <button class="col-3">Tắt cả</button>
                                        <button class="col-3">Hình ảnh</button>
                                        <button class="col-3">5 <i class="fa-regular fa-star"></i></button>
                                        <button class="col-3">4 <i class="fa-regular fa-star"></i></button>
                                        <button class="col-3">3 <i class="fa-regular fa-star"></i></button>
                                        <button class="col-3">2 <i class="fa-regular fa-star"></i></button>
                                        <button class="col-3">1 <i class="fa-regular fa-star"></i></button>
                                        <button class="col-3">0 <i class="fa-regular fa-star"></i></button>
                                    </div>
                                </div>
                                <div class="send-require">
                                    <div class="number-start text-center">
                                        <div class="star">
                                            <el-rate v-model="valueRate" size="large" />
                                        </div>
                                        <span>5 sao </span>
                                    </div>
                                    <div class="send">
                                        <i class="fa-regular fa-folder icon"></i>
                                        <textarea name="" id="" cols="30" rows="5"></textarea>
                                        <button id="send-require" class="btn">Gửi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list-feedback">
                            <div class="title">
                                <h5>Phản hồi của khách hàng</h5>
                                <font-awesome-icon icon="fa-solid fa-caret-down" class="btn-show-comment"
                                    :class="{ 'active': isShowComments == false }"
                                    @click="isShowComments = !isShowComments" />
                            </div>
                            <div class="list" v-show="isShowComments">
                                <div class="user-feedback" v-for="item in listUserComments" :key="item.id">
                                    <div class="name">
                                        <img :src=item.avatar :alt="`avatar ${item.name}`">
                                        <strong>Nguyễn Văn A</strong>
                                        <div class="star">
                                            <el-rate v-model="item.vote" size="large" disabled/>                                          
                                        </div>
                                    </div>
                                    <div class="comment">
                                        <p>Sản phẩm tốt</p>
                                        <div class="img">
                                            <!-- <img src="../imgs/img1.jpg" alt="">
                                            <img src="../imgs/img1.jpg" alt="">
                                            <img src="../imgs/img1.jpg" alt="">
                                            <img src="../imgs/img1.jpg" alt=""> -->
                                            <div class="box">
                                                <!-- <img src="../imgs/img1.jpg" alt=""> -->
                                                <div class="much-quantity">+ 14</div>
                                            </div>
                                        </div>
                                        <div class="action">
                                            <button>10<i class="fa-regular fa-thumbs-up like"></i></button>
                                            <button>20<i class="fa-regular fa-comment comment"></i></button>
                                            <button>1<i class="fa-solid fa-triangle-exclamation report"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <strong>Xem thêm</strong>
                                    <p><i class="fa-solid fa-angles-down" style="color: blue;"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-sm-0"></div>
                </div>
            </section>
            <section id="suggestion-product">
                <h4 class="title">Sản phẩm liên quan</h4>
                <div class="list-product">

                </div>
            </section>
        </div>
    </main>
</template>
  
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    name: 'DetailProduct',
    components: {
        VueperSlides, VueperSlide
    },
    setup() {
    },
    directives: {
    },
    data() {
        return {
            isShowComments: true,
            valueRate: 0,
            selectIndexColor: null,
            selectIndexSize: null,
            sizeDefault: {
                size: 'NAN',
                number: 'NAN',
            },
            number: 'NAN',
            imgDefault: 'https://i.pinimg.com/564x/a2/4a/cb/a24acb241327b3947d3ae33aef5a6ddf.jpg',
            listColor: [
                { name: 'black', color: 'https://i.pinimg.com/564x/c5/73/cd/c573cdbfb67934651115ce1a9ce006b2.jpg' },
                { name: 'black', color: 'https://i.pinimg.com/564x/ee/86/34/ee8634272b8b54442899975e21fef87a.jpg' },
                { name: 'black', color: 'https://i.pinimg.com/564x/c5/73/cd/c573cdbfb67934651115ce1a9ce006b2.jpg' },
                { name: 'black', color: 'https://i.pinimg.com/564x/d3/2a/dd/d32adda4f9b88480d7d387fead17988d.jpg' },
                { name: 'black', color: 'https://i.pinimg.com/564x/d3/2a/dd/d32adda4f9b88480d7d387fead17988d.jpg' },
                { name: 'black', color: 'https://i.pinimg.com/564x/d3/2a/dd/d32adda4f9b88480d7d387fead17988d.jpg' },
                { name: 'black', color: 'https://i.pinimg.com/564x/d3/2a/dd/d32adda4f9b88480d7d387fead17988d.jpg' },
                { name: 'black', color: 'https://i.pinimg.com/564x/d3/2a/dd/d32adda4f9b88480d7d387fead17988d.jpg' },
                { name: 'black', color: 'https://i.pinimg.com/564x/d3/2a/dd/d32adda4f9b88480d7d387fead17988d.jpg' },
                { name: 'black', color: 'https://i.pinimg.com/564x/d3/2a/dd/d32adda4f9b88480d7d387fead17988d.jpg' },
                { name: 'black', color: 'https://i.pinimg.com/564x/d3/2a/dd/d32adda4f9b88480d7d387fead17988d.jpg' },
                { name: 'black', color: 'https://i.pinimg.com/564x/d3/2a/dd/d32adda4f9b88480d7d387fead17988d.jpg' },
                { name: 'black', color: 'https://i.pinimg.com/564x/d3/2a/dd/d32adda4f9b88480d7d387fead17988d.jpg' },
            ],
            listSize: [
                {
                    'key': 1, size: 28, number: 0
                },
                {
                    'key': 2, size: 29, number: 3
                },
                {
                    'key': 3, size: 30, number: 4
                },
                {
                    'key': 4, size: 40, number: 5
                },
                {
                    'key': 5, size: 35, number: 70
                },
                {
                    'key': 5, size: 35, number: 70
                },
                {
                    'key': 5, size: 35, number: 70
                },
                {
                    'key': 5, size: 35, number: 70
                },
                {
                    'key': 5, size: 35, number: 70
                },
                {
                    'key': 5, size: 35, number: 70
                },
                {
                    'key': 5, size: 35, number: 70
                },
            ],
            listUserComments: [
                {
                    id: '1', name: 'Nguyễn Văn A',
                    avatar:"https://i.pinimg.com/236x/61/c2/33/61c233fe615dbba599115c678d5c9416.jpg",
                     listImg: [
                        'https://i.pinimg.com/564x/c5/73/cd/c573cdbfb67934651115ce1a9ce006b2.jpg',
                        'https://i.pinimg.com/236x/25/61/f6/2561f6ef60492ad53897c35c077e2167.jpg',
                        'https://i.pinimg.com/236x/e1/b7/fe/e1b7fed48b90321e524426a42c35259b.jpg',
                        'https://i.pinimg.com/236x/32/7a/9b/327a9bdaf14cac77e3c4b8337ddeefe2.jpg',
                        'https://i.pinimg.com/236x/32/7a/9b/327a9bdaf14cac77e3c4b8337ddeefe2.jpg',
                        'https://i.pinimg.com/236x/32/7a/9b/327a9bdaf14cac77e3c4b8337ddeefe2.jpg',
                        'https://i.pinimg.com/236x/32/7a/9b/327a9bdaf14cac77e3c4b8337ddeefe2.jpg',
                        'https://i.pinimg.com/236x/32/7a/9b/327a9bdaf14cac77e3c4b8337ddeefe2.jpg',
                    ], like: 50, comments: 5, report: 3,vote:2
                },
                {
                    id: '2', name: 'Nguyễn Nhi', 
                    avatar:"https://i.pinimg.com/236x/61/c2/33/61c233fe615dbba599115c678d5c9416.jpg",                    
                    listImg: [
                        'https://i.pinimg.com/564x/c5/73/cd/c573cdbfb67934651115ce1a9ce006b2.jpg',
                        'https://i.pinimg.com/236x/25/61/f6/2561f6ef60492ad53897c35c077e2167.jpg',
                        'https://i.pinimg.com/236x/e1/b7/fe/e1b7fed48b90321e524426a42c35259b.jpg',
                        'https://i.pinimg.com/236x/32/7a/9b/327a9bdaf14cac77e3c4b8337ddeefe2.jpg',
                    ], like: 50, comments: 5, report: 3,vote: 1
                },
                {
                    id: '3', name: 'Nguyên Minh',
                    avatar:"https://i.pinimg.com/236x/61/c2/33/61c233fe615dbba599115c678d5c9416.jpg",                    
                    listImg: [
                        'https://i.pinimg.com/564x/c5/73/cd/c573cdbfb67934651115ce1a9ce006b2.jpg',
                        'https://i.pinimg.com/236x/25/61/f6/2561f6ef60492ad53897c35c077e2167.jpg',
                        'https://i.pinimg.com/236x/e1/b7/fe/e1b7fed48b90321e524426a42c35259b.jpg',
                        'https://i.pinimg.com/236x/32/7a/9b/327a9bdaf14cac77e3c4b8337ddeefe2.jpg',
                    ], like: 50, comments: 5, report: 3,vote:5
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
        clickColor(item, key) {
            this.selectIndexColor = key;
            this.imgDefault = item.color;
        },
        clickSize(item, key) {
            this.sizeDefault.size = item.size;
            this.sizeDefault.number = item.number;
            this.selectIndexSize = key;
        }
    },
};
</script>
  
<style scoped>
.btn-show-comment:hover {
    color: orange;
    user-select: none;
}

.btn-show-comment {
    font-size: 30px;
}

.btn-show-comment.active {
    transform: rotate(180deg);
}

.star {
    background: white;
    padding: 0 5px 6px 5px;

}

/* side */
.list-color .vueperslides {
    width: 100%;
}

button.vueperslides__arrow {
    font-size: 9px;
    font-weight: bold;
}

.list-color .vueperslides--fixed-height {
    height: 3rem;
}

.list-color .vueperslides__arrow svg {
    font-size: 11px !important;
}

/*end*/

.product-escription {
    margin-top: 1rem;
}

.product-escription h4 {
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.product-escription .description {
    padding: 0 0.5rem;
}


/* đặt hàng */

.place-an-order .short-description {
    color: #6c757d;
}

.place-an-order .title {
    font-weight: bold;
    margin-bottom: 0px !important;
}

.selling-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.selling-price img {
    width: 14rem;
    height: 8rem;
    object-fit: cover;
}

.price {
    display: grid;
    justify-items: end;
}

strong.real-price {
    font-size: 130%;
}

span.original.-price {
    color: #6c757d;
    font-size: 110%;
}

.place-an-order .colors {
    margin-top: 1rem;
}

.place-an-order .colors .list-color {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1rem;
    padding: 0 3rem;
    height: 5rem;
}

.place-an-order .colors .list-color .icon {
    width: 3rem;
    height: 2rem;
}

.place-an-order .colors .list-color .icon:hover {
    -webkit-animation: slide-fwd-center 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-fwd-center 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes slide-fwd-center {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }

    100% {
        -webkit-transform: translateZ(160px);
        transform: translateZ(160px);
    }
}

@keyframes slide-fwd-center {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }

    100% {
        -webkit-transform: translateZ(160px);
        transform: translateZ(160px);
    }
}

.colors strong {
    margin-bottom: 1rem;
}

.place-an-order .colors .list-color img {
    width: 3rem;
    height: 3rem;
    display: block;
    object-fit: cover;
    margin-right: 1rem;
    margin-bottom: 1rem;
}

.place-an-order .colors .list-color .active {
    border: 3px solid #97ca0a;
}

.place-an-order .size {
    margin-top: 1rem;
}

.place-an-order .size .list-size {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 1rem;
    justify-content: flex-start;
}

.size strong {
    margin-bottom: 1rem;
}

.place-an-order .size .list-size button {
    width: 3rem;
    height: 3rem;
    display: block;
    object-fit: cover;
    margin-right: 1rem;
    margin-bottom: 1rem;
    border: none;
}

.place-an-order .size .list-size button.active {
    border: 2px solid #0a58ca;
    transform: scale(1.1);
}

form.frm-suggestion {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

form.frm-suggestion .body-measurements input {
    padding: 3px 16px;
    border-radius: 5px;
    outline: none;
    border: 2px solid black;
}

form.frm-suggestion .body-measurements input[type="number"] {
    -moz-appearance: textfield;
}

form.frm-suggestion .body-measurements input[type="number"]::-webkit-inner-spin-button,
form.frm-suggestion .body-measurements input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

form.frm-suggestion .body-measurements {
    position: relative;
}

.suggestion div.height {
    margin-bottom: 1rem;
}

.result-suggestion {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;
}

.result-suggestion button {
    padding: 4px 7px;
    background: #1745d4;
    color: whitesmoke;
    border: none;
    border-radius: 5px;
}

.result-suggestion button:hover,
.suggestion .action button.support:hover {
    transform: scale(1.1);
}

.result-suggestion .result {
    color: red;
}

.suggestion .action {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
}

.suggestion .action button {
    border: none;
    padding: 14px 22px;
}

.suggestion .action .order button {
    border-radius: 10px;
}

.suggestion .action .order button:hover {
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.54);
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.54);
}

.suggestion .action button.support {
    border-radius: 50px;
    padding: 15px;
    display: flex;
    align-items: center;
    position: relative;
}

.suggestion .action .order button.cart {
    margin-right: 4rem;
    background: yellow;
}

.suggestion .action span {
    z-index: 3;
}

.suggestion .action .icon {
    position: absolute;
    font-size: 32px;
    color: #0a58ca40;
    z-index: 2;
}

.suggestion .action .order button.buy {
    background: #0d6efd;
    color: white;
}


/* vote */

section#vote {
    margin-top: 1rem;
}

section#vote h4.title {
    font-weight: bold;
}

#vote .form-vote {
    background-color: #D9D9D9;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
}

#vote .form-vote .number {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

#vote .form-vote .send-require {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

#vote .form-vote .filter-vote {
    /* display: flex;
    justify-content: space-between;
    width: 100%; */
}

#vote .form-vote .filter-vote button {
    margin-right: 0.5rem;
    padding: 1px 6px;
    border: 1px dashed red;
    margin-bottom: 0.5rem;
}

#vote .form-vote .filter-vote button:active {
    border: 1px dashed rgb(17, 16, 16);
    color: red;
    font-weight: bold;
}

.send-require .send {
    margin-right: 6rem;
    position: relative;
}

.send-require .send .icon {
    position: absolute;
    bottom: 16px;
    left: 9px;
    color: #2125299e;
    font-size: 120%;
}

.send-require .send .icon:active {
    color: black;
}

.send-require .send textarea {
    border: none;
    padding: 5px;
    outline: none;
}

.send-require .number-start {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
}

#send-require {
    position: absolute;
    bottom: 6px;
    width: 3rem;
    height: 2rem;
    border: none;
    background-color: #0d6efd;
    color: white;
    margin-left: 1rem;
}


/* section list-feedback */

#vote .list-feedback {
    margin-top: 1rem;
}

#vote .list-feedback h5 {
    font-weight: bold;
}

#vote .list-feedback .title {
    display: flex;
    justify-content: space-between;
}

.user-feedback .name {
    display: flex;
    align-items: center;
}

.user-feedback .name .star {
    margin-left: 1rem;
}

.user-feedback .comment .img {
    display: flex;
}

.user-feedback .comment img {
    height: 2rem;
    width: 3rem;
    object-fit: cover;
    display: block;
    margin-right: 1rem;
}

.user-feedback .comment .box {
    position: relative;
    height: 2rem;
    width: 3rem;
}

.user-feedback .comment .box img {
    opacity: 0.3;
}

.user-feedback .comment .box .much-quantity {
    position: absolute;
    top: 5px;
    left: 11%;
    font-weight: bold;
}

.user-feedback .comment .action {
    margin-top: 0.5rem;
}

.user-feedback .comment .action button {
    margin-right: 1rem;
    border: none;
    background-color: rgb(0 0 0 / 0%);
}

.user-feedback .comment .action .like:active {
    color: #0d6efd;
}

.user-feedback .comment .action .comment:active {
    color: yellow;
}

.user-feedback .comment .action .report:active {
    color: red;
}

.user-feedback {
    margin-bottom: 2rem;
}

@media (max-width: 500px) {
    .selling-price img {
        width: 8rem;
        height: 5rem;
        object-fit: cover;
    }

    strong.real-price {
        font-size: 120%;
    }

    span.original.-price {
        color: #6c757d;
        font-size: 100%;
    }

    .suggestion .action button {
        /* border: none; */
        padding: 0px 9px !important;
    }

    #vote .form-vote .number {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    #vote .form-vote .filter-vote {
        justify-content: center;
        align-items: flex-end;
        align-content: stretch;
        padding: 0 7px;
        margin-top: 7px;
        flex-direction: row;
        flex-wrap: wrap;
    }

    #vote .form-vote .send-require {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }

    .send-require .send {
        margin-top: 1rem;
    }

    .selling-price {
        margin-top: 1rem;
    }

    .suggestion .action .order button.cart {
        margin-right: 1rem;
    }
}</style>
  