import React from 'react';
import ReactDOM from 'react-dom';
import mars from '../img/mars-landing-curiosity-artist-e1543073738523.jpeg';
import ResourceLinks from './ResourceLinks';

const App = () => {
    return (
        <div>
            <h2>How's the weather on Mars?</h2>

            <img className="mars" src={mars} alt="mars" />

            <h2>Resources</h2>
            <ResourceLinks />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

