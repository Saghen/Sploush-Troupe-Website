<template>
  <div class="login">
    <div class="login-card">
      <h1>Login</h1>
      <editor-input v-model="username" :options="{ nameReadable: 'Username', large: true }"></editor-input>
      <editor-input v-model="password" :options="{ nameReadable: 'Password', type: 'password', large: true }"></editor-input>
    </div>
  </div>
</template>

<script>
import EditorInput from "Components/admin/EditorInput";

export default {
  name: "login",
  components: {
    EditorInput
  },
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

.login {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient($accent, $accent-alt);
}

.login-card {
  padding: 32px;
  background-color: #fff;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
}
</style>
