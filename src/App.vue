<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-image: url(./assets/bg-1.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    min-width: 100vw;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: orange;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>