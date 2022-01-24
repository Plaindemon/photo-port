import React from 'react';
import { render, cleanup } from '@testing-library/react';
//  ^^^ render: Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered) ^^^ //
//  ^^^ cleanup function is used to remove components from the DOM to prevent memory leaking ^^^ //
import '@testing-library/jest-dom/extend-expect';
// jest-dom offers access to custom matchers that are used to test DOM element 
import About from '..';
// import component that is being tested



//  after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

// declare the component we're testing
describe('About component', () => {
    // First Test
    it('renders', () => {
        render(<About />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
      })
})