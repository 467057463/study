"use strict";
fetch('http://localhost:3001', {
    method: 'post',
    headers: {
        'Content-type': 'application/json',
    },
    credentials: "include"
    // body: JSON.stringify({
    //   name: 'mm'
    // }),
    // mode: 'cors'
})
    .then((res) => {
    return res.text();
})
    .then((res) => {
    console.log(res);
});
