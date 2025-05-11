<template>
    <div class="login">
        <el-image class="login-left-bg-layout" :src="loginLeftBgLayoutSrc" />
        <el-image class="login-left-bg-anime-img" :src="loginLeftBgAnimeImgSrc" />
        
        <el-form v-if="loginOrRegister" class="login-form-block">
            <el-image class="login-form-logo-img" :src="logoImgSrc" :fit="contain" />
            <div class="login-form">
                <el-row class="usher" :type="flex" :justify="start" :align="middle">
                    <el-col :span="24">
                        <p><span>欢迎回来，</span></p>
                    </el-col>
                </el-row>
                <el-row class="account-input-title-block" :type="flex" :justify="start" :align="middle">
                    <el-col class="account-input-title-block-text" :span="24">
                        <p><span>&nbsp;账号</span><span> *</span></p>
                    </el-col>
                </el-row>
                <el-form-item class="account-input-block">
                    <el-input class="account-input-block-input" placeholder="输入您的账号" v-model="accountInput">
                        <template slot="prepend">
                            <el-image class="account-input-prepend-img" 
                                :src="accountInputPrependImgSrc"
                                :fit="contain" />
                        </template>
                    </el-input>
                </el-form-item>
                <el-row class="passwd-input-title-block" :type="flex" :justify="start" :align="middle">
                    <el-col class="passwd-input-title-block-text" :span="24">
                        <p>
                            <span>&nbsp;密码</span><span> *</span>
                        </p>
                    </el-col>
                </el-row>
                <el-form-item class="passwd-input-block">
                    <el-input class="passwd-input-block-input" placeholder="输入您的密码" v-model="passwdInput">
                        <template slot="prepend">
                            <el-image class="passwd-input-prepend-img" :src="passwdInputPrependImgSrc"
                                :fit="contain" />
                        </template>
                        <template slot="append">
                            <!-- <el-image class="passwd-input-append-img" :src="passwdInputAppendImgSrc"
                                :fit="contain" /> -->
                            <el-button class="passwd-input-append-btn" icon="el-icon-view"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-row class="forget-passwd-block" :type="flex" :justify="end" :align="middle">
                    <el-col class="forget-passwd-block-text">
                        <el-link target="_blank">忘记密码</el-link>
                    </el-col>
                </el-row>
                <el-row class="captcha-input-title-block" :type="flex" :justify="start" :align="middle">
                    <el-col class="captcha-input-title-block-text" :span="24">
                        <p>
                            <span>&nbsp;验证码</span><span> *</span>
                        </p>
                    </el-col>
                </el-row>
                <el-form-item class="captcha-input-block">
                    <el-input class="captcha-input-block-input" placeholder="输入验证码" v-model="captchaInput">
                        <template slot="prepend">
                            <el-image class="captcha-input-prepend-img" :src="captchaInputPrependImgSrc"
                                :fit="contain" />
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item class="login-btn-block">
                    <el-button type="primary">登录</el-button>
                </el-form-item>
                <el-form-item class="register-btn-block">
                    <el-button @click="switchToRegisterPage">注册</el-button>
                </el-form-item>
            </div>
        </el-form>

        <el-form v-else class="register-form-block">
            <el-image class="register-form-logo-img" :src="logoImgSrc" :fit="contain" />
            <div class="register-form">
                <el-row class="usher" :type="flex" :justify="start" :align="middle">
                    <el-col :span="24">
                        <p><span>注册，</span></p>
                    </el-col>
                </el-row>
                <el-row class="account-input-title-block" :type="flex" :justify="start" :align="middle">
                    <el-col class="account-input-title-block-text" :span="24">
                        <p><span>&nbsp;账号</span><span> *</span></p>
                    </el-col>
                </el-row>
                <el-form-item class="account-input-block">
                    <el-input class="account-input-block-input" placeholder="输入您的账号" v-model="accountInput">
                        <template slot="prepend">
                            <el-image class="account-input-prepend-img" 
                                :src="accountInputPrependImgSrc"
                                :fit="contain" />
                        </template>
                    </el-input>
                </el-form-item>
                <el-row class="passwd-input-title-block" :type="flex" :justify="start" :align="middle">
                    <el-col class="passwd-input-title-block-text" :span="24">
                        <p>
                            <span>&nbsp;密码</span><span> *</span>
                        </p>
                    </el-col>
                </el-row>
                <el-form-item class="passwd-input-block">
                    <el-input class="passwd-input-block-input" placeholder="输入您的密码" v-model="passwdInput">
                        <template slot="prepend">
                            <el-image class="passwd-input-prepend-img" :src="passwdInputPrependImgSrc"
                                :fit="contain" />
                        </template>
                        <template slot="append">
                            <!-- <el-image class="passwd-input-append-img" :src="passwdInputAppendImgSrc"
                                :fit="contain" /> -->
                            <el-button class="passwd-input-append-btn" icon="el-icon-view"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-row class="passwd-input-title-block" :type="flex" :justify="start" :align="middle">
                    <el-col class="passwd-input-title-block-text" :span="24">
                        <p>
                            <span>&nbsp;确认密码</span><span> *</span>
                        </p>
                    </el-col>
                </el-row>
                <el-form-item class="passwd-input-block">
                    <el-input class="passwd-input-block-input" placeholder="输入确认密码" v-model="passwdInput">
                        <template slot="prepend">
                            <el-image class="passwd-input-prepend-img" :src="passwdInputPrependImgSrc"
                                :fit="contain" />
                        </template>
                        <template slot="append">
                            <!-- <el-image class="passwd-input-append-img" :src="passwdInputAppendImgSrc"
                                :fit="contain" /> -->
                            <el-button class="passwd-input-append-btn" icon="el-icon-view"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-row class="captcha-input-title-block" :type="flex" :justify="start" :align="middle">
                    <el-col class="captcha-input-title-block-text" :span="24">
                        <p>
                            <span>&nbsp;验证码</span><span> *</span>
                        </p>
                    </el-col>
                </el-row>
                <el-form-item class="captcha-input-block">
                    <el-input class="captcha-input-block-input" placeholder="输入验证码" v-model="captchaInput">
                        <template slot="prepend">
                            <el-image class="captcha-input-prepend-img" :src="captchaInputPrependImgSrc"
                                :fit="contain" />
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item class="register-btn-block">
                    <el-button type="primary">注册</el-button>
                </el-form-item>
                <el-form-item class="login-btn-block">
                    <el-button @click="switchToRegisterPage">登录</el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginLeftBgLayoutSrc: require('@assets/login/login-left-bg-layout.svg'),
            loginLeftBgAnimeImgSrc: require('@assets/login/login-left-bg-anime-img.png'),
            logoImgSrc: require('@assets/logo.png'),
            accountInputPrependImgSrc: require('@assets/login/login-account-icon.svg'),
            passwdInputPrependImgSrc: require('@assets/login/login-passwd-icon.svg'),
            passwdInputAppendImgSrc: require('@assets/login/login-passwd-visible-icon.svg'),
            captchaInputPrependImgSrc: require('@assets/login/login-captcha-img.jpg'),
            accountInput: '',
            passwdInput: '',
            captchaInput: '',
            loginOrRegister: true
        }
    },
    methods: {
        switchToRegisterPage() {
            this.loginOrRegister = !this.loginOrRegister;
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
    top: 20%;
    width: 360px;
    height: 500px;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .login-form-logo-img {
        width: 50%;
        margin-right: auto;
    }

    .login-form {
        width: 100%;
        height: 100%;
        background-color: #303641;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 20px 25px 0px 25px;

        .usher {
            margin: 0 0 30px 0;

            p {
                font-size: 24px;
                color: #92A0B1;
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
        }

        .account-input-block {
            margin: 3px 0 12px 0;
            width: 100%;

            .account-input-block-input {
                width: 100%;
                height: 34px;

                ::v-deep .el-input__inner {
                    height: 34px;
                }

                ::v-deep .el-input-group__prepend {
                    padding: 0 12px 0 12px;
                    background-color: #353C48;
                    border-color: #555555;
                }

                .account-input-prepend-img {
                    width: 20px;
                    height: 20px;
                }
            }
        }

        .passwd-input-title-block {
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            justify-content: flex-start;
            font-size: 14px;
            font-weight: 700;

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
        }

        .passwd-input-block {
            margin: 3px 0 1px 0;
            width: 100%;

            .passwd-input-block-input {
                width: 100%;
                height: 34px;

                ::v-deep .el-input__inner {
                    height: 34px;
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

                .passwd-input-prepend-img {
                    width: 20px;
                    height: 20px;
                }

                .passwd-input-append-img {
                    width: 20px;
                    height: 20px;
                }
            }
        }

        .forget-passwd-block {
            .forget-passwd-block-text {
                display: flex;
                justify-content: flex-end;
                align-items: center;

                ::v-deep .el-link--inner {
                    font-weight: 700;
                    font-size: 14px;
                }
            }
        }

        .captcha-input-title-block {
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            justify-content: flex-start;
            font-size: 14px;
            font-weight: 700;

            .captcha-input-title-block-text {
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
        }

        .captcha-input-block {
            margin: 3px 0 20px 0;
            width: 100%;

            .captcha-input-block-input {
                width: 100%;
                height: 34px;
                border-color: #555555;

                ::v-deep .el-input__inner {
                    height: 34px;
                }

                ::v-deep .el-input-group__prepend {
                    padding: 0;
                    background-color: #353C48;
                    border-color: #555555;
                }

                .captcha-input-prepend-img {
                    width: 80px;
                    height: 100%;
                }
            }
        }

        .login-btn-block {
            margin: 20px 0 10px 0;

            ::v-deep .el-button {
                width: 100%;
                height: 40px;
            }
        }

        .register-btn-block {
            ::v-deep .el-button {
                width: 100%;
                height: 40px;
            }
        }
    }
}


.register-form-block {
    z-index: 3;
    position: absolute;
    top: 15%;
    width: 360px;
    height: 560px;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .register-form-logo-img {
        width: 50%;
        margin-right: auto;
    }

    .register-form {
        width: 100%;
        height: 100%;
        background-color: #303641;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 20px 25px 0px 25px;

        .usher {
            margin: 0 0 30px 0;

            p {
                font-size: 24px;
                color: #92A0B1;
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
        }

        .account-input-block {
            margin: 3px 0 12px 0;
            width: 100%;

            .account-input-block-input {
                width: 100%;
                height: 34px;

                ::v-deep .el-input__inner {
                    height: 34px;
                }

                ::v-deep .el-input-group__prepend {
                    padding: 0 12px 0 12px;
                    background-color: #353C48;
                    border-color: #555555;
                }

                .account-input-prepend-img {
                    width: 20px;
                    height: 20px;
                }
            }
        }

        .passwd-input-title-block {
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            justify-content: flex-start;
            font-size: 14px;
            font-weight: 700;

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
        }

        .passwd-input-block {
            margin: 3px 0 12px 0;
            width: 100%;

            .passwd-input-block-input {
                width: 100%;
                height: 34px;

                ::v-deep .el-input__inner {
                    height: 34px;
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

                .passwd-input-prepend-img {
                    width: 20px;
                    height: 20px;
                }

                .passwd-input-append-img {
                    width: 20px;
                    height: 20px;
                }
            }
        }

        .captcha-input-title-block {
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            justify-content: flex-start;
            font-size: 14px;
            font-weight: 700;

            .captcha-input-title-block-text {
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
        }

        .captcha-input-block {
            margin: 3px 0 20px 0;
            width: 100%;

            .captcha-input-block-input {
                width: 100%;
                height: 34px;
                border-color: #555555;

                ::v-deep .el-input__inner {
                    height: 34px;
                }

                ::v-deep .el-input-group__prepend {
                    padding: 0;
                    background-color: #353C48;
                    border-color: #555555;
                }

                .captcha-input-prepend-img {
                    width: 80px;
                    height: 100%;
                }
            }
        }

        .login-btn-block {
            ::v-deep .el-button {
                width: 100%;
                height: 40px;
            }
        }

        .register-btn-block {
            margin: 20px 0 10px 0;

            ::v-deep .el-button {
                width: 100%;
                height: 40px;
            }
        }
    }
}

</style>