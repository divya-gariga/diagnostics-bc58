import React from "react";
import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddAddress from "./index";

describe("AddAddress Component", () => {
  it("should render component and test textfields  ", () => {
    const test1 = jest.fn();
   render(<AddAddress onSaveAddressClick={test1}/>);
    expect(screen).toBeTruthy;
    let element = screen.getAllByRole("textbox")
    fireEvent.change(element[0], { target: { value: "2232 Calfornia" } });
    fireEvent.change(element[1], { target: { value: "Mountain View" } });
    fireEvent.change(element[2], { target: { value: "USA" } });
    expect(element[0]).toHaveValue("2232 Calfornia");
    expect(element[1]).toHaveValue("Mountain View");
    expect(element[2]).toHaveValue("USA");
    let ele=screen.getByTestId("saveAddressButton")
    fireEvent.click(ele)
    expect(test1).toBeCalled
  });
});
