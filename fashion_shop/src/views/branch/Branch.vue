<template>
  <main>
    <section id="banner-branch" :style="{ backgroundImage: 'url(' + backgroundBranch + ')' }">
    </section>
    <section id="box-info" class="container">
      <div class="total">Có tổng 25 cửa hàng <font-awesome-icon :icon="['fas', 'shop']" /></div>
      <div class="province">Xuất hiện ở 5 tình thành<font-awesome-icon icon="fa-solid fa-location-dot" /></div>
      <div class="office">5 văn phòng <font-awesome-icon icon="fa-regular fa-building" /></div>
      <div class="personnel">Tổng 244 nhân sự<font-awesome-icon icon="fa-solid fa-users" /></div>
    </section>
    <section class="prepare container">
      <h3 class="title">Chi nhánh sắp đưa vào hoạt động</h3>
      <div class="content">
        <div class="pe-2"><font-awesome-icon icon="fa-solid fa-location-dot" /></div>
        <div>
          <span class="numerical-order">Mở bán cửa hàng thứ 237-Tên cửa hàng-(ngày 23-12-2024)</span>
          <br>
          <span class="address"><strong>Địa chỉ :</strong> 666 Đồng Tâm, Thị trấn Đoan Hùng, Huyện Đoan Hùng, Phú
            Thọ</span>
        </div>
      </div>
      <div class="content">
        <div class="pe-2"><font-awesome-icon icon="fa-solid fa-location-dot" /></div>
        <div>
          <span class="numerical-order">Mở bán cửa hàng thứ 237-Tên cửa hàng-(<strong class="note">dự
              kiến</strong>)</span>
          <br>
          <span class="address"> 666 Đồng Tâm, Thị trấn Đoan Hùng, Huyện Đoan Hùng, Phú Thọ</span>
        </div>
      </div>
    </section>

    <section id="map" class="container">
      <div class="btns">
      <div class="btn-next-map">
        <button><font-awesome-icon icon="fa-solid fa-map-location-dot" class="pe-2" />Chuyển qua map</button>
      </div>
      <div class="btn-get-location">
        <button><font-awesome-icon icon="fa-solid fa-location-dot" class="pe-2" />Tự lấy vị trí</button>
      </div>
    </div>
      <div class="row">
        <div class="col-xl-7 col-sm-12">
          <div class="map-google">
            <GoogleMap :api-key=API_KEY style="width: 100%; height: 500px" :center="center" :zoom="15">
              <Marker :options="{ position: center }" />
            </GoogleMap>
          </div>
        </div>
        <div class="col-xl-5 col-sm-12">
          <div class="table-map">
            <div class="input-map">
              <div class="buy-city-province"><span>Tỉnh thành</span>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="buy-shop-name">
                <span>Tên</span>
                <input type="text" placeholder="Nhập tên cửa hàng">
              </div>
            </div>
            <div class="list-shop">
              <div class="item-shop row">
                <div class="col-10">
                  <div class="title">
                    <strong>Cửa hàng ABC</strong>
                  </div>
                  <div class="address"><span class="icon"><font-awesome-icon
                        icon="fa-solid fa-location-dot" /></span>&nbsp;<span>666 Đồng Tâm, Thị trấn Đoan Hùng, Huyện Đoan
                      Hùng, Phú Thọ</span></div>
                  <div class="hotline"><span class="icon"><font-awesome-icon
                        icon="fa-solid fa-mobile-screen-button" /></span>&nbsp;<span>099.563.9684</span></div>
                </div>
                <div class="col-2 btn-go">
                  <button><font-awesome-icon icon="fa-regular fa-paper-plane" />&nbsp;Đến</button>
                </div>
              </div>
              <hr>
              <div class="item-shop row">
                <div class="col-10">
                  <div class="title">
                    <strong>Cửa hàng ABC</strong>
                  </div>
                  <div class="address"><span class="icon"><font-awesome-icon
                        icon="fa-solid fa-location-dot" /></span>&nbsp;<span>666 Đồng Tâm, Thị trấn Đoan Hùng, Huyện Đoan
                      Hùng, Phú Thọ</span></div>
                  <div class="hotline"><span class="icon"><font-awesome-icon
                        icon="fa-solid fa-mobile-screen-button" /></span>&nbsp;<span>099.563.9684</span></div>
                </div>
                <div class="col-2 btn-go">
                  <button><font-awesome-icon icon="fa-regular fa-paper-plane" />&nbsp;Đến</button>
                </div>
              </div>
              <hr>
              <div class="item-shop row">
                <div class="col-10">
                  <div class="title">
                    <strong>Cửa hàng ABC</strong>
                  </div>
                  <div class="address"><span class="icon"><font-awesome-icon
                        icon="fa-solid fa-location-dot" /></span>&nbsp;<span>666 Đồng Tâm, Thị trấn Đoan Hùng, Huyện Đoan
                      Hùng, Phú Thọ</span></div>
                  <div class="hotline"><span class="icon"><font-awesome-icon
                        icon="fa-solid fa-mobile-screen-button" /></span>&nbsp;<span>099.563.9684</span></div>
                </div>
                <div class="col-2 btn-go">
                  <button><font-awesome-icon icon="fa-regular fa-paper-plane" />&nbsp;Đến</button>
                </div>
              </div>
              <hr>
              <div class="item-shop row">
                <div class="col-10">
                  <div class="title">
                    <strong>Cửa hàng ABC</strong>
                  </div>
                  <div class="address"><span class="icon"><font-awesome-icon
                        icon="fa-solid fa-location-dot" /></span>&nbsp;<span>666 Đồng Tâm, Thị trấn Đoan Hùng, Huyện Đoan
                      Hùng, Phú Thọ</span></div>
                  <div class="hotline"><span class="icon"><font-awesome-icon
                        icon="fa-solid fa-mobile-screen-button" /></span>&nbsp;<span>099.563.9684</span></div>
                </div>
                <div class="col-2 btn-go">
                  <button><font-awesome-icon icon="fa-regular fa-paper-plane" />&nbsp;Đến</button>
                </div>
              </div>
              <hr>
              <div class="item-shop row">
                <div class="col-10">
                  <div class="title">
                    <strong>Cửa hàng ABC</strong>
                  </div>
                  <div class="address"><span class="icon"><font-awesome-icon
                        icon="fa-solid fa-location-dot" /></span>&nbsp;<span>666 Đồng Tâm, Thị trấn Đoan Hùng, Huyện Đoan
                      Hùng, Phú Thọ</span></div>
                  <div class="hotline"><span class="icon"><font-awesome-icon
                        icon="fa-solid fa-mobile-screen-button" /></span>&nbsp;<span>099.563.9684</span></div>
                </div>
                <div class="col-2 btn-go">
                  <button><font-awesome-icon icon="fa-regular fa-paper-plane" />&nbsp;Đến</button>
                </div>
              </div>
              <hr>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
  
