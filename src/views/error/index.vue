<template>
    <div class="error">
        <div class="tips-block">
            <el-image class="error-img" :src="errorImgSrc" />
            <p><span>系统出现无法预估的错误，请返回首页</span></p>
            <el-button size="middle">返回首页</el-button>
        </div>
        
        <svg class="waves" viewBox="0 24 150 24" preserveAspectRatio="none">
            <defs>
                <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <use class="wave" xlink:href="#wave" fill="#50596A" x="50" y="0"></use>
        </svg>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            errorImgSrc: require('@/assets/error-page/error-img.png'),
        }
    },
}
</script>
  
<style lang="scss" scoped>
.error{
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background-color: #353C48;

    .waves{
        width:100%;
        height: 40%;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
    }

    .tips-block {
        z-index: 1;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        height: 500px;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .error-img {
            width: 300px;
            height: 300px;
        }

        p {
            font-size: 20px;
            color: #92A0B1;
        }
    }
}
</style>
  