<template>
    <div class="user-feedback">
        <div class="name">
            <img :src=dataUser.avatar :alt="`avatar ${dataUser.name}`" @click="showImg(data.avatar)">
            <strong>{{ dataUser.name }}</strong>
            <div class="star">
                <el-rate v-model="dataUser.vote" size="large" disabled />
            </div>
        </div>
        <div class="comment">
            <p>Sản phẩm tốt</p>
            <div class="img">
                <img :src="item" :alt="`ảnh ${key} ${dataUser.name}`" v-for="(item, key) in dataUser.listImg.slice(0, 5)"
                    :key="key" @click="showList(key, dataUser.listImg)">
                <div class="box" v-if="dataUser.listImg.length > 5">
                    <img :src="dataUser.listImg[6]" alt="ảnh phản hồi 6">
                    <div class="much-quantity" v-if="dataUser.listImg.length > 6" @click="showList(6, dataUser.listImg)">
                        +{{ dataUser.listImg.length - 5 }}</div>
                </div>
            </div>
            <div class="action">
                <button>10<font-awesome-icon icon="fa-regular fa-thumbs-up" class="like ms-2" /></button>
                <button>20<font-awesome-icon icon="fa-regular fa-comment-dots" class="comment ms-2" /></button>
                <button>1<font-awesome-icon icon="fa-solid fa-triangle-exclamation " class="report ms-2" /></button>
            </div>
        </div>
    </div>
    <!-- Modal Img-->
    <el-dialog v-model="isShowDialog" title="Hình ảnh" width="30%" align-center class="modal-img">
        <img :src=imgShowDialog :alt="`avatar ${dataUser.name}`" ref="imgModal" class="">
        <div class="list-btn" v-show="isShowList">
            <button @click="imageTransfer(0, dataUser.listImg)" class="left"><font-awesome-icon
                    icon="fa-solid fa-circle-chevron-left" /></button>{{ keyImg + 1 }}/{{ dataUser.listImg.length }} <button
                @click="imageTransfer(1, dataUser.listImg)" class="right"><font-awesome-icon
                    icon="fa-solid fa-circle-chevron-right" /></button>
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="isShowDialog = false">Đóng</el-button>
                <el-button type="primary" @click="isShowDialog = false">
                    Xác nhận
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
  
<script>
export default {
    name: 'CommentVue',
    props: ['data'],
    components: {
    },
    setup() {
    },
    directives: {
    },
    data() {
        return {
            dataUser: this.data,
            isShowDialog: false,
            isShowList: false,
            imgShowDialog: '',
            keyImg: null,
        };
    },
    created() {
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
        showImg(img) {
            this.isShowDialog = true;
            this.imgShowDialog = img;
            this.isShowList = false;
        },
        showList(key, imgList) {
            this.isShowDialog = true;
            this.imgShowDialog = imgList[key];
            this.isShowList = true;
            this.keyImg = key;
        },
        imageTransfer(number, list) {
            const element = this.$refs.imgModal;
            element.classList.remove('animation');
            const length = list.length;
            if (number === 0) {
                let index = this.keyImg - 1;
                if (index < 0) {
                    this.keyImg = length - 1;
                    this.imgShowDialog = list[length - 1];
                }
                else {
                    this.imgShowDialog = list[index];
                    this.keyImg = index;
                }
            }
            else {
                let index = this.keyImg + 1;
                if (index >= length) {
                    this.keyImg = 0;
                    this.imgShowDialog = list[0];
                }
                else {
                    this.keyImg = index;
                    this.imgShowDialog = list[index];
                }
            }
            setTimeout(() => {
                element.classList.add('animation');
            }, 10);
        }
    },
};
</script>
  
<style scoped>
.modal-img .list-btn {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: nowrap;
    margin-top: 1rem;
    font-size: 20px;
}

.modal-img button.left,
.modal-img button.right {
    border: none;
    background-color: white;
}

.modal-img button.left:hover,
.modal-img button.right:hover {
    color: red;
}

.modal-img button.left:active,
.modal-img button.right:active {
    transform: scale(1.1);
}

.modal-img img {
    width: 100%;
    max-height: 30rem;
    min-height: 20rem;
    display: block;
    object-fit: cover;
    -webkit-animation: rotate-in-2-cw 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: rotate-in-2-cw 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.modal-img img.animation {
    -webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@-webkit-keyframes rotate-in-2-cw {
    0% {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        opacity: 0;
    }

    100% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
        opacity: 1;
    }
}

@keyframes rotate-in-2-cw {
    0% {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        opacity: 0;
    }

    100% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
        opacity: 1;
    }
}


@-webkit-keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}


.user-feedback .name img {
    width: 3rem;
    height: 3rem;
    display: block;
    object-fit: cover;
    border: none;
    border-radius: 50px;
    margin-right: 1rem;
}

.user-feedback .name img:hover {
    border: 1px solid red;
}

.user-feedback .name {
    display: flex;
    align-items: center;
}

.user-feedback .name .star {
    margin-left: 1rem;
}

.user-feedback .comment .img {
    display: flex;
}

.user-feedback .comment .img img:hover {
    border: 1px solid aquamarine;
}

.user-feedback .comment img {
    height: 2rem;
    width: 3rem;
    object-fit: cover;
    display: block;
    margin-right: 1rem;
}

.user-feedback .comment .box {
    position: relative;
    height: 2rem;
    width: 3rem;
}

.user-feedback .comment .box img {
    opacity: 0.3;
}

.user-feedback .comment .box .much-quantity {
    position: absolute;
    top: 5px;
    left: 27%;
    font-weight: bold;
}

.user-feedback .comment .action {
    margin-top: 0.5rem;
}

.user-feedback .comment .action button {
    margin-right: 1rem;
    border: none;
    background-color: rgb(0 0 0 / 0%);
}

.user-feedback .comment .action .like:active {
    color: #0d6efd;
}

.user-feedback .comment .action .comment:active {
    color: yellow;
}

.user-feedback .comment .action .report:active {
    color: red;
}

.user-feedback .comment .action .like:hover,
.user-feedback .comment .action .comment:hover,
.user-feedback .comment .action .report:hover {
    transform: scale(1.1);
}

.user-feedback {
    margin-bottom: 2rem;
}</style>
  