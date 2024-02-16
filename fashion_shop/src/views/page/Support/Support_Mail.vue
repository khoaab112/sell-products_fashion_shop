<template>
    <section>
        <div class="title">Mail tiếp nhận</div>
        <div class="receiving-mail">
            hotro@shop.com
        </div>
        <form action="" id="frm-mail">
            <div class="info">
                <input type="text" name="mail-name" id="mail-name" placeholder="Nhập tên của bạn">
                <input type="text" name="mail" id="mail" placeholder="Nhập mail của bạn">
            </div>
            <div class="content">
                <textarea name="" id="" cols="30" rows="8" placeholder="Nội dung"></textarea>
            </div>
            <button>Gửi</button>
        </form>
    </section>
      </template>
      
      <script>
      export default {
        name: 'SupportMail',
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
      