import * as React from "react";

export class Home extends React.Component<{}, {}>
{
    render ()
    {
        return (
            <section id="home">
                <div className="landing">
                    <div className="logo">
                        <img src={'src/assets/img/logo.svg'} />
                    </div>

                    <h1>BotMyst</h1>

                    <h2>Highly customizable Discord bot</h2>

                    {/* TODO: Create a proper invite link */}
                    <a href="#" className="button button-primary">Invite</a>
                    <a href="/guilds" className="button">Dashbboard</a>
                </div>
            </section>
        );
    }
}