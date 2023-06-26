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