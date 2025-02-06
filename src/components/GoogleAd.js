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
      {/* <AdSense.Google
        client="ca-pub-2554848906387700" // Replace with your AdSense Publisher ID
        slot="8784719481" // Replace with your Ad Unit Slot ID
        style={{ display: "block", textAlign: "center" }}
        format="auto"
      /> */}
      <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-2554848906387700"
      data-ad-slot="8784719481"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
    </div>
  );
};

export default GoogleAd;
