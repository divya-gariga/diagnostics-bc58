import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SearchField from ".";
import searchIcon from "../../../assets/icons/search.svg";
import mapPin from "../../../assets/icons/map-pin.svg";
import arrowDown from "../../../assets/icons/ChevronDown.svg";

it("renders the textfield", () => {
    render(<SearchField placeholder="Search"></SearchField>);
    const inputElement = screen.getByPlaceholderText("Search");
    expect(inputElement).toBeInTheDocument();
});