<template>
  <div class="login">
    <el-image class="login-left-bg-layout" :src="loginLeftBgLayoutSrc"/>
    <el-image class="login-left-bg-anime-img" :src="loginLeftBgAnimeImgSrc" />
    <el-form class="login-form-block">
      <el-row class="login-form-block-logo-block" :type="flex" :justify="start" :align="middle">
        <el-col :span="24">
          <el-image class="login-form-block-logo-img" :src="loginFormBlockLogoImgSrc" :fit="contain" />
        </el-col>
      </el-row>
      <div class="login-form">
        <el-row class="usher-block" :type="flex" :justify="start" :align="middle">
          <el-col :span="24">
            <p>
              <span>欢迎回来，</span>
            </p>
          </el-col>
        </el-row>
        <el-row class="account-input-title-block" :type="flex" :justify="start" :align="middle">
          <el-col class="account-input-title-block-text" :span="24">
            <p>
              <span>&nbsp;账号</span><span> *</span>
            </p>
          </el-col>
        </el-row>
        <el-row class="account-input-block">
          <el-col :span="24">
            <el-input class="account-input-block-input" placeholder="输入您的账号">
              <template slot="prepend">
                <el-image class="account-input-prepend-img" :src="accountInputPrependImgSrc" :fit="contain" />
              </template>
            </el-input>
          </el-col>
        </el-row>
        <el-row class="passwd-input-title-block" :type="flex" :justify="start" :align="middle">
          <el-col class="passwd-input-title-block-text" :span="24">
            <p>
              <span>&nbsp;密码</span><span> *</span>
            </p>
          </el-col>
        </el-row>
        <el-row class="passwd-input-block" :type="flex" :justify="start" :align="middle">
          <el-col :span="24">
            <el-input class="passwd-input-block-input" placeholder="输入您的密码">
              <template slot="prepend">
                <el-image class="passwd-input-prepend-img" :src="passwdInputPrependImgSrc" :fit="contain" />
              </template>
              <template slot="append">
                <el-image class="passwd-input-append-img" :src="passwdInputAppendImgSrc" :fit="contain" />
              </template>
            </el-input>
          </el-col>
        </el-row>
        <el-row class="forget-passwd-block" :type="flex" :justify="end" :align="middle">
          <el-col class="forget-passwd-block-text">
            <el-link target="_blank">忘记密码</el-link>
          </el-col>
        </el-row>
        <el-row class="login-btn-block">
          <el-col class="login-btn-block-btn">
            <el-button>登录</el-button>
          </el-col>
        </el-row>
        <el-row class="register-btn-block">
          <el-col class="register-btn-block-btn">
            <el-button>注册</el-button>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginLeftBgLayoutSrc: require('@/assets/login-left-bg-layout.svg'),
      loginLeftBgAnimeImgSrc: require('@/assets/login-left-bg-anime-img.png'),
      loginFormBlockLogoImgSrc: require('@/assets/logo.png'),
      accountInputPrependImgSrc: require('@/assets/login-account-icon.svg'),
      passwdInputPrependImgSrc: require('@/assets/login-passwd-icon.svg'),
      passwdInputAppendImgSrc: require('@/assets/login-passwd-visible-icon.svg'),
    }
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
  width: 50%;
  height: 100%;
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

.login-form-block-logo-block {
  height: 66px;
  width: 100%;
}

.login-form-block-logo-img {
  width: 55%;
}

.login-form {
  width: 100%;
  height: 100%;
  background-color: #303641;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 25px 30px 25px;
}

.usher-block {
  font-size: 24px;
  color: #92A0B1;
  margin: 0 0 30px 0;
  p {
    margin: 0;
  }
}

.account-input-title-block {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 14px;
  font-weight: 700;
}

.passwd-input-title-block {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 14px;
  font-weight: 700;
}

.account-input-title-block-text {
  p {
    margin: 0;
  }
  span:nth-of-type(1) {
    color: #92A0B1;
  }

  span:nth-of-type(2) {
    color: #D9001B;
  }
}

.passwd-input-title-block-text {
  p {
    margin: 0;
  }
  span:nth-of-type(1) {
    color: #92A0B1;
  }

  span:nth-of-type(2) {
    color: #D9001B;
  }
}

.account-input-block {
  margin: 3px 0 12px 0;
  width: 100%;
}

.passwd-input-block {
  margin: 3px 0 1px 0;
  width: 100%;
}

.account-input-block-input {
  width: 100%;
  height: 34px;
  border-color: #555555;

  ::v-deep .el-input__inner{
    height: 34px;
    background-color: #353C48;
    border-color: #555555;
  }

  ::v-deep .el-input__inner::placeholder{
    color: #92A0B1;
  }

  ::v-deep .el-input-group__prepend {
    padding: 0 12px 0 12px;
    background-color: #353C48;
    border-color: #555555;
  }

  ::v-deep .el-input-group__append {
    padding: 0 12px 0 12px;
    background-color: #353C48;
    border-color: #555555;
  }
}

.passwd-input-block-input {
  width: 100%;
  height: 34px;
  border-color: #555555;

  ::v-deep .el-input__inner{
    height: 34px;
    background-color: #353C48;
    border-color: #555555;
  }

  ::v-deep .el-input__inner::placeholder{
    color: #92A0B1;
  }

  ::v-deep .el-input-group__prepend {
    padding: 0 12px 0 12px;
    background-color: #353C48;
    border-color: #555555;
  }

  ::v-deep .el-input-group__append {
    padding: 0 12px 0 12px;
    background-color: #303641;
    border-color: #555555;
  }
}

.account-input-prepend-img {
  width: 20px;
  height: 20px;
}

.passwd-input-prepend-img {
  width: 20px;
  height: 20px;
}

.account-input-append-img {
  width: 20px;
  height: 20px;
}

.passwd-input-append-img {
  width: 20px;
  height: 20px;
}

.forget-passwd-block-text {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ::v-deep .el-link--inner {
    color: #92A0B1;
    font-weight: 700;
    font-size: 14px;
  }
}

.login-btn-block {
  margin: 20px 0 10px 0;
}

.login-btn-block-btn {
  border: 0px;
  ::v-deep .el-button {
    width: 100%;
    height: 40px;
    background-color: #2389AE;
    border: 0px;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 700;
  }
}

.register-btn-block-btn {
  ::v-deep .el-button {
    width: 100%;
    height: 40px;
    background-color: #303641;
    border: 1px solid #555555;
    color: #92A0B1;
    font-size: 14px;
    font-weight: 700;
  }
}
</style>