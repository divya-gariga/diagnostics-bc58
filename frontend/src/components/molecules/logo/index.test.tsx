import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Logo from ".";
import logo from "../../../assets/icons/logo.svg";

it("should render the logo" , () => {
    render(
        <Logo img={logo} text={"Zemoso Diagnostics"}></Logo>
    );

    const logoImage = screen.getByAltText("logo-image");
    const logoText = screen.getByText("Zemoso Diagnostics");

    expect(logoImage).toBeInTheDocument();
    expect(logoText).toBeInTheDocument();
});