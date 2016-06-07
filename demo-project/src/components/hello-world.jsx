import React from 'react';

export const HelloWorld = function(props) {
    function parseName(name) {
        if (name === undefined) {
            return 'Cool React Guy';
        } else {
            return name;
        }
    }
    return(
        <div>
            <p>
                Hello { parseName(props.name) }.
            </p>
            <img src="img/3stacks.png" alt="ayy lmao"/>
        </div>
    );
};

export default HelloWorld;