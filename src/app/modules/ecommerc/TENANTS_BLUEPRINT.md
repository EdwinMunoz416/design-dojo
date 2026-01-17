# Admin Portal Shell - Tenants Page Redesign Blueprint

## 1. File Structure Plan

src/app/modules/ecommerc/
├── components/
│   ├── TenantCard.tsx       // Displays individual tenant info card
│   ├── TenantList.tsx       // Lists tenant cards with pagination
│   ├── TenantDetailsModal.tsx // Modal for tenant details, focus trap enabled
│   ├── TenantActions.tsx    // Action buttons/menus for tenant commands
├── hooks/
│   └── useTenants.ts        // Data fetching, mutation, state management hook
├── types.ts                 // Tenant interface and related type defs
├── page.tsx                 // Tenants shell page rendering TenantList etc.

## 2. Component Specs and Responsibilities

### TenantCard
Props:
- tenant: Tenant (interface)
- onSelect: (tenantId: string) => void

Responsibilities:
- Present tenant info with clear typography
- Highlight on hover and focus
- Proper aria-label with tenant name and status
- Lazy load avatar images
- Keyboard accessible (tabIndex, onKeyDown)

### TenantList
State:
- currentPage: number
- isLoading: boolean
- error: string | null
- tenants: Tenant[]
- selectedTenantId: string | null

Responsibilities:
- Fetch tenants via useTenants
- Render TenantCard in responsive grid
- Display pagination controls
- Show skeletons during loading
- Show error message with retry button on failure
- Show empty state with illustration when no tenants
- Manage selection state to show TenantDetailsModal

### TenantDetailsModal
Props:
- tenant: Tenant | null
- onClose: () => void

Responsibilities:
- Display tenant full details
- Trap focus within the modal
- Keyboard dismiss (Escape key)
- ARIA roles (dialog) and aria-modal
- Announce modal open state to screen readers
- Responsive styling with proper padding and margins

### TenantActions
Props:
- tenantId: string
- onEdit: () => void
- onDelete: () => void

Responsibilities:
- Display action buttons (edit, delete)
- Confirm modals on destructive actions
- Keyboard navigable and screen reader friendly
- Appropriate aria-labels

## 3. TailwindCSS Classes

- Layout: use grid with gap-6 on md and lg breakpoints
- Color: text-gray-900 and dark:text-gray-100, bg-white and dark:bg-gray-900
- Spacing: consistent margin and padding scale (p-4, m-2 etc)
- Typography: text-lg for headings, text-sm for details
- Transition: hover:shadow-lg, focus:ring-2 focus:ring-blue-500
- Dark mode support for all colors and background
- Accessible color contrast minimum 4.5:1

## 4. Data Flow and State Management

- useTenants hook encapsulates all data fetching, caching, and mutations
- TenantList uses useTenants for data and pagination state
- TenantDetailsModal controlled by TenantList selection state
- TenantActions triggers mutations via useTenants callbacks
- State consistency ensured via context or React Query cache

## 5. Edge Cases and UX

- Loading: skeleton cards with animated pulse
- Error: visible error banner with retry button
- Empty: custom illustration with call to action button
- Slow network: timeout fallback shows toast warning
- Mobile: large touch targets minimum 44px, swipe down gesture to close modal

## 6. Accessibility

- Semantic elements (button, dialog, ul/li)
- ARIA roles and labels everywhere interactive
- Keyboard navigable with logical tab order
- Focus visible and trapped in modals
- Screen reader announcements on modal open/close and errors
- Contrast ratio min 4.5:1 in all themes

## 7. Testing Guidance

- Unit tests for TenantCard, TenantActions, TenantDetailsModal
- Integration tests for TenantList data flow and pagination
- Manual QA verifying keyboard nav, contrast, responsive layouts
- Error and loading state tests
- Modal focus trap tests

---

I will produce Mermaid diagrams in the final delivery to visually illustrate this architecture.

TypeScript interfaces and sample component skeletons will follow after blueprint approval.
