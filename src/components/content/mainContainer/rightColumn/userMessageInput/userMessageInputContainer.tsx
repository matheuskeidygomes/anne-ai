import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import callAnne from '../../../../../services/openAI';
import { addMessage } from '../../../../../redux/reducers/MessageListReducer';
import { setLoading } from '../../../../../redux/reducers/ChatLoadingReducer';
import './userMessageInputContainer.css';

export default function UserMessageInputContainer() {

    const [userMessage, setUserMessage] = useState("");
    const dispatch = useDispatch();
    const loading = useSelector((state: any) => state.ChatLoading.loading);
    const inputIcons: object[] = [
        {
            title: "Click to send your message",
            src: "./icons/send.png",
            alt: "send",
            onClick: (event: any) => sendMessageWithClick(event),
        },
        // {
        //     title: "Click to record an audio",
        //     src: "./icons/record.png",
        //     alt: "record",
        //     onClick: (event: any) => console.log(event),
        // },
        // {
        //     title: "Click to pause the recording",
        //     src: "./icons/pause.png",
        //     alt: "pause",
        //     onClick: (event: any) => console.log(event),
        // },
        // {
        //     title: "Click to play the recording",
        //     src: "./icons/play.png",
        //     alt: "play",
        //     onClick: (event: any) => console.log(event),
        // },
        // {
        //     title: "Click to stop the recording",
        //     src: "./icons/stop.png",
        //     alt: "stop",
        //     onClick: (event: any) => console.log(event),
        // },
    ];

    async function sendMessageWithEnter(event: any) {
        if (event.keyCode === 13 && event.shiftKey === false && userMessage.trim() !== "") {
            event.preventDefault();
            await callAnneApi();
            focusInput();
        }
    }

    async function sendMessageWithClick(event: any) {
        if (userMessage.trim() !== "") {
            event.preventDefault();
            await callAnneApi();
            focusInput();
        }
    }

    async function callAnneApi() {
        setUserMessage("");
        changeLoading(true);
        dispatch(addMessage({ id: 0, sender: "user", message: userMessage }));
        const anneMessage = await callAnne(userMessage);
        dispatch(addMessage({ id: 0, sender: "anne", message: anneMessage }));
        changeLoading(false);
    }

    function changeLoading(active: boolean) {
        dispatch(setLoading(active));
    }

    function focusInput() {
        const input = document.querySelector(".user-message-input") as HTMLInputElement;
        input?.focus();
    }

    function renderIcons() {
        return <>
            {inputIcons.map((icon: any, index: number) => {
                return <img
                    className="input-icon"
                    title={icon.title}
                    src={icon.src}
                    alt={icon.alt}
                    onClick={(event) => loading ? null : icon.onClick(event)}
                    key={index}
                    draggable={false}
                />
            })}
        </>
    }

    return <>
        <div id="user-message-container">
            <textarea
                className="user-message-input"
                value={userMessage}
                onKeyDown={(event) => sendMessageWithEnter(event)}
                onChange={(event) => setUserMessage(event.target.value)}
                disabled={loading}
            />
            {renderIcons()}
        </div>
    </>
}