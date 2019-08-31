<template>
  <div class="login">
    <div class="login-card">
      <h1>Login</h1>
      <editor-input v-model="username" :options="{ nameReadable: 'Username'}"></editor-input>
      <editor-input v-model="password" :options="{ nameReadable: 'Password', type: 'password' }"></editor-input>
      <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
      <a @click.prevent="login" class="button">Login</a>
    </div>
  </div>
</template>

<script>
import EditorInput from "Components/admin/EditorInput";
import config from "Config";

export default {
  name: "login",
  components: {
    EditorInput
  },
  data() {
    return {
      username: "",
      password: "",
      errorMessage: false
    };
  },
  mounted() {
    document.querySelector(
      ".login"
    ).style.backgroundImage = `url(//${config.api.domain}${config.images.path}/homebg.jpg)`;
  },
  methods: {
    login() {
      this.$http
        .post("/auth/login", {
          username: this.username,
          password: this.password
        })
        .then(this.$router.push("/manage"))
        .catch(err => this.errorMessage = err.response.data.message);
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_globalAdmin.scss";

.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
}

.login-card {
  padding: 48px;
  background-color: #fff;
  max-width: 350px;
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  border-left: 8px solid $accent-alt;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.1);

  > * {
    font-size: 1.2em !important;
    text-align: center !important;
    margin: 0;
  }

  > * + * {
    margin-top: 48px;
  }

  input {
    padding: 8px;
    text-align: left;
    width: 100%;
  }
}

.error-message {
  color: red;
}
</style>
