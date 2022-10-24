import { Box } from "@mui/material";
import {render,screen} from "@testing-library/react";
import React from "react";
import SignIn from ".";
describe("Template test",()=>{
    it("Truthy test",()=>{
        const ele=render(<SignIn><Box></Box></SignIn>)
        expect(ele).toBeTruthy()
    })
})