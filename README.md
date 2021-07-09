# subscription-link-backend
订阅链接后端，暂时直接读取txt并用base64加密

## 食用方法

首先在项目目录下新建名为 `subscription-links.txt` 的文件，将分享链接粘贴在里面，多个分享链接用逗号或者换行分开，然后安装依赖：

```shell
yarn
```

之后使用

```shell
yarn run test
```

或者

```shell
node index.js
```

运行。

程序将运行在 `23334` 端口上。

