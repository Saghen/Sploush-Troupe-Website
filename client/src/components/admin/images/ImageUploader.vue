<template>
  <div id="uploader">
    <a class="button" @click="openFilePicker()">Select File</a>
    <transition name="fade">
      <div id="button-progress" v-if="uploadPercentage > 0">
        <div :style="{ width: uploadPercentage + '%' }"></div>
      </div>
    </transition>
    <input type="file" name="file" ref="file" @change="handleFileUpload()" style="display: none;">
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: '',
      uploadPercentage: 0
    };
  },
  methods: {
    openFilePicker() {
      this.$refs.value = undefined;
      this.$refs.file.click()
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.submitFile();
    },
    submitFile() {
      let formData = new FormData();
      formData.append('image', this.file);

      this.$http
        .post('/images/insert', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: function(progressEvent) {
            this.uploadPercentage = parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            );
            if (this.uploadPercentage == 100) this.uploadPercentage = 0;
          }.bind(this),
        })
        .then(() => {
          this.$sendToast('Successfully uploaded');
        })
        .catch(err => {
          console.error(err);
          if (err.response && err.response.status === 401)
            this.$sendToastError('Please login to add an image');
          else this.$sendToastError(err.response.data.message);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/_global.scss';

#uploader {
  display: flex;
  flex-direction: column;
  align-items: center;

  > * + * {
    margin-top: 16px;
  }
}

#button-progress {
  position: relative;
  height: 20px;
  max-width: 500px;
  width: 100%;
  border: 2px $accent-alt solid;

  > div {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    transition: 0.2s all;
    background-color: $accent-alt;
  }
}
</style>
