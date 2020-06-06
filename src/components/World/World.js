import React from 'react';

import { Header } from 'Comps/Header';
import Map from './Map';

const World = props => {
    return(
        <div className="full-height grid grid-1-12">
            <Header activeTab={props.activeTab} />
            <Map />
        </div>
    )
}

export default World;
