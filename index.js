'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Slider = require('omni-slider');

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var OmniSlider = function (_React$Component) {
    inherits(OmniSlider, _React$Component);

    function OmniSlider(props) {
        classCallCheck(this, OmniSlider);
        return possibleConstructorReturn(this, Object.getPrototypeOf(OmniSlider).call(this, props));
    }

    createClass(OmniSlider, [{
        key: 'render',
        value: function render() {
            return React.createElement('div', { ref: 'sliderRoot' });
        }
    }, {
        key: 'onSliderMoveStop',
        value: function onSliderMoveStop(positions) {
            this.props.onChange(positions);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var slider = new Slider(this.refs.sliderRoot, _extends({
                isOneWay: false
            }, this.props.options));
            function noop() {}
            this.stopUnsubscriber = slider.subscribe('stop', this.props.onFinish || noop);
            this.startUnsubscriber = slider.subscribe('start', this.props.onStart || noop);
            this.movingUnsubscriber = slider.subscribe('moving', this.props.onChange || noop);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.stopUnsubscriber();
            this.startUnsubscriber();
            this.movingUnsubscriber();
        }
    }]);
    return OmniSlider;
}(React.Component);

OmniSlider.propTypes = {
    onChange: React.PropTypes.func,
    onStart: React.PropTypes.func,
    onFinish: React.PropTypes.func,
    options: React.PropTypes.object
};

exports.OmniSlider = OmniSlider;
exports['default'] = OmniSlider;