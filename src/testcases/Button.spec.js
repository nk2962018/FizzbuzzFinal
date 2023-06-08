import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

it("should have the propert button", () => {
  render(<Button text="buttonText" />);
  const button = screen.getByTestId("buttonText");
  expect(button).toHaveTextContent("buttonText");
});



 
