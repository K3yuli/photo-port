import React from "react";
// retrieve functions from the testing library
import { render, cleanup } from '@testing-library/react';
// import the extended-expect library from the jest-dom
import '@testing-library/jest-dom/extend-expect';
// export the component that is being tested
import Nav from '..';

// declare the props
const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

// call cleanup function using the afterEach global function from Jest
afterEach(cleanup);

// describe function declares which component is being tested
describe('Nav component', () => {
    // renders Nav test
    // First test - baseline test
    it('renders', () => {
        render(<Nav 
        categories={categories}
        setCurrentCategory={mockCurrentCategory}
        currentCategory={mockCurrentCategory}
        />);
    })

    // run test after writing first test

    // Second test - snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

// test emoji visibility
describe('emoji is visible', () => {
    // declare test purpose
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav />);
        // Assert
        // use the getByLabelText method & query by the aria-label value("camera")used in JSX
        expect(getByLabelText('camera')).toHaveTextContent('📸');
        // toHaveTextContent puts the to have content in what will show in the JSX
    });
})

// test for link visibility
describe('links are visible', () => {
    // declare test purpose
    it('inserts text into links', () => {
        // Arrange
        const { getByTestId } = render(<Nav />);
        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})
