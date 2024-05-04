<template>
    <ListButtonAuth></ListButtonAuth>
    <section class="ftco-section img js-fullheight" :style="{ 'background-image': 'url(' + background + ')' }">
        <div class="container content-forgot-password">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center ">
                    <h2 class="heading-section">Quên mật khẩu</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4">
                    <div class="login-wrap p-0">
                        <form action="#" class="signin-form">
                            <div class="form-group">
                                <input class="form-control" placeholder="số điện thoại hoặc mail" autocomplete="on"
                                    name="phoneNumberRegister" v-model="dataUser.phoneOrEmail" required>
                                <span v-if="messageError.phoneOrEmail" class="error-message-danger">
                                    {{ messageError.phoneOrEmail }}
                                </span>
                                <span v-if="successMessage" class="error-message-success">
                                    {{ successMessage }}
                                </span>
                            </div>
                            <div class="spinner" v-if="isActive">
                                <SpinnerV2></SpinnerV2>
                            </div>
                            <div class="form-group d-flex">
                                <!-- <input v-model="dataUser.verificationCodes" type="text"
                                    class="form-control input-code-confirm " :class="{ off: !isActive }"
                                    placeholder="mã xác thực gửi về" autocomplete="on" name="nameRegister" required
                                    :disabled="!isActive"> -->
                                <input type="button" class="form-control send-code" value="Gửi mã"
                                    @click="requestAuthenticationCode()" v-if="!isActive">
                            </div>
                            <span class="error-message-danger" v-if="isActive && messageError.verificationCodes">
                                {{ messageError.verificationCodes }}
                            </span>
                            <!-- <div class="form-group text-center" v-if="isActive">
                                <button type="submit" class="form-control btn btn-primary submit px-3 mt-2">Xác
                                    nhận</button>
                            </div> -->
                        </form>
                    </div>
                </div>
            </div>
            <div class="action">
                <router-link :to="{ name: 'UserLogin' }" class="back link">Quay lại</router-link>
                <router-link :to="{ name: 'PageHome' }" class="home link">HOME</router-link>
            </div>
        </div>
    </section>
</template>

<script>
import backgroundForgotPassword from '@/assets/images/forgotPassword/background.jpg';
import ListButtonAuth from '@/components/ListButtonAuth.vue'
import SpinnerV2 from '@/components/Spinner_v2.vue'
import api from "@/api/server/auth.js";
export default {
    name: 'ForgotPassword',
    components: {
        ListButtonAuth,
        SpinnerV2,
    },
    setup() {
    },
    directives: {
    },
    data() {
        return {
            background: '',
            isActive: false,
            dataUser: {
                phoneOrEmail: '',
                verificationCodes: '',
            },
            messageError: {
                phoneOrEmail: '',
                verificationCodes: '',
            },
            successMessage: ""
        };
    },
    created() {
        this.background = backgroundForgotPassword;
    },
    mounted() {
        // Logic sau khi component được gắn kết (render) vào DOM
    },
    computed() {
        // được sử dụng để định nghĩa các thuộc tính tính toán
    },
    updated() {

    },

    methods: {
        getBackGround(url) {
            return new URL(url, import.meta.url).href
        },
        requestAuthenticationCode() {
            if (!this.isActive) {
                // this.isActive = true;
                const phoneRegex = /^[0-9]{10}$/;
                var checkPhone = phoneRegex.test(this.dataUser.phoneOrEmail);
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                var checkMail = emailRegex.test(this.dataUser.phoneOrEmail);
                if (!checkPhone && !checkMail) {
                    this.messageError.phoneOrEmail = 'Số điện thoại hoặc email không đúng định dạng';
                    this.isActive = false;
                    return;
                }
                this.clearMessageError();
                this.clearMessageServer();
                this.isActive = true;
            }
            if (this.isActive) {
                this.isActive = true;
                var data = { email: this.dataUser.phoneOrEmail };
                api.resetPassword(data)
                    .then((response) => {
                        console.log(response);
                        this.clearMessageError();
                        this.clearMessageServer();
                        this.isActive = false;
                        if (response.data.result_code == 200) {
                            this.successMessage = response.data.results;
                        }
                        else {
                            this.successMessage = response.data.results;
                        }
                    })
                    .catch((error) => {
                        this.isActiveSpinner = false;
                        console.log(error);
                    });
            }
        },
        clearMessageError() {
            this.messageError.phoneOrEmail = '';
            this.messageError.verificationCodes = '';
        },
        clearMessageServer() {
            this.successMessage = "";
        },
        resetPassword() {
            api.resetPassword()
                .then((response) => {
                    console.log(response);
                    // if (response.data.result_code == 200) {

                    // }
                    // else {

                    // }
                })
                .catch((error) => {
                    this.isActiveSpinner = false;
                    console.log(error);
                });
        }
    },
};
</script>

<style scoped>
section {
    margin-top: 0;
}

input.off {
    opacity: 0 !important;
}

input.input-code-confirm {
    color: #ffc107 !important;
}

input {
    font-weight: bold;
}

button[type="submit"]:hover {
    scale: 1.03;
    background-color: #dfc3b3b5 !important;
}

.action {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}

.action .home {
    background-color: #FF6D4D;
}

.action .back {
    background-color: #ABD760;
}

.action .link {
    padding: 0.5rem;
    width: 7rem;
    text-align: center;
    margin-top: 9px;
    border: none;
    border-radius: 15px;
    color: white;
    text-decoration: none;
}

