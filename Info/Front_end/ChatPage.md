# UI엔진을 이용한 Chatpage 설계

npm install react-chat-engine-pretty
<br><br>
```
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style = {{height : '100vh'}}>
        <PrettyChatWindow
            projectId = 'fe3595e1-170c-4ca4-83a5-52bc5dc3ae3b'
            username= {props.user.username}
            secret = {props.user.secret}
            style = {{ height : '100%'}} 
      />
    </div>
  )
}

export default ChatsPage;
```
<br><br>
ChatsPage 컴포넌트에서 PrettyChatWindow를 사용하여 스타일링된 채팅 창을 표시하고, 컨테이너의 높이를 전체 화면 높이로 설정
