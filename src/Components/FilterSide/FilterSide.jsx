import React, { useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import { FaSlidersH } from "react-icons/fa";
import Slider from "@mui/material/Slider";
import "./FilterSide.css";

export default function FilterSide() {
  const [gender, setGender] = useState("Men");
  const [price, setPrice] = useState([2000, 10000]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Sort By");
  const [openSection, setOpenSection] = useState("");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const brands = [
    { name: "Bleu de Chanel", count: 1970 },
    { name: "Dior Sauvage", count: 395 },
    { name: "Acqua Di Gio", count: 324 },
    { name: "Hugo Boss Bottled", count: 301 },
    { name: "CK One Shock", count: 290 },
    { name: "Invictus", count: 159 },
    { name: "MADSTO", count: 151 },
    { name: "Good Girl ", count: 148 },
    { name: "J’adore ", count: 148 },
    { name: "Coco Mademoiselle", count: 148 },
    { name: "Light Blue ", count: 148 },
    { name: "My Way", count: 148 },
    { name: "Tom Ford Oud Wood  ", count: 148 },
  ];

  const FilterContent = () => (
    <div className="wrapper">
      <div className="filter-head">
        <h2>Filters</h2>
        <button
          className="clear-filter"
          onClick={() => {
            setGender("Men");
            setPrice([2000, 10000]);
          }}
        >
          Clear All
        </button>
      </div>

      <div className="filter-section">
        <div className="gender-filter">
          {["Men", "Women", "Unisex"].map((item) => (
            <label key={item} className="gender-option">
              <span>{item}</span>
              <input
                type="radio"
                name="gender"
                value={item}
                checked={gender === item}
                onChange={() => setGender(item)}
              />
            </label>
          ))}
        </div>
      </div>

      <hr />

      <div className="filter-section">
        <div className="brand-header">
          <span className="filter-label">BRAND</span>
          <div className="brand-search-icon">
            <SlMagnifier />
          </div>
        </div>
        <div className="brand-list">
          {brands.map((brand, index) => (
            <label key={index} className="brand-option">
              <input type="checkbox" />
              <span>{brand.name}</span>
              <span className="brand-count">({brand.count})</span>
            </label>
          ))}
          <button className="more-brands">+ 317 more</button>
        </div>
      </div>

      <hr />

      <div className="filter-section">
        <span className="filter-label">PRICE</span>
        <Slider
          value={price}
          onChange={(e, newValue) => setPrice(newValue)}
          valueLabelDisplay="off"
          min={2000}
          max={10000}
        />
        <div className="price-range">
          ₹{price[0]} – ₹{price[1]}+
        </div>
      </div>

      <div className="filter-actions-mobile">
        <button
          className="apply-btn"
          onClick={() => setIsMobileFilterOpen(false)}
        >
          Apply Filters
        </button>
        <button
          className="clear-btn"
          onClick={() => {
            setGender("Men");
            setPrice([2000, 10000]);
          }}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );

  const MobileFilterDropdowns = () => (
    <div className="mobile-dropdown-wrapper">
      <div className="dropdown-section">
        {/* Gender Dropdown */}
        <div
          className="dropdown-header"
          onClick={() => toggleSection("gender")}
        >
          Gender
          <span>{openSection === "gender" ? "−" : "+"}</span>
        </div>
        {openSection === "gender" && (
          <div className="dropdown-content">
            {["Men", "Women", "Unisex"].map((item) => (
              <label key={item} className="gender-option">
                <span>{item}</span>
                <input
                  type="radio"
                  name="gender"
                  value={item}
                  checked={gender === item}
                  onChange={() => setGender(item)}
                />
              </label>
            ))}
          </div>
        )}

        {/* Brand Dropdown */}
        <div className="dropdown-header" onClick={() => toggleSection("brand")}>
          Brand
          <span>{openSection === "brand" ? "−" : "+"}</span>
        </div>
        {openSection === "brand" && (
          <div className="dropdown-content">
            <div className="brand-search-icon">
              <SlMagnifier />
            </div>
            {brands.map((brand, index) => (
              <label key={index} className="brand-option">
                <input type="checkbox" />
                <span>{brand.name}</span>
                <span className="brand-count">({brand.count})</span>
              </label>
            ))}
            <button className="more-brands">+ 317 more</button>
          </div>
        )}

        {/* Price Dropdown */}
        <div className="dropdown-header" onClick={() => toggleSection("price")}>
          Price
          <span>{openSection === "price" ? "−" : "+"}</span>
        </div>
        {openSection === "price" && (
          <div className="dropdown-content">
            <Slider
              value={price}
              onChange={(e, newValue) => setPrice(newValue)}
              valueLabelDisplay="off"
              min={2000}
              max={10000}
            />
            <div className="price-range">
              ₹{price[0]} – ₹{price[1]}+
            </div>
          </div>
        )}
      </div>

      <div className="filter-actions-mobile">
        <button
          className="apply-btn"
          onClick={() => setIsMobileFilterOpen(false)}
        >
          Apply Filters
        </button>
        <button
          className="clear-btn"
          onClick={() => {
            setGender("Men");
            setPrice([2000, 10000]);
          }}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="filter-side desktop-only">{FilterContent()}</div>

      {/* Mobile Bottom Filter Bar */}
      <div className="mobile-bottom-bar">
        <button
          className="mobile-filter-trigger"
          onClick={() => setIsMobileFilterOpen(true)}
        >
          <FaSlidersH style={{ marginRight: "8px" }} />
          Filters
        </button>
        <div className="sort-by-dropdown">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option>Sort By</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div className={`mobile-filter-drawer ${isMobileFilterOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <h2>Filters</h2>
          <span className="close-icon" onClick={() => setIsMobileFilterOpen(false)}>×</span>
        </div>

        {/* Mobile Dropdowns */}
        <div className="mobile-dropdown-wrapper">
          {["Occasion", "Category/Type", "Fragrance Family", "Price", "Gender"].map((section) => (
            <div key={section} className="dropdown-section">
              <div
                className="dropdown-header"
                onClick={() => setOpenSection(openSection === section ? "" : section)}
              >
                <span>{section}</span>
                <span>{openSection === section ? "−" : "›"}</span>
              </div>

              {openSection === section && (
                <div className="dropdown-content">
                  {section === "Price" && (
                    <>
                      <Slider
                        value={price}
                        onChange={(e, newValue) => setPrice(newValue)}
                        min={2000}
                        max={10000}
                      />
                      <div className="price-range">₹{price[0]} – ₹{price[1]}+</div>
                    </>
                  )}
                  {section === "Gender" && (
                    <div className="gender-filter">
                      {["Men", "Women", "Unisex"].map((item) => (
                        <label key={item} className="gender-option">
                          <span>{item}</span>
                          <input
                            type="radio"
                            name="gender"
                            value={item}
                            checked={gender === item}
                            onChange={() => setGender(item)}
                          />
                        </label>
                      ))}
                    </div>
                  )}
                  {/* Placeholder content */}
                  {["Occasion", "Category/Type", "Fragrance Family"].includes(section) && (
                    <p>{section} content goes here...</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="filter-actions-mobile sticky-bottom">
          <button className="apply-btn" onClick={() => setIsMobileFilterOpen(false)}>Apply Filters</button>
          <button
            className="clear-btn"
            onClick={() => {
              setGender("Men");
              setPrice([2000, 10000]);
              setOpenSection("");
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>

    </>
  );
}
