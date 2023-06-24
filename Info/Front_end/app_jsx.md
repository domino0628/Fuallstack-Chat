```
import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
```
만약 유저를 찾을 수 없으면, Authpage를 렌더링한다.
<br><br>
아니면 Chatpage를 렌더링
<br><br>
※ 렌더링(Rendering) : 컴퓨터 프로그램이나 스크립트가 데이터와 코드를 기반으로 화면에 그래픽이나 UI를 생성하는 과정, 즉 화면으로 나타나게 하는 과정
