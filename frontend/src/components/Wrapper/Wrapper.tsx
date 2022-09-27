import React from "react";

export interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FunctionComponent<WrapperProps> = ({ children }) => {
  return (
    <div className="bg-neutral-50 mt-16 overflow-x-hidden">{children}</div>
  );
};

export default Wrapper;
