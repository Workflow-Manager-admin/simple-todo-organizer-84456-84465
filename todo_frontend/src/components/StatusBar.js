import React from "react";

// PUBLIC_INTERFACE
function StatusBar() {
  /** Minimal mobile-style status bar UI, as per design */
  return (
    <div className="status-bar">
      <div className="status-notch"></div>
      <div className="status-time">9:41</div>
      <div className="status-icons">
        <span className="status-network"></span>
        <span className="status-wifi"></span>
        <span className="status-battery"></span>
      </div>
    </div>
  );
}

export default StatusBar;
