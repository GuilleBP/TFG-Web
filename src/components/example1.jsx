import React from 'react';
import {All} from './example2'

export function Proyects() {
    //<div>Proyects</div>
    const style = {
        margin: '0.5em',
        paddingLeft: 0,
        listStyle: 'none',
        backgroundColor: '#FFF',
    };
    const user = 'usernamee'
    if (user === 'username')
        return (
            <React.Fragment>
                <div className="form">
                    <form >
                        <div className="input-container">
                            <label style={style}>{user} </label>
                            <input type="text" name="uname" required />
                        </div>
                        <div className="input-container">
                            <label>Password </label>
                            <input type="password" name="pass" required />
                        </div>
                        <div className="button-container">
                            <input type="submit" />
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    else
        return (
            <React.Fragment>
                <All />
            </React.Fragment>
        );
}