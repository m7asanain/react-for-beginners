import { ReactNode } from "react";

interface Props {
  // if we want to pass the text as a child in App.tsx => change 'text' to  'children'
  // if we want to pass <span> or anything more than the string => change 'string' to 'ReactNode'
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
