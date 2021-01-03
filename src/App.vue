<template>
  <div id="app">
    <Select
      v-bind:chkTypeNum="chkTypeNum"
      v-bind:chkTypeLow="chkTypeLow"
      v-bind:chkTypeHigh="chkTypeHigh"
      v-bind:chkTypeSymbol="chkTypeSymbol"
      v-on:chkTypeNumCheanged="chkTypeNum=!chkTypeNum"
      v-on:chkTypeLowCheanged="chkTypeLow=!chkTypeLow"
      v-on:chkTypeHighCheanged="chkTypeHigh=!chkTypeHigh"
      v-on:chkTypeSymbolCheanged="chkTypeSymbol=!chkTypeSymbol"
    />
    <Random
      v-bind:chkTypeNum="chkTypeNum"
      v-bind:chkTypeLow="chkTypeLow"
      v-bind:chkTypeHigh="chkTypeHigh"
      v-bind:chkTypeSymbol="chkTypeSymbol"
    />
  </div>
</template>

<script>
import Random from './components/Random';
import Select from './components/Select';
export default {
  name: 'App',
  components: {
    Select,
    Random,
  },
  data: function () {
    return {
      chkTypeNum: true,
      chkTypeLow: true,
      chkTypeHigh: true,
      chkTypeSymbol: true,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
