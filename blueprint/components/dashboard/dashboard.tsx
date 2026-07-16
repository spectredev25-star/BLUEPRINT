import SideBar from "./Sidebar";
import Topbar from './Topbar';
import Welcome from "./Welcome";

export default function Dashboard(){
    return(
        <>
        <Welcome />
        <SideBar />
        <Topbar />
        </>
    )
}