import React from "react";
import "./Button.css";

interface Props {
  title: string;
  className?: string;
  style?: {} | undefined;
  onClick?: (e: any) => void;
  bgColor?: string;
}

export default function Button({
  title,
  className,
  style,
  onClick,
  bgColor,
}: Props) {
  let customStyle = { backgroundColor: bgColor, ...style };

  return (
    <div
      style={customStyle}
      className={`${className} button`}
      onClick={onClick}
    >
      {title}
    </div>
  );
}
