<template>
  <main>
    <div class="container">
      <section id="action">
        <div>
          <div class="quantity">Tồng : 1590 sản phẩm</div>
        </div>
        <div class="action">
          <div class="action-search"><input type="search" name="search" id="search" placeholder="Tìm kiếm">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon-search"/></div>
          <div class="filter dropstart">
              <font-awesome-icon icon="fa-solid fa-filter" id="dropdown-filter" data-bs-toggle="dropdown"
              aria-expanded="false" />
            <ul class="dropdown-menu" aria-labelledby="dropdown-filter">
              <li><a class="dropdown-item default" href="#">Mặc định</a></li>
              <li><a class="dropdown-item" href="#">A<font-awesome-icon icon="fa-solid fa-arrow-right" />Z</a></li>
              <li><a class="dropdown-item " href="#">Z<font-awesome-icon icon="fa-solid fa-arrow-right" />A</a></li>
              <li><a class="dropdown-item" href="#">Thấp<font-awesome-icon icon="fa-solid fa-arrow-right" />Cao</a></li>
              <li><a class="dropdown-item" href="#">Cao<font-awesome-icon icon="fa-solid fa-arrow-right" />Thấp</a></li>
              <li><a class="dropdown-item" href="#">Mới<font-awesome-icon icon="fa-solid fa-arrow-right" />Cũ</a></li>
              <li><a class="dropdown-item" href="#">Cũ<font-awesome-icon icon="fa-solid fa-arrow-right" />Mới</a></li>
              <li><a class="dropdown-item" href="#">Khuyến mãi</a></li>
              <li><a class="dropdown-item" href="#">Tương tác cao</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section class="card-list-product">
        <div class="list-product">
          <div v-for="(item,key) in listProduct" :key="key" class="item">
            <ProductItem :data="item" :arrows="false"></ProductItem>
          </div>
        </div>
      </section>
      <section class="new">
        <div class="title-section">
          <h4>Tin tức</h4>
        </div>
        <div class="list-new">
          <div class="card-new row" v-for="item in newsList" :key="item.id">
            <div class="col-xl-1 "></div>
            <div class="col-xl-3 col-sm-12">
              <a href=""><img :src="item.featuredImage" :alt="'ảnh nổi bật tin tức' + item.key"></a>
            </div>
            <div class="col-xl-8 col-sm-12 pe-5">
              <h5 class="title-new"><a href="#">{{ item.title }}</a></h5>
              <div class="content">{{ item.content }}</div>
            </div>
          </div>
          <div class="space"><button>Xem thêm</button><font-awesome-icon icon="fa-solid fa-angles-down "  class="bounce" style="color: blue;"/>
          </div>
        </div>
      </section>
    </div>

  </main>
</template>
  
