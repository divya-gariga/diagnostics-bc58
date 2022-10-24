import { render, screen } from "@testing-library/react";
import React from "react";
import ProgressBar from ".";

describe("Progress Bar test", () => {
  it("Truthy Test", () => {
    const element = render(
      <ProgressBar
        currentIndex={1}
        values={["Lab test", "Select Appointment", "Add review"]}
      />
    );
    expect(element).toBeTruthy();
  });
});
