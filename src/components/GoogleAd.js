import React, { useEffect } from "react";
import AdSense from "react-adsense";

const GoogleAd = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Google Ads error:", e);
    }
  }, []);

  return (
    <div className="google-ad-container">
      <AdSense.Google
        client="ca-pub-xxxxxxxxxxxxxxxx" // Replace with your AdSense Publisher ID
        slot="xxxxxxxxxx" // Replace with your Ad Unit Slot ID
        style={{ display: "block", textAlign: "center" }}
        format="auto"
      />
    </div>
  );
};

export default GoogleAd;
