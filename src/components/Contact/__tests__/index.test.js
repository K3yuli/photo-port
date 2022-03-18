import React from "react";
// retrieve functions from the testing library
import { render, cleanup } from '@testing-library/react';
// import the extended-expect library from the jest-dom
import '@testing-library/jest-dom/extend-expect';
// export the component that is being tested
import Contact from "..";

// call cleanup function using the afterEach global function from Jest
afterEach(cleanup);

// describe function declares which component is being tested
describe('Contact component renders', () => {
    // renders Nav test
    // First test - baseline test
    it('renders', () => {
        render(<Contact/>);
    });

     // Second test - snapshot test
        it('matches snapshot', () => {
            const { asFragment } = render(<Contact />)
            expect(asFragment()).toMatchSnapshot()
        })
})


// "contact me" test for the h1 tag int he ContactForm component using the data-testid attribute
it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
  })
  
// "Submit" test for the button  using the data-testid attribute
it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
  })