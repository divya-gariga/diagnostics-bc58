import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestDetailMolecule from "./index";

describe("TestDetailMolecule Component", () => {
  it("should render TestDetailMolecule", () => {
    const wrapper = render(<TestDetailMolecule />);
    expect(wrapper).toBeTruthy;
  });
});
