<template>
  <header id="header-tem">
    <div id="header">
      <div class="box-logo">
        <router-link :to="{ name: 'Home' }" id="logo"> <img :src="logo" alt="logo">
        </router-link>
        <form class="frm-search">
          <input type="text" placeholder="Tìm kiếm" class="search-home">
          <button class="btn-search btn" type="button"><font-awesome-icon
              icon="fa-solid fa-magnifying-glass" /></button>
        </form>
      </div>
      <div class="box-actions">
        <div class="contact">
          <p>
            <font-awesome-icon icon="fa-solid fa-location-dot" /><span>Gần bạn</span>
          </p>
          <p>
            <font-awesome-icon icon="fa-solid fa-phone" /><span>095.555.666</span>
          </p>
        </div>
        <div class="list-actions" v-if="!isLogin">
          <router-link :to="{ name: 'UserLogin' }">
            <button class="btn-action btn-login" >
              Đăng nhập</button>
          </router-link>
          <router-link :to="{ name: 'Register' }" >
            <button class="btn-action btn-register">Đăng ký</button>
          </router-link>
          <button class="btn-basket"><font-awesome-icon icon="fa-solid fa-cart-shopping"
              style="color: #343a4099;" /><span class="item-number pulse">90</span></button>
        </div>
        <div class="avatar-user" v-else>
          <router-link :to="{ name: 'ProfileVue' }" >
          <button><img src="https://top10tphcm.com/wp-content/uploads/2023/02/gai-dep-nhat-viet-nam-6.jpg" alt=""
              loading="lazy"></button>
          </router-link>
          <span class="notification-cart">1</span>
          <span class="notification-success">1</span>
        </div>
      </div>
    </div>
    <!-- nav -->
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar  ftco-navbar-light" id="ftco-navbar">
      <div class="container-fluid">

        <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa fa-bars"></span> Menu
              </button> -->
        <button class="navbar-toggler" type="button" @click=clickMenuMb>
          <font-awesome-icon icon="fa-solid fa-bars" /> <span class="title-menu">Menu</span>
        </button>
        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav m-auto">
            <li class="nav-item active"><a href="#" class="nav-link">Home</a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-bs-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Page</a>
              <div class="dropdown-menu " aria-labelledby="dropdown04">
                <a class="dropdown-item" href="#">Page 1</a>
                <a class="dropdown-item" href="#">Page 2</a>
                <a class="dropdown-item" href="#">Page 3</a>
                <a class="dropdown-item" href="#">Page 4</a>
              </div>
            </li>
            <li class="nav-item"><a href="#" class="nav-link">Work</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Blog</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
            <div class="more-mobile">
              <div><a href="#0">Mã giảm giá</a></div>
              <div><a href="#0">Vận chuyển</a></div>
              <div><a href="#0">Chính sách</a><i class="fa-solid fa-caret-down icon"></i></div>
              <div><a href="#0">Liên hệ</a><i class="fa-solid fa-caret-down icon"></i></div>
              <div><a href="#0">Gần bạn</a></div>
              <div><a href="#0">Đăng nhập / Đăng xuất</a></div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    <!-- end nav -->
  </header>
  <router-view />
</template>

<script>
import logoPage from "@/assets/images/logo/logoPage.png"
export default {
  name: 'HeaderLayout',
  components: {
  },
  setup() {
  },
  directives: {
  },
  data() {
    return {
      logo: logoPage,
      isLogin: false,
      user: {},
    };
  },
  created() {
    this.isLogin = this.$store.state.STATUS_LOGIN;
    this.user = this.$store.state.USER_DATA;
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
    clickMenuMb() {
      var ul = document.getElementById('ftco-nav');
      console.log(ul.classList);
      if (ul.classList.contains('show')) {
        ul.classList.remove("show");
      } else {
        ul.classList.add("show");
      }
    },
  },
};
</script>

<style scoped>
a.nav-link {
  font-weight: bold !important;
  font-size: 120% !important;
}

button.btn-action.btn-register {
  color: #ff3100;
}

.navbar-nav .dropdown-menu {
  position: static;
  background: #343a407a;
  border: none;
}

div.avatar-user,
div.avatar-user button {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50px 50px;
  position: relative;
}

div.avatar-user button:hover {
  scale: var(--scale-1);
  transition: var(--transition-ease);
  box-shadow: -1px 1px 10px 6px rgba(0, 0, 0, 0.37);
  -webkit-box-shadow: -1px 1px 10px 6px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: -1px 1px 10px 6px rgba(0, 0, 0, 0.37);
}

div.avatar-user img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px 50px;
}

div.avatar-user span {
  position: absolute;
  z-index: 1;
  height: 1rem;
  width: 1rem;
  border-radius: 50px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80%;
}
div.avatar-user button:hover ~  span{
  scale: var(--scale-1);
  transition: var(--transition-ease);
}
div.avatar-user span.notification-cart {
  color: white;
  top: 7px;
  right: -7px;
  background-color: #ff3100;
}
div.avatar-user span.notification-success {
  color: white;
  top: -5px;
  right: 5px;
  background-color: #28a745;
}
.list-actions a{
  display: flex;
  text-decoration: none;
}
</style>