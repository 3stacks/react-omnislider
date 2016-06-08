import React from 'react';
import reactDom from 'react-dom';
import OmniSlider from '../../../index';

const mainElement = document.getElementById('root');

function onPropChanged(propName, newValue) {
    switch(propName) {
        case 'slider1':
            appState.data.slider1 = newValue;
            break;
        case 'slider2':
            appState.data.slider2 = newValue;
            break;
        case 'slider3':
            appState.data.slider3 = newValue;
            break;
        case 'slider4':
            appState.data.slider4 = newValue;
            break;
        case 'slider5':
            appState.data.slider5 = newValue;
            break;
        default:
            console.log(propName);
    }
    doRender()
}

const appState = {
    data: {
        slider1: {
            left: 0,
            right: 100
        },
        slider2: {
            left: '2015-08-12T12:22',
            right: '2015-08-12T16:21'
        },
        slider3: {
            left: '2014-08-01T00:00',
            right: '2014-07-31T23:59'
        },
        slider4: {
            left: 100,
            right: 200
        }
    }
};

const Demo = function(props) {
    return (
        <div style={{width: "50%"}}>
            <p>
                One Way Slider that calls function while the slider is moving
            </p>
            <pre>
                { JSON.stringify(appState.data.slider1) }
            </pre>
            <OmniSlider options={{ isOneWay: true }} onChange={positions => onPropChanged('slider1', positions)}/>
            <p>
                A Two Way Slider with a date range
            </p>
            <pre>
                { JSON.stringify(appState.data.slider2) }
            </pre>
            <OmniSlider 
                options={{
                    isDate: true,
                    min: "2015-08-12T03:00",
                    max: "2015-08-12T23:59",
                    start: "2015-08-12T12:22",
                    end: "2015-08-12T16:21",
                    overlap: false
                }}
                onChange={ positions => onPropChanged('slider2', positions)}
            />
            <p>
                Value - with overlap, fly theme, start/end
            </p>
            <pre>
                { JSON.stringify(appState.data.slider3) }
            </pre>
            <OmniSlider
                options={{
                    isDate: true,
                    min: "2014-01-01T00:00",
                    max: "2015-08-12T23:59",
                    start: "2014-08-01T00:00",
                    end: "2014-07-31T23:59",
                    overlap: true
                }}
                onChange={ positions => onPropChanged('slider3', positions)}
            />
            <p>
                Value - with overlap, fly theme, start/end
            </p>
            <pre>
                { JSON.stringify(appState.data.slider4) }
            </pre>
            <OmniSlider
                options={{
                    isDate: false,
                    min: 0,
                    max: 365,
                    start: 100,
                    end: 200,
                    overlap: true
                }}
                onChange={ positions => onPropChanged('slider4', positions)}
            />
        </div>
    );
};

function doRender() {
    reactDom.render(<Demo/>, mainElement);
}

doRender();