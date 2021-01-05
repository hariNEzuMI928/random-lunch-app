<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>ログイン成功</h2>
        <button type="button" @click="logout" >ログアウト</button>
      </div>
    </div>
  </div>
</template>

<style>
.mt-4 {
  margin-top: 4px;
}
</style>

<script>
import firebase from 'firebase'
import router from '../router'

export default {
  name: 'success',
  methods: {
    logout() {
      firebase.auth().signOut().then(function() {
        console.log('logout!')
      }).catch(error => {
        console.log(error.message)
      })
      router.push('/')
    }
  }
}
</script>
