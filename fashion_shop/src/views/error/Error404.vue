<template>
    <div id="notfound">
        <div class="notfound">
            <div>
                <div class="notfound-404">
                    <h1>!</h1>
                </div>
                <h2>Error<br>404</h2>
            </div>
            <p>Trang bạn yêu cầu không tồn tại. Hãy quay trở vể <router-link to="/" class="home_link"><strong>Trang chủ</strong></router-link>
            </p>
        </div>
    </div>
</template>
      
<script>

export default {
    name: 'Error-404',
    components: {
    },
    setup() {
    },
    directives: {
    },
    data() {
        return {
        };
    },
    created() {
    },
    mounted() {
    },
    computed() {
    },
    updated() {

    },

    methods: {

    },
};
</script>
      
<style scoped>
* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

body {
    padding: 0;
    margin: 0;
}

#notfound {
    position: relative;
    height: 100vh;
    text-align: center;
}

#notfound .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.notfound {
    max-width: 520px;
    width: 100%;
    line-height: 1.4;
}

.notfound>div:first-child {
    padding-left: 200px;
    padding-top: 12px;
    height: 170px;
    margin-bottom: 20px;
}

div.notfound-404 {
    -webkit-animation: wobble-hor-bottom 3s ease-out 2s infinite both;
    animation: wobble-hor-bottom 3s ease-out 2s infinite both;
}

@-webkit-keyframes wobble-hor-bottom {

    0%,
    100% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }

    15% {
        -webkit-transform: translateX(-30px) rotate(-6deg);
        transform: translateX(-30px) rotate(-6deg);
    }

    30% {
        -webkit-transform: translateX(15px) rotate(6deg);
        transform: translateX(15px) rotate(6deg);
    }

    45% {
        -webkit-transform: translateX(-15px) rotate(-3.6deg);
        transform: translateX(-15px) rotate(-3.6deg);
    }

    60% {
        -webkit-transform: translateX(9px) rotate(2.4deg);
        transform: translateX(9px) rotate(2.4deg);
    }

    75% {
        -webkit-transform: translateX(-6px) rotate(-1.2deg);
        transform: translateX(-6px) rotate(-1.2deg);
    }
}

@keyframes wobble-hor-bottom {

    0%,
    100% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }

    15% {
        -webkit-transform: translateX(-30px) rotate(-6deg);
        transform: translateX(-30px) rotate(-6deg);
    }

    30% {
        -webkit-transform: translateX(15px) rotate(6deg);
        transform: translateX(15px) rotate(6deg);
    }

    45% {
        -webkit-transform: translateX(-15px) rotate(-3.6deg);
        transform: translateX(-15px) rotate(-3.6deg);
    }

    60% {
        -webkit-transform: translateX(9px) rotate(2.4deg);
        transform: translateX(9px) rotate(2.4deg);
    }

    75% {
        -webkit-transform: translateX(-6px) rotate(-1.2deg);
        transform: translateX(-6px) rotate(-1.2deg);
    }
}

.notfound .notfound-404 {
    position: absolute;
    left: 0;
    top: 0;
    width: 170px;
    height: 170px;
    background: #e01818;
    border-radius: 7px;
    -webkit-box-shadow: 0px 0px 0px 10px #e01818 inset, 0px 0px 0px 20px #fff inset;
    box-shadow: 0px 0px 0px 10px #e01818 inset, 0px 0px 0px 20px #fff inset;
}

.notfound .notfound-404 h1 {
    font-family: 'Chango', cursive;
    color: #fff;
    font-size: 118px;
    margin: 0px;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: inline-block;
    height: 60px;
    line-height: 60px;
}

.notfound h2 {
    font-family: 'Chango', cursive;
    font-size: 68px;
    color: #222;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0px;
    line-height: 1.1;
}

.notfound p {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #222;
    margin-top: 5px;
}

.notfound a {
    font-family: 'Montserrat', sans-serif;
    color: #e01818;
    font-weight: 400;
    text-decoration: none;
}

.home_link {
    font-size: 130%;
}

.home_link:hover {
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.6);
}

@media only screen and (max-width: 480px) {
    .notfound {
        padding-left: 15px;
        padding-right: 15px;
    }

    .notfound>div:first-child {
        padding: 0px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .notfound .notfound-404 {
        position: relative;
        margin-bottom: 15px;
    }

    .notfound h2 {
        font-size: 42px;
    }
}</style>