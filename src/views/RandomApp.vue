<template>
  <div class="random">
    <Select
      v-bind:chkTypeNum="chkTypeNum"
      v-bind:chkTypeLow="chkTypeLow"
      v-bind:chkTypeHigh="chkTypeHigh"
      v-bind:chkTypeSymbol="chkTypeSymbol"
      v-on:chk-type-num-cheanged="chkTypeNum = !chkTypeNum"
      v-on:chk-type-low-cheanged="chkTypeLow = !chkTypeLow"
      v-on:chk-type-high-cheanged="chkTypeHigh = !chkTypeHigh"
      v-on:chk-type-symbol-cheanged="chkTypeSymbol = !chkTypeSymbol"
    />
    <Random
      v-bind:chkTypeNum="chkTypeNum"
      v-bind:chkTypeLow="chkTypeLow"
      v-bind:chkTypeHigh="chkTypeHigh"
      v-bind:chkTypeSymbol="chkTypeSymbol"
    />
  </div>
  <hr />
  <Todo />
  <hr />
  <FileUpload />
</template>

<script>
import Random from '@/components/Random';
import Select from '@/components/Select';
import Todo from '@/components/Todo';
import FileUpload from '@/components/FileUpload';

export default {
  name: 'RandomApp',
  components: {
    Select,
    Random,
    Todo,
    FileUpload,
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
