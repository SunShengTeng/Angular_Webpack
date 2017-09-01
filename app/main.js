//main.js  @by angularjs
// const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());



//main.js @by react
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import '../css/main.css';//使用require导入css文件

render(<Greeter />, document.getElementById('root'));
