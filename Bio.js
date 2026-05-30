import React from 'react';

function Bio() {
    const firstname = 'Vinursanth';
    const lastname = 'Parthipan';
    const age = '20';
    const element = React.createElement(

        "button",
        {
            className: "btn",
            onClick: () => alert("Clicked!"),
        },
        "Click Me"
    )


    return (
        <div>
            <h1>{firstname}</h1>
            <h1>{lastname}</h1>
            <h3>{age}</h3>
            {element}
        </div>
    );
}
const welcome = (props) => {
    return <div>{props.vhildren}</div>;
};



export default Bio;