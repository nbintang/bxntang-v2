import { cn } from "@/lib/utils";
import type React from "react";
import navData from "../navData";

interface OfficeProps {
  name: string;
  children: React.ReactNode;
  invert?: boolean;
}

const Office: React.FC<OfficeProps> = ({ name, children, invert = false }) => {
  return (
    <address
      className={cn(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
};

interface OfficesProps {
  invert?: boolean;
  className?: string;
}

const OfficesLayout: React.FC<OfficesProps> = ({
  invert = false,
  ...props
}) => {
  return (
    <ul role="list" {...props}>
      {navData.address.map((item, index) => (
        <li key={index}>
          <Office name={item.city} invert={invert}>
           {
            item.details
           }
          </Office>
        </li>
      ))}
    </ul>
  );
};

export default OfficesLayout;
