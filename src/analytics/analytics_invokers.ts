import { message } from "antd";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function ensureGtag() {
  if (!window.gtag) {
    console.error("gtag is not defined. Ensure the gtag script is loaded.");
    return false;
  }
  return true;
}

export function trackPageVisit() {
  if (ensureGtag()) {
    window.gtag("event", "page_view", {
      event_category: "Page Views",
      event_label: `Page Views`,
    });
  }
}

export function trackReview() {
  if (ensureGtag()) {
    window.gtag("event", "review", {
      event_category: "Reviews",
      event_label: `Review`,
      value: 1,
    });
  }
}

export function trackReport() {
  if (ensureGtag()) {
    window.gtag("event", "report", {
      event_category: "Reports",
      event_label: `Reports`,
      value: 1,
    });
  }
}

export function trackSearch() {
  if (ensureGtag()) {
    window.gtag("event", "search", {
      event_category: "Searches",
      event_label: "Searches",
      value: 1,
    });
  }
}

export function trackRating(rating: number) {
  if (rating >= 1 && rating <= 5) {
    if (ensureGtag()) {
      window.gtag("event", "review_rating", {
        event_category: "Reviews",
        event_label: `Rating ${rating}`,
        value: 1,
      });
    }
  }
}