<template>
  <div class="home">
    <div>
    <a-input v-model="val"></a-input>
    <a-button type="primary" @click="appendInput">Primary</a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="danger" @click="deleteInput">Danger</a-button>
  </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data(){
    return{
      val:''
    }
  },
  name: "home",
  components: {
    HelloWorld
  },
  methods:{
    appendInput(){
      this.val = 'default'
    },
    deleteInput(){
      this.val = ''
    }
  }
};
</script>
