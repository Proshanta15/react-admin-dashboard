import React from 'react';
import './topbar.css';

import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarwraper">
                <div className="topLeft">
                    <span className="logo">
                        Proshanta
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />                      
                    </div>
                    <img src="https://picsum.photos/200/300" alt="logo" className="toAvatar" />
                </div>
            </div>
        </div>
    )
}
