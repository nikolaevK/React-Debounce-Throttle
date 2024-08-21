import { useCallback, useEffect, useRef, useState } from "react";
import { debounce } from "../utils/Debounce";
import { storageAPI } from "../api/storage";

export default function SaveableTextInput() {
  const [text, setText] = useState("");
  const { read, save } = storageAPI();
  const isTextEdited = useRef(false);

  // avoid unnecessary calls to api
  const debouncer = useCallback(
    debounce((text: string) => {
      save(text);
    }, 500),
    []
  );

  const handleUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    isTextEdited.current = true;
    setText(e.target.value);
    debouncer(e.target.value);
  };

  useEffect(() => {
    read().then((text) => {
      if (isTextEdited.current) {
        return;
      }
      setText(text);
    });
  }, []);

  return (
    <div>
      <textarea value={text} onChange={handleUpdate} rows={30} />
    </div>
  );
}
