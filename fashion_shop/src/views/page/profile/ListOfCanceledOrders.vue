<template>
    <div class="tab-pane fade container" id="v-pills-order" role="tabpanel"
    aria-labelledby="v-pills-order-tab">
    <div class="title">Danh sách đơn hàng</div>
    <!-- chi tiết đơn hàng khi người dùng click vão đơn hàng -->
    <div class="title">Chi tiết</div>
    <section id="detail-product">
        <button class="back-list"><font-awesome-icon icon="fa-solid fa-arrow-left" class="icon"/></button>
        <div class="content">
            <div class="row">
                <div class="col-xl-5 col-sm-12 right">
                    <div class="mt-3"><strong>Mã đơn hàng</strong><span>#344355545</span></div>
                    <div><strong>Ngày đặt hàng</strong><span>20/12/2023</span></div>
                    <div><strong>Địa chỉ đặt hàng</strong><span>139 Đ. Phú Diễn, Phú Diễn, Từ Liêm,
                            Hà Nội, Việt Nam</span></div>
                    <div><strong>Thanh toán</strong><span>Tiền mặt</span></div>
                    <div><strong>Đã thanh toán</strong><span>chưa</span></div>
                    <div><strong>Phí phát sinh</strong><span>0 vnđ</span></div>
                    <div><span>Hình thức nhận hàng</span><span>Vận chuyển</span></div>
                    <div><span>Trạng thái</span><span>Đã xác thực</span></div>
                    <div><span>Thời gian dự kiến</span><span>12/2/2023</span></div>
                    <div><span>Đơn vị vận chuyển</span><span>VN-POST</span></div>
                    <div><span>Tình trạng vận chuyển</span><span>thôn 12 , xã a, huyện b</span>
                    </div>
                </div>
                <div class="col-xl-7 col-sm-12">
                    <div><strong>Số sản phẩm : </strong><span style="color: red;">9</span></div>
                    <table>
                        <tr>
                            <th>Ảnh</th>
                            <th>Tên</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                        <tr>
                            <th><img src="https://top10tphcm.com/wp-content/uploads/2023/02/gai-dep-nhat-viet-nam-6.jpg"
                                    alt=""></th>
                            <th>Áo abc</th>
                            <th>5</th>
                            <th>92.266</th>
                            <th>920.266</th>
                        </tr>
                        <tr>
                            <th><img src="https://top10tphcm.com/wp-content/uploads/2023/02/gai-dep-nhat-viet-nam-6.jpg"
                                    alt=""></th>
                            <th>Áo abc</th>
                            <th>5</th>
                            <th>92.266</th>
                            <th>920.266</th>
                        </tr>
                        <tr>
                            <th><img src="https://top10tphcm.com/wp-content/uploads/2023/02/gai-dep-nhat-viet-nam-6.jpg"
                                    alt=""></th>
                            <th>Áo abc</th>
                            <th>5</th>
                            <th>92.266</th>
                            <th>920.266</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Tổng</th>
                            <th>3.920.266</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>(10%)</th>
                            <th>Khuyến mãi</th>
                            <th>-234.000</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Thực tế</th>
                            <th>3.500.000</th>
                        </tr>
                    </table>
                    <div class="note">
                        <div class="title">Nội dung:</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="list-button">
            <button>Gửi khiếu nại</button>
            <button>Yêu cầu hỗ trợ</button>
            <button>Quay lại</button>
        </div>
    </section>
</div>
  </template>
  
  <script>
  export default {
    name: 'ListOfCanceledOrders',
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
  