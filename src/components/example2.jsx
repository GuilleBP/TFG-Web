import React from 'react';
import { Example1 } from './example1';
import { Example2 } from './example2';
// import {Proyects} from './components/proyects'

export function All() {
    var html = (
        <div>
            <button onClick= {() => Example1()}>
                Example1
            </button>
            <button onClick= {() => Example2()}>
                Example2
            </button>
            <div id='main'>
            </div>
        </div>
    )
    for (var i = 0; i < 10; i++)
        return (
            <React.Fragment>
                {html}
            </React.Fragment>
        );
}