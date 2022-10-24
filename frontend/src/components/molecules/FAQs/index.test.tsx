import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FAQs from "./index";

describe("FaqMolecule Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<FAQs />);
    expect(wrapper).toBeTruthy;
  });
});
