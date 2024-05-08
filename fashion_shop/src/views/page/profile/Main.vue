<template>
    <main id="profile">
        <div class="mt-5"></div>
        <div class="active-mb"><input type="checkbox" class="btn-change-mobile" id="btn-active"
                @click="isActiveTab = !isActiveTab">
            <font-awesome-icon icon="fa-solid fa-bars" class="icon-bars icon" />
        </div>
        <div class="container">
            <div class="d-flex align-items-start">
                <div class="nav flex-column nav-pills  list-btn" :class="{ 'show-tap': isActiveTab }" id="v-pills-tab"
                    role="tablist" aria-orientation="vertical">
                    <div class="icon-close" @click="isActiveTab = false"><font-awesome-icon icon="fa-solid fa-xmark" />
                    </div>
                    <div class="card-info-user text-center">
                        <div class="avatar-user"> <img
                                src="https://top10tphcm.com/wp-content/uploads/2023/02/gai-dep-nhat-viet-nam-6.jpg"
                                alt=""></div>
                        <strong class="name">
                            Nguyễn Lan Anh
                        </strong>
                        <div class="img-rank"><img
                                src="https://top10tphcm.com/wp-content/uploads/2023/02/gai-dep-nhat-viet-nam-6.jpg"
                                alt=""></div>
                        <strong class="rank-name">Vàng</strong>
                        <div class="percentage">
                            <div class="percentage100">
                                <div class="percentage0"></div>
                            </div>
                            <strong>60%</strong>
                        </div>
                        <span class="note-percentage">Bạn cần 190 điểm nữa để nên hạng</span>
                    </div>
                    <hr class="hr-user">
                    <button class="nav-link active" id="v-pills-info-user-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-info-user" type="button" role="tab" aria-controls="v-pills-info-user"
                        aria-selected="true">Thông tin</button>
                    <button class="nav-link" id="v-pills-change-password-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-change-password" type="button" role="tab"
                        aria-controls="v-pills-change-password" aria-selected="false">Đổi mật khẩu</button>
                    <button class="nav-link" id="v-pills-order-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-order" type="button" role="tab" aria-controls="v-pills-order"
                        aria-selected="false">Đơn hàng</button>
                    <button class="nav-link" id="v-pills-basket-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-basket" type="button" role="tab" aria-controls="v-pills-basket"
                        aria-selected="false">Giỏ hàng</button>
                    <button class="nav-link" id="v-pills-discount-code-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-discount-code" type="button" role="tab"
                        aria-controls="v-pills-discount-code" aria-selected="false">Mã giảm giá</button>
                    <button class="nav-link" id="v-pills-preferred-item-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-preferred-item" type="button" role="tab"
                        aria-controls="v-pills-preferred-item" aria-selected="false">Yêu thích</button>
                    <button class="nav-link" id="v-pills-track-order-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-track-order" type="button" role="tab"
                        aria-controls="v-pills-track-order" aria-selected="false">Tra soát-khiếu nại về đơn
                        hàng</button>
                    <button class="nav-link" id="v-pills-purchase-history-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-purchase-history" type="button" role="tab"
                        aria-controls="v-pills-purchase-history" aria-selected="false">Lịch sử mua hàng</button>
                    <button class="nav-link" id="v-pills-canceled-order-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-canceled-order" type="button" role="tab"
                        aria-controls="v-pills-canceled-order" aria-selected="false">Đơn hãng hủy</button>
                </div>
                <div class="tab-content" id="v-pills-tabContent">
                    <UserInfo></UserInfo>
                    <!-- đổi mật khẩu -->
                    <ChangePassword></ChangePassword>
                    <!-- đặt hàng -->
                    <ListOfCanceledOrders></ListOfCanceledOrders>
                    <!--Giỏ hàng  -->
                    <CartVue></CartVue>
                    <!--Mã giảm giá  -->
                    <DiscountCode></DiscountCode>
                    <!-- Yêu thích -->
                    <FavoriteProduct></FavoriteProduct>
                    <!-- Kiểm tra -->
                    <SearchForm></SearchForm>
                    <!-- Lịch sử -->
                    <PurchaseHistory></PurchaseHistory>
                    <!-- Đơn đã hủy -->
                    <OrderFailed></OrderFailed>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import UserInfo from "./UserInfo.vue";
