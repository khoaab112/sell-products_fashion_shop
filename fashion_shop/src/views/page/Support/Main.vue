<template>
    <main>
        <div class="mt-5"></div>
        <div class="active-mb"><input type="checkbox" class="btn-change-mobile" id="btn-active"
                v-model="isActiveTap"><font-awesome-icon icon="fa-solid fa-bars" /></div>
        <div class="container">
            <div class="d-flex align-items-start">
                <div class="nav flex-column nav-pills  list-btn" :class="{ 'show-tap': isActiveTap }" id="v-pills-tab"
                    role="tablist" aria-orientation="vertical">
                    <div class="btn-off-tap"><input type="checkbox" v-model="isActiveTap"><font-awesome-icon
                            icon="fa-solid fa-x" class="icon-off-tap" /></div>
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
            isActiveTap: false,
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
/* mobile */
/* chung */
.icon-off-tap:active{
   scale: 1.2;
   color: red;
}
.icon-off-tap{
    font-size: 150%;
}
.btn-off-tap>input[type="checkbox"]{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 2rem;
    opacity: 0;
}
.btn-off-tap {
    position: absolute;
    top: 27px;
    right: 15px;
}

button:hover {
    box-shadow: 1px 6px 13px -5px;
    transform: scale(1.01);
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}

button.btn-change-mobile {
    display: none;
}

/* end */

.list-btn {
    margin-right: 2rem;
    background: #D9D9D9;
    min-width: 14rem;
    max-width: 18rem;
    align-items: center;
    min-height: 50pc;
}

.list-btn button {
    margin-top: 1rem;
    width: 8rem;
    font-weight: bold;
}

#v-pills-tabContent {
    min-height: 50pc;
    background-color: #D9D9D9;
    width: 100%;
}

/* online */

#v-pills-tabContent>div {
    margin-top: 1rem;
    padding: 1rem 2rem;
}

#v-pills-online .frm-connect {
    display: flex;
    justify-content: space-between;
}

#v-pills-online .frm-connect input {
    width: 80%;
    border-radius: 5px;
    border-radius: 5px;
    outline: none;
    border: 1px solid black;
    height: 2.2rem;
    padding: 0 1rem;
}

#v-pills-online .frm-connect button {
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    background: #0d6efd;
    color: white;
}

#v-pills-online .messaging-frame {
    width: 100%;
    height: 40rem;
    margin-top: 1rem;
    position: relative;
}

#v-pills-online .messaging-frame .input-message {
    position: absolute;
    bottom: 0.3rem;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
}

#v-pills-online .messaging-frame>.contents {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 5px;
}

#v-pills-online .messaging-frame .input-message span {
    width: 30rem;
    position: relative;
}

#v-pills-online .messaging-frame .input-message .icon {
    position: absolute;
    bottom: 34%;
    left: 14px;
    color: #00000094;
}

#v-pills-online .messaging-frame .input-message .icon:active {
    color: black;
}

#v-pills-online .messaging-frame .input-message textarea {
    width: 100%;
    padding: 0.5rem 2rem;
}

#v-pills-online .messaging-frame .input-message button {
    width: 6rem;
    border: none;
    border-radius: 5px;
    background-color: #6c757d;
    color: white;
}

#v-pills-online .messaging-frame .contents .messages {
    width: 100%;
    height: 85%;
    padding: 1rem;
}

#v-pills-online .messaging-frame .contents .mess {
    background-color: #e9ecef;
    height: 92%;
    border: 1px solid #21252954;
    overflow-x: hidden;
    overflow-y: auto;
}

.info-supporter {
    display: flex;
}

.info-supporter>.avatar {
    width: 3rem;
    height: 3rem;
}

.info-supporter>.name {
    margin-left: 1rem;
}

.info-supporter>.name>p {
    font-weight: 100;
    font-size: 80%;
}

.info-supporter>.avatar>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px;
}

.respond-messages .respond,
.reply-message .reply {
    display: flex;
    margin-top: 1rem;
}

.info-supporter .name {
    color: red;
}

.info-supporter .name>p {
    color: #212529b0;
}

.mess .avatar {
    width: 2rem;
    height: 2rem;
}

.mess .avatar img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 50px;
}

#v-pills-online .messaging-frame .content {
    width: 100%;
    height: 100%;
    margin-left: 0.5rem;
}

#v-pills-online .messaging-frame .name {
    font-weight: bold;
    font-size: 105%;
}

#v-pills-online .messaging-frame .message-wait,
#v-pills-online .messaging-frame .message {
    margin-left: 0.3rem;
}

