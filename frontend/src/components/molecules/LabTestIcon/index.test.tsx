import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LabTestIcon from "./index";
import Body from "../../../assets/icons/body.svg";

describe("Lab Test Icon Component", () => {
  it("rendering component", () => {
    const wrapper = render(
      <LabTestIcon logo={Body} testName="Full Body Check" clickable={true} />
    );
    expect(wrapper).toBeTruthy;
  });
  it("Text field", () => {
    const { getByTestId } = render(
      <LabTestIcon logo={Body} testName="Full Body Check" clickable={false} />
    );
    expect(getByTestId("testName")).toHaveTextContent("Full Body Check");
  });
  it("Function call", async () => {
    const fn = jest.fn();
    const wrapper = render(
      <LabTestIcon
        logo={Body}
        testName="Full Body Check"
        onClick={fn}
        clickable={true}
      />
    );
    fireEvent.click(await wrapper.findByTestId("testIcon"));
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
