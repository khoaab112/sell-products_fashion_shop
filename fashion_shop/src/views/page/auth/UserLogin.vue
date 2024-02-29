<template>
  <SpinnerVue v-show="isActiveSpinner"></SpinnerVue>
  <ListButtonAuth :isActiveLogin="true"></ListButtonAuth>
  <audio id="intro-audio" loop>
    <source :src=mp3 type="audio/mpeg">
  </audio>
  <button @click="playAudio()" class="btn-active-intro">
    <font-awesome-icon v-if="!isMuted" icon="fa-solid fa-volume-low" beat-fade style="color: #40a9ff;" />
    <font-awesome-icon v-if="isMuted" icon="fa-solid fa-volume-xmark" fade style="color: #fe0606;" />
  </button>
  <div id="login" class="img js-fullheight" :style="{ 'background-image': 'url(' + background + ')' }">
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5">
            <h1 class="heading-section">Đăng nhập</h1>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4">
            <div class="login-wrap p-0">
              <h3 class="mb-4 text-center">Bạn đã có tài khoản</h3>
              <form action="#" class="signin-form" @submit="checkForm">
                <div class="form-group">
                  <div class="form-floating mb-3">
                    <input id="username" type="text" class="form-control" placeholder="" v-model="state.dataUser.userName"
                      autocomplete="off">
                    <label for="username">SĐT/Mail</label>
                    <span v-if="v$.dataUser.userName.$error" class="error-message-danger">
                      {{ v$.dataUser.userName.$errors[0].$message }}
                    </span>
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-floating mb-3">
                    <input id="password-field" :type=typeInputPassword class="form-control" placeholder=""
                      v-model="state.dataUser.passWord" autocomplete="off">
                    <label for="password-field">Mật khẩu</label>
                    <span class="field-icon" @click="showPassWord()">
                      <font-awesome-icon icon="fa-regular fa-eye" v-if="isShowPassWord" />
                      <font-awesome-icon icon="fa-regular fa-eye-slash" v-if="!isShowPassWord" />
                    </span>
                  </div>
                    <span v-if="v$.dataUser.passWord.$error" class="error-message-danger">
                      {{ v$.dataUser.passWord.$errors[0].$message }}
                    </span>
                </div>
                <div class="form-group text-center">
                  <button type="button" class="form-control btn btn-primary submit px-3" @click="submitForm">Đăng
                    nhập</button>
                </div>
                <div class="form-group d-md-flex set-center">
                  <div class="w-50">
                    <el-checkbox label="Nhớ mật khẩu" class="cb-remember-password" size="large" />
                  </div>
                  <div class="w-50  text-decoration-underline set-end ">
                    <router-link :to="{ name: 'forgotPassword' }" class="forgot-password">Quên mật khẩu</router-link>
                  </div>
                </div>
              </form>
              <div class=" text-decoration-underline set-end set-center">
                <router-link :to="{ name: 'Register' }" class="register">Chưa có tài khoản</router-link>
              </div>
              <div class="text-center block-copy">
                <p class="pt-2">Hoặc</p>
                <p class="w-100 text-center">&mdash; Đăng nhập với cách khác &mdash;</p>
              </div>
              <div class="social text-center">
                <button class="btn-service"><img :src=logoGoogle alt="google" draggable="false"
                    class="img-service"></button>
                <button class="btn-service"><img :src=logoFacebook alt="google" draggable="false"
                    class="img-service"></button>
                <button class="btn-service"><img :src=logoTelegram alt="google" draggable="false"
                    class="img-service"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import backgroundLogin from "@/assets/images/login/bg_login_client.gif";
import logoGoogle from "@/assets/images/logo/google.png";
import logoFacebook from "@/assets/images/logo/facebook.png";
import logoTelegram from "@/assets/images/logo/telegram.png";
import introMp3 from "@/assets/mp3/login/login_client.mp3";
import { useVuelidate } from '@vuelidate/core'
import { required, helpers ,minLength} from '@vuelidate/validators'
import { reactive, computed } from 'vue'
import SpinnerVue from '@/components/Spinner.vue'
import ListButtonAuth from '@/components/ListButtonAuth.vue'

