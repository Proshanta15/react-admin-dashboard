import './user.css';
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';


export default function User() {
return (
<div className="user">
    <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <NavLink activeClassName="active" exact to="/newuser">
        <button className="userAddButton">Create</button>
        </NavLink>
        
    </div>
    <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="https://picsum.photos/200/300" alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUserName">Proshanta</span>
                    <span className="userShowUserTitle">React Developer</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                    <PermIdentity className="userShowIcon" />
                    <span className="userShowInfoTile">proshanta1996</span>
                </div>
                <div className="userShowInfo">
                    <CalendarToday className="userShowIcon" />
                    <span className="userShowInfoTile">08.01.1997</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                    <PhoneAndroid className="userShowIcon" />
                    <span className="userShowInfoTile">+8801700000000</span>
                </div>
                <div className="userShowInfo">
                    <MailOutline className="userShowIcon" />
                    <span className="userShowInfoTile">pro@gmail.com</span>
                </div>
                <div className="userShowInfo">
                    <LocationSearching className="userShowIcon" />
                    <span className="userShowInfoTile">Dhaka, Bangladesh</span>
                </div>
            </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit </span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder="proshanta1996" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder="proshanta" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="number" placeholder="+8801700000000" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="email" placeholder="pro@gmail.com" className="userUpdateInput" />
                        </div>
                        
                        <div className="userUpdateItem">
                            <label>Location</label>
                            <input type="text" placeholder="Dhaka, Bangladesh
" className="userUpdateInput" />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://picsum.photos/200/300" alt="" className="userUpdateImg" />
                            <label htmlFor="file"> <Publish className="userUpdateIcon"/> </label>
                            <input type="file" id="file" style={{ display: "none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            
        </div>
    </div>
</div>
)
}