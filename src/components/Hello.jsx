import React, {useState} from 'react';

const Hello = (props) => {
    const [msj,setMsj] = useState('');

    return (
        <div>
            <h1>Hello {props.nombre}{msj}!</h1>
        </div>
    );
};

export default Hello;