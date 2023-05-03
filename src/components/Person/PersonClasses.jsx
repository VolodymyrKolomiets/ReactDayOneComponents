//rcc
import React, { Component } from 'react'
import './PersonClasses.css'

export default class PersonClasses extends Component {
    render() {
        const { name, lastName, age } = this.props;
        return (
            <div className='personClasses'>
                <p>Classe Name:{name}</p>
                <p>Classe Lastname:{lastName}</p>
                <p>Classe Age:{age}</p>
            </div>
        )
    }
}

/////////////////////////
// import './PersonClasses.css'
// import React from "react";

// class PersonClasses extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div className='personClasses'>
//                 <p>Classe Name:{this.props.name}</p>
//                 <p>Classe Lastname:{this.props.lastName}</p>
//                 <p>Classe Age:{this.props.age}</p>
//             </div>
//         )
//     }
// }

// export default PersonClasses;

//rccp????????
