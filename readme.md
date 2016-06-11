# React OmniSlider

The OmniSlider was created by PricelineLabs and it's a two way slider with a nice API.

See the Github page - [https://github.com/pricelinelabs/omni-slider](https://github.com/pricelinelabs/omni-slider)

For the React demo, see - [http://3stacks.github.io/react-omnislider/](http://3stacks.github.io/react-omnislider/)

## Installation

- `npm install @lukeboyle/react-omnislider --save`

## Usage

In your React app, import the OmniSlider component.

```javascript
  import OmniSlider from 'react-omnislider'
  
  <OmniSlider/>
  
  <OmniSlider options={{ start: 100, end: 1000, min: 10, max: 1500 }}/>
```

Or when using Redux

```javascript
  	
  	function appReducer(state, action) {
  	  switch(action.type) {
  	   case('SLIDER_VALUE_CHANGED'):
  	     console.log(action.payload.positions);
      break;
  	  }
  	}
  	
  	const onSliderChanged = function(positions) {
  	  store.dispatch({
        type: 'SLIDER_VALUE_CHANGED',
        payload: {
          positions
        }
      })
    }

  <OmniSlider onChange={onSliderValueChanged} options={{ start: 100, end: 1000, min: 10, max: 1500 }}/>

```

There are no required props, however, there are several you can use

## Props

- options (Object | Required)
- onStart (Function | Optional) - Callback for when the slider **starts moving**
- onChange (Function | Optional) - Callback for when the slider **is moving**
- onFinish (Function | Optional) - Callback for when the slider **stops moving**

## options

For a list of all options, see the omni-slider docs - [https://github.com/pricelinelabs/omni-slider](https://github.com/pricelinelabs/omni-slider)

## onStart, onChange, onFinish

All of these functions return the positions of the left and right in an object.

```javascript
  Object { left: 0, right: 80.5497 }
```

## Developing the plugin

- Clone the repo
- Run `npm install`
- Make changes in `src/index.jsx`
- Build the changes with `npm run build` to convert it to commonjs