import AvatarContainer from "./avatarContainer/avatarContainer";
import AnneBiography from "./anneBiography/anneBiography";
import { useSelector } from "react-redux";
import "./leftColumn.css";

export default function LeftColumn() {
    const loading = useSelector((state: any) => state.ChatLoading.loading);
    return <>
        <div className="left-column">
            <AvatarContainer />
            <AnneBiography/>
            {loading && <div className="loading-container">
                <img src="./icons/typing.gif" alt="typing" className="loading-gif" />
                <span className="loading-message"> Anne is writing </span>
            </div>}
        </div>
    </>
}