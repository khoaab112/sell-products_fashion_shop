<template>
    <main>
        <div class="mt-5"></div>
        <div class="active-mb"><input type="checkbox" class="btn-change-mobile" id="btn-active"><i
                class="fa-solid fa-bars icon"></i></div>
        <div class="container">
            <div class="d-flex align-items-start">
                <div class="nav flex-column nav-pills  list-btn" id="v-pills-tab" role="tablist"
                    aria-orientation="vertical">
                    <button class="nav-link active" id="v-pills-online-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-online" type="button" role="tab" aria-controls="v-pills-online"
                        aria-selected="true">Yêu cầu trực tuyến</button>
                    <button class="nav-link" id="v-pills-phone-number-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-phone-number" type="button" role="tab" aria-controls="v-pills-phone-number"
                        aria-selected="false">Số điện thoại</button>
                    <button class="nav-link" id="v-pills-mail-tab" data-bs-toggle="pill" data-bs-target="#v-pills-mail"
                        type="button" role="tab" aria-controls="v-pills-mail" aria-selected="false">Mail</button>
                    <button class="nav-link" id="v-pills-zalo-tab" data-bs-toggle="pill" data-bs-target="#v-pills-zalo"
                        type="button" role="tab" aria-controls="v-pills-zalo" aria-selected="false">Zalo</button>
                    <button class="nav-link" id="v-pills-facebook-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-facebook" type="button" role="tab" aria-controls="v-pills-facebook"
                        aria-selected="false">FaceBook</button>
                </div>
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade  show active" id="v-pills-online" role="tabpanel"
                        aria-labelledby="v-pills-online-tab">
                        <SupportChat></SupportChat>
                    </div>
                    <!--  -->
                    <!-- số điện thoại -->
                    <div class="tab-pane fade" id="v-pills-phone-number" role="tabpanel"
                        aria-labelledby="v-pills-phone-number-tab">
                        <SupportPhone></SupportPhone>
                    </div>
                    <!--  -->
                    <!-- mail -->
                    <div class="tab-pane fade" id="v-pills-mail" role="tabpanel" aria-labelledby="v-pills-mail-tab">
                        <SupportMail></SupportMail>
                    </div>
                    <!-- end -->
                    <!-- zalo -->
                    <div class="tab-pane fade" id="v-pills-zalo" role="tabpanel" aria-labelledby="v-pills-zalo-tab">
                        <SupportZalo></SupportZalo>
                    </div>
                    <!-- end -->
                    <div class="tab-pane fade" id="v-pills-facebook" role="tabpanel"
                        aria-labelledby="v-pills-zalo-facebook">
                        <SupportFacebook></SupportFacebook>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
  
<script>
import SupportChat from "./Support_Chat.vue";
import SupportPhone from "./Support_Phone.vue";
import SupportZalo from "./Support_Zalo.vue";
import SupportFacebook from "./Support_Facebook.vue";
import SupportMail from "./Support_Mail.vue";
export default {
    name: 'SupportVue',
    components: {
        SupportChat,
        SupportPhone,
        SupportZalo,
        SupportFacebook,
        SupportMail,
    },
    setup() {
    },
    directives: {
    },
    data() {
        return {
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
/* CSS cho component */
</style>
  