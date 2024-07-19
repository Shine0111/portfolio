import React from "react";
import styles from "./Divider.module.css";

interface DividerProps {
  color?: string;
  thickness?: number;
  style?: React.CSSProperties;
}

const Divider: React.FC<DividerProps> = ({
  color = "#000",
  thickness = 1,
  style,
}) => {
  const dividerStyle: React.CSSProperties = {
    backgroundColor: color,
    height: thickness,
    width: "100%",
    ...style,
  };

  return <div className={styles.divider} style={dividerStyle} />;
};

export default Divider;
