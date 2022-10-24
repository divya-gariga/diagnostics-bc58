import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from ".";
import "@testing-library/jest-dom";

test("Test - Avatar", () => {
  render(
    <Avatar variant="circular" src="../../../assets/icons/avatarImage.svg" />
  );
  const avatar = screen.getByRole("img");
  expect(avatar).toHaveAttribute(
    "src",
    "../../../assets/icons/avatarImage.svg"
  );
});
