import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";
import SelectAndAddPatient from ".";
import { patientDetails } from "../../../utils/constant";
describe("Select & Add patient", () => {
  it("Truthy test", () => {
    const wrapper = render(
      <SelectAndAddPatient
        patientDetails={patientDetails}
      />
    );
    expect(wrapper).toBeTruthy();
    var element=wrapper.getByTestId("newPatientButton")
    fireEvent.click(element)
    element=wrapper.getByTestId("checkbox-1")
    fireEvent.click(element)
    var element=wrapper.getByTestId("selectLabButton")
    fireEvent.click(element)
  });
});