<script>
import { GoogleMap, Marker } from "vue3-google-map";
import helpers from "@/helpers/helpers.js"
export default {
  name: 'BranchVue',
  components: {
    GoogleMap, Marker
  },
  setup() {
  },
  directives: {
  },
  data() {
    return {
      backgroundBranch: 'https://i.pinimg.com/564x/87/51/4d/87514de1412fb49694120aa0eb1a28bc.jpg',
      center: { lat: 21.0330471, lng: 105.763112 },
      API_KEY: process.env.VUE_APP_API_KEY_GOOGLE_MAP,
    };
  },
  created() {
    this.setLocationDefault();
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
    setLocationDefault() {
      helpers.methods.getLocation().then(
        location => {
          this.center.lat = location.la;
          this.center.lng = location.lo;
        },
        error => {
          console.error("Error:", error);
        }
      );

    }
  },
};
</script>
  
<style scoped>
#banner-branch {
  width: 100%;
  height: 25rem;
  object-fit: cover;
  display: block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

section#box-info {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  flex-wrap: wrap;
}

section#box-info div {
  padding: 2rem;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  font-size: 120%;
  margin-bottom: 1rem;
}

section#box-info div:hover {
  -webkit-animation: jello-horizontal 0.9s both;
  animation: jello-horizontal 0.9s both;
}

