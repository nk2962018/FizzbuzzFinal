import Fizzbuzz from "../components/Fizzbuzz";
import { render, screen, fireEvent } from "@testing-library/react";

describe("The Fizzbuzz component works fine when", () => {

    it("should have the fizzbuzz loaded", () => {
    render(<Fizzbuzz/>);
    });

    it("should have the increment button loaded", () => {
        render(<Fizzbuzz/>);
        const incrementButton = screen.getByTestId("Increment");
        expect(incrementButton).toBeInTheDocument();
    });
    
    it("should have the decrement button loaded", () => {
        render(<Fizzbuzz/>);
        const incrementButton = screen.getByTestId("Decrement");
        expect(incrementButton).toBeInTheDocument();
    });
});
