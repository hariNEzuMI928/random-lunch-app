<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>ログイン画面</h2>
        <button type="button" @click="login" >ログイン</button>
        <button type="button" @click="signUp" >登録</button>
      </div>
    </div>
  </div>
</template>
<style>
.mt-2 {
  margin-top: 2px;
}
</style>

<script>
import firebase from 'firebase';

export default {
  name: 'login',
  methods: {
    login: function() {
      // TODO: loginメソッドの中身ががsignUpメソッドと同じ（登録して無くてもログインできる）
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
    signUp: function() {
      // TODO: コドモンユーザー以外は弾きたい
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
  },
  mounted () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('login!');
        this.$router.push('/success')
      }else{
        this.$router.push('/')
      }
    })
  },
};
</script>
