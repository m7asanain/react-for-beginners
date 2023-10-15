import React from "react";

interface Props {
  children: string;
  // add "?" => make the value optional, limit the bug => change form 'string' to '|'
  color?: "primary" | "secondary";
  onClick: () => void;
}

const BootstrapButton = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default BootstrapButton;
