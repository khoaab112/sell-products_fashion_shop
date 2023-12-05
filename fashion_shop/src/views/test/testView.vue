<template>
  <GoogleMap :api-key=API_KEY style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>
  
<script>
// import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
export default {
  name: 'vueTem',
  components: {
    GoogleMap, Marker
  },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };
    return { center };
  },
  directives: {
  },
  data() {
    return {
      API_KEY: process.env.VUE_APP_API_KEY_GOOGLE_MAP,
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
  