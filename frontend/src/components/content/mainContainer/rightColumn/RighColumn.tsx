import './RightColumn.css'
import MessagesContainer from './messagesContainer/messagesContainer'
import UserMessageInputContainer from './userMessageInput/userMessageInputContainer'

export default function RightColumn() {
    return <>
        <div className="right-column">
            <MessagesContainer />
            <UserMessageInputContainer />
        </div>
    </>
}