import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestInfo from "./index";

describe("Lab Test Icon Component", () => {
  it("rendering component", () => {
    const wrapper = render(<TestInfo />);
    expect(wrapper).toBeTruthy;
  });
});
