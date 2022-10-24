import React from "react";
import "@testing-library/jest-dom";
import PaymentDetails from ".";
import { render } from "@testing-library/react";
import { paymentOptions } from "../../utils/Constant";

it("renders payment details component", () => {
    const wrapper = render(
        <PaymentDetails 
        cardNumber={"1244 1234 1345 3255"} 
        cardHolder={"Yessie"} 
        expiryDate={"02/25"} 
        paymentOptions={paymentOptions}></PaymentDetails>
    );
    expect(wrapper).toBeTruthy();
});