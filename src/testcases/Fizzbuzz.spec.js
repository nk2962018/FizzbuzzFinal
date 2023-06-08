import Fizzbuzz from "../components/Fizzbuzz";
import { render, screen, fireEvent } from "@testing-library/react";

describe("The Fizzbuzz component works fine when", () => {
    beforeEach(() => {
        render(<Fizzbuzz/>);
    });

    it("should have the increment button loaded", () => {
        const incrementButton = screen.getByTestId("Increment");
        expect(incrementButton).toBeInTheDocument();
    });

    it("should have the decrement button loaded", () => {
        const incrementButton = screen.getByTestId("Decrement");
        expect(incrementButton).toBeInTheDocument();
    });

    it("should have the result section loaded", () => {
        const resultSection = screen.getByTestId("result");
        expect(resultSection).toBeInTheDocument();
      });
    
    it("it should show count result when increment button is clicked ", () => {
        const incrementButton = screen.getByTestId("Increment");
         fireEvent.click(incrementButton);
        const result = screen.getByTestId("result");
        expect(result).toBeVisible();
    });

    test("Increment button is clicked twice and the value  fizz is displayed  ", () => {
        const incrementButton = screen.getByTestId("Increment");
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        const result = screen.getByTestId("result");
        expect(result).toHaveTextContent("Fizz");
    });

    it("it should show count result when decrement button is clicked ", () => {
        const decrementButton = screen.getByTestId("Decrement");
         fireEvent.click(decrementButton);
        const result = screen.getByTestId("result");
        expect(result).toBeVisible();
    });
});
