import React, { useEffect } from "react";

const recaptchaSiteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

const Recaptcha = () => {
  // Start recaptcha
  const handleLoaded = (_) => {
    window.grecaptcha.ready((_) => {
      window.grecaptcha
        .execute({ recaptchaSiteKey }, { action: "homepage" })
        .then((token) => {
          console.log(token);
        });
    });
  };

  // Load from Google and create script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
    script.addEventListener("load", handleLoaded);
    document.body.appendChild(script);
  }, []);

  // These can be added to the component for validation / verification
  const rcCallback = () => {
    console.log("callback");
  };

  const rcVerifyCallback = (response) => {
    console.log(response);
  };

  // Put it on the page
  return (
    <div
      className="g-recaptcha"
      data-sitekey={recaptchaSiteKey}
      data-size="invisible"
    ></div>
  );
};

export default Recaptcha;
