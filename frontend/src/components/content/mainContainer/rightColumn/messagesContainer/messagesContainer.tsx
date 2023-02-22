import { useSelector } from 'react-redux';
import { useRef, useEffect }  from 'react';
import './messagesContainer.css';

export default function MessagesContainer() {
    const messages = useSelector((state: any) => state.MessagesList.messages);
    const chatViewRef: any = useRef();
    function scrollToBottom() {
        chatViewRef.current.scrollTop = chatViewRef.current.scrollHeight;
    }
    useEffect(() => {
        if(messages?.length > 0) scrollToBottom();
    },[messages])
    return <>
        <div className="messages-container" ref={chatViewRef}>
            {messages?.length > 0 ? <>
                {messages.map((message: any, index: number) => {
                    if (message.sender === "anne") {
                        return (
                            <div className="anne-msg-container" key={index}>
                                <span className='anne-name'> Anne </span>
                                <span className="anne-msg"> {message.message} </span>
                            </div>
                        );
                    } else {
                        return (
                            <div className="user-msg-container" key={index}>
                                <span className='user-name'> You </span>
                                <span className="user-msg"> {message.message} </span>
                            </div>
                        );
                    }
                })}
            </> : <>
                <div className="empty-msg-container">
                    <img src="./icons/brain.png" alt="brain" className="empty-msg-icon" draggable={false}/>
                    <h3 className="empty-msg" > Anne AI </h3>
                </div>
            </>}
        </div>
    </>
}