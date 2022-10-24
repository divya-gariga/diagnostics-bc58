import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Image from ".";
import GooglePlay from '../../../assets/socialmediaIcons/playstore.svg'

describe("Image Component", () => {
    it("should render Image", () => {
      const wrapper = render(<Image imgSrc={GooglePlay} imgAlt="image"  />);
      expect(wrapper).toBeTruthy;
    });
  });
  