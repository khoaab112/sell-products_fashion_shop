<template>
    <section>
        <div class="frm-connect">
            <input type="text" placeholder="Nhập tên"> <button class="connect">Kết nối</button>
        </div>
        <div class="messaging-frame">
            <div class="contents">
                <div class="messages">
                    <div class="info-supporter">
                        <div class="avatar"><img src="../imgs/xinh_1.png" alt=""></div>
                        <div class="name">Nguyễn Thị Nhi
                            <p>Hỗ trợ viên</p>
                        </div>
                    </div>
                    <div class="mess">
                        <!-- <div class="col-6 respond-messages"> -->
                        <div class="respond">
                            <div class="avatar"><img src="../imgs/xinh_1.png" alt=""></div>
                            <div class="content">
                                <div class="name">Nguyễn Thị Nhi</div>
                                <div class="message-wait">Đang trả lời...</div>
                                <div class="message"> Những chuẩn mực mà Tứ Thư đề ra cho cá nhân, đặc biệt ở khía cạnh đạo đức đến nay vẫn còn mang tính thời sự và trình tự hệ thống: Tu thân, tề ...</div>
                            </div>
                        </div>
                        <div class="respond">
                            <div class="avatar"><img src="../imgs/xinh_1.png" alt=""></div>
                            <div class="content">
                                <div class="name">Nguyễn Thị Nhi</div>
                                <div class="message-wait">Đang trả lời...</div>
                                <div class="message"> Những chuẩn mực mà Tứ Thư đề ra cho cá nhân, đặc biệt ở khía cạnh đạo đức đến nay vẫn còn mang tính thời sự và trình tự hệ thống: Tu thân, tề ...</div>
                            </div>
                        </div>
                        <!-- </div> -->
                        <!-- <div class="col-6 reply-message"> -->
                        <div class="reply">
                            <div class="avatar me-3"><img src="../imgs/xinh_1.png" alt=""></div>
                            <div class="content">
                                <div class="name text-end me-2">Nguyễn Thị Nhi</div>
                                <div class="message-wait">Đang trả lời...</div>
                                <div class="message"> Những chuẩn mực mà Tứ Thư đề ra cho cá nhân, đặc biệt ở khía cạnh đạo đức đến nay vẫn còn mang tính thời sự và trình tự hệ thống: Tu thân, tề ...</div>
                            </div>
                        </div>
                        <div class="reply">
                            <div class="avatar me-3"><img src="../imgs/xinh_1.png" alt=""></div>
                            <div class="content">
                                <div class="name text-end me-2">Nguyễn Thị Nhi</div>
                                <div class="message-wait">Đang trả lời...</div>
                                <div class="message"> Những chuẩn mực mà Tứ </div>
                            </div>
                        </div>
                        <div class="respond">
                            <div class="avatar"><img src="../imgs/xinh_1.png" alt=""></div>
                            <div class="content">
                                <div class="name">Nguyễn Thị Nhi</div>
                                <div class="message-wait">Đang trả lời...</div>
                                <div class="message"> Những chuẩn mực mà Tứ Thư đề ra cho cá nhân, đặc biệt ở khía cạnh đạo đức đến nay vẫn còn mang tính thời sự và trình tự hệ thống: Tu thân, tề ...</div>
                            </div>
                        </div>
                        <!-- </div> -->
                    </div>
                </div>
            </div>
            <div class="input-message"><span><i class="fa-regular fa-folder-open icon"></i> <textarea type="text"></textarea>
            </span><button>Gửi</button></div>
        </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SupportChat',
    components: {
        
    },
    setup() {
    },
    directives: {
    },
    data() {
      return {
        petitioner:{id:1,name:'',img:'',},
        reciever:{},
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
  