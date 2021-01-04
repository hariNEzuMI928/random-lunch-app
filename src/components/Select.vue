<template>
  <div id="sel">
    <label>
      <input type="checkbox"
        v-bind:checked="chkTypeNum"
        v-on:change="$emit('chk-type-num-cheanged')"
      />数字
    </label>
    <label>
      <input type="checkbox"
        v-bind:checked="chkTypeLow"
        v-on:change="$emit('chk-type-low-cheanged')"
      />英小文字
    </label>
    <label>
      <input type="checkbox"
        v-bind:checked="chkTypeHigh"
        v-on:change="$emit('chk-type-high-cheanged')"
      />英大文字
    </label>
    <label>
      <input type="checkbox"
        v-bind:checked="chkTypeSymbol"
        v-on:change="$emit('chk-type-symbol-cheanged')"
      />記号
    </label>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: ['chkTypeNum', 'chkTypeLow', 'chkTypeHigh', 'chkTypeSymbol'],
};
</script>

<style scoped>
#sel {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: white;
  background-color: blue;
}
.capitalize {
  text-transform: capitalize;
}
</style>
