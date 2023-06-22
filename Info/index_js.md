## Node.js와 Express 프레임워크를 사용하여 작성된 서버 사이드 JavaScript 코드
<br/><br/><br/>

※프레임워크 : 소프트웨어 개발을 위한 구조와 도구들의 집합,
<br/><br/>
애플리케이션의 개발과 운영을 보다 효율적으로 수행할 수 있도록 돕는 것
<br/><br/>
ex) django, express
<br/><br/>
※서버사이드 코드 : 서버쪽에서 실행되는 코드
<br/><br/>
```
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
```
<br/><br/>
1. express,cors,axios 모듈을 가져온다
<br/><br/>
※ 모듈 : 프레임워크는 큰 부분에서 틀을 잡아준다면, 모듈은 기능을 분리하고 코드를 모듈화하여 가독성, 재사용성 및 유지 보수성을 개선, 주로 라이브러리 형태임.
<br/><br/><br/><br/>
2. app이라는 express객체를 생성한다
<br/><br/><br/><br/>
3. express.json() 미들웨어를 사용하여 JSON 형식의 요청 바디를 파싱한다.
<br/><br/>
※미들웨어 : Express.js에서 요청과 응답 사이에서 동작하는 함수,
<br/><br/>
Express 애플리케이션에서 클라이언트로부터 전송된 요청
<br/><br/>
ex) 메시지 전송: 챗봇이 사용자로부터 입력된 메시지를 서버로 전송하여 저장하거나 다른 사용자에게 전달해야 하는 경우
<br/><br/>
의 본문을 JSON 형식으로 파싱하는 역할을 함. 
<br/><br/>
이를 통해 요청 본문에 포함된 JSON 데이터를 JavaScript 객체로 변환하여 사용함
<br/><br/><br/><br/>
4. cors 미들웨어를 사용하여 Cross-Origin Resource Sharing(CORS)를 활성화
<br/><br/>
※ cors: Cross-Origin Resource Sharing (CORS)
서로 다른 출처 간의 통신이 필요한 경우, 서버 측에서 CORS 정책을 설정하여 클라이언트에서의 요청을 허용해야함
<br/><br/>
왜? 브라우저는 보안상의 이유로 동일 출처 정책(Same-Origin Policy)를 따르는데, 
<br/><br/>
이는 한 출처(origin)에서 로드한 리소스가 다른 출처의 리소스에 접근하는 것을 제한하는 것을 의미
<br/><br/>
ex) 웹 페이지가 "http://example.com" 도메인에서 로드되었을 때, 
<br/><br/>
해당 웹 페이지에서 스크립트를 통해 "http://another-domain.com" 도메인에 있는 이미지에 접근하려고 할 때, 
<br/><br/>
동일 출처 정책(Same-Origin Policy)에 의해 접근이 제한됨
<br/><br/>
왜? 한 도메인의 리소스가 다른 도메인의 리소스에 접근하려는 시도를 방지하여 악성 스크립트로부터 사용자를 보호해야 해서
<br/><br/><br/><br/><br/><br/>
# "/signup" 엔드포인트에 대한 POST 요청 : 새로운 사용자가 가입(sign up)하려고 할 때 클라이언트에서 서버로 보내는 요청
※엔드포인트 :"/users"라는 엔드포인트는 사용자 관련 기능을 제공하는 API의 경로를 나타낸다
<br/><br/>
클라이언트가 "/users" 엔드포인트에 GET 요청을 보내면 사용자 목록을 가져올 수 있고, POST 요청을 보내면 새로운 사용자를 생성할 수 있음
<br/><br/>
```
app.post("/signup", async (req, res) => {
  const { username, secret, email, first_name, last_name } = req.body;
```
클라이언트로부터 받은 요청의 본문에서 사용자 이름(username), 비밀번호(secret), 이메일(email), 이름(first_name), 성(last_name)을 추출
```
  // Store a user-copy on Chat Engine!
  // Docs at rest.chatengine.io
  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username, secret, email, first_name, last_name },
      { headers: { "Private-Key": CHAT_ENGINE_PRIVATE_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});
```
<br/><br/>
axios를 사용하여 HTTP POST 요청을 보내는 부분 
<br/><br/>
Chat Engine API의 "/users/" 엔드포인트에 사용자 정보를 전송하고, Chat Engine 서비스로부터 응답을 받아 변수 r에 할당
<br/><br/><br/><br/>
# Express.js를 사용하여 구현된 웹 애플리케이션의 로그인 엔드포인트를 정의
```
app.post("/login", async (req, res) => {
  const { username, secret } = req.body;

  // Fetch this user from Chat Engine in this project!
  // Docs at rest.chatengine.io
  try {
    const r = await axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": CHAT_ENGINE_PROJECT_ID,
        "User-Name": username,
        "User-Secret": secret,
      },
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

// vvv On port 3001!
app.listen(3001);
```
<br/><br/>
1.POST 메서드를 사용하여 "/login" 경로로 들어오는 요청을 처리
<br/><br/>
2.const { username, secret } = req.body;: 요청의 본문(body)에서 'username'과 'secret' 값을 추출
<br/><br/>
3.const r = await axios.get("https://api.chatengine.io/users/me/", {: axios를 사용하여 Chat Engine의 API에서 현재 사용자 정보를 가져옴
<br/><br/>
4.headers: {: 요청 헤더를 정의
<br/><br/>
"Project-ID": CHAT_ENGINE_PROJECT_ID,: Chat Engine 프로젝트 식별자를 "Project-ID" 헤더로 설정.
<br/><br/>
5. 헤더와 함께 Chat Engine의 API에 GET 요청을 보내고, 반환된 결과 r에 할당
<br/><br/>
※ GET 예시
사용자가 웹 페이지에서 "상품 목록 보기" 버튼을 클릭하여 상품 목록을 조회하는 경우 -> 데이터 검색 및 조회에 사용됨
※ POST 예시
<br/><br/>
사용자가 웹 페이지에서 "주문하기" 버튼을 클릭하여 주문을 제출하는 경우,  ->  데이터를 서버로 제출하여 처리하고 저장하는 데 사용
<br/><br/>
app.listen(3001);: 3001 포트에서 서버를 실행
<br/><br/>