.action .link:hover {
    scale: 1.1;
}

.img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    min-height: 100vh;
}

.login-wrap {
    position: relative;
    color: rgba(255, 255, 255, 0.9);
}

.login-wrap h3 {
    font-weight: 300;
    color: #fff;
}

.login-wrap .social {
    width: 100%;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    padding-bottom: 2rem !important;
}

.login-wrap .social a {
    width: 100%;
    display: block;
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: #000;
    background: #fff;
}

.login-wrap .social a:hover {
    background: #000;
    color: #fff;
    border-color: #000;
}

.content-forgot-password {
    position: relative;
    z-index: 1;
}

section:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: #000;
    opacity: .3;
    z-index: 0;
    height: auto;
}

.form-group {
    position: relative;
}

.form-group {
    margin-bottom: 1rem;
}

.form-control {
    background: transparent;
    border: none;
    height: 50px;
    color: white !important;
    border: 1px solid transparent;
    /* background: rgba(255, 255, 255, 0.08); */
    background: #dfc3b3b5;
    border-radius: 40px;
    padding-left: 20px;
    padding-right: 20px;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
}

button,
input {
    overflow: visible;
}

.field-icon {
    position: absolute;
    top: 50%;
    right: 15px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.9);
}

*,
*::before,
*::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.btn.btn-primary {
    background: #fbceb5 !important;
    border: 1px solid #fbceb5 !important;
    color: white !important;
    font-weight: bold;
}

button:not(:disabled),
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled) {
    cursor: pointer;
}

.btn {
    cursor: pointer;
    border-radius: 40px;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    font-size: 15px;
    text-transform: uppercase;
    width: 50%;
}

.checkbox-primary {
    color: #fbceb5;
}

.checkbox-wrap {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.checkbox-wrap input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
}

.checkbox-primary input:checked~.checkmark:after {
    color: #fbceb5 !important;
}

.checkbox-wrap input:checked~.checkmark:after {
    display: block;
    content: "\f14a";
    font-family: "FontAwesome";
    color: rgba(0, 0, 0, 0.2);
}

.checkmark:after {
    content: "\f0c8";
    font-family: "FontAwesome";
    position: absolute;
    color: rgba(255, 255, 255, 0.1);
    font-size: 20px;
    margin-top: -4px;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
}

.text-md-right {
    text-align: right !important;
}

a {
    -webkit-transition: .3s all ease;
    -o-transition: .3s all ease;
    transition: .3s all ease;
    color: #fbceb5;
}

a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
}

@media (prefers-reduced-motion: reduce) {
    .form-control {
        -webkit-transition: none;
        -o-transition: none;
        transition: none;
    }
}

.form-control::-ms-expand {
    background-color: transparent;
    border: 0;
}

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-control::-webkit-input-placeholder {
    color: #6c757d;
    opacity: 1;
}

.form-control:-ms-input-placeholder {
    color: #6c757d;
    opacity: 1;
}

.form-control::-ms-input-placeholder {
    color: #6c757d;
    opacity: 1;
}

.form-control::placeholder {
    color: #6c757d;
    opacity: 1;
}

.form-control:disabled,
.form-control[readonly] {
    background-color: #e9ecef;
    opacity: 1;
}

a:not([href]):not([tabindex]):hover,
a:not([href]):not([tabindex]):focus {
    color: inherit;
    text-decoration: none;
}

a:hover {
    color: #0056b3;
    text-decoration: underline;
}

.btn:hover {
    color: #212529;
    text-decoration: none;
}

.form-control {
    background: transparent;
    border: none;
    height: 50px;
    color: rgba(255, 255, 255, 1) !important;
    border: 1px solid transparent;
    /* background: rgba(255, 255, 255, .08); */
    background: #dfc3b3b5;
    border-radius: 40px;
    padding-left: 20px;
    padding-right: 20px;
}

.form-control:hover {
    /* background: transparent; */
    background-color: #21252987;
    outline: none;
    box-shadow: none;
    border-color: rgba(255, 255, 255, .4);
}

.form-control:focus {
    background: #21252987;
    outline: none;
    box-shadow: none;
    border-color: rgba(255, 255, 255, .4);
}

.form-control::placeholder {
    color: white;
    opacity: 1;
}

button.btn-service {
    background-color: #ff000000;
    border: none;
    transition: transform 250ms;
}

img.img-service {
    max-width: 3rem;
    max-height: 3rem;
}

button.btn-service:hover {
    transform: translateY(-10px);
}

.heading-section {
    color: white;
    margin-top: 14rem;
    margin-bottom: 2rem;
}

input.last-name {
    width: 40%;
}

input.name {
    width: 40%;
    float: right;
    flex: auto;
    margin-left: 1rem;
}


/*  */


/* The switch - the box around the slider */

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-left: 1rem;
}


/* Hide default HTML checkbox */

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}


/* The slider */

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #0dcaf0;
    ;
}

input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}


/* Rounded sliders */

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}


/* Ẩn nút tăng giảm */

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}

.no-spinner {
    /* Firefox */
    -moz-appearance: textfield;
}

.send-code {

    background-color: #8CC0DE;
}

.input-code-confirm {
    width: 100%;
    background-color: #6c757db8 !important;
}

p.text-switch {
    margin-left: 1rem !important;
    margin-top: 3px;
}

.form-control:valid {
    background: #21252987 !important;
    outline: none;
    box-shadow: none;
    border-color: rgba(255, 255, 255, .4);
}

.spinner {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}
</style>