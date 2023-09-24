import React, { useState } from "react";
// components
import Panels from "../Panels";
import InlineDropdown from "../InlineDropdown";
// styles
import "./methodologyPage.css";
// hooks
import { PanelsProvider, usePanels } from "../usePanels/usePanelsContext";

const MethodologyPage = ({ onMarketMediumChange }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="methodologyPage">
      <div className="methodologyPage__container">
        <div className="row row1__section">
          <div className="dropdown__component">
            <p>Select market and medium to see the details:</p>
            <InlineDropdown onMarketMediumChange={onMarketMediumChange} />
          </div>
          <div className="methodologyPage__logo">image</div>
        </div>

        <div className="row row2__section">
          <div className="methodologyPage__heading">
            <h2>Publishing</h2>
          </div>
          <div className="cards__list">
            <Panels />
          </div>
        </div>
      </div>
    </div>
  );
};

const Methodology = () => {
  const { panels, handlePanelsUpdate, handleCategoryUpdate } = usePanels();
  const handleMarketOrMediumChanges = selectedMarketOrMedium =>
    handlePanelsUpdate(selectedMarketOrMedium);

  return (
    <PanelsProvider>
      <MethodologyPage onMarketMediumChange={handleMarketOrMediumChanges} />
    </PanelsProvider>
  );
};

export { MethodologyPage };
