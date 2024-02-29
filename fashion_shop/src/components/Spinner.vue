<template>
    <div id="coating">
        <div class="loader"></div>
    </div>
</template>
  
<script>
export default {
    name: 'SpinnerVue',
    // props: ['data'],
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
    }
};
</script>
  
<style scoped>
div#coating {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #9e9e9e96;
    z-index: 9998;
}
.loader {
    position: absolute;
    bottom: 18px;
    right: 18px;
    z-index: 9999;
}
/* HTML: <div class="loader"></div> */
.loader {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: white;
    -webkit-mask: radial-gradient(circle closest-side at 50% 40%,#0000 94%, #000);
    transform-origin: 50% 40%;
    animation: l25 1s infinite linear;
  }
  @keyframes l25 {
    100% {transform: rotate(1turn)}
  }</style>
  