import React, { useCallback, useEffect } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import ContactUs from "./ContactUs";

const ReCaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha("yourAction");
    // Do whatever you want with the token
  }, [executeRecaptcha]);

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <GoogleReCaptchaProvider reCaptchaKey="[6Le1ku4pAAAAANKLtJt3xZM54LnDHXaVDPhoy--5]">
        
      <ContactUs />
    </GoogleReCaptchaProvider>
  );
};

export default ReCaptcha;
