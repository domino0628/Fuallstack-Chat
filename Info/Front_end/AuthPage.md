# 인증페이지에 대한 함수(컴포넌트) 정의
```
const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      props.onAuth({ username: value, secret: value });
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">HEJ! 👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;
  ```
<br><br>
인증 페이지를 나타내며, 사용자가 유저네임을 입력하여 인증을 진행할 수 있는 UI를 생성
<br><br>
터미널 생성뒤
<br><br>
```
cd frontend
npm install
npm run dev
```
![image](https://github.com/domino0628/Fuallstack-Chat/assets/59598751/cdbd3c57-f84c-42e5-8217-7bf1648c0442)
<br><br>
해당 URL에 접속하면, 위에서 설정한 UI가 렌더링된다
<br><br>
![image](https://github.com/domino0628/Fuallstack-Chat/assets/59598751/0c5b7ab6-c323-4ff4-8f7b-386ed4a8635b)


