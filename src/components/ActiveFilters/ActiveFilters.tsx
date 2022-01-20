import React, { useState } from "react";
import { Tag } from "../ui/Tag";

export const ActiveFilters = ({ filters }: { filters: string[] }) => {
  const [activeFilters, setActiveFilters] = useState(filters);
  return (
    <div>
      {activeFilters.map((filter) => (
        <Tag
          key={filter}
          name={filter}
          onClick={(removed: string) => {
            setActiveFilters(activeFilters.filter((f) => f !== removed));
          }}
        />
      ))}
    </div>
  );
};
