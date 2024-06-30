import "./chat.scss"
import  {userData} from "../../lib/dummydata"
import { useState } from "react";
function Chat(){
    const [chat, setChat] = useState(true)
    return(
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="https://img.freepik.com/premium-photo/young-redhead-man-face-side_1187-70512.jpg"/>
                    <span>Ayush</span>
                    <p>Hey, thus seems nice option for you</p>
                </div>
                <div className="message">
                    <img src="https://img.freepik.com/premium-photo/young-redhead-man-face-side_1187-70512.jpg"/>
                    <span>Ayush</span>
                    <p>Hey, thus seems nice option for you</p>
                </div>
                <div className="message">
                    <img src="https://img.freepik.com/premium-photo/young-redhead-man-face-side_1187-70512.jpg"/>
                    <span>Ayush</span>
                    <p>Hey, thus seems nice option for you</p>
                </div>
                <div className="message">
                    <img src="https://img.freepik.com/premium-photo/young-redhead-man-face-side_1187-70512.jpg"/>
                    <span>Ayush</span>
                    <p>Hey, thus seems nice option for you</p>
                </div>
                <div className="message">
                    <img src="https://img.freepik.com/premium-photo/young-redhead-man-face-side_1187-70512.jpg"/>
                    <span>Ayush</span>
                    <p>Hey, thus seems nice option for you</p>
                </div>
            </div>
            {chat && 
            <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src={userData.img} />
                        John Doe
                    </div>
                    <span className="close" onClick={()=>setChat(null)}>X</span>
                </div>
                <div className="center">
                    <div className="chatMessage own">
                        <p>Hey, What's up?</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Hey, What's up?</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Hey, What's up?</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Hey, What's up?</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Hey, What's up?</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Hey, What's up?</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Hey, What's up?</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Hey, What's up?</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Hey, What's up?</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>}
        </div>
    )
}

export default Chat;