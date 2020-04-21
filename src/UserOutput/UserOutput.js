import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <h1 onClick={props.click}>{props.userName}'s Bakery</h1>
            <p>This is a recipe for strawberry short cake.</p>
            <p>You'll need these ingredients.</p>
        </div>
    );
}

export default userOutput;