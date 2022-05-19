import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Home from "./index";

test("Renders content", () => {
  render(<Home />);
  screen.getByText("The absolute Rick and Morty Experience");
});

test("Renders image", () => {
  render(<Home />);
  screen.getByAltText("Rick and Morty");
});