// import { ElNotification } from 'element-plus';
export default {
  name: 'UserLogin',
  components: { SpinnerVue,ListButtonAuth},
  setup() {
    const state = reactive({
      dataUser: {
        userName: '',
        passWord: '',
      },
    });
    const rules = computed(() => {
      return {
        dataUser: {
          userName: {
            required: helpers.withMessage('Tài khoản không được bỏ trống', required),
            // email: helpers.withMessage('Hãy nhập mail', email)
          },
          passWord: {
             required: helpers.withMessage('Hãy mật khẩu', required) ,
             minLength: helpers.withMessage('Mật khẩu phải có ít nhất 8 ký tự', minLength(8))},
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
      logoTelegram: '',
      logoFacebook: '',
      mp3: 'login_client.mp3',
      isShowPassWord: false,
      typeInputPassword: 'password',
      isMuted: true,
      isActiveSpinner: false,
    };
  },
  created() {
    this.background = backgroundLogin
    this.logoGoogle = logoGoogle;
    this.logoTelegram = logoTelegram;
    this.logoFacebook = logoFacebook;
    this.mp3 = introMp3;
  },
  mounted() {
    const fullheightElements = document.querySelectorAll('.js-fullheight');
    const resizeHandler = () => {
      fullheightElements.forEach((element) => {
        element.style.height = window.innerHeight + 'px';
      });
    };

    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    addEventListener('touchstart', this.callPassedFuntion, {
      passive: false
    });
    // this.showPassWord();
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
    showPassWord() {
      this.isShowPassWord = !this.isShowPassWord;
      this.isShowPassWord ? this.typeInputPassword = 'text' : this.typeInputPassword = 'password';
    },
    playAudio() {
      // this.isMuted=!this.isMuted?audio.play():audio.pause();
      this.isMuted = !this.isMuted
      const audio = document.getElementById('intro-audio');
      this.isMuted ? audio.pause() : audio.play();
    },
    checkForm(e) {
      this.v$.$validate();
      if (this.v$.$error) return e.preventDefault();
      console.log(this.v$);
    },
   async submitForm() {
      const isFormCorrect =await this.v$.$validate();
      if (!isFormCorrect) return ;      
      this.isActiveSpinner = true;
    },

    // backLogin()
    // {

    // },
  },
};
</script>
  
<style scoped>
section {
  margin-top: 0;
}

label[for="username"],
label[for="password-field"] {
  background-color: none;
  color: #ffffffad !important;
  margin-left: 0.5rem;
}

label[for="username"]::after,
label[for="password-field"]::after {
  background: none !important;
}

.forgot-password,
.register {
  color: white;
}

.forgot-password:hover,
.register:hover {
  color: rgb(255, 30, 30);
}

.img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: unset;
}

.ftco-section {
  padding-top: 4rem;
  position: relative;
  z-index: 1;
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

.img:after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  background: #000;
  opacity: .3;
  z-index: 0;
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
  background: rgba(255, 255, 255, 0.08);
  border-radius: 40px;
  padding-left: 20px;
  padding-right: 20px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.form-control:active {
  background: rgb(0 0 0 / 49%);
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

.btn.btn-primary {
  background: #fbceb5 !important;
  border: 1px solid #fbceb5 !important;
  color: #000 !important;
}

.btn.btn-primary:hover {
  scale: 1.1;
  border: 2px solid white !important;
  color: white !important;
  font-weight: bolder;
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

.btn-active-intro {
  position: absolute;
  z-index: 999;
  bottom: 0;
  right: 0;
  background: none;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border: none;
  font-size: 30px;
}

.heading-section {
  color: white;
}

.cb-remember-password {
  color: #fbceb5;
  font-size: 2rem;
}

.el-checkbox__input.is-checked+.el-checkbox__label {
  color: #44a985 !important;
}

.el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #1ccb8d;
  border-color: #1ccb8d;
}

.el-checkbox.el-checkbox--large .el-checkbox__label {
  font-size: 16px !important;
}

.set-end {
  text-align: right;
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
  background: rgba(255, 255, 255, .08);
  border-radius: 40px;
  padding-left: 20px;
  padding-right: 20px;
}

.form-control:hover {
  background: transparent;
  outline: none;
  box-shadow: none;
  background: rgb(0 0 0 / 49%);
}

.form-control:focus {
  background: transparent;
  outline: none;
  box-shadow: none;
  background: rgb(0 0 0 / 49%);
  font-size: 120%;
}

.form-control::placeholder {
  color: white;
  opacity: 1;
}

button.btn-service {
  background-color: #ff000000;
  border: none;
  transition: transform 250ms;
  padding: 0px 4px;
}

img.img-service {
  max-width: 3rem;
  max-height: 3rem;
}

button.btn-service:hover {
  transform: translateY(-10px);
}

.set-center,
.block-copy {
  user-select: none;
}

@media (max-width:800px) {
  div.set-end {
    text-align: unset;
  }

  .set-center {
    text-align: center !important;
  }

  .w-50 {
    width: 100% !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .form-control {
    -webkit-transition: none;
    -o-transition: none;
    transition: none;
  }
}



</style>
  