import React from 'react';

export default function ResourceLinks() {
    return (
        <div>
            <h2>Resources</h2>
            <ul>
                <li><a href="https://github.com/hickscj/async-and-promises">Project Repo</a></li>
            </ul>

            <ul>
                <li><a href="https://api.nasa.gov" target="_blank">NASA APIs</a></li>
                <li><a href="https://documenter.getpostman.com/view/35240/SVmtxerV?version=latest#6c939b34-1e22-4acf-8d73-5c4bbf5ccd42" target="_blank">Postman Collection</a></li>
                <li><a href="https://api.nasa.gov/assets/insight/InSight%20Weather%20API%20Documentation.pdf" target="_blank">InSight Weather API Documentation</a></li>
                <li><a href="https://trek.nasa.gov/mars/#v=0.1&x=-5.712890518434218&y=7.1191404922026535&z=3&p=urn%3Aogc%3Adef%3Acrs%3AEPSG%3A%3A104905&d=&l=MC11E_HRMOSCO_COL%2Ctrue%2C1&l=ESP_040776_2115_RED_A_01_ORTHO%2Ctrue%2C1&l=ESP_042647_1760_RED_B_01_ORTHO%2Ctrue%2C1&l=ESP_042252_1930_RED_B_01_ORTHO%2Ctrue%2C1&l=InSightCTXMosaic_112917%2Ctrue%2C1&l=curiosity_hirise_mosaic%2Ctrue%2C1&locale=&b=mars&e=-68.42285028616979%2C-35.90331964277501%2C56.997069249301354%2C50.14160062718032&sfz=&w=" target="_blank">Mars Trek</a></li>
            </ul>

            <ul>
                <li><a href="https://github.com/promises-aplus/promises-spec">Promises/A+ specification</a></li>
                <li><a href="https://javascript.info/promise-basics">More Promise info</a></li>
                <li><a href="https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md">State and Fates</a></li>
                <li><a href="https://javascript.info/async-await">Async/Await</a></li>
            </ul>
        </div>
    );
}
