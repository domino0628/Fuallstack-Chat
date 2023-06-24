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
차이점 : 서버와의 통신을 위해 axios를 사용하고, 서버로부터의 응답에 따라 처리하는 추가적인 로직을 포함하였다.
