import React from "react";
import { ActiveFilters } from "./ActiveFilters/ActiveFilters";
import { Search } from "./Search";

export const Header = () => (
  <div className="Header" style={{ display: "flex", padding: "1em" }}>
    <ActiveFilters filters={["business", "health"]} />
    <Search />
  </div>
);
