<template>
<main>
    <section id="slide">
        <!-- chỉnh time chạy của slide data-bs-interval -->
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2500" keyboard=true>
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active item">
                    <img src="https://i.pinimg.com/236x/ec/f4/00/ecf4003d9a0e8095340a791928d1b15f.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item item">
                    <img src="https://i.pinimg.com/236x/95/a4/1d/95a41dcbb1502eaf497bd10214612902.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item item">
                    <img src="https://i.pinimg.com/236x/df/e4/46/dfe446670458db971d6a86e5e0700db1.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev btn-control" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next btn-control" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
    <section id="gif">
        <div class="container">
            <div class="list-gif">
                <!-- <div class="item"><img src="../imgs/img1.jpg" alt=""><a href="#">Khuyến mãi Grab this convenient and free menu with social icons template that can easily work for your page’s header section. There’s also a search bar and a dropdown for you to benefit from.</a></div>
                <div class="item"><img src="../imgs/img1.jpg" alt=""><a href="#">Khuyến mãi</a></div>
                <div class="item"><img src="../imgs/img1.jpg" alt=""><a href="#">Khuyến mãi</a></div>
                <div class="item"><img src="../imgs/img1.jpg" alt=""><a href="#">Khuyến mãi</a></div>
                <div class="item"><img src="../imgs/img1.jpg" alt=""><a href="#">Khuyến mãi</a></div>
                <div class="item"><img src="../imgs/img1.jpg" alt=""><a href="#">Khuyến mãi</a></div>
                <div class="item"><img src="../imgs/img1.jpg" alt=""><a href="#">Khuyến mãi</a></div>
                <div class="item"><img src="../imgs/img1.jpg" alt=""><a href="#">Khuyến mãi</a></div> -->

            </div>
        </div>
    </section>
    <section id="flash-sale">
        <div class="container">
            <div class="title-section flash-sale">
                <div class="time-title">
                    <h4>FLASH SALE</h4><span>1</span>:<span>1</span>:<span>1</span></div>
                <span class="more">Xem thêm &ensp; <i class="fa-solid fa-angles-right" style="color: blue;"></i></span>
            </div>
            <div class="list-product-flash-sale">
                <div class="card-product">
                    <a href="#" class="img-product">
                        <!-- <img src="../imgs/fbi-meme-1470_0011_4.webp" alt="ảnh-sản-phẩm" class="img"> -->
                        <div class="number-product">4 sao | bán : 120 sp</div>
                        <!-- <div class="promotional-products"><img src="../imgs/promotional-products.jpg" alt=""></div> -->
                        <div class="sale">10%</div>
                        <div class="middle">
                            <div class="detail-product">Xem thêm</div>
                        </div>
                    </a>
                    <div class="title-product">Sản phẩm test</div>
                    <!-- <div class="sale-price price">100.565 <span class="face-value">&nbspVNĐ&nbsp</span><span class="sale">(-10%)</span></div> -->
                    <!-- <div class="original-price price"><del>100.565<span class="face-value">&nbspVNĐ</span></del></div> -->
                    <div class="list-color">xanh , đỏ , tím , vàng</div>
                </div>
            </div>
        </div>
    </section>
    <section id="top-selling-item" class="container">
        <div class="title-section">
            <h4>SẢN PHẨM BÁN CHẠY</h4>
            <span class="more">Xem thêm &ensp; <i class="fa-solid fa-angles-right" style="color: blue;"></i></span>
        </div>
    </section>
    <section id="sale-items-list" class="container">
        <div class="title-section">
            <h4>GIẢM GIÁ</h4>
            <span class="more">Xem thêm &ensp; <i class="fa-solid fa-angles-right" style="color: blue;"></i></span>
        </div>
    </section>
    <section id="product-with-positive-feedback" class="container">
        <div class="title-section">
            <h4>Sản phẩm có lượt tương tác tốt</h4>
            <span class="more">Xem thêm &ensp; <i class="fa-solid fa-angles-right" style="color: blue;"></i></span>
        </div>
    </section>
</main>
</template>
  
<script>
export default {
  name: 'PageHome',
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
  