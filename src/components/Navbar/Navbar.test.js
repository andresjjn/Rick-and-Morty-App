import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from "@testing-library/react";
import Navbar from './index';
import { MemoryRouter } from "react-router-dom";


test('Navbar options', () => {
    const component = render(
        <MemoryRouter>
            <Navbar/>;
        </MemoryRouter>
    )
    component.getByText('Characters');
    component.getByText('Episodes');
    component.getByText('Locations');
})

test('Navbar home return image', () => {
    const component = render(
        <MemoryRouter>
            <Navbar/>;
        </MemoryRouter>
    )
    component.getByAltText('Return to main page');
})

test('Clicking the button to characters page', () => {
    const component = render(
        <MemoryRouter>
            <Navbar/>;
        </MemoryRouter>
    )
    const button = component.getByText('Characters');
    fireEvent.click(button);
})
