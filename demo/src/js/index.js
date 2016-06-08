import React from 'react';
import reactDom from 'react-dom';
import OmniSlider from '../../../index';

const mainElement = document.getElementById('root');

reactDom.render(<OmniSlider left={0} right={0} onChange={console.log.bind(console)}/>, mainElement);