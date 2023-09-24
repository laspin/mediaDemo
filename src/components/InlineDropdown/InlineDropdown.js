import React, { useState } from "react";
import { selectOptions } from "./dropdownData";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { usePanels } from "../usePanels/usePanelsContext";

export const InlineDropdown = () => {
  const { handlePanelsUpdate } = usePanels();

  const { market, medium } = selectOptions;
  // state
  const [marketSelected, setMarketSelected] = useState("");
  const [mediumSelected, setMediumSelected] = useState("");

  const onMarketChange = event => {
    const { value } = event.target;
    setMarketSelected(value);
    handlePanelsUpdate(value, "market");
  };
  const onMediumChange = event => {
    const { value } = event.target;
    setMediumSelected(value);
    handlePanelsUpdate(value, "medium");
  };

  return (
    <div className="inline-dropdown">
      <div className="dropdown--select">
        <FormControl sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="marketSelectLabel">{market.label}</InputLabel>
          <Select
            labelId="marketSelectLabel"
            id="marketSelect"
            label={market.label}
            className="select-input"
            onChange={onMarketChange}
            value={marketSelected}
          >
            <MenuItem value="">
              <em>{market.default}</em>
            </MenuItem>
            {market?.items.map((mkt, xmt) => (
              <MenuItem
                key={xmt}
                value={mkt}
              >
                {mkt}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="mediumSelectLabel">{medium.label}</InputLabel>
          <Select
            labelId="mediumSelectLabel"
            id="mediumSelect"
            label={medium.label}
            className="select-input"
            // onChange={onMediumChange}
            onChange={onMediumChange}
            value={mediumSelected}
          >
            <MenuItem value="">
              <em>{medium.default}</em>
            </MenuItem>
            {medium?.items.map((med, mx) => (
              <MenuItem
                key={mx}
                value={med}
              >
                {med}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
