import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SelectAddressCard from "./index";
import { addressData } from "../../../utils/constant";

describe("SelectAddressCard Component", () => {
  it("should render Component", () => {
    const testFn=jest.fn()
    const wrapper = render(<SelectAddressCard addressData={addressData[0]} activeId={1} index={1} handleOnClick={testFn} />);
    let element=screen.getByTestId("selectAddressCardBox1");
    fireEvent.click(element);
    expect(testFn).toBeCalled;
    expect(wrapper).toBeTruthy;
  });
  it("should test Another Branch", () => {
    const testFn=jest.fn()
    const wrapper = render(<SelectAddressCard addressData={addressData[0]} activeId={2} index={1} handleOnClick={testFn} />);
        expect(wrapper).toBeTruthy;
  });
});
