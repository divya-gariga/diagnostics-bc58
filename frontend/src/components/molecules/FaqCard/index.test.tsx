import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FaqCard from "./index";

describe("FaqCard Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<FaqCard text="How Soon Can I get the report?" />);
    expect(wrapper).toBeTruthy;
  });
});
