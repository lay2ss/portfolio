import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const sectionIds = ["home", "projects", "contact"];

export function useScrollUrlUpdater() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newHash = `#${entry.target.id}`;
            if (location.hash !== newHash) {
              window.history.replaceState(null, "", newHash);
            }
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location]);
}