<template>
  <div class="login">
    <img class="login-left-bg-layout" src="@/assets/login-left-bg-layout.svg" width="50%" height="100%"/>
    <img class="login-left-bg-anime-img" src="@/assets/login-left-bg-anime-img.png" />
    <div class="login-form-block">
      <img class="login-form-block-logo-img" src="@/assets/logo.png" />
      <div class="login-form"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  background-color: #353C48;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.login-left-bg-layout {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
}

.login-left-bg-anime-img {
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 20px;
  width: 20%;
}

.login-form-block {
  z-index: 2;
  position: absolute;
  top:20%;
  width: 360px;
  height: 420px;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.login-form-block-logo-img {
  width: 50%;
  margin-right: 230px;
}

.login-form {
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
  background-color: #303641;
  border-radius: 10px;
  padding: 20px 25px 30px 25px;
}
</style>