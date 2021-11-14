import React from 'react';
import ReactDOM from 'react-dom';
import mars from '../img/mars-landing-curiosity-artist-e1543073738523.jpeg';
import ResourceLinks from './ResourceLinks';
import DataDisplay from './DataDisplay';

const App = () => {
    return (
        <div>
            <h2>Martian Weather</h2>

            <img className="mars" src={mars} alt="mars" />

            <DataDisplay />

            <ResourceLinks />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

