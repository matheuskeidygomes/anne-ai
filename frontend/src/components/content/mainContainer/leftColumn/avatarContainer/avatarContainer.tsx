import "./avatarContainer.css";
import { useSelector } from "react-redux";

export default function AvatarContainer() {
    const loading = useSelector((state: any) => state.ChatLoading.loading);
    return <>
        <div id="avatar-container">
            {loading && <div className="avatar-saying-animation"></div>}
            <img src="./anne.png" className="avatar-image" alt="avatar" draggable={false}/>
        </div>
    </>
}