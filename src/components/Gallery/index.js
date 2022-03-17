import React from "react";
// import PhotoList component
import PhotoList from "../PhotoList";
// capitalize name value when it's rendered
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery({ currentCategory }) {

    const { name, description } = currentCategory; 

    return(
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            {/* pass down the currentCategory.name as a prop */}
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Gallery