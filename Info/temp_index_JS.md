# 1번 코드
```
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
```

<br><br><br>
authenticate" 경로로 오는 POST 요청을 처리하고, 요청에서 받은 "username" 값을 응답으로 클라이언트에게 반환하는 라우트 핸들러
<br><br>
※ 라우트 핸들러 : 프레임워크에서 특정 경로에 대한 요청을 처리하기 위해 작성된 함수. 
<br><br>
클라이언트로부터 요청이 들어왔을 때, 해당 요청을 처리하고 응답을 반환하는 역할을 수행
<br><br>
ex) 
<br><br>
```
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});
```
<br><br>
클라이언트가 "/hello" 경로로 GET 요청을 보내면 해당 라우트 핸들러 함수가
<br><br>
실행되어 "Hello, World!"라는 응답이 클라이언트에게 전송

<br><br><br><br>

1번 코드를 index.js에 저장하고, request.rest 파일을 생성
<br><br>
![image](https://github.com/domino0628/Fuallstack-Chat/assets/59598751/ebc53d58-74e0-419a-acee-e65eb29b967b)
<br><br>
```
HTTP/1.1 200 OK
X-Powered-By: Express
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 40
ETag: W/"28-5P3udHMjXkW9Fq/cvIJdBgTPZkQ"
Date: Thu, 22 Jun 2023 12:47:39 GMT
Connection: close

{
  "username": "adam",
  "secret": "sha256..."
}
```
<br><br>
서버는 요청을 처리하고 200 OK 상태로 응답
<br><br>
응답 헤더에는 "X-Powered-By", "Vary", "Content-Type", "Content-Length", "ETag", "Date", "Connection" 등의 정보가 포함
<br><br>
응답 본문에는 JSON 형식으로 {"username": "adam", "secret": "sha256..."} 데이터가 포함