@-webkit-keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

section#box-info div .icon {
  font-size: 25px;
}

section#box-info div.total {
  background-color: blue;
}

section#box-info div.province {
  background-color: #089e29;
}

section#box-info div.office {
  background-color: #dc3545;
}

section#box-info div.personnel {
  background-color: #adb5bd;
}

#map div.btns{
  display: flex;
    align-items: center;
    justify-content: space-between;
}
/* prepare */

.prepare {
  margin-top: 2rem;
  background-color: #F5F5F5;
  padding-bottom: 2rem;
}

.prepare h3 {
  font-weight: bold;
  padding-top: 1rem;
}

.prepare .content {
  display: flex;
  align-items: center;
}

.prepare .content .icon {
  font-size: 20px;
  margin-right: 1rem;
}

.prepare .content .numerical-order {
  font-weight: bold;
  font-size: 110%;
}

.prepare .content .note {
  color: red;
}

@media(max-width: 520px) {
  section#box-info {
    flex-direction: column;
  }

  .prepare {
    padding: 0 1rem;
  }
}


/* map */

#map {
  margin-top: 5rem;
  padding-bottom: 2rem;
}

#map .map-google {
  width: 100%;
  height: 30rem;
  background-color: red;
}

#map .table-map {
  background-color: #F5F5F5;
  height: 30rem;
  width: 100%;
}

.btn-get-location {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  align-items: center;
}
.btn-next-map button{
  background-color: #c3f1d5;
  display: block !important;
  border: none;
  padding: 0.1rem 1.2rem;
  border-radius: 5px;
}
.btn-next-map button:hover{
  background-color: #11f367;
  color: black;
}
.btn-next-map button:focus{
  -webkit-animation: swirl-out-bck 0.6s ease-in both;
  animation: swirl-out-bck 0.6s ease-in both;
}

 @-webkit-keyframes swirl-out-bck {
  0% {
    -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-540deg) scale(0);
            transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
}
@keyframes swirl-out-bck {
  0% {
    -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-540deg) scale(0);
            transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
}

.btn-get-location button,
.btn-next-map button{
  display: contents;
  font-weight: bold;
  font-size: 120%;
}

.btn-get-location button>.icon {
  padding-right: 1rem;
}

.btn-get-location button:hover,
.btn-get-location button:active {
  color: #089e29;
}

#map .table-map select {
  height: 2rem;
}

.table-map .input-map {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;
}

.table-map .input-map span {
  font-weight: bold;
}

.buy-shop-name {
  display: grid;
}

.buy-shop-name input {
  height: 2rem;
  border-radius: 5px;
  padding: 0 1rem;
  outline: none;
  border: 1px solid #ced4da;
}

.table-map .list-shop {
  background-color: #C4C4C4;
  height: 82%;
  width: 100%;
  border-top: 1px solid black;
}

.list-shop {
  border: 1px solid #c4c4c4;
  width: 200px;
  height: 200px;
  overflow-x: hidden;
  overflow-y: auto;
}

.list-shop .item-shop {
  padding: 10px;
}

.list-shop .item-shop .title {
  font-size: 120%;
}

.list-shop .item-shop .icon {
  background-color: #fff;
  border-radius: 50px;
}

.list-shop .item-shop .address>.icon {
  padding: 3px 8px;
}

.list-shop .item-shop .hotline>.icon {
  padding: 3px 8px;
}

.list-shop .address,
.list-shop .hotline {
  display: flex;
  align-items: center;
}

.list-shop .btn-go {
  display: flex;
  align-items: center;
}

.list-shop .btn-go button {
  border: none;
  border-radius: 10px;
  padding: 4px 2px;
}

.list-shop .btn-go button:hover {
  background: blue;
  color: white;
}

.list-shop .btn-go button:active {
  border: 1px solid white;
}

.list-shop hr {
  margin: 0px 14px;
}

.list-shop .item-shop:hover {
  background: #86b7fe;
}
@media (max-width:1200px)
{
  .table-map .input-map {
    margin-top: 2rem;
}
}
@media (max-width:700px)
{
  .table-map .input-map {
    margin-top: 7rem;
}
}
</style>
  