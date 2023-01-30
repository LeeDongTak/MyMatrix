const compression = require('compression');
const cors = require('cors');
const https = require("https");
const fs = require("fs");
const {indexRouter} = require("./src/router/indexRouter.js");
const {userRouter} = require("./src/router/userRouter.js");

const express = require('express');
const app = express()
const port = 3000

//https 설정
const privateKey = fs.readFileSync("/etc/letsencrypt/live/leedschedule.shop/.com/privkey.pem", "utf8");
const certificate = fs.readFileSync("/etc/letsencrypt/live/leedschedule.shop/cert.pem", "utf8")
const ca = fs.readFileSync("/etc/letsencrypt/live/leedschedule.shop/chain.pem", "utf8")

const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
};

const httpsServer = https.createServer(credentials, app);

// express 미들웨어 설정

// 정적 파일 제공
app.use(express.static("front"));

// cors 설정
app.use(cors());

// body json 파싱
app.use(express.json());

// HTTP 요청 압축
app.use(compression());

// 라우터 분리
indexRouter(app);
userRouter(app);


httpsServer.listen(port, () => {
  console.log(`Express app listening at port: ${port}`);
})