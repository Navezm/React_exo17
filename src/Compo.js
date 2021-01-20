import React, {Fragment, useState} from 'react';

let Compo = (props) => {
    return(
        <Fragment>
            <input type="button" value="Click-icé" onClick={() => props.fct(4)} />
        </Fragment>
    )
};

export default Compo;