import React, {useEffect} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers"; 

function Nav (props) {
    // // useEffect hook to re-render when the value updates
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                {/* add attribute specific for testing to the <a> element */}
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">{" "}📸</span>{" "}Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        {/* add attribute specific to testing */}
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>About me</a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>

                    {/* map over the array */}
                    {categories.map((category) => (
                        <li 
                        className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`}
                        key={category.name}
                        >
                    {/* use onClick to set up event listener for when a category is clicked */}
                            <span 
                            onClick={() => {setCurrentCategory(category);
                                setContactSelected(false);}}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}

                </ul>
            </nav>
        </header>
    );
}


export default Nav