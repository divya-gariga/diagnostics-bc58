import { render, screen } from "@testing-library/react";
import React from "react";
import Tags from ".";

describe("Atom Tags", () => {
  it("Truthy test", () => {
    const element = render(<Tags focused={true} text="Patrick" />);
    expect(element).toBeTruthy();
  });
  it("Truthy test with focused false", () => {
    const element = render(<Tags focused={false} text="Patrick" />);
    expect(element).toBeTruthy();
  });
});
