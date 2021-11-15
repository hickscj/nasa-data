import React from 'react';
import ReactDOM from 'react-dom';
import ResourceLinks from './ResourceLinks';
import DataDisplay from './DataDisplay';
import Apod from './Apod';

const App = () => {
    return (
        <div>
            <h1 className="pt-4 pb-2 text-3xl font-bold">NASA API Experiments</h1>

            <Apod />

            <ResourceLinks />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

