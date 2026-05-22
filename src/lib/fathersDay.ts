// Father's Day 2026 seasonal flag.
// Active through June 21, 2026 (end of day, US Central Time).
// Auto-hides June 22, 2026 at 12:01 AM CT (= 05:01 UTC during CDT).
//
// To test removal locally, temporarily set FATHERS_DAY_END to a past date.
export const FATHERS_DAY_END = new Date("2026-06-22T05:01:00Z");

export const isFathersDayActive = (now: Date = new Date()): boolean =>
  now < FATHERS_DAY_END;

export const FATHERS_DAY_KIT_SLUGS = new Set([
  "hands-that-made-it",
  "places-weve-been",
  "remember-when",
  "collection",
]);
