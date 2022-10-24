import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import FooterMedia from ".";

describe("FooterMedia Component", () => {
    it("should render footermedia", () => {
      const wrapper = render(<FooterMedia  />);
      expect(wrapper).toBeTruthy;
    });
  });
  