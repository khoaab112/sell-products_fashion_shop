<template>
    <header>
        <div id="header">
            <div class="box-logo">
                <!-- <a href="#" id="logo"> <img src="../imgs/logoAdmin.png" alt="logo">
                </a> -->
                <form class="frm-search">
                    <input type="text" placeholder="Tìm kiếm" class="search-home">
                    <button class="btn-search btn" type="button"><i class="fa-solid fa-magnifying-glass icon-search"></i></button>
                </form>
            </div>
            <div class="box-actions">
                <div class="contact">
                    <p>
                        <i class="fa-solid fa-location-dot icon"></i><span>Gần bạn</span>
                    </p>
                    <p>
                        <i class="fa-solid fa-phone icon"></i><span>095.555.666</span>
                    </p>
                </div>
                <div class="list-actions">
                    <button class="btn-action btn-login">Đăng nhập</button>
                    <button class="btn-action btn-register">Đăng ký</button>
                    <button class="btn-basket"><i class="fa-solid fa-cart-shopping icon"></i><span class="item-number pulse" >90</span></button>
                </div>
            </div>
        </div>
        <!-- nav -->
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar  ftco-navbar-light" id="ftco-navbar">
            <div class="container-fluid">
    
                <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa fa-bars"></span> Menu
              </button> -->
                <button class="navbar-toggler" type="button" onclick="clickMunuMb()">
                <span class="fa fa-bars"></span> <span class="title-menu">Menu</span>
              </button>
                <div class="collapse navbar-collapse" id="ftco-nav">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item active"><a href="#" class="nav-link">Home</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Page</a>
                            <div class="dropdown-menu show" aria-labelledby="dropdown04">
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
                            <div class="dropdown-menu sub-menu-mobile show" aria-labelledby="dropdown04">
                                <a class="dropdown-item" href="#">Page 1</a>
                                <a class="dropdown-item" href="#">Page 2</a>
                                <a class="dropdown-item" href="#">Page 3</a>
                                <a class="dropdown-item" href="#">Page 4</a>
                            </div>
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
  <router-view/>

  </template>
  
  <script>
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
  </style>
  