<template>
  <div id="app">
    <nav>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav {
  padding: 1em;
}

nav a {
  margin-right: 1em;
}
</style>
