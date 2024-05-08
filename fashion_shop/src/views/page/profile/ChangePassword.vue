<template>
    <div class="tab-pane fade  container" id="v-pills-change-password" role="tabpanel"
    aria-labelledby="v-pills-change-password-tab">
    <div class="title">Đổi mật khẩu</div>
    <div class="row ">
        <div class="col-xl-8 col-sm-12">
            <form action="" class="change-password">
                <div>
                    <label for="password-old">Mật khẩu hiện tại <input type="password"
                            id="password-old"><font-awesome-icon icon="fa-regular fa-eye" class="icon" /></label>
                    <a href="#" class="forgot-password">Quên mật khẩu ?</a>
                </div>
                <div class="mt-2">
                    <label for="password-new">Mật khẩu mới <input type="password"
                            id="password-new"><font-awesome-icon icon="fa-regular fa-eye" class="icon"/></label>
                </div>
                <div>
                    <label for="password-comfirm">Mật khẩu mới <input type="password"
                            id="password-comfirm"><font-awesome-icon
                            icon="fa-regular fa-eye" class="icon"/></label>
                </div>
                <div class="action">
                    <button type="reset" class="reset">Hủy</button>
                    <button class="comfirm">Xác nhận</button>
                </div>
            </form>
        </div>
        <div class="col-xl-4 col-sm-0"></div>
    </div>
</div>
  </template>
  
  <script>
  export default {
    name: 'ChangePassword',
    components: {
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
  