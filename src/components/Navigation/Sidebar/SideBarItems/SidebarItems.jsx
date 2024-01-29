import Home from './Home'
import Notifications from './Notifications'
import Search from './Search'
import Create from './Create'
import Profile from './Profile'

const SidebarItems = () => {
    return (
        <>
            <Home />
            <Search/>
            <Notifications/>
            <Create/>
            <Profile/>
        </>
    )
}

export default SidebarItems