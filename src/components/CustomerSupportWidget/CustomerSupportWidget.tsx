import { useEffect } from "react";

export const CustomerSupportWidget = () => {
  useEffect(() => {
    // Load the external widget script
    const script = document.createElement("script");
    script.src = "https://widget.jegeremadiete.com/widget.js";
    script.setAttribute(
      "data-organization-id",
      "org_3792oa0li4Mj0miINI050RhJs7c"
    );
    script.async = true;

    // Append to document body
    document.body.appendChild(script);

    // Cleanup function to remove script if component unmounts
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
};
