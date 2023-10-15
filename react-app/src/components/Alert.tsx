import { ReactNode } from "react";

interface Props {
  // if we want to pass the text as a child in App.tsx => change 'text' to  'children'
  // if we want to pass <span> or anything more than the string => change 'string' to 'ReactNode'
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
