import React, { useState, useEffect } from "react";

function Footer() {
  const [year, setYear] = useState(0);
  useEffect(() => {
    // This will run once when the component mounts to set the initial year
    setYear(new Date().getFullYear());
  }, []); // The empty dependency array ensures this effect runs only once
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              {year} © MyOtobox.
            </div>
            <div className="col-sm-6">
              <div className="text-sm-end d-none d-sm-block">
                Design & Develop by <a href="https://twitter.com/Bimaboy__" target="_blank" rel="noreferrer">Elysee Confiance</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
