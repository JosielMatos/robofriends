import { ReactNode } from "react";

interface ScrollProps {
  children: ReactNode;
}

export const Scroll = ({ children }: ScrollProps) => {
  return (
    <div
      style={{ border: "3px solid black", height: "100vh", marginTop: "20px" }}
    >
      {children}
    </div>
  );
};
