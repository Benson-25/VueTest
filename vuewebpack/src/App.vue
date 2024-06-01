<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
          <li class="nav-item">
            <!--加入-->
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <!--加入-->
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item" >
            <!--加入-->
            <router-link class="nav-link"
              :to="{
                name: '新增頁面',
              }"
              >新增頁面</router-link>
          </li>
        </ul>
    </div>
  </div>
</nav>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    getList () {
      this.axios.get('/api/:api_path/products').then((response) => {
        console.log(response.data)
      })
      // or
      this.$http.get('/api/:api_path/products').then((response) => {
        console.log(response.data)
      })
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
  background-color: yellowgreen;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
