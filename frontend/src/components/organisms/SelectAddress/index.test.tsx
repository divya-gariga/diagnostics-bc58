import React from "react";
import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SelectAddress from "./index";
import { addressData } from "../../../utils/constant";
describe("SelectAddress  Organism", () => {
  it("should render Component", () => {
    const testFn1=jest.fn();
    const testFn2=jest.fn();
    const wrapper = render(<SelectAddress addressData={addressData} onAddAddressClick={testFn1} onCompleteClick={testFn2}/>);
    let element=screen.getByTestId("addAddressButton")
    fireEvent.click(element)
    expect(testFn1).toBeCalled
    element=screen.getByTestId("comleteOrderButton")
    fireEvent.click(element)
    expect(testFn1).toBeCalled
    expect(wrapper).toBeTruthy;
  });
});
