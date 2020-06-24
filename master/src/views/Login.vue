<template>
  <div class="login-page">
    <!-- 背景图 -->
    <img v-if="bgImage" class="login-page-bg" :src="bgImage" alt="登陆背景图" />
    <!-- 登陆表单 -->
    <div class="login-form-box">
      <el-form :model="loginForm" :rules="loginRules" ref="login-form">
        <el-form-item label="账号" prop="account">
          <el-input
            v-model="loginForm.account"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="align-right login-button">
        <el-button
          type="primary"
          class="width-full"
          @click="handleLogin('login-form')"
          >立即登录</el-button
        >
      </div>
      <div class="login-link-box">
        <div>立即注册</div>
        <div>忘记密码</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBingHpImageApi } from "@/api/index.js"; // 导入接口

/**
 * @name 登陆表单校验
 * @param {String} formName 表单ref名
 * @param {Object} ctx 上下文
 */
const loginValidate = (formName, ctx) => {
  return new Promise(resolve => {
    ctx.$refs[formName].validate(valid => {
      resolve(valid);
    });
  });
};

export default {
  name: "login-page",
  data() {
    return {
      bgImage: null,
      loginForm: {
        account: "xhzq", // 账号
        password: "123456" // 密码
      },
      loginRules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  mounted() {
    // 随机取用一张背景图
    const _default_bingimg_params = {
      format: "js",
      idx: 0,
      n: 8,
      mkt: "zh-CN"
    };
    getBingHpImageApi(_default_bingimg_params).then(res => {
      // 背景图列表变量
      let bgImageList = [];
      bgImageList = res.images;
      if (Array.isArray(bgImageList)) {
        let _random_num = Math.floor(Math.random() * bgImageList.length);
        this.bgImage = `https://cn.bing.com/${bgImageList[_random_num].url}`;
      }
    });
  },
  methods: {
    async handleLogin(name) {
      // 登录表单验证
      const _va_login = await loginValidate(name, this);
      // 验证通过调用登陆接口
      if (!_va_login) return;
      const token = "xhzq";
      this.$store.dispatch("app/setToken", token);
    }
  }
};
</script>

<style lang="scss">
.login-page {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  > .login-form-box {
    position: fixed;
    top: 40%;
    left: 50%;
    margin-top: -160px;
    margin-left: -230px;
    width: 460px;
    height: 320px;
    padding: 15px;
    background: rgba(245, 245, 245, 0.6);
    box-shadow: 0px 0px 4px 6px #f3f3f3;

    .login-button {
      padding-top: 20px;
    }

    .login-link-box {
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
      cursor: pointer;
    }
  }
}
</style>
