import React from 'react';
import server from 'react-dom/server';

let Greet = () => <h1>hello world</h1>
console.log(server.renderToString(<Greet/>))