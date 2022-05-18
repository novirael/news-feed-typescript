import React from "react";
import { FaRegTimesCircle } from 'react-icons/fa';

export const Tag = ({ name, onClick, showIcon }: { name: string, onClick: (name: string) => void, showIcon?: boolean }) => (
  <span style={{ marginRight: "1em", cursor: 'pointer' }} onClick={() => onClick(name)}>
    {name}
    { showIcon && <FaRegTimesCircle/> }
  </span>
);
