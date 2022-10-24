import { Story } from "@storybook/react";
import React from "react";
import AddPatient from ".";

export default {
    title: 'Organisms/AddPatient',
    component: AddPatient
}

let Template: Story = () => <AddPatient />

export const AddPatientComponent = Template.bind({})