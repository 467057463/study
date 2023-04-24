import * as React from 'react'
import * as Server from 'react-dom/server'
import { __test } from './utils'

import logo from './assets/logo.png';

let image = new Image();
image.src = logo;
document.body.appendChild(image);

let Greet = () => <h1>Hello, world!{__test}</h1>
console.log(Server.renderToString(<Greet />))