<script>
import ProductItem from '@/components/ProductItem.vue';
export default {
  name: 'ListProduct',
  components: {
    ProductItem,
},
  setup() {
  },
  directives: {
  },
  data() {
    return {
      newsList: [
        { id: '1', title: '3 lần ông Tập Cận Bình từng thăm Việt Nam', featuredImage: 'https://static-images.vnncdn.net/files/publish/2023/12/7/20111221132558-x2-1549.jpg?width=1280&s=wSbOdQWh1KQsk1vWiwWGSw', listImg: '', content: 'Cùng với chuyến thăm vào tuần tới, Tổng Bí thư, Chủ tịch Trung Quốc Tập Cận Bình sẽ có tổng cộng 4 lần thăm Việt Nam trên các cương vị khác nhau.' },
        { id: '2', title: 'Hà Nội tăng hệ số điều chỉnh giá đất tại 5 khu vực', featuredImage: 'https://static-images.vnncdn.net/files/publish/2023/12/7/he-so-su-dung-dat-vietnamnet-1262.png?width=768&s=ml9m-3kdi0WrD48RKOXN5Q', listImg: '', content: "Tại kỳ họp thứ 14, HĐND TP. Hà Nội khóa XVI, các đại biểu đã biểu quyết thông qua hệ số điều chỉnh giá đất năm 2024 đối với các trường hợp áp dụng hệ số theo quy định của pháp luật." },
        { id: '3', title: '3 lần ông Tập Cận Bình từng thăm Việt Nam', featuredImage: 'https://static-images.vnncdn.net/files/publish/2023/12/7/20111221132558-x2-1549.jpg?width=1280&s=wSbOdQWh1KQsk1vWiwWGSw', listImg: '', content: 'Cùng với chuyến thăm vào tuần tới, Tổng Bí thư, Chủ tịch Trung Quốc Tập Cận Bình sẽ có tổng cộng 4 lần thăm Việt Nam trên các cương vị khác nhau.' },
        { id: '4', title: 'Hà Nội tăng hệ số điều chỉnh giá đất tại 5 khu vực', featuredImage: 'https://static-images.vnncdn.net/files/publish/2023/12/7/he-so-su-dung-dat-vietnamnet-1262.png?width=768&s=ml9m-3kdi0WrD48RKOXN5Q', listImg: '', content: "Tại kỳ họp thứ 14, HĐND TP. Hà Nội khóa XVI, các đại biểu đã biểu quyết thông qua hệ số điều chỉnh giá đất năm 2024 đối với các trường hợp áp dụng hệ số theo quy định của pháp luật." },
        { id: '5', title: '3 lần ông Tập Cận Bình từng thăm Việt Nam', featuredImage: 'https://static-images.vnncdn.net/files/publish/2023/12/7/20111221132558-x2-1549.jpg?width=1280&s=wSbOdQWh1KQsk1vWiwWGSw', listImg: '', content: 'Cùng với chuyến thăm vào tuần tới, Tổng Bí thư, Chủ tịch Trung Quốc Tập Cận Bình sẽ có tổng cộng 4 lần thăm Việt Nam trên các cương vị khác nhau.' },
        { id: '6', title: 'Hà Nội tăng hệ số điều chỉnh giá đất tại 5 khu vực', featuredImage: 'https://static-images.vnncdn.net/files/publish/2023/12/7/he-so-su-dung-dat-vietnamnet-1262.png?width=768&s=ml9m-3kdi0WrD48RKOXN5Q', listImg: '', content: "Tại kỳ họp thứ 14, HĐND TP. Hà Nội khóa XVI, các đại biểu đã biểu quyết thông qua hệ số điều chỉnh giá đất năm 2024 đối với các trường hợp áp dụng hệ số theo quy định của pháp luật." },
      ],
      listProduct: [
                {
                    name: 'product_1',
                    imgs: [
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/11/7b/ae/117bae9845cd9758c8323639a28b663e.jpg' },
                        { name: 'Dổ', img: 'https://i.pinimg.com/564x/67/af/b3/67afb335f3e0cf5ba519ac29b19ee383.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/12/52/f7/1252f7650a473bbbef328d1b0a4d72ce.jpg' },
                        { name: 'vang', img: 'https://i.pinimg.com/564x/bb/3b/30/bb3b3033c79b78c5582acb274bacee72.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/736x/b3/77/a5/b377a5c3bd632c04f40caf17661fd655.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/b7/c3/92/b7c392a35e18cb1133a50006dda4356d.jpg' },
                    ],
                    vote: '3.2',
                    quantitySold: '333',
                    sale: '10',
                    price: '203222',
                    imgGift: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-17.jpg'
                },
                {
                    name: 'product_2',
                    imgs: [
                        { name: 'xanh', img: 'https://www.pinterest.com/pin/582582901826138192/' },
                        { name: 'Dổ', img: 'https://i.pinimg.com/564x/67/af/b3/67afb335f3e0cf5ba519ac29b19ee383.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/12/52/f7/1252f7650a473bbbef328d1b0a4d72ce.jpg' },
                        { name: 'vang', img: 'https://i.pinimg.com/564x/bb/3b/30/bb3b3033c79b78c5582acb274bacee72.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/736x/b3/77/a5/b377a5c3bd632c04f40caf17661fd655.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/b7/c3/92/b7c392a35e18cb1133a50006dda4356d.jpg' },
                    ],
                    vote: '3.2',
                    quantitySold: '333',
                    sale: '10',
                    price: '203222',
                    imgGift: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-17.jpg'
                },
                {
                    name: 'product_3',
                    imgs: [
                        { name: 'xanh', img: 'https://www.pinterest.com/pin/582582901816088821/' },
                        { name: 'Dổ', img: 'https://i.pinimg.com/564x/67/af/b3/67afb335f3e0cf5ba519ac29b19ee383.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/12/52/f7/1252f7650a473bbbef328d1b0a4d72ce.jpg' },
                        { name: 'vang', img: 'https://i.pinimg.com/564x/bb/3b/30/bb3b3033c79b78c5582acb274bacee72.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/736x/b3/77/a5/b377a5c3bd632c04f40caf17661fd655.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/b7/c3/92/b7c392a35e18cb1133a50006dda4356d.jpg' },
                    ],
                    vote: '3.2',
                    quantitySold: '333',
                    sale: '10',
                    price: '203222',
                    imgGift: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-17.jpg'
                },
                {
                    name: 'product_4',
                    imgs: [
                        { name: 'xanh', img: 'https://i.pinimg.com/236x/88/25/dd/8825dd195accfe22207d6b235d7d5829.jpg' },
                        { name: 'Dổ', img: 'https://i.pinimg.com/564x/67/af/b3/67afb335f3e0cf5ba519ac29b19ee383.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/12/52/f7/1252f7650a473bbbef328d1b0a4d72ce.jpg' },
                        { name: 'vang', img: 'https://i.pinimg.com/564x/bb/3b/30/bb3b3033c79b78c5582acb274bacee72.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/736x/b3/77/a5/b377a5c3bd632c04f40caf17661fd655.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/b7/c3/92/b7c392a35e18cb1133a50006dda4356d.jpg' },
                    ],
                    vote: '3.2',
                    quantitySold: '333',
                    sale: '10',
                    price: '203222',
                    imgGift: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-17.jpg'
                },
                {
                    name: 'product_5',
                    imgs: [
                        { name: 'xanh', img: 'https://i.pinimg.com/236x/5b/f4/29/5bf429c2ebaf6107bba20b94bfb0bbab.jpg' },
                        { name: 'Dổ', img: 'https://i.pinimg.com/564x/67/af/b3/67afb335f3e0cf5ba519ac29b19ee383.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/12/52/f7/1252f7650a473bbbef328d1b0a4d72ce.jpg' },
                        { name: 'vang', img: 'https://i.pinimg.com/564x/bb/3b/30/bb3b3033c79b78c5582acb274bacee72.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/736x/b3/77/a5/b377a5c3bd632c04f40caf17661fd655.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/b7/c3/92/b7c392a35e18cb1133a50006dda4356d.jpg' },
                    ],
                    vote: '3.2',
                    quantitySold: '333',
                    sale: '10',
                    price: '203222',
                    imgGift: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-17.jpg'
                },
                {
                    name: 'product_6',
                    imgs: [
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/24/c9/e1/24c9e1b0856037f442528fe3b3373dca.jpg' },
                        { name: 'Dổ', img: 'https://i.pinimg.com/564x/67/af/b3/67afb335f3e0cf5ba519ac29b19ee383.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/12/52/f7/1252f7650a473bbbef328d1b0a4d72ce.jpg' },
                        { name: 'vang', img: 'https://i.pinimg.com/564x/bb/3b/30/bb3b3033c79b78c5582acb274bacee72.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/736x/b3/77/a5/b377a5c3bd632c04f40caf17661fd655.jpg' },
                        { name: 'xanh', img: 'https://i.pinimg.com/564x/b7/c3/92/b7c392a35e18cb1133a50006dda4356d.jpg' },
                    ],
                    vote: '3.2',
                    quantitySold: '333',
                    sale: '10',
                    price: '203222',
                    imgGift: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-17.jpg'
                },

            ]
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
  
<style scoped>
.list-product .item{
  margin: 2rem 0 4rem 0;
}
.list-product {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
#action {
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
}

#action .quantity {
  font-weight: bold;
}

.action {
  display: flex;
}

.action .action-search {
  position: relative;
}

.action #search {
  background-color: #D9D9D9;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  outline: none;
  width: 16rem;
  padding: 0 1rem;
  height: 2rem;
}

.action .icon-search {
  position: absolute;
  right: 7px;
  top: 8px;
  color: #757575;
}

.action .icon-search:hover {
  color: white;
}

input #search:hover,
input #search:active,
input #search:focus {
  outline-width: 0;
  outline: none;
}

