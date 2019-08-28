
//class InputElementClass extends
//    React.Component {

//    state = {
//        inputText: ""
//    };
//    handleChange = event => {
//        this.setState({
//            inputText: event.target.value
//        });
//    };
//    render() {
//        return (
//            <div>
//                <input onChange={this.handleChange} />
//                <br />
//                {this.state.inputText}
//            </div>
//        );
//    }
//}
//
//export default InputElementClass;

// Assignment Week 2 - ICS X472.03 - Advanced React

 import React, { useState } from 'react';

 function InputElement() {
             const state = { inputText: "" };
             [ setState ] = useState(state);

            const handleChange = (event) =>
            {
                const { value }  = event.target;
                setState(value);

            };


            return (
                <div>
                    <input onChange={handleChange} />
                    <br/>
                    {state}
                </div>
            );

 }
 export default InputElement
