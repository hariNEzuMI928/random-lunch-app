<template>
  <div id="file_upload">
    <div class="form-group uploadForm">
      <input type="file" class="form-control" @change="selectFile" />
      <button type="submit" class="btn btn-outline-success" v-on:click="upload">
        登録
      </button>
      <div id="errArea">{{ infoMsg }}</div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'fileUpload',
  data: function () {
    return {
      uploadFile: null,
      infoMsg: null,
    };
  },
  methods: {
    selectFile: function (e) {
      e.preventDefault();
      let files = e.target.files;
      this.uploadFile = files[0];
    },
    upload: function () {
      if (!this.uploadFile) {
        this.infoMsg = '選択してください';
        return;
      }
      var storageRef = firebase
        .storage()
        .ref()
        .child('tmp/' + this.uploadFile.name);
      storageRef.put(this.uploadFile).then(function () {
        console.log('Uploaded a blob or file!');
      });
    },
  },
};
</script>
