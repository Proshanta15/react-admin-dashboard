import './widgetSm.css'; 
import {Visibility} from '@material-ui/icons';

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://picsum.photos/id/237/200/300" alt="img" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Proshanta</span>
                        <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                <img src="https://picsum.photos/id/237/200/300" alt="img" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Proshanta</span>
                        <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                <img src="https://picsum.photos/id/237/200/300" alt="img" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Proshanta</span>
                        <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                <img src="https://picsum.photos/id/237/200/300" alt="img" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Proshanta</span>
                        <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                <img src="https://picsum.photos/id/237/200/300" alt="img" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Proshanta</span>
                        <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
