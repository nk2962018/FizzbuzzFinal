import { render, screen } from '@testing-library/react';
import App from './App';

it("should have the app loaded", () => {
  render(<App/>)
  const appComponent = screen.getByTestId("parent");
  expect(appComponent).toBeInTheDocument();
});


