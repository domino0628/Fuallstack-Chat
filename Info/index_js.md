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
