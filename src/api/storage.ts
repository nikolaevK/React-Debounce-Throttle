import { useState } from "react";

export function storageAPI() {
  const [currentString, setCurrentString] = useState("");

  const read = (): Promise<string> => {
    return new Promise((resolve, _) => {
      setTimeout(() => resolve(currentString), 500);
    });
  };

  const save = (str: string): Promise<string> => {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        setCurrentString(str);
        console.log("[save request]", str);
        resolve(currentString);
      }, 500);
    });
  };

  return { read, save };
}
