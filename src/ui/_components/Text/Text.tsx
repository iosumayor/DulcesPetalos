/* eslint-disable react/prop-types */

interface Props {
  elementStyle?: "p" | "span" | "div" | "h1" | "h2" | "h3";
  children: React.ReactNode;
  fontSize?: "fontHeadingSize" | "fontPSize";
  fontColor?: "fontHeadingColor" | "fontPColor";
}

export const Text: React.FC<Props> = ({
  children,
  elementStyle: ElementStyle = "p",
  fontSize = "fontPSize",
  fontColor = "fontPColor",
}) => <ElementStyle className={fontSize && fontColor}>{children}</ElementStyle>;
