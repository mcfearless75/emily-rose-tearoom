"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function push(event: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export default function AnalyticsClicks() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      const linkText = (anchor.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80);

      if (href.startsWith("tel:")) {
        push({ event: "phone_click", phone: href.replace("tel:", ""), link_text: linkText });
        return;
      }
      if (href.includes("maps.app.goo.gl") || href.includes("google.com/maps")) {
        push({ event: "directions_click", link_text: linkText });
        return;
      }
      if (href.includes("/contact")) {
        push({ event: "booking_click", link_url: href, link_text: linkText });
        return;
      }
      if (href.includes("/private-hire") || href.includes("/event-catering")) {
        push({ event: "enquiry_click", link_url: href, link_text: linkText });
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
