import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Characters from "./index";
import { Provider } from "react-redux";
import store from "../../redux/store";

test("Renders content", () => {
  const component = render(
    <Provider store={store}>
      <MemoryRouter>
        <Characters />
      </MemoryRouter>
    </Provider>
  );
  component.getByText("Characters");
});

test("Renders content", async () => {
  const component = await render(
    <Provider store={store}>
      <MemoryRouter>
        <Characters />
      </MemoryRouter>
    </Provider>
  );
  component.getByAltText("Character");
});
