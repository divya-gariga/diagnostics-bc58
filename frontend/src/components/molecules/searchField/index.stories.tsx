import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SearchField from ".";
import searchIcon from "../../../assets/icons/search.svg";
import mapPin from "../../../assets/icons/map-pin.svg";
import arrowDown from "../../../assets/icons/ChevronDown.svg";
import theme from "../../../theme";

export default {
    title: "Molecules/SearchField",
    component: SearchField,
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = (args) => {
    return (
        <SearchField placeholder="Search" {...args} />
    );
};

export const Default = Template.bind({});

export const Search = Template.bind({});

Default.args = {
    border: "none",
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    startIcon: mapPin,
    endIcon: arrowDown,
    borderRadius: "none",
    padding: "2px 0px 4px",
}

Search.args = {
    border: `1px solid ${theme.palette.grey[100]}`,
    borderBottom: `1px solid ${theme.palette.grey[100]}`,
    startIcon: searchIcon,
    borderRadius: "8px",
    padding: "10px 0px",
    width: "100%",
}