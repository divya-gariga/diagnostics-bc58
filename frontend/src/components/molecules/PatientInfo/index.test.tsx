import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PatientInfo from "./index";

describe("Patient Info Component", () => {
  it("rendering component", () => {
    const wrapper = render(
      <PatientInfo
        age={30}
        gender={"M"}
        patientName={"Patrick Smith"}
        relation={"Self"}
        testCost={3000}
        testName={"COVID RT-PCR Test"}
      />
    );
    expect(wrapper).toBeTruthy;
  });
});
