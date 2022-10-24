import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserProfileCard from "./index";
import homeImg from '../../../assets/userprofileIcons/home.svg'

describe("UserProfileCard Component", () => {
  it("rendering component", () => {
    const wrapper = render(<UserProfileCard icon={homeImg} heading="Logout" subtext="" />);
    const element=wrapper.getByTestId("profileHeading")
    expect(element).toBeInTheDocument
    expect(wrapper).toBeTruthy;
  });
  it("rendering component", () => {
    const wrapper = render(<UserProfileCard icon={homeImg} heading="Manage Address" subtext="2235 Calfornia" />);
    expect(wrapper).toBeTruthy;
  });
});
