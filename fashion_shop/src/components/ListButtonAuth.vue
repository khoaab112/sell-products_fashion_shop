<template>
    <div class="img-anime" v-if="isActiveImg">
        <img :src="anime" alt="ảnh chuyển cảnh"
            :class="[{ 'slit-in-vertical': isActiveAnimation }, { 'slit-out-vertical': !isActiveAnimation }]">
    </div>
    <div class="img-anime" v-if="isActiveImg2">
        <img :src="anime2" alt="ảnh chuyển cảnh"
            :class="[{ 'slit-in-vertical': isActiveAnimation }, { 'slit-out-vertical': !isActiveAnimation }]">
    </div>
    <div class="list-btn-auth">
        <button class="back-login" v-if="!isActive" @click="backLogin"><font-awesome-icon icon="fa-solid fa-left-long" /></button>
        <button class="back-home" @click="backHome"><font-awesome-icon icon="fa-solid fa-house" /></button>
    </div>
</template>
  
<script>
import anime_1 from "@/assets/images/anime/anime_1.jpg";
import anime_2 from "@/assets/images/anime/anime_2.png";

export default {
    name: 'ListButtonAuth',
    props: ['isActiveLogin'],
    components: {
    },
    setup() {
    },
    directives: {
    },
    data() {
        return {
            isActive: this.isActiveLogin,
            anime: "",
            anime2: "",
            isActiveImg: false,
            isActiveImg2: false,
            isActiveAnimation: true,
        };
    },
    created() {
        this.anime = anime_1;
        this.anime2 = anime_2;
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
        async backHome() {
            this.isActiveImg = true;
            await this.delay(2000);
            setTimeout(() => {
                this.$router.push({ name: 'PageHome' });
            }, 500);
        },
        async backLogin() {
            this.isActiveImg2 = true;
            await this.delay(2000);
            setTimeout(() => {
                this.$router.push({ name: 'UserLogin' });
            }, 500);
        },
        delay(ms) {
            return new Promise(resolve => {
                setTimeout(() => {
                    this.isActiveAnimation = false;
                    resolve(true);
                }, ms);
            });
        }
    }
};
</script>
  
<style scoped>
.list-btn-auth {
    position: absolute;
    z-index: 9;
}

button {
    padding: 5px 12px;
    margin-left: 1rem;
    margin-top: 0.5rem;
    border: none;
    border-radius: 5px;
}

button:hover {
    background-color: var(--el-color-info-dark-2);
    color: var(--bs-secondary-border-subtle);
    scale: var(--scale-1);
}

.img-anime {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 9999;
}

.img-anime>img {
    object-fit: contain;
    height: 100%;
    width: 100%;
}

.slit-out-vertical {
    -webkit-animation: slit-out-vertical 0.5s ease-in both;
    animation: slit-out-vertical 0.5s ease-in both;
}

@-webkit-keyframes slit-out-vertical {
    0% {
        -webkit-transform: translateZ(0) rotateY(0);
        transform: translateZ(0) rotateY(0);
        opacity: 1;
    }

    54% {
        -webkit-transform: translateZ(-160px) rotateY(87deg);
        transform: translateZ(-160px) rotateY(87deg);
        opacity: 1;
    }

    100% {
        -webkit-transform: translateZ(-800px) rotateY(90deg);
        transform: translateZ(-800px) rotateY(90deg);
        opacity: 0;
    }
}

@keyframes slit-out-vertical {
    0% {
        -webkit-transform: translateZ(0) rotateY(0);
        transform: translateZ(0) rotateY(0);
        opacity: 1;
    }

    54% {
        -webkit-transform: translateZ(-160px) rotateY(87deg);
        transform: translateZ(-160px) rotateY(87deg);
        opacity: 1;
    }

    100% {
        -webkit-transform: translateZ(-800px) rotateY(90deg);
        transform: translateZ(-800px) rotateY(90deg);
        opacity: 0;
    }
}

.slit-in-vertical {
    -webkit-animation: slit-in-vertical 0.45s ease-out both;
    animation: slit-in-vertical 0.45s ease-out both;
}

@-webkit-keyframes slit-in-vertical {
    0% {
        -webkit-transform: translateZ(-800px) rotateY(90deg);
        transform: translateZ(-800px) rotateY(90deg);
        opacity: 0;
    }

    54% {
        -webkit-transform: translateZ(-160px) rotateY(87deg);
        transform: translateZ(-160px) rotateY(87deg);
        opacity: 1;
    }

    100% {
        -webkit-transform: translateZ(0) rotateY(0);
        transform: translateZ(0) rotateY(0);
    }
}

@keyframes slit-in-vertical {
    0% {
        -webkit-transform: translateZ(-800px) rotateY(90deg);
        transform: translateZ(-800px) rotateY(90deg);
        opacity: 0;
    }

    54% {
        -webkit-transform: translateZ(-160px) rotateY(87deg);
        transform: translateZ(-160px) rotateY(87deg);
        opacity: 1;
    }

    100% {
        -webkit-transform: translateZ(0) rotateY(0);
        transform: translateZ(0) rotateY(0);
    }
}
</style>
  