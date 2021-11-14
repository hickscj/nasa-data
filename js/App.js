import React from 'react';
import ReactDOM from 'react-dom';
import mars from '../img/mars-landing-curiosity-artist-e1543073738523.jpeg';
import ResourceLinks from './ResourceLinks';
import DataDisplay from './DataDisplay';
import Apod from './Apod';

const App = () => {
    return (
        <div>
            <h2>NASA API experiments</h2>

            <Apod />

            <DataDisplay />

            <ResourceLinks />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

