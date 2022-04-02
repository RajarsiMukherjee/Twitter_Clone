import {Avatar} from "@mui/material"
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import "./Logout.css";

export const Logout = ({user}) => {
    return(
        <div className="logOut">
            <Avatar className="sidebar__avatar"/>
            <div className="sidebar_user">
                <div className="logout_dispname">{user}</div>
                <div className="logout_username">@{user}</div>
            </div>
            <MoreHorizOutlinedIcon className="logout_more"/>
        </div>
    )
}