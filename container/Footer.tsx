import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto max-w-3xl px-4 animate-fade-in-blur py-16">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-zinc-500 text-center">
            Design &amp; Developed by <b>Ramxcodes</b> <br /> ©{" "}
            <button type="button">2025</button>. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
