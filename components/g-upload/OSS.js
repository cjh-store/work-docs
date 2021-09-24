import axios from "axios";
import md5 from "md5";
import qs from "qs";
import { Loading } from "element-ui";

let token;
function getOssSignature(data) {
  return axios.post(
    "https://api-test-pen-v2.shenzhoutianyu.com" + "/oss/signature",
    qs.stringify(data),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        token: token,
      },
    }
  );
}

function login(data) {
  return axios.post(
    "https://api-test-pen.shenzhoutianyu.com/api/" + "/login/login-user",
    qs.stringify({ mobile: "dpc0827", checkPass: "dpc0827", type: 1 }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        token,
      },
    }
  );
}

login().then(({ data }) => {
  token = data.data.token;
});

class OSS {
  OSSAccessKeyId; // Bucket拥有者的AccessKey ID
  policy; // Policy规定了请求表单域的合法性
  signature; // 根据AccessKey Secret和Policy计算的签名信息
  dir; // 上传目录
  host; // 上传请求地址
  type;
  loading;
  constructor(config) {
    console.log("config => ", config);
    let { type } = config;
    this.type = type;
  }

  async getSignature() {
    await getOssSignature({ type: this.type }).then(({data}) => {
      this.OSSAccessKeyId = data.data.accessid;
      this.policy = data.data.policy;
      this.signature = data.data.signature;
      this.dir = data.data.dir;
      this.host = data.data.host;
    });
  }

  /* 单个上传文件至oss */
  async uploadOSS({ name, raw, index = "", single }) {
    console.log("raw => ", raw);
    if (single) await this.getSignature();
    let formData = new FormData();
    let dirName = this.dir + md5(name) + new Date().getTime() + this.type;
    formData.set("Content-Disposition", `attachment;filename=${name}`);
    formData.set("OSSAccessKeyId", this.OSSAccessKeyId);
    formData.set("policy", this.policy);
    formData.set("signature", this.signature);
    formData.set("dir", this.dir);
    formData.set("success_action_status", "200");
    formData.set("key", dirName);
    formData.set("file", raw);
    let form = {
      name, // 原始名字
      dirName, // 拼接后的名字
      index,
    };
    return new Promise((resolve, reject) => {
      axios
        .post(this.host, formData, { showLoading: false })
        .then((res) => {
          resolve(form);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  /* 通过g-upload 上传表单文件 */
  uploadFiles(data) {
    return new Promise(async (resolve, reject) => {
      await this.getSignature();
      let keys = Object.keys(data);
      // 开启loading
      this.loading = this.loadingOpen();
      for (let index = 0; index < keys.length; index++) {
        let key = keys[index];
        // 判断是否是文件数组
        if (data[key] instanceof Array && data?.[key]?.[0]?.raw) {
          let newFileArr = [];
          for (let index2 = 0; index2 < data[key].length; index2++) {
            await this.uploadOSS({ ...data[key][index2], index: index2 }).then(
              (res) => {
                newFileArr[res.index] = res.dirName;
              }
            );
          }
          data[key] = String(newFileArr);
        }
      }
      resolve(data);
    });
  }

  loadingOpen() {
    let loading;

    loading = Loading.service({
      text: "拼命加载中...",
      background: "hsla(0,0%,100%,.8)",
      // spinner: 'vab-loading-type3',
      spinner: "inner-circles-loader",
      target: "body",
    });

    return loading;
  }

  closeLoading() {
    this.loading.close();
  }
}

export default OSS;
