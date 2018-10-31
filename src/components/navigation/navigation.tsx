import * as React from "react";
import { NavLink } from "react-router-dom";

interface State
{
    navigationVisible : boolean;
}

export class Navigation extends React.Component<{}, State>
{
    constructor (props : any)
    {
        super (props);

        this.state =
        {
            navigationVisible: false
        };
    }

    render ()
    {
        return (
            <header>
                <nav className={"row" + (this.state.navigationVisible ? " navigationActive": "")} id="navigation">
                    <div className="twelve columns">
                        <div className="logo">
                            <img src={'src/assets/img/logo.svg'} />
                        </div>
                    

                        <a href="#" onClick={() => this.toggle ()} className="menuToggle">MENU <i className="fa fa-bars"></i></a>

                        <ul>
                            <li><a href="/">Home</a></li>
                            {/* TODO: Set a proper invite link */}
                            <li><NavLink to="/">Invite</NavLink></li>
                            <li><NavLink to="/guilds">Dashboard</NavLink></li>
                            <li><a href="https://github.com/BotMyst" target="_blank">GitHub</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }

    toggle ()
    {
        this.setState ({ navigationVisible: !this.state.navigationVisible });
    }
}