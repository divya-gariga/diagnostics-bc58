import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LabTest from ".";
import { Box } from "@mui/material";
import { MemoryRouter } from "react-router-dom";

it("renders the template", () => {
    const ReactElement = render(
        <MemoryRouter initialEntries={['/']}>
            <LabTest>
                <Box></Box>
            </LabTest>
        </MemoryRouter>
    );
    expect(ReactElement).toBeTruthy();
});