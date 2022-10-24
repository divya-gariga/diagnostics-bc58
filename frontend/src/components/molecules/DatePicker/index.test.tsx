import React from "react";
import BasicDatePicker from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


test("Renders a DatePicker ", () => {
  render(<BasicDatePicker label={"DOB"} intialValue={new Date()} onChange={function (value: string): void {
  } } />);

  const text = screen.getByText("DOB");
  expect(text).toBeInTheDocument();

  const datePicker = screen.getByTestId("date-picker");
  expect(datePicker).toBeInTheDocument();
});