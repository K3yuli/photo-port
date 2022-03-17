import React from "react";
// import functions
import { render, cleanup } from "@testing-library/react";
// import expected-extended testing library from jest-dom
import '@testing-library/jest-dom/extend-expect';
// import component being tested
import PhotoList from "..";

// call cleanup function
afterEach(cleanup);

describe('PhotoList is rendering', () => {
    it('renders', () => {
        render(<PhotoList />);
    });

    it('renders', () => {
        const { asFragment } = render(<PhotoList />)
        expect(asFragment()).toMatchSnapshot()
    });
});