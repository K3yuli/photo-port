import React from "react";
// retrieve from testing library
import { render, cleanup } from '@testing-library/react';
// import the extended-expect library fom the jest-dom
import '@testing-library/jest-dom/extend-expect';
// export the component that is being tested
import Gallery from '..'

// mock out the prop 
const portrait = {
    name: "portraits",
    description: "Portraits of people in my life"
};

afterEach(cleanup);

// describe function declares which component is being tested
describe('Gallery is rendering', () => {
    // renders Gallery test
    // 1st test
    it('renders', () => {
    render(<Gallery currentCategory={portrait} />);
    });

    // code to match gallery and snapshot
    // second test
    it('matched snapshot', () => {
        // render gallery
        const { asFragment } = render(<Gallery currentCategory={portrait}/>);

        expect(asFragment()).toMatchSnapshot()
    })
});

it('renders', () => {
    const { getByTestId } = render(<Gallery currentCategory={portrait} />)
    expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
})