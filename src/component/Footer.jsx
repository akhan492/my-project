import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4  px-32 py-10 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-grey-800">
        <h5 className="font-bold">About</h5>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
      </div>
      <div className="space-y-4 text-xs text-grey-800">
        <h5 className="font-bold">Community</h5>
        <p>Accessiblity</p>
        <p>This is not a real site</p>
        <p>Airbnb Plus</p>
      </div>
      <div className="space-y-4 text-xs text-grey-800">
        <h5 className="font-bold">Host</h5>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
      </div>
      <div className="space-y-4 text-xs text-grey-800">
        <h5 className="font-bold">Support</h5>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
      </div>
    </div>
  );
}

export default Footer;
