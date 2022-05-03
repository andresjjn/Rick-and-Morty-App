import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Home from "./index";

test("Renders content", () => {
  const component = render(<Home />);
  component.getByText("The absolute Rick and Morty Experience");
});

test("Renders image", () => {
  const component = render(<Home />);
  component.getByAltText("Rick and Morty");
});
