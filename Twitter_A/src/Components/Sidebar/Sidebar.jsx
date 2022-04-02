import TwitterIcon from '@mui/icons-material/Twitter';
import { SidebarLink } from '../SidebarLinks/SidebarLink';
import { Logout } from '../Logout/Logout';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {Button} from "@mui/material"
import "./Sidebar.css"


export const Sidebar = () => {
  return (
    <div className="sideBar">
      {/* Icon */}
      <TwitterIcon className= "home_twitterIcon" />
      
      {/* Option */} 
      <SidebarLink  active Icon={HomeRoundedIcon} text="Home"/>
      {/* Option */}
      <SidebarLink  Icon={ExploreOutlinedIcon} text="Explore"/>

      <SidebarLink  Icon={NotificationsOutlinedIcon} text="Notifications"/>

      <SidebarLink  Icon={MailOutlinedIcon} text="Messages"/>

      <SidebarLink  Icon={PermIdentityOutlinedIcon} text="Profile"/>

      <SidebarLink  Icon={MoreHorizOutlinedIcon} text="More"/>

      {/* Tweet Button */}
      <Button className= "sidebar__tweet_button" variant='outlined' fullWidth>Tweet</Button>
      
      {/* Logout */}
      <Logout user="userName"/>
    </div>
    
  )
}