.mess .respond,
.mess .reply {
    margin-left: 0.5rem;
    margin-top: 0.3rem;
    display: flex;
    max-width: 80%;
    min-width: 50%;
}

.reply {
    display: flex;
    flex-direction: row-reverse;
    float: right;
}

.respond .name {
    color: red;
}

.input-message button:hover {
    box-shadow: 4px 5px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 4px 5px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 5px 5px 0px rgba(0, 0, 0, 0.75);
}

/* scrollbar */

.mess::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

.mess::-webkit-scrollbar-track {
    background-color: #e9f0ff;
    border-radius: 4px;
    border-left: 2.5px solid white;
    border-right: 2.5px solid white;
}

.mess::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    background-color: #8fb3ff;
}

/* end  scrollbar*/

@media(max-width: 990px) {
    #v-pills-online .messaging-frame .input-message {
        position: absolute;
        bottom: 0.3rem;
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
        width: 105%;
    }

    #v-pills-online .messaging-frame .input-message span {
        width: 16rem;
    }

    #v-pills-online .messaging-frame .input-message button {
        width: 4rem;
        height: 2rem;
        border: none;
        border-radius: 5px;
        background-color: #6c757d;
        color: white;
    }
}

.active-mb {
    display: none;
}

@media(max-width: 700px) {
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
        top: 9.5rem;
        box-shadow: 0 0 10px #85888C;
        margin: -50px 0 0 -50px;
        padding: 50px;
        padding-top: 125px;
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

    #v-pills-online .frm-connect button {
        padding: 0.3rem;
        margin-left: 5px;
        height: 2rem;
        font-size: 14px;
    }

    #v-pills-online .messaging-frame .input-message span {
        width: 13rem;
        position: relative;
    }

    #v-pills-online .messaging-frame .input-message button {
        width: 3rem;
    }

    #v-pills-phone-number .send-information .name {
        padding: 0 !important;
        background: none !important;
    }

    .frm-input-info {
        padding: 0px 16px;
        background: white;
    }
}

/* v-pills-phone-number */

#v-pills-phone-number .title {
    font-weight: bold;
    font-size: 110%;
}

#v-pills-phone-number input {
    outline: none;
    border-radius: 5px;
    border: 1px solid black;
    padding: 3px 10px;
    margin-top: 1rem;
}

#v-pills-phone-number label {
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#v-pills-phone-number .form-number button {
    border: none;
    padding: 4px 14px;
    margin-left: 1rem;
    border-radius: 5px;
    background: #ffc107;
    color: white;
}

#v-pills-phone-number strong.or {
    margin-top: 1rem;
    color: red;
}

#v-pills-phone-number .send-information .title {
    margin-top: 1rem;
}

#v-pills-phone-number .send-information .name {
    padding: 40px 11rem;
    background: white;
}

#v-pills-phone-number .send-information textarea {
    margin-top: 1rem;
    outline: none;
    padding: 5px;
}

#v-pills-phone-number .send-information button {
    border: none;
    padding: 4px 14px;
    margin-left: 1rem;
    border-radius: 5px;
    background: #0d6efd;
    color: white;
    float: right;
    margin-top: 1rem;
}

/* v-pills-mail */

#v-pills-mail .title {
    font-weight: bold;
    font-size: 110%;
}

#v-pills-mail .receiving-mail {
    font-weight: bold;
    background-color: white;
    width: 30%;
    padding: 5px 0 5px 34px;
    border-radius: 5px;
    margin-bottom: 1rem;
}

#v-pills-mail #frm-mail {
    background-color: white;
    padding: 2rem 1rem 2rem 1rem;
    text-align: end;
}

#v-pills-mail .info {
    display: flex;
    justify-content: space-between;
}

#v-pills-mail .info input {
    width: 40%;
}

#v-pills-mail #frm-mail input {
    outline: none;
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px 1rem;
}

#v-pills-mail #frm-mail textarea {
    margin-top: 1rem;
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px 1rem;
}

#v-pills-mail #frm-mail button {
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    background: #0d6efd;
}

/* zalo */

#v-pills-zalo .title,
#v-pills-facebook .title {
    font-weight: bold;
    font-size: 110%;
}

#v-pills-zalo .link,
#v-pills-facebook .link {
    font-weight: bold;
    background-color: white;
    width: 40%;
    padding: 5px 0 5px 34px;
    border-radius: 5px;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
}

#v-pills-zalo .link span:hover,
#v-pills-facebook .link span:hover {
    color: #0d6efd;
}

#v-pills-zalo .content,
#v-pills-facebook .content {
    width: 100%;
    height: 20rem;
    background-color: #6c757d;
}</style>
  