import ChangePassword from "./ChangePassword.vue";
import CartVue from "./Cart.vue";
import DiscountCode from "./DiscountCode.vue";
import FavoriteProduct from "./FavoriteProduct.vue";
import ListOfCanceledOrders from "./ListOfCanceledOrders.vue";
import PurchaseHistory from "./PurchaseHistory.vue";
import SearchForm from "./SearchForm.vue";
import OrderFailed from "./OrderFailed.vue";

export default {
    name: 'ProfileVue',
    components: {
        UserInfo,
        ChangePassword,
        CartVue,
        DiscountCode,
        FavoriteProduct,
        ListOfCanceledOrders,
        PurchaseHistory,
        SearchForm,
        OrderFailed,
    },
    setup() {
    },
    directives: {
    },
    data() {
        return {
            isActiveTab: false,
            // Dữ liệu của component
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

<style>
main#profile {
    padding: 1rem 0 3rem 0;
}

main#profile button:hover {
    box-shadow: 1px 6px 13px -5px;
    transform: scale(1.01);
}

main#profile input[type="number"]::-webkit-inner-spin-button,
main#profile input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

main#profile input[type="number"] {
    -moz-appearance: textfield;
}

div.icon-close {
    position: absolute;
    right: 6px;
    top: 5px;
    color: red;
    font-size: 120%;
    display: none;
}

div.icon-close:active,
.icon-bars:hover {
    scale: 1.5;
    transition: var(--transition-ease);
    color: #2e72fd;
}

.active-mb {
    display: none;
}

button.btn-change-mobile {
    display: none;
}

.list-btn {
    margin-right: 2rem;
    background: #EEF5FF;
    min-width: 14rem;
    max-width: 18rem;
    align-items: center;
    min-height: 50pc;
}

.list-btn button {
    margin-top: 0.4rem;
    width: 8rem;
    font-weight: bold;
}

#v-pills-tabContent {
    min-height: 50pc;
    background-color: #f0f0f0;
    width: 100%;
}


/*  css riêng */

hr.hr-user {
    width: 80%;
    color: black;
}

.card-info-user {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card-info-user .avatar-user {
    width: 6rem;
    height: 6rem;
    margin-top: 1rem;
}

.card-info-user .avatar-user img {
    border-radius: 50px;
}

.card-info-user img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
}

.card-info-user .img-rank {
    width: 3rem;
    height: 3rem;
}

.card-info-user .rank-name {
    color: var(--bs-orange);
}

.card-info-user .percentage {
    width: 95%;
}

.percentage div.percentage100 {
    width: 100%;
    height: 0.8rem;
    background-color: #d9d9d9;
    border-radius: 15px;
}

.percentage div.percentage0 {
    width: 60%;
    padding: 0.4rem 0;
    background-color: #7cb3ff;
    border-radius: 15px;
}

span.note-percentage {
    font-size: 80%;
    color: #000000b0;
    font-weight: bb;
}

#v-pills-tabContent .title {
    font-weight: bold;
    font-size: 110%;
    margin-top: 1rem;
}


/* thông tin người dùng */

#v-pills-info-user {}

#v-pills-info-user .col-xl-6.col-xs-12>div:not(.list-address) {
    margin-left: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.list-address>div {
    margin-left: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.list-address>div .icon:hover {
    color: blue;
}

.list-address span {
    font-weight: 100;
}

button.add-address {
    margin-left: 1rem;
    margin-top: 1rem;
    padding: 4px 5px;
    border-radius: 50px;
    display: grid;
    align-content: center;
    color: red;
    border: 1px solid red;
    background: none;
}

#v-pills-info-user .edit-data {
    float: right;
    border-radius: 5px;
    background: #0d6efd;
    color: white;
    padding: 4px 6px;
    border: none;
}

.rank-information img {
    width: 3rem;
    height: 3rem;
    display: block;
    object-fit: cover;
}

.rank-information {
    display: flex;
    justify-content: space-between;
    width: 14rem;
    align-items: center;
}

.current-level {
    color: red;
}

.percentage.detail {
    width: 100%;
}

.percentage.detail strong {
    float: right;
    margin-top: 0.2rem;
}


/* đổi mật khẩu */


/* v-pills-change-password */

#v-pills-change-password form label {
    font-weight: bold;
}

#v-pills-change-password form {
    margin-left: 1rem;
}

#v-pills-change-password form label {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
}

#v-pills-change-password form label .icon {
    position: absolute;
    right: 15px;
    top: 55%;
}

#v-pills-change-password form input {
    margin: 1rem 0;
    width: 100%;
    padding: 5px 11px 5px 1rem;
    outline: none;
    border: 1px solid black;
    border-radius: 5px;
}

a.forgot-password {
    color: blue;
}

#v-pills-change-password form .action {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

#v-pills-change-password form .action button {
    border: none;
    padding: 7px 20px;
    border-radius: 5px;
}

#v-pills-change-password form .action .reset {
    background-color: #85888C;
    color: white;
}

#v-pills-change-password form .action .comfirm {
    background-color: #0d6efd;
    color: white;
}


/* đặt hàng */


/* chi tiết đơn hàng */

section#detail-product button {
    background-color: white;
    width: 5rem;
    border: none;
    border-radius: 15px;
}

.col-xl-5.col-sm-12.right>div {
    display: flex;
    justify-content: space-between;
    margin: 17px 1rem;
}

.col-xl-5.col-sm-12.right>div>span {
    text-align: end;
}


/* table */

#detail-product table {
    border-collapse: collapse;
}

#detail-product table {
    width: 100%;
    background: white;
}

#detail-product th {
    height: 50px;
}

#detail-product tr:not(tr:last-child) {
    border-bottom: 1px solid black;
}

#detail-product tr:nth-last-child(2) {
    background-color: #7cb3ff;
    color: white;
    font-weight: bold;
}

#detail-product tr:last-child {
    background-color: red;
    color: white;
    font-weight: bold;
}

#detail-product th,
tr {
    text-align: left;
}

#detail-product tr:nth-child(1) th {
    text-align: center;
}

#detail-product th:nth-child(1) {
    text-align: center;
}

#detail-product tr th:nth-child(2) {
    text-align: center;
}

#detail-product tr:not(tr:nth-child(1)) th:nth-child(3) {
    text-align: right;
    padding-right: 0.5rem;
}

#detail-product tr:not(tr:nth-child(1)) th:nth-child(4) {
    text-align: right;
    padding-right: 0.5rem;
}

#detail-product td {
    height: 50px;
    vertical-align: bottom;
}

#detail-product tr>th>img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    padding: 1px;
}


/* end table */

section#detail-product .note {
    background-color: white;
    min-height: 11rem;
    width: 100%;
}

section#detail-product .list-button button {
    border: none;
    width: 6rem;
    height: 3rem;
    margin-right: 2rem;
    font-size: 90%;
}

section#detail-product .list-button {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

section#detail-product .list-button button:nth-child(1) {
    background-color: orange;
    color: white;
}

section#detail-product .list-button button:nth-child(2) {
    background-color: #0d6efd;
    color: white;
}

section#detail-product .list-button {
    margin-top: 1rem;
}

@media(max-width: 1200px) {
    section#detail-product .list-button {
        margin-top: 1rem;
    }
}


/* xác nhận đơn hàng */

section#order-confirmation button {
    background-color: white;
    width: 5rem;
    border: none;
    border-radius: 15px;
}


