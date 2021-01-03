<template>
  <div id="app">
    <span v-for="rndStrEach in rndStr" v-bind:key="rndStrEach.id">
      <span class="rndStrEach">{{rndStrEach}}</span>
    </span>
    <!-- (1)「パスワード発生」ボタンの表示。押されたら「onRandomStr」を呼ばれる（下のmethods） -->
    <button class="btn" v-on:click="onRandomStr">パスワード発生</button>
  </div>
</template>

<script>
export default {
  name: 'Random',
  mounted: function(){
  //   document.title = "ランダム文字列";
  },
  props: ['chkTypeNum', 'chkTypeLow', 'chkTypeHigh', 'chkTypeSymbol'],
  data() {
    return {
      rndStr: '開始',
      rndStrLen: 0,
      targetStrNum: '0123456789',
      targetStrLow: 'abcdefghijklmnopqrstuvwxyz',
      targetStrSymbol1: "'",
      targetStrSymbol2: '!"#$%&()*+,-./:;<>=?@[]^_`{}|~',
    };
  },
  methods: {
    // (2)子から呼び出されるメソッド
    onRandomStr: function () {
      let targetStrHigh = this.targetStrLow.toUpperCase();
      let targetStrSymbol = this.targetStrSymbol1 + this.targetStrSymbol2;
      let targetStr = '';
      if (this.chkTypeNum)    targetStr += this.targetStrNum;
      if (this.chkTypeLow)    targetStr += this.targetStrLow;
      if (this.chkTypeHigh)   targetStr += targetStrHigh;
      if (this.chkTypeSymbol) targetStr += targetStrSymbol;
      let targetLen = targetStr.length;
      // 乱数発生
      let uInt32 = new Uint32Array(1);
      this.rndStr = [];
      this.rndStrLen = 16;
      let cntL = 0;
      while (cntL < this.rndStrLen) {
        let cntA = Math.floor(cntL / 4);
        if (cntL % 4 == 0) {
          this.rndStr[cntA] = '';
        }
        crypto.getRandomValues(uInt32); // 符号なし32bitの数値を入れる
        let targetStrSta = Math.floor((uInt32[0] / 2 ** 32) * targetLen);
        this.rndStr[cntA] = this.rndStr[cntA] + targetStr.substr(targetStrSta, 1);
        cntL++;
      }
    },
  },
};
</script>

<style scoped>
  .capitalize {
      text-transform: capitalize;
  }
  .rndStrEach {
    font-size: 32px;
    padding-right: 16px;
  }
</style>
