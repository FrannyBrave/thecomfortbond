import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://thecomfortbond.com";

export function useCanonical() {
  const { pathname } = useLocation();

  useEffect(() => {
    const url = `${BASE_URL}${pathname === "/" ? "" : pathname}`;
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);
  }, [pathname]);
}