/* table */

#order-confirmation img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 1px;
}

#order-confirmation table {
    width: 100%;
    background-color: white;
}

#order-confirmation .scroll {
    overflow-x: hidden;
    overflow-y: auto;
    height: 28rem;
}

.scroll::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

.scroll::-webkit-scrollbar-track {
    background-color: #e9f0ff;
    border-radius: 4px;
    border-left: 2.5px solid white;
    border-right: 2.5px solid white;
}

.scroll::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    background-color: #8fb3ff;
}

#order-confirmation table input {
    width: 1rem;
    height: 1rem;
}

#order-confirmation table {
    border-collapse: collapse;
    border: 1px solid black;
}

#order-confirmation table p {
    margin-bottom: 0.3rem;
}

#order-confirmation th:first-child {
    min-width: 1rem;
    text-align: center;
    color: black;
}

#order-confirmation th:nth-child(2) {
    width: 10rem;
    height: 11rem;
}

#order-confirmation th:nth-child(3) {
    /* display: block; */
    padding-left: 1rem;
}

#order-confirmation th:nth-child(4) {
    /* display: block; */
    max-width: 4rem;
}

#order-confirmation th:last-child {
    min-width: 3rem;
    text-align: center;
}

#order-confirmation tr:not(tr:last-child) {
    border-bottom: 1px solid black;
}

#order-confirmation .product-name {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

#order-confirmation .price {
    width: 80%;
    display: flex;
}

#order-confirmation .price del {
    color: #85888C;
}

#order-confirmation .number {
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #e6f4ff;
    border-radius: 10px;
}

#order-confirmation .number button {
    width: 2rem;
    height: 2rem;
}

#order-confirmation .number button:first-child {
    background-color: #85888C;
    color: white;
}

#order-confirmation .number button:last-child {
    background-color: #2b0bdf;
    color: white;
}

#order-confirmation .total {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.actual-payment.mt-2 {
    text-align: end;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
}

.actual-payment.mt-2 strong:last-child {
    color: red;
    font-size: 110%;
}

button.remove-item {
    float: right;
    background: red !important;
    color: white;
}

.payment-methods select {
    width: 50%;
}

.payment-methods .note {
    font-size: 80%;
    color: #85888C;
}

.payment-methods button.registered-address {
    background-color: red !important;
    color: white;
    width: 7rem !important;
    height: 2rem;
    margin-top: 1rem;
    margin-left: 1rem;
}

.delivery-time {
    display: flex;
    justify-content: space-between;
    width: 50%;
}

.delivery-time strong {
    background-color: #ffc107;
    border-radius: 5px;
}

.use-code>div {
    display: flex;
    align-items: center;
}

.use-code>div>strong {
    padding-right: 2rem;
}

.use-code>div input {
    border-radius: 5px;
    outline: none;
    border: 1px solid #ced4da;
    padding: 5px 10px 5px 10px;
    width: 17rem;
}

.use-code>div>div {
    position: relative;
}

.use-code>div>div>button {
    position: absolute;
    right: 17px;
    top: 0px;
    border-radius: 0px 5px 5px 0px !important;
    background: #6c757d !important;
    color: white !important;
    width: 4rem !important;
    height: 2.3rem;
}

.use-code .list-gifcode {
    display: block;
}

.use-code .list-gifcode .item,
.use-code .list-gifcode .total-x {
    display: flex;
    justify-content: space-between;
    width: 60%;
}

.use-code .list-gifcode .item .code {
    color: red;
}

.use-code .list-gifcode hr {
    width: 70%;
}

#v-pills-basket .list-action {
    float: right;
}

#v-pills-basket .list-action button {
    width: 6rem !important;
    height: 3rem;
    margin-right: 3rem;
}

#v-pills-basket .list-action button.comfirm {
    background-color: #0d6efd;
    color: white;
}

#v-pills-basket .list-action button.cancel {
    background-color: yellow;
}

