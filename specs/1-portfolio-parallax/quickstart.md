# Quickstart: Portfolio Website Implementation

## Prerequisites

- Node.js 18+
- npm or pnpm
- Existing React project with Tailwind CSS

## Dependencies

Install the animation library:

```bash
npm install framer-motion
# or
pnpm add framer-motion
```

## Implementation Steps

### 1. Create Portfolio Data

Create `src/data/portfolio.ts` with Oliver's professional information:
- Name, title, tagline
- About section content
- Work experience entries (company, role, dates, description)
- Skills by category
- Projects with descriptions and technologies
- Contact information

### 2. Create Parallax Components

Key components in `src/components/portfolio/`:

| Component | Purpose |
|-----------|---------|
| `ParallaxContainer` | Wrapper providing scroll context |
| `Hero` | Name, title, tagline with entrance animation |
| `About` | Professional background summary |
| `Experience` | Timeline of work history |
| `Skills` | Categorized skill display |
| `Projects` | Project showcase grid |
| `Contact` | Contact information and methods |

### 3. Implement Parallax Effects

Use Framer Motion's `useScroll` and `useTransform`:

```tsx
import { useScroll, useTransform, motion } from 'framer-motion';

function ParallaxSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return <motion.div style={{ y }}>{content}</motion.div>;
}
```

### 4. Accessibility

Ensure parallax respects motion preferences:

```tsx
<motion.div 
  initial={false}
  // Use reduced motion variant when preferred
  variants={reducedMotion ? reducedVariants : normalVariants}
>
```

### 5. Update Homepage

Replace content in `src/routes/index.tsx` with portfolio sections.

## Running the Project

```bash
npm run dev
```

Opens at http://localhost:3000

## Testing

```bash
# Unit tests
npm run test

# E2E tests  
npx playwright test
```