.action .filter {
  padding-left: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
}

.action .filter:hover {
  color: #9CCEA4;
}

.card-list-product {
  width: 100%;
  min-height: 5rem;
  background-color: #F5F5F5;
  margin-top: 1rem;
}

.filter .active {
  background-color: #0d83fd !important;
  border-radius: 10px;
}

.dropdown-item.active,
.dropdown-item:active {
  background-color: #0d83fd !important;
  border-radius: 10px;
}
.dropdown-item.default{
  background-color: #adb5bd !important;
}

/* new */

.new {
  background-color: #F5F5F5;
  min-height: 5rem;
  margin-top: 2rem;
}

.new .title-section {
  padding: 1rem 2rem;
  font-weight: bold;
}

.card-new {
  margin-bottom: 2rem;
}

.card-new img {
  height: 15rem;
  width: 100%;
  object-fit: cover;
  display: block;
}

.card-new .content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 6;
}

.card-new .title-new {
  font-weight: bold;
}

.new .space {
  padding: 2rem;
  font-weight: bold;
  text-align: center;
  font-size: 120%;
  display: grid;
  justify-items: stretch;
  justify-content: center;
}

.new .space button {
  border: none;
  background-color: none;
  color: black;
  font-weight: bold;
}

.bounce {
  animation: bounce 2s ease infinite;
  padding-top: 1rem;
  font-size: 120%;
}

@keyframes bounce {
  70% {
    transform: translateY(0%);
  }

  80% {
    transform: translateY(-15%);
  }

  90% {
    transform: translateY(0%);
  }

  95% {
    transform: translateY(-7%);
  }

  97% {
    transform: translateY(0%);
  }

  99% {
    transform: translateY(-3%);
  }

  100% {
    transform: translateY(0);
  }
}

@media(max-width: 1200px) {

  .card-new img,
  .card-new h5,
  .card-new .content {
    padding: 1rem;
  }
}</style>
  