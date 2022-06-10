import "../styles/components/button.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "submit" | "button";
  styleType?: "primary" | "secundary";
  disabled: boolean;
}

const Button = ({
  text,
  onClick,
  type = "button",
  styleType = "primary",
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={`button ${styleType}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
