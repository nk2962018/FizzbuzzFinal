import { render, screen } from '@testing-library/react';
import App from '../components/App';

it("should have the app loaded", () => {
  render(<App/>)
  const appComponent = screen.getByTestId("parent");
  expect(appComponent).toBeInTheDocument();
});

it("should have the header loaded", async () => {
  render(<App/>)
  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();
}); 

it("should have the proper header name", async () => {
  render(<App/>)
  const header = screen.getByTestId("header");
  expect(header).toHaveTextContent("The Fizzbuzz Program");
});


