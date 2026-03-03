## 2025-02-18 - Missing ARIA Labels in Iterated Icon Links
**Learning:** Icon-only links generated via `.map()` (like in `Navbar.jsx`) often miss `aria-label` if the data source doesn't explicitly provide a label, leading to accessibility failures.
**Action:** Always check data sources (like `src/data/contact.jsx`) for label properties when mapping over icons, and implement a fallback (e.g., `link.platform`) or update the data source.

## 2025-02-18 - Missing Visible Focus on Interactive Icon Links
**Learning:** Interactive elements like social links and secondary buttons often miss visible focus states, hindering keyboard navigation.
**Action:** Always add consistent `focus-visible` ring utilities to interactive link components to ensure a seamless and accessible experience for all users.
