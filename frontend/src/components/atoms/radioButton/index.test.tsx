import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import RadioButton from ".";

it("renders a radio button", () => {
    render(<RadioButton />);
    const ReactElement = screen.getByTestId("radioButton");
    expect(ReactElement).toBeInTheDocument();
});