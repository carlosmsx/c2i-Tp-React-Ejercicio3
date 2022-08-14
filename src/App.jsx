import React from 'react';
import Hello from './components/Hello';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="container-fluid">
            <Hello nombre="Moto"/>
        </div>
    );
};

export default App;