import { memo } from "react";
import { Link } from "react-router-dom";
import { Route } from "../../Layout/Route";
import "./Sidebar.scss";

function Sidebar(props) {
    return (
        <div className="sidebar__body" style={{ width: props.isClose ? '4%' : null }}>
            <div className="sidebar__container">
                <div className="sidebar__logo">
                    <span className={props.isClose ? 'd-none' : null}>
                        Admin<span className="text-warning">.</span>
                    </span>
                    <i className="bi bi-list" onClick={props.handleToggle}></i>
                </div>
                <div className="sidebar__item">
                    {Route.map((route, index) => {
                        return (
                            <Link to={route.path} key={index}>
                                <div className="sidebar__link">
                                    <i className={route.icon}></i>
                                    <span className={props.isClose ? 'd-none' : null}> {route.name} </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default memo(Sidebar);
