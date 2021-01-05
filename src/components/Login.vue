<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>ログイン画面</h2>
        <button type="button" @click="login" >ログイン</button>
        <button type="button" @click="signUp" >登録</button>
        <button type="button" @click="logout" >ログアウト</button>
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
import router from '../router'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login: function() {
      // TODO: loginメソッドの中身ががsignUpメソッドと同じ（登録して無くてもログインできる）
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        console.log(result.user);
        router.push('/success')
      }).catch((error) => {
        console.log(error);
        alert('ログインに失敗しました。再度お試しください。\n' + error.message)
      });
    },
    signUp: function() {
      // TODO: コドモンユーザー以外は弾きたい
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        router.push('/success')
        alert('Welcome! ' + result.user.displayName);
      })
      .catch((error) => alert('登録に失敗しました。再度お試しください。\n' + error.message));
    },
    logout: function() {
      firebase.auth().signOut().then(function() {
        router.push('/')
        console.log('logout')
      }).catch(error => {
        alert('ログアウトに失敗しました。再度お試しください。\n' + error.message)
        router.push('/')
      })
    },
  },
};
</script>
