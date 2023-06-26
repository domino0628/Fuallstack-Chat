```
import axios from 'axios'
const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post('http://localhost:3001/authenticate',
      {username : value})
      .then(r => props.onAuth({...r.data, secret: value}))
      .catch(e => console.log('error',e))
    
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
```
import axios from 'axios'
const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post('http://localhost:3001/authenticate',
      {username : value})
      .then(r => props.onAuth({...r.data, secret: value}))
      .catch(e => console.log('error',e))
    
    };
```
<br><br>
차이점 
<br><br>
응답 데이터 가공: 첫 번째 코드에서는 axios의 .then 블록을 사용하여 서버로부터 받은 응답 데이터를 가공할 수 있음

<br><br>
응답 데이터를 원하는 형식으로 변환하거나 필요한 정보를 추출하여 다른 컴포넌트로 전달하는 등의 작업을 수행가능

<br><br>
이를 통해 서버와의 상호작용에서 얻은 데이터를 애플리케이션의 다른 부분에서 활용할 수 있음
