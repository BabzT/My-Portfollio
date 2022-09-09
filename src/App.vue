<template>
  <div id="app" class="app">
    <div class="mode_switch">
      <span v-if="darkMode" @click="toggleDark" class="material-symbols-outlined dark_icon">dark_mode</span>
      <span v-else @click="toggleLight" class="material-symbols-outlined light_icon">light_mode</span>
    </div>
    <LandingPage/>
    <p class="text-xs font-light mx-auto w-fit">
      <span>&copy;</span> Babatunde Akinwobi. 2022 All Rights Reserved
    </p>
  </div>
</template>

<script>
import LandingPage from '@/components/Landing.vue'
export default {
  name: 'App',
  components: {
    LandingPage
  },
  data(){
    return{
      darkMode:null
    }
  },
  created(){
    this.fetchTheme()
  },
  methods:{
    fetchTheme(){
      if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
        document.getElementById('app').classList.add('dark')
        this.darkMode = false
      }else{
        document.getElementById('app').classList.remove('dark')
        this.darkMode = true
      }
    },
    toggleDark(){
      document.getElementById('app').classList.add('dark')
      localStorage.theme = 'dark'
      this.darkMode = false
    },
    toggleLight(){
      document.getElementById('app').classList.remove('dark')
      localStorage.theme = 'light'
      this.darkMode = true
    }
  }
}
</script>


