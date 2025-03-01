import { cn } from "@/lib/utils";
import type React from "react";
import navData from "../navData";

interface OfficeProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  invert?: boolean;
}

const Office: React.FC<OfficeProps> = ({
  name,
  children,
  invert = false,
  ...props
}) => {
  return (
    <address
      className={cn(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
      {...props}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
};

interface OfficesProps extends React.HTMLAttributes<HTMLUListElement> {
  invert?: boolean;
  className?: string;
}

const OfficesLayout: React.FC<OfficesProps> = ({
  invert = false,
  ...props
}) => {
  return (
    <ul role="list" {...props}>
      {navData.address.map((item, index) => {
        const splitAddress = item.details.split(", ");
        const address = [splitAddress[0], splitAddress.slice(1).join(", ")];
        return (
          <li key={index}>
            <Office name={item.city} invert={invert}>
              <span>{address[0]}</span>
              <br />
              <span>{address[1]}</span>
            </Office>
          </li>
        );
      })}
    </ul>
  );
};

export default OfficesLayout;
