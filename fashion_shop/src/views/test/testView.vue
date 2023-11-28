<template>
  <vueper-slides autoplay>
    <vueper-slide v-for="i in 5" :key="i" :title="i.toString()" />
  </vueper-slides>
  </template>
  
  <script>
  import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
  export default {
    name: 'vueTem',
    components: {
      VueperSlides, VueperSlide
    },
    setup() {
    },
    directives: {
    },
    data() {
      return {
        slides: [
    {
      title: 'Slide #1',
      content: 'Slide 1 content.'
    },
    {
      title: 'Slide #2',
      content: 'Slide 2 content.'
    }
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
  
  <style>
  /* CSS cho component */
  </style>
  