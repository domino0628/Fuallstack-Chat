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
