<template>
    <div class="tab-pane fade container show active" id="v-pills-info-user" role="tabpanel"
    aria-labelledby="v-pills-info-user-tab">
    <div class="title">Thông tin</div>
    <div class="row mb-3">
        <div class="col-xl-6 col-xs-12">
            <strong>
                Thông tin cá nhấn
            </strong>
            <div class="full-name"><span>Họ tên</span><strong>Nguyễn Minh Nhi</strong></div>
            <div class="year-old"><span>Tuổi</span><strong>24</strong></div>
            <div class="address"><span>Địa chỉ</span><strong>Hà Nội</strong></div>
            <div class="phone-number"><span>Số điện thoại</span><strong>059.258.2228</strong></div>
            <div class="email"><span>Email</span><strong>mail@mail.com</strong></div>
        </div>
        <div class="col-xl-6 col-xs-12">
            <strong>Địa chỉ nhận hàng</strong>
            <div class="list-address">
                <div><strong>Địa chỉ 1 :<span>Hà Nội</span></strong><font-awesome-icon
                        icon="fa-solid fa-arrow-down" class="icon"/></div>
                <div><strong>Địa chỉ 2 :<span>139 Đ. Phú Diễn, Phú Diễn, Từ Liêm, Hà Nội, Việt
                            Nam</span></strong><font-awesome-icon icon="fa-solid fa-arrow-up" class="icon" />
                </div>
            </div>
            <button class="add-address"><font-awesome-icon icon="fa-solid fa-plus" class="icon"/></button>
        </div>
    </div>
    <button class="edit-data">Chỉnh sửa/thay đổi</button>
    <div class="rank-information">
        <strong>Ưu đãi hãng</strong><img
            src="https://top10tphcm.com/wp-content/uploads/2023/02/gai-dep-nhat-viet-nam-6.jpg"
            alt="">
    </div>
    <div class="container">
        <div class="current-level">
            <strong> Cấp độ hiện tại : Vàng</strong>
        </div>
        <div class="percentage mt-3 mb-3 detail">
            <div class="percentage100">
                <div class="percentage0"><strong>60%</strong></div>
            </div>
        </div>
        <span class="note-percentage">Bạn cần 190 điểm nữa để nên hạng</span>
        <div class="current-level mt-3"><strong>Hạng tiếp theo :kim cương</strong></div>
        <div class="content-rank">
            <div class="title">Thông tin hạng hiện tại</div>
            <div class="content ms-2">
                Using color to add meaning only provides a visual indication, which will not be
                conveyed to users of assistive technologies – such as screen readers. Ensure that
                information denoted by the color is either obvious from the content itself (e.g. the
                visible
                text), or is included through alternative means, such as additional text hidden with
                the .visually-hidden class.
            </div>
        </div>
        <div class="content-rank">
            <div class="title">Thông tin hạng tiếp theo</div>
            <div class="content ms-2">
                Using color to add meaning only provides a visual indication, which will not be
                conveyed to users of assistive technologies – such as screen readers. Ensure that
                information denoted by the color is either obvious from the content itself (e.g. the
                visible
                text), or is included through alternative means, such as additional text hidden with
                the .visually-hidden class.
            </div>
        </div>
    </div>
</div>
  </template>
  
  <script>
  export default {
    name: 'UserInfo',
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
  