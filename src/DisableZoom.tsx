import { useEffect } from "react";

const DisableZoom = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check for Ctrl or Command key + plus, minus, or zero
      if (
        (event.ctrlKey || event.metaKey) &&
        (event.key === "=" || event.key === "-" || event.key === "0")
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
};

export default DisableZoom;
