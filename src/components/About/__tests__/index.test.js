import React from 'react';
// retrieve functions from the react testing library
import { render, cleanup } from '@testing-library/react';
// import the extend-expect library from the jest-dom
import '@testing-library/jest-dom/extend-expect';
// export the component that is being tested
import About from '..';

// call cleanup function using the afterEach global function from Jest
afterEach(cleanup);

// describe function declares which component is being tested
describe('About component', () => {
    // renders About test
    // First test
    it('renders', () => {
        render(<About />)
    });

    // Second test
    it('matches snapshot DOM node structure', () => {
        // render about
        // use asFragment function to return a snapshot of the About component
        const { asFragment } = render(<About />);
        // use expect function with a matcher to assert something about a value
        // the toMatchSnapshot matcher
        expect(asFragment()).toMatchSnapshot();
    })
})