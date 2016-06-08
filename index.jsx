import React from 'react';
import Slider from 'omni-slider';

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
        this.stopUnsubscriber = slider.subscribe('stop', this.onSliderMoveStop.bind(this))
    }
    componentWillUnmount() {
        this.stopUnsubscriber();
    }
}

OmniSlider.propTypes = {
    leftValue: React.PropTypes.number.isRequired,
    rightValue: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired,
    options: React.PropTypes.object
};

export default OmniSlider;