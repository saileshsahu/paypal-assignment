import { useState, useEffect, useRef } from "react";

import loadImage from "./loadImage.util.js";

const cache = new Map();

export const Status = {
  LOADING: "loading",
  LOADED: "loaded",
};

export default function useImage(src) {
  const cachedImg = cache.get(src);
  const initialState = cachedImg ? Status.LOADED : Status.LOADING;
  const [status, setStatus] = useState(initialState);
  const mounted = useRef(false);

  useEffect(async () => {
    if (!src || status === Status.LOADED) return;
    mounted.current = true;

    try {
      const image = await loadImage(src);
      if (!mounted.current) return;
      cache.set(src, image);
      setStatus(Status.LOADED);
    } catch (error) {
      if (!mounted.current) return;
      cache.delete(src);
      console.error(`Failed to load ${src}`);
    }
    return () => {
      mounted.current = false;
    };
  }, [src, status]);

  return [status, cachedImg];
}
