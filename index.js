const Koa = require("koa");
const app = new Koa();
var fs = require('fs');
var CryptoJS = require("crypto-js");

app.use(async(ctx) => {
  var data = fs.readFileSync("subscription-links.txt").toString();
  var wordArray = CryptoJS.enc.Utf8.parse(data);
  ctx.body = CryptoJS.enc.Base64.stringify(wordArray);
});

app.listen("23334");
console.log("The server is listening on 23334.");