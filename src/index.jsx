import * as React from 'react';
import * as Slider from 'omni-slider';

export class OmniSlider extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div ref="sliderRoot">

            </div>
        )
    }
    onSliderMoveStop(positions) {
        this.props.onChange(positions);
    }
    componentDidMount() {
        const slider = new Slider(
            this.refs.sliderRoot,
            {
                isOneWay: false,
                ...this.props.options
            }
        );
        function noop() {

        }
        this.stopUnsubscriber = slider.subscribe('stop', this.props.onFinish || noop);
        this.startUnsubscriber = slider.subscribe('start', this.props.onStart || noop);
        this.movingUnsubscriber = slider.subscribe('moving', this.props.onChange || noop);
    }
    componentWillUnmount() {
        this.stopUnsubscriber();
        this.startUnsubscriber();
        this.movingUnsubscriber();
    }
}

OmniSlider.propTypes = {
    onChange: React.PropTypes.func,
    onStart: React.PropTypes.func,
    onFinish: React.PropTypes.func,
    options: React.PropTypes.object
};

export default OmniSlider;