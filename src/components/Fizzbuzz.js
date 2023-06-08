import Button from "./Button";

const Fizzbuzz = () => {
return (
    <div data-testid="fizzBuzz">
        <Button
         text="Increment"
        />
         <Button
         text="Decrement"
        />
        <div data-testid="result">
        Result
        </div>
    </div>
  );
};

export default Fizzbuzz;
