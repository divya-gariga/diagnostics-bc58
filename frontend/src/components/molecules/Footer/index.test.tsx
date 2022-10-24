import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Footer from ".";

describe("Footer Component", () => {
    it("should render footer", () => {
      const wrapper = render(<Footer  />);
      expect(wrapper).toBeTruthy;
    });
  });
  