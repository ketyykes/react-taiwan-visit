import { useState } from "react";

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(false);
  function toggleValueFunction(value) {
    setValue((prev) => (typeof value === "boolean" ? value : !prev));
  }
  return [value, toggleValueFunction];
}
