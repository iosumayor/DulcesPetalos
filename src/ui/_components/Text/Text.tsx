/* eslint-disable react/prop-types */
import React from "react";
import cn from "clsx";

import styles from "./Text.module.scss";

interface Props {
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3";
  children: React.ReactNode;
  variant?: "headingH1" | "paragraph" | "headingH3";
}

export const Text: React.FC<Props> = ({
  children,
  as: As = "p",
  variant = "paragraph",
}) => (
  <As
    className={cn(
      styles[`font-${variant}-size`],
      styles[`font-${variant}-color`]
    )}
  >
    {children}
  </As>
);
