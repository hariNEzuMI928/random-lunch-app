<template>
  <div class="random">
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
import Random from '@/components/Random.vue';
import Select from '@/components/Select.vue';

export default {
  name: 'RandomApp',
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
#random {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
