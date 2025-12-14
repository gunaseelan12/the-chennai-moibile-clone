import { useState } from "react";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";
import cartIcon from "../assets/cart.png";
import gpsIcon from "../assets/gps.png";

function Navbar() {
  const [searchText, setSearchText] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />

      {/* ==================== DESKTOP NAVBAR - 100% UNTOUCHED ==================== */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top d-none d-lg-block" style={{ height: "80px" }}>
        <div className="container-fluid px-3 px-lg-4" style={{ maxWidth: "1400px" }}>

          <a className="navbar-brand" href="#">
            <img src={logo} alt="The Chennai Mobiles" height="38" style={{ marginLeft: "38px" }} />
          </a>

          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navContent">

            <div className="d-flex flex-grow-1 mx-3">
              <div className="input-group" style={{ maxWidth: "890px", height: "36px" }}>
                <button className="btn btn-dark rounded-start-pill px-3 d-flex align-items-center gap-2 h-100">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
                  <span className="fw-semibold d-none d-xl-inline">Category</span>
                </button>
                <input
                  type="text"
                  className="form-control border-start-0 ps-0"
                  placeholder="Search products, brands..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  style={{ borderRadius: "0 30px 30px 0", fontSize: "14px", height: "36px", padding: "0 16px" }}
                />
              </div>
            </div>

            <div className="d-flex align-items-center gap-4 ms-auto me-4">

              <div className="dropdown">
                <button
                  className="btn bg-white border rounded-3 d-flex align-items-center justify-content-center gap-2 shadow-sm"
                  style={{ width: "48px", height: "44px" }}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <img src={userIcon} width="22" height="22" alt="User" />
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3">
                    <polyline points="6,9 12,15 18,9" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="dropdown-menu dropdown-menu-end show shadow-lg border-0 py-3 px-2" style={{ width: "200px", borderRadius: "14px" }}>
                    <button className="btn btn-dark w-100 rounded-pill py-2 mb-2 fw-semibold" style={{ fontSize: "14px" }}>
                      Sign in/up
                    </button>
                    <div className="d-flex align-items-center gap-3 px-3 py-2 rounded hover-bg-light cursor-pointer">
                      <img src={gpsIcon} width="18" alt="GPS" />
                      <span className="fw-medium">Stores Near</span>
                    </div>
                  </div>
                )}
              </div>

              <button className="btn bg-white border rounded-3 position-relative d-flex align-items-center justify-content-center shadow-sm"
                style={{ width: "48px", height: "44px" }}>
                <img src={cartIcon} width="26" height="26" alt="Cart" />
                <span className="position-absolute d-flex align-items-center justify-content-center bg-primary text-white rounded-circle"
                  style={{ width: "20px", height: "20px", fontSize: "11px", fontWeight: "bold", top: "-4px", right: "-4px" }}>
                  0
                </span>
              </button>

            </div>
          </div>
        </div>
      </nav>

      {/* ==================== MOBILE VIEW - Super Clean (Only Search Box Below Logo) ==================== */}
      <div className="d-lg-none bg-white position-fixed top-0 start-0 end-0 z-3 shadow" style={{ padding: "14px 12px 20px" }}>
        {/* Logo + Sign in + Cart */}
        <div className="d-flex align-items-center justify-content-between mb-2 gap-2">
          <img src={logo} alt="The Chennai Mobiles" height="30 " />

          <div className="d-flex align-items-center gap-1">
            <button className="btn btn-dark rounded-pill px-1 py-0 fw-semibold" style={{ fontSize: "13px", width: "68px", height: "28px", top: "2px",  }}>
              Sign in
            </button>

            <button className="btn p-0 position-relative">
              <img src={cartIcon} width="20" height="20" alt="Cart" />
              <span className="position-absolute badge rounded-pill bg-primary text-white"
                style={{ fontSize: "10px", width: "15px", height: "15px", top: "-5px", right: "-1px" }}>
                0
              </span>
            </button>
          </div>
        </div>

        {/* Only Search Box - No Category, No Menu */}
        <input
          type="text"
          placeholder="Search for a mobile"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="form-control rounded-pill shadow-sm border-0 py-1 px-4 w-100"
          style={{ backgroundColor: "#e1e2e3ff", fontSize: "15px", height: "30px"}}
        />
      </div>

      {/* Spacer for mobile */}
      <div className="d-lg-none" style={{ height: "135px" }}></div>
    </>
  );
}

export default Navbar;