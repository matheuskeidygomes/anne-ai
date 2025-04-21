import "./content.css";
import MainContainer from './mainContainer/mainContainer';
import BannerText from './bannerText/bannerText';
import Footer from "./footer/footer";
import { useSelector, useDispatch } from 'react-redux';
import { setVisibility } from '../../redux/reducers/ChatVisibilityReducer';

export default function Content() {
    const dispatch = useDispatch();
    const showAnneScreen = useSelector((state: any) => state.ChatVisibility.show);
    function openChat() {
        dispatch(setVisibility(!showAnneScreen));
    }
    return <>
        <div className="content-container">
            {showAnneScreen ? <>
                <MainContainer />
            </> : <>
                <BannerText onClick={() => openChat()} />
                <Footer />
            </>}
        </div>
    </>
}