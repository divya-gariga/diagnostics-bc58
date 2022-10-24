import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import WhyChooseUs from "./index";

describe("WhyChooseUs Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<WhyChooseUs />);
    expect(wrapper).toBeTruthy;
  });
});
