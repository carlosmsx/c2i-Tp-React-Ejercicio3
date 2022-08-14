import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

const Hello = (props) => {
    const [msj,setMsj] = useState('');

    return (
        <div>
            <h1>Hello {props.nombre}{msj}!</h1>
            <Button variant="primary" onClick={()=>setMsj("(from changed State)")}>Click me</Button>
        </div>
    );
};

export default Hello;