# React OmniSlider

The OmniSlider was created by PricelineLabs and it's a two way slider with a nice API.

See the Github page [here](https://github.com/pricelinelabs/omni-slider)

For the React demo, see [http://3stacks.github.io/react-omnislider/](http://3stacks.github.io/react-omnislider/)

## Installation

- `npm install react-omnislider --save`

## Usage

In your React app, import the OmniSlider component.

```
    import OmniSlider from 'react-omnislider'
    
    <OmniSlider/>
```

There are no required props, however, there are several you can use

## Props

- options
- onStart (Function | Optional) -
- onChange (Function | Optional) - 
- onFinish (Function | Optional) - Callback for when the slider stops moving

## options

For a list of all options, see the omni-slider docs - [here](https://github.com/pricelinelabs/omni-slider)

## onStart, onChange, onFinish

All of these functions return the positions of the left and right in an object.

```
    Object { left: 0, right: 80.5497 }
```

## Developing the plugin

- Clone the repo
- Run `npm install`
- Make changes in `src/index.jsx`
- Build the changes with `npm run build` to convert it to commonjs