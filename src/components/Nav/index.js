import React from "react";


function Nav () {
    const categories = [
        {
            name: "commercial",
            description:
            "Photos of grocery stores, food trucks, and other commercial projects",
        },
        {
            name: "portraits",
            description: "Portraits of people in my life"
        },
        {
            name: "food",
            description: "Delicious delicacies"
        },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ];

    // onClick needs to be defined
    function categorySelected() {
        console.log('clicked')
    }

    return (
        <header>
            <h2>
                {/* add attribute specific for testing to the <a> element */}
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">📸</span>Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        {/* add attribute specific to testing */}
                        <a data-testid="about" href="#about">About me</a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>

                    {/* map over the array */}
                    {categories.map((category) => (
                        <li className="mx-1" key={category.name}>
                    {/* use onClick to set up event listener for when a category is clicked */}
                            <span onClick={categorySelected}>
                                {category.name}
                            </span>
                        </li>
                    ))}

                </ul>
            </nav>
        </header>
    );
}


export default Nav