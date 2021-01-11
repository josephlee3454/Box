import React, { useState } from 'react';

const Box = (props) => {
    const [colors, setColors] = useState([{color:"blue"}]);
    const [inputColor, setInputColor] = useState("");


    const inputColorHandler = (e) => {

        setInputColor(e.target.value);
    }
    const preventer = (e) =>{
        e.preventDefault()
        setColors([...colors,{color: inputColor}]);
        setInputColor("");
    }


    return (
        < >
            <h1>Box Sizer !!!</h1>
            <form onSubmit={preventer}>
                <input
                    type="text"
                    value={inputColor}
                    onChange={inputColorHandler}
                    placeholder="add your favortite color !!!"
                />
                <input type="submit" value="add Box-color5"/>
                
            </form>
            {
                colors.map((val, idx) => // this will map over all colors that we set
                <div className="box" style={ {'background-color':val.color} }> The color is {val.color} </div>// this will set the style of the color

                )
            }
            
        </>
    )
}

export default Box
