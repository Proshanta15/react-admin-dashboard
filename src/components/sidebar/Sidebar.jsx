import React from 'react'
import './sidebar.css'
import {LineStyle, Timeline, 
    TrendingUp, PermIdentity, EventNote, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report} from '@material-ui/icons';
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarWrapper">
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Dashboard</h3>
                   <ul className="sidebarList">
                       <NavLink to="/" activeClassName="active" exact>
                       <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon" /> Home
                        </li>
                       </NavLink>
                       
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" /> Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" /> Sales
                        </li>                      
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Quick Menu</h3>
                   <ul className="sidebarList">
                       <NavLink activeClassName="active" exact to="/users">
                       <li className="sidebarListItem">
                            <PermIdentity className="sidebarIcon" /> User
                        </li>
                       </NavLink>

                        <NavLink activeClassName="active" exact to="/products">
                        <li className="sidebarListItem">
                            <EventNote className="sidebarIcon" /> Products
                        </li>
                        </NavLink>
                        
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" /> Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon" /> Reports
                        </li>                   
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Notification</h3>
                   <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon" /> Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon" /> Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon" /> Message
                        </li>
                        
                        
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Staff</h3>
                   <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon" /> Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" /> Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon" /> Report
                        </li>
                        
                        
                   </ul>
               </div>
               
           </div>
        </div>
    )
}
