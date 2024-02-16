<template>
    <section>
        <div class="call">
            <div class="title">Bạn có thể liên hệ trức tiếp tới số điện thoại</div>
            <div class="form-number">
                <form action="">
                    <input type="text" name="phone-number" id="" class="phone-number" value="089.4555.777" disabled>
                    <button>Gọi</button>
                </form>
            </div>
        </div>
        <br />
        <strong class="or">Hoặc</strong>
        <br />
        <div class="send-information">
            <div class="title">Để lại thông tin chúng tôi sẽ liên hệ cho bạn</div>
            <form action="" class="frm-input-info">
                <div class="name">
                    <label for="input-name">Họ và tên :<input type="text" name="input-name" id="input-name"
                            placeholder="Nhập họ và tên"></label>
                    <label for="input-date-birth">Ngày sinh :<input type="date" name="input-date-birth"
                            id="input-date-birth" placeholder="Ngày sinh"></label>
                    <label for="input-phone-number">Số điện thoại :<input type="number" name="input-phone-number"
                            id="input-phone-number" placeholder="Số điện thoại"></label>
                    <label for="input-content">Nội dung : <textarea rows="4" cols="35"></textarea> </label>
                </div>
                <button>Gửi</button>
            </form>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'SupportPhone',
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
  
<style>/* CSS cho component */</style>
  