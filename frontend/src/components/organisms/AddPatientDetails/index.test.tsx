import React from "react";
import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddPatientDetails from "./index";

describe("AddPatientDetails Component", () => {
  it("should render component", () => {
    const test1=jest.fn()
    render(<AddPatientDetails onNextClick={test1}/>);
    expect(screen).toBeTruthy;
    var element = screen.getByPlaceholderText("Enter Your Name");
    element.focus();
    fireEvent.change(element, { target: { value: "Patrick Smith" } });
    fireEvent.keyDown(element, { key: "Enter" });
    expect(element).toHaveValue("Patrick Smith");
    var ele=screen.getAllByRole("button")
    fireEvent.click(ele[0])
    fireEvent.click(ele[2])
    element=screen.getByTestId("checkbox")
    fireEvent.click(element)
     ele=screen.getAllByTestId("radioButton")
     fireEvent.click(ele[1])
     element=screen.getByTestId("nextButton")
     fireEvent.click(element)
     expect(test1).toBeCalled
  });
});
