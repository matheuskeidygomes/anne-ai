import "./mainContainer.css";
import { useSelector, useDispatch } from 'react-redux';
import { setVisibility } from '../../../redux/reducers/ChatVisibilityReducer';
import LeftColumn from "./leftColumn/leftColumn";
import RightColumn from "./rightColumn/RighColumn";

export default function MainContainer() {
    const dispatch = useDispatch();
    const showAnneScreen = useSelector((state: any) => state.ChatVisibility.show);
    function closeChat() {
        dispatch(setVisibility(!showAnneScreen));
    }
    return <>
        <div className='main-container'>
            <div className="main-container-header">
                <img src="./icons/close.png" alt="close" className="close-anne-screen-icon" title="Close" onClick={() => closeChat()} />
            </div>
            <div className="main-container-columns">
                <LeftColumn />
                <RightColumn />
            </div>
        </div>

    </>
}