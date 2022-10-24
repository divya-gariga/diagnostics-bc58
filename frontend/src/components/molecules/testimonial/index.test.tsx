import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Testimonial from ".";
import avatarImage from "../../../assets/icons/avatarImage.svg";

it("renders the testimonial", () => {
    render(
        <Testimonial 
        avatar={avatarImage} 
        name={"Abby"} 
        location={"San Jose, CA"} 
        comment={"Very friendly and professional. Loved the follow-up and progress calls"}></Testimonial>
    );
    const nameElement = screen.getByText("Abby");
    const locationElement = screen.getByText("San Jose, CA");

    expect(nameElement).toBeInTheDocument();
    expect(locationElement).toBeInTheDocument();
});