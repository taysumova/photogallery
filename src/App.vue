<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap');

html,
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  background: #fff;
  font-family: 'Roboto Condensed', sans-serif;
  min-width: 320px;
  padding: 10px 0;
  overflow: hidden;
}
</style>
