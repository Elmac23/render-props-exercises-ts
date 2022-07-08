import React from "react";

interface Props {
  number: number;
  power: number;
  children: (result: number) => JSX.Element;
}

const Power: React.FC<Props> = ({ number, power, children }) => {
  return children(number ** power);
};

export default Power;
