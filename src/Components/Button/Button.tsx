import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

interface Props {
  title: string;
  className?: string;
  style?: {} | undefined;
  onClick?: (e: any) => void;
  bgColor?: string;
  to?: string;
}

export default function Button({
  title,
  className,
  style,
  onClick,
  bgColor,
  to,
}: Props) {
  let customStyle = { backgroundColor: bgColor, ...style };
  const navigate = useNavigate();

  function handleOnClick(e: any) {
    if (onClick) onClick(e);
    if (to) navigate(to);
  }

  return (
    <div
      style={customStyle}
      className={`${className} button`}
      onClick={handleOnClick}
    >
      {title}
    </div>
  );
}
