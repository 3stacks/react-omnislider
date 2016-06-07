import React from 'react';
import { render } from 'react-dom';
import OmniSlider from '../components/index.jsx';
import HelloWorld from '../components/hello-world.jsx';

const mainElement = document.getElementById('root');

render(<OmniSlider left={0} right={100} onChange={console.log.bind(console)}/>, mainElement);