@media(max-width: 700px) {
    div.icon-close{
        display: block;
    }
    input.btn-change-mobile {
        border: none;
        width: 3rem;
        height: 2rem;
        display: block;
        z-index: 2;
        opacity: 0;
    }

    .active-mb {
        width: 3rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .active-mb .icon {
        position: absolute;
    }

    .list-btn {
        min-height: 36pc;
    }

    #v-pills-tab {
        position: absolute;
        width: 100pc;
        top: 8rem;
        box-shadow: 0 0 10px #85888C;
        margin: -50px 0 0 -50px;
        padding: 10px;
        padding-top: 0px;
        background-color: #F5F6FA;
        -webkit-font-smoothing: antialiased;
        transform-origin: 0% 0%;
        transform: translate(-100%, 0);
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
        z-index: 1;
    }

    .show-tap {
        transform: none !important;
    }

    #order-confirmation th:nth-child(3) {
        font-size: 14px;
    }

    #order-confirmation .number button {
        width: 1.5rem;
        height: 1.5rem;
    }

    #order-confirmation .number {
        width: 4.5rem;
    }

    #order-confirmation table {
        font-size: 14px;
    }

    #order-confirmation th:nth-child(2) {
        width: 8rem;
        height: 9rem;
    }

    #order-confirmation .price {
        align-items: flex-end;
    }

    .delivery-time {
        align-items: center;
    }

    .use-code>div>div>button {
        right: 0px;
    }

    .use-code .icon-wallet {
        float: right;
        margin-top: 3rem;
        display: block;
    }

    .use-code>div {
        flex-wrap: wrap;
    }

    #v-pills-basket .list-action {
        margin-top: 1rem;
    }

    .payment-methods select {
        width: 100%;
    }
}


/* <!--Mã giảm giá  --> */


/* table */

#list-code img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 1px;
}

#list-code table {
    width: 100%;
    background-color: white;
}

#list-code .scroll {
    overflow-x: hidden;
    overflow-y: auto;
    height: 45rem;
}

.scroll::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

.scroll::-webkit-scrollbar-track {
    background-color: #e9f0ff;
    border-radius: 4px;
    border-left: 2.5px solid white;
    border-right: 2.5px solid white;
}

.scroll::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    background-color: #8fb3ff;
}

#list-code table input {
    width: 1rem;
    height: 1rem;
}

#list-code table {
    border-collapse: collapse;
    border: none;
}

#list-code table p {
    margin-bottom: 0.3rem;
}

#list-code th:first-child {
    min-width: 1rem;
    text-align: center;
    color: black;
}

#list-code th:nth-child(2) {
    width: 10rem;
    height: 11rem;
}

#list-code th:nth-child(3) {
    display: block;
    padding-left: 1rem;
}

#list-code th:nth-child(4) {
    /* display: block; */
    max-width: 4rem;
}

#list-code th:last-child {
    min-width: 3rem;
    text-align: center;
}

#list-code th:last-child button {
    border: 1px solid #6c757d;
    padding: 3px 12px;
    border-radius: 10px;
}

#list-code tr:not(tr:last-child) {
    border-bottom: 1px solid black;
}

@media (max-width:700px) {
    #list-code th:nth-child(2) {
        width: 8rem;
        height: 9rem;
    }

    #list-code th:last-child button {
        padding: 0px 9px;
    }
}


/* end */


/* Lịch sử */

section#history-buy .list-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}

section#history-buy .list-box .box {
    width: 11rem;
    height: 6rem;
    background: red;
    color: white;
    font-size: 110%;
    display: flex;
    margin-top: 1rem;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;
}

section#history-buy .list-box .box:first-child {
    background-color: #7cb3ff;
}

section#history-buy .list-box .box:nth-child(2) {
    background-color: #198754;
}

section#history-buy .list-box .box:nth-child(3) {
    background-color: #0dcaf0;
}

section#history-buy .list-box .box:last-child {
    background-color: #6c757d;
}
</style>