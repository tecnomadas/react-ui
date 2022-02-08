import React from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { error?: { message: string } };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    return (
      <>
        <input ref={ref} {...props} />
        {error && <p className="input__error__message">{error.message}</p>}
      </>
    );
  }
);

export default Input;
