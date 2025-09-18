import { useEffect } from "react";

export default function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    const { body } = document;
    const prev = body.style.overflow;
    if (locked) body.style.overflow = "hidden";
    return () => { body.style.overflow = prev; };
  }, [locked]);
}
