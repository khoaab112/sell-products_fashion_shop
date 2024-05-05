<template>
  <ListButtonAuth></ListButtonAuth>
  <section class="ftco-section img js-fullheight" :style="{ 'background-image': 'url(' + background + ')' }">
    <div class="container content-register">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center mb-3 mt-5">
          <h1 class="heading-section block-copy">Đăng ký</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="login-wrap p-0">
            <h3 class="mb-4 text-center block-copy">Thông tin đăng ký</h3>
            <form action="#" class="signin-form">
              <div class="form-group">
                <div class="form-floating">
                  <input id="phone" type="text" class="form-control" placeholder="" autocomplete="on"
                    name="phoneNumberRegister" v-model="state.dataUser.account">
                  <label for="phone">Số điện thoại / Email<strong class="text-danger">*</strong></label>
                </div>
                <span v-if="v$.dataUser.account.$error" class="error-message-danger">
                  {{ v$.dataUser.account.$errors[0].$message }}
                </span>
                <span v-if="successMessage" class="error-message-success">
                  {{ successMessage }}
                </span>
              </div>
              <div class="spinner" v-if="isActive">
                <SpinnerV2></SpinnerV2>
              </div>
              <div class="form-group text-center">
                <button type="button" class="form-control btn btn-primary submit px-3 mt-2" @click="submitForm">Xác
                  nhận</button>
              </div>
            </form>
            <div class="text-center block-copy">
              <p class="mt-2">Hoặc</p>
              <p class="w-100 text-center fw-bold">&mdash; Đăng ký với cách khác &mdash;</p>
            </div>
            <div class="social text-center">
              <button class="btn-service"><img :src=logoGoogle alt="google" draggable="false"
                  class="img-service"></button>
              <button class="btn-service"><img :src=logoGoogle alt="google" draggable="false"
                  class="img-service"></button>
              <button class="btn-service"><img :src=logoGoogle alt="google" draggable="false"
                  class="img-service"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-popover class="" placement="top-start" title="Chú thích" :width="200" trigger="hover"
      :content="messageExclamation">
      <template #reference>
        <el-button class="m-2 note"><font-awesome-icon icon="fa-solid fa-exclamation" /></el-button>
      </template>
    </el-popover>
  </section>
</template>

<script>
import backgroundRegisterAdmin from '@/assets/images/register/background.jpg';
import logoGoogle from "@/assets/images/logo/google.png";
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import { reactive, computed } from 'vue';
import ListButtonAuth from '@/components/ListButtonAuth.vue'
import api from "@/api/server/auth.js";
import SpinnerV2 from '@/components/Spinner_v2.vue'

export default {
  name: 'RegisterUser',
  components: {
    ListButtonAuth,
    SpinnerV2
  },
  setup() {
    const state = reactive({
      dataUser: {
        account: '',
      },
    });
    const rules = computed(() => {
      return {
        dataUser: {
          account: {
            required: helpers.withMessage('Hãy nhập số điện thoại hoặc email', required),
            customValidation: helpers.withMessage('Không phải là số điện thoại hoặc email hợp lệ', (value) => {
              const phoneRegex = /^[0-9]{10}$/;
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              return phoneRegex.test(value) || emailRegex.test(value);
            }),
          },
        },
      }
    });
    const v$ = useVuelidate(rules, state);
    return {
      state,
      v$
    }
  },
  directives: {
  },
  data() {
    return {
      background: '',
      logoGoogle: '',
      isActive: false,
      messageExclamation: "#Việc đăng nhập bằng email hay số điện thoại đều hợp pháp\n#Bạn có thể thay đổi tên hiển thị\n#Số điện thoại hiện đang không được hỗ trợ",
      successMessage: "",
    };
  },
  created() {
    this.background = backgroundRegisterAdmin;
    this.logoGoogle = logoGoogle;
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
    // sendAuthentication() {
    //   this.v$.$validate()
    //   this.isActive = true;

    // },
    async submitForm() {
      this.isActive = true;
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) {
        this.isActive = false;
        return
      }
      this.clearMessage();
      const data = {
        "email": this.state.dataUser.account
      }
      await api.register(data)
        .then((response) => {
          if (response.data.result_code == 200) {
            this.successMessage = response.data.results;
          }
          else {
            this.successMessage = response.data.results;
          }
        })
        .catch((error) => {
          console.log(error);
        });
      this.isActive = false;
    },
    clearMessage: function () {
      this.successMessage = "";
      // this.v$.dataUser.account.$errors[0].$message="";
    }
    // handleKeyup() {
    //   const text = this.state.dataUser.name.firstName;
    //   const processedString = text
    //     .split(' ')
    //     .map(word => word.replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a')
    //       .replace(/[èéẹẻẽêềếệểễ]/g, 'e')
    //       .replace(/[ìíịỉĩ]/g, 'i')
    //       .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o')
    //       .replace(/[ùúụủũưừứựửữ]/g, 'u')
    //       .replace(/[ỳýỵỷỹ]/g, 'y')
    //       .replace(/đ/g, 'd')
    //       .replace(/\s+/g, '')
    //       .toLowerCase())
    //     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    //     .join('');
    //   this.state.dataUser.nickname = processedString;
    // }
  },
};
</script>

<style scoped>
button.submit:hover {
  scale: var(--transform-scale);
  background: var(--el-fill-color-darker) !important;
  color: black !important;
  border-color: black !important;

}

.note {
  position: fixed;
  bottom: 0;
  right: 0;
}

input:not(:placeholder-shown)+label,
input:focus~label {
  color: white !important;
}

label {
  background-color: none;
  color: #ffffffad !important;
  margin-left: 0.5rem;
}

label::after {
  background: none !important;
}

section {
  margin: 0;
}

.block-password {
  position: relative;
}

.error-message-danger {
  font-weight: 100;
}

.off {
  opacity: 0 !important;
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

*::before,
*::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}

div.content-register {
  z-index: 1;
  position: relative;
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

.form-control:valid {
  background-color: #21252987;
  outline: none;
  box-shadow: none;
  border-color: rgba(255, 255, 255, .4);
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
  background-color: #fff;
  border: none;
  transition: transform 250ms;
  padding: 1px 1px;
  border-radius: 16px;
  margin: 0px 4px;
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
  margin-top: 10rem;
}

input.last-name {
  width: 90%;
}

input.name {
  width: 100%;
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
  width: 40%;
  margin-left: 3rem;
  background-color: #8CC0DE;
}

.send-code:active {
  background: #11da5e;
}

.send-code:valid {
  background: #11da5e !important;
  outline: none;
  box-shadow: none;
  border-color: rgba(255, 255, 255, .4);
}

.input-code-confirm {
  width: 100%;
  background-color: #6c757db8 !important;
}

.block-copy {
  user-select: none;
}

.spinner {
  display: flex;
  justify-content: center;
}

@media(max-width:1500px) {}
</style>