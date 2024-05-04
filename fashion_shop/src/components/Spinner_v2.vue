<template>
     <div class="loader"></div> 
</template>
  
<script>
export default {
    name: 'SpinnerVueV2',
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
.loader {
    width: 50px;
    aspect-ratio: 1;
    display: grid;
  }
  .loader::before,
  .loader::after {    
    content:"";
    grid-area: 1/1;
    --c:no-repeat radial-gradient(farthest-side,#25b09b 92%,#0000);
    background: 
      var(--c) 50%  0, 
      var(--c) 50%  100%, 
      var(--c) 100% 50%, 
      var(--c) 0    50%;
    background-size: 12px 12px;
    animation: l12 1s infinite;
  }
  .loader::before {
    margin: 4px;
    filter: hue-rotate(45deg);
    background-size: 8px 8px;
    animation-timing-function: linear
  }
  
  @keyframes l12 { 
    100%{transform: rotate(.5turn)}
  }
    
</style>
  