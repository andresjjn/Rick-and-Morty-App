import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from './App';

test('renders learn react link', () => {
  const component = render(
    <MemoryRouter>
      <App/>;
    </MemoryRouter>
  );
  component.getByText("The absolute Rick and Morty Experience")
});
