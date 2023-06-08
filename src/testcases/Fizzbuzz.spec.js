import Fizzbuzz from "../components/Fizzbuzz";
import { render, screen, fireEvent } from "@testing-library/react";

describe("The Fizzbuzz component works fine when", () => {

    it("should have the fizzbuzz loaded", () => {
    render(<Fizzbuzz/>);
    });
});
