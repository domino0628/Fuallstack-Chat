# 
```
POST http://localhost:3001/authenticate
Content-Type: application/json

{
    "username" : "kimmy"
}
```
<br><br>
http://localhost:3001/authenticate 경로로 데이터를 전송 -> 해당 경로에 대한 서버 측 코드가 실행
<br><br>
-> 그에 따라 지정한 동작 수행. 위의 예제 코드에서는 사용자 인증을 위해 Chat Engine API로 데이터를 전송
<br><br>
send request시 지정된 URL에 POST 요청을 보내고 본문에 JSON 데이터를 첨부
![image](https://github.com/domino0628/Fuallstack-Chat/assets/59598751/a84eabfe-ebc0-42f5-83b8-4dd9677a8fe8)

<br><br>
서버는 해당 요청을 받아 처리
<br><br>
send request 명령어의 실행 결과로 응답 상태 코드, 헤더 및 본문 데이터가 표시
<br><br>
```
HTTP/1.1 201 Created
X-Powered-By: Express
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 351
ETag: W/"15f-Me6wC19faYz7jNqEqo+T7vNANa8"
Date: Sat, 24 Jun 2023 04:36:28 GMT
Connection: close

{
  "id": 281953,
  "is_authenticated": true,
  "last_message": {
    "text": "",
    "created": "",
    "attachments": []
  },
  "username": "kimmy",
  "secret": "pbkdf2_sha256$260000$xHQCfXxR6emDeWG26k9iw2$v04lJtVK2pQEOqAQ8OjhTcn1N3erS4G4Gxsm42uOEyc=",
  "email": "",
  "first_name": "kimmy",
  "last_name": "",
  "avatar": null,
  "custom_json": "{}",
  "is_online": false,
  "created": "2023-06-24T05:38:19.440337Z"
}
```
<br><br>
User에 Kimmy가 생성되었다.
![image](https://github.com/domino0628/Fuallstack-Chat/assets/59598751/b08ee52a-1b1f-4708-b112-e68d5983a585)
