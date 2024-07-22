<template>
  <router-view/>
</template>

<style>
#app {
  font-family: var(--fuente);
  margin: 3rem 1.5rem;
  height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
