import React from 'react';
import { render } from 'react-dom';
import OmniSlider from '../../../index.jsx';

const mainElement = document.getElementById('root');

render(<OmniSlider left={0} right={100} onChange={console.log.bind(console)}/>, mainElement);