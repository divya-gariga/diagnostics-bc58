import React from 'react';
import '@testing-library/jest-dom';
import OrderPlaced from '.';
import { fireEvent, render, screen } from '@testing-library/react';

it("renders the organism order placed", () => {
    const wrapper = render(
        <OrderPlaced 
        instructions={"Please don't eat or drink anything other than water for 8 -10 hours prior to the appointment."}
        ></OrderPlaced>
    );
    expect(wrapper).toBeTruthy();
});

it("fire onClick for track button", () => {
    const mockFunction = jest.fn();
    render(
        <OrderPlaced
        instructions="Please don't eat or drink anything other than water for 8 -10 hours prior to the appointment."
        onClickTrack={mockFunction}
        />
    );
    const ReactElement = screen.getByText("Track Your Order");
    fireEvent.click(ReactElement);
    expect(mockFunction).toHaveBeenCalled();
});

it("fire onClick for home button", () => {
    const mockFunction = jest.fn();
    render(
        <OrderPlaced
        instructions="Please don't eat or drink anything other than water for 8 -10 hours prior to the appointment."
        onClickHome={mockFunction}
        />
    );
    const ReactElement = screen.getByText("Back to Home");
    fireEvent.click(ReactElement);
    expect(mockFunction).toHaveBeenCalled();
});