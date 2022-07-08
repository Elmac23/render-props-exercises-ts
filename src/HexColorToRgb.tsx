import { FC } from "react";

interface Rgb {
  red: number;
  green: number;
  blue: number;
}

interface Props {
  hexValue: string;
  children: (rgb: Rgb) => JSX.Element | null;
}

const HexColorToRgb: FC<Props> = ({ hexValue, children }) => {
  const convert = (hex: string): number => {
    let returnedValue: number = 0;
    for (let i = hex.length - 1; i >= 0; i--) {
      let temp = 16 ** (hex.length - i - 1);
      switch (hex[i]) {
        case "a":
        case "A":
          temp *= 10;
          break;
        case "b":
        case "B":
          temp *= 11;
          break;
        case "c":
        case "C":
          temp *= 12;
          break;
        case "d":
        case "D":
          temp *= 13;
          break;
        case "e":
        case "E":
          temp *= 14;
          break;
        case "f":
        case "F":
          temp *= 15;
          break;
        default:
          temp *= Number(hex[i]);
          break;
      }
      returnedValue += temp;
    }
    return returnedValue;
  };

  const getRgb = (hex: string): Rgb => {
    return {
      red: convert(hex.substr(1, 2)),
      green: convert(hex.substr(3, 2)),
      blue: convert(hex.substr(5, 2))
    };
  };
  return children(getRgb(hexValue));
};

export default HexColorToRgb;
