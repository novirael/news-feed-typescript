import React from "react";

export const Tag = ({ name, onClick }: { name: string, onClick: (name: string) => void }) => (
  <span style={{ marginRight: "1em" }} onClick={() => onClick(name)}>
    {name}
  </span>
);
