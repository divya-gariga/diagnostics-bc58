import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";
import PatientCard from ".";
import { patientDetails } from "../../../utils/constant";
describe("Patient Card test", () => {
  it("should render patient card", () => {
    const patient = patientDetails[0];
    const element = render(<PatientCard {...patient} />);
    
    expect(element).toBeTruthy();
  });
  it("should render patient card and verify dom elements", () => {
    const patient = patientDetails[1];
    const element = render(<PatientCard {...patient} />);
    let ele=screen.getByTestId("patientName")
    expect(ele).toBeInTheDocument;
    expect(element).toBeTruthy();
  });
});
