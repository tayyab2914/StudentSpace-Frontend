// analytics.js

import { message } from "antd";

// Ensure gtag is available
export function ensureGtag() {
    if (!window.gtag) {
      console.error("gtag is not defined. Ensure the gtag script is loaded.");
      return false;
    }
    return true;
  }
  
  // Track Page Visits
  export function trackPageVisit() {
    if (ensureGtag()) {
      window.gtag("event", "page_view", {
        event_category: "Page Views",
        event_label: `Page Views`,
      });
    }
  }
  
  // Track Number of Reviews
  export function trackReview() {
    if (ensureGtag()) {
      window.gtag("event", "review", {
        event_category: "Reviews",
        event_label: `Review`,
        value: 1,
      });
    }
  }
  
  // Track Number of Reports
  export function trackReport() {
    if (ensureGtag()) {
      window.gtag("event", "report", {
        event_category: "Reports",
        event_label: `Reports`,
        value: 1,
      });
    }
  }
  
  // Track Number of Searches
  export function trackSearch() {
    if (ensureGtag()) {
      window.gtag("event", "search", {
        event_category: "Searches",
        event_label: "Searches",
        value: 1,
      });
    }
  }
  
  // Track Review Ratings
  export function trackRating(rating) {
    if (rating >= 1 && rating <= 5) {
      if (ensureGtag()) {
        window.gtag("event", "review_rating", {
          event_category: "Reviews",
          event_label: `Rating ${rating}`,
          value: 1,
        });
      }
    } else {
    //   message.error("Rating must be between 1 and 5");
    }
  }
  