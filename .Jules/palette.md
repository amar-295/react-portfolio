## 2025-02-18 - Missing ARIA Labels in Iterated Icon Links
**Learning:** Icon-only links generated via `.map()` (like in `Navbar.jsx`) often miss `aria-label` if the data source doesn't explicitly provide a label, leading to accessibility failures.
**Action:** Always check data sources (like `src/data/contact.jsx`) for label properties when mapping over icons, and implement a fallback (e.g., `link.platform`) or update the data source.

## 2025-02-18 - Missing Visible Focus on Interactive Icon Links
**Learning:** Interactive elements like social links and secondary buttons often miss visible focus states, hindering keyboard navigation.
**Action:** Always add consistent `focus-visible` ring utilities to interactive link components to ensure a seamless and accessible experience for all users.

## 2025-03-04 - Screen Reader Feedback on Form States
**Learning:** Form success/error messages implemented via React state do not automatically alert screen readers, leading to confusing silence on submission.
**Action:** Add `role="status"` and `aria-live="polite"` to success message containers, and `role="alert"` to inline error summaries for immediate accessibility feedback without page reloads.

## 2025-03-05 - Missing Skip-to-Content Links
**Learning:** Missing skip-to-content links break keyboard accessibility for screen reader users and those unable to use a mouse, particularly on long-scrolling portfolios with complex navigation. Users are forced to tab through all navigation elements before reaching the actual content.
**Action:** Always include a visually hidden, focusable link at the very top of the DOM (e.g., in `App.jsx`) that jumps to the main content container.

## 2025-03-07 - Add `aria-current` to active navigation links
**Learning:** Adding visual distinction to an active navigation link is good for sighted users, but screen reader users lack this context if semantic HTML isn't used.
**Action:** Always apply `aria-current="page"` (or another appropriate value) dynamically to the currently active link within a navigation menu.

## 2026-03-10 - Screen Reader Menu Feedback
**Learning:** Hamburger menus on mobile devices often toggle visual states without informing screen readers if the menu is open (`aria-expanded`) and what content it controls (`aria-controls`), leading to a confusing navigation experience.
**Action:** Always link mobile menu toggle buttons to their corresponding content containers using `aria-controls="[id]"` and dynamically update `aria-expanded={isOpen}` to ensure state changes are announced properly.
