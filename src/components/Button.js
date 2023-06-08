import "../styles/Button.css";

const Button = ({  text }) => {
  return (
    <button className="btn-primary" data-testid={text}>
      {text}
    </button>
  );
};

export default Button;



