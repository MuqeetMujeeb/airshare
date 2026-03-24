# IMPLEMENTATION PLAN

## 1. Component Breakdown

* **Layout & Navigation**
  * `Layout.jsx`: Master container that handles global padding, max-widths, smooth scroll initialization (Lenis), and wraps page sections.
  * `Header.jsx`: Fixed/Sticky transparent navigation with glassmorphism (backdrop-blur), animated logo, and "Join Waitlist" primary CTA. Includes micro-interactions on scroll.
  * `Footer.jsx`: Minimalist footer with copyright, links, and discreet social icons with hover states.
* **Page Sections**
  * `Hero.jsx`: High-impact landing area. "GitHub for video creators" heading in Instrument Serif, brief subtext, CTA. Features soft white/sky-blue animated gradient blur orbs in the background.
  * `HowItWorks.jsx`: The core cinematic scroll section. Acts as a pinned container.
  * `Workflow.jsx`: A visual representation of the Creator → Cloud → Editor pipeline, showing the seamless connection between the three nodes.
  * `Comparison.jsx`: Side-by-side or stacked visual showing traditional (record -> wait -> upload -> download -> edit) vs. Real-Time (record & upload simultaneously -> edit instantly).
  * `Integrations.jsx`: Logo showcase (Premiere, Final Cut, DaVinci) with a subtle infinite marquee or staggered fade-ins.
  * `Waitlist.jsx`: Clean email capture block with micro-interactions (magnetic hover states, input focus glows, success feedback state).
* **UI Primitives**
  * `Button.jsx`: Reusable button component handling primary/secondary variants with Framer Motion tap/hover effects (e.g., scale on tap, brightness increase on hover).
  * `GradientGlow.jsx`: Reusable blurred background gradient component for the premium SaaS aesthetic.

## 2. Animation & Interaction Strategy

* **Smooth Scrolling (Lenis Integration)**: Lenis will be instantiated within a React `useEffect` inside a dedicated `SmoothScroll` context or the `Layout.jsx` component. It hooks into `requestAnimationFrame` to ensure silky smooth momentum scrolling, creating a premium feel. We will use `useAnimationFrame` from Framer Motion to tie Lenis and Framer Motion together seamlessly.
* **Micro-Interactions**:
  * **Hover & Tap**: Buttons will scale down slightly on tap (`whileTap={{ scale: 0.98 }}`) and shift visually on hover.
  * **Inputs**: The waitlist email input will feature a subtle blue glow (`box-shadow`) upon focus.
  * **Navbar Blur**: The header will transition from transparent to a frosted glass effect (`backdrop-filter: blur()`) when the user scrolls past the hero section.
* **Hero Entrance**: Initial load triggers staggered vertical slide-ups with slight opacity fades (`initial={{ opacity: 0, y: 20 }}`). Continuous slow pulsating scaling on background gradient blurs.
* **How It Works (Cinematic Scroll)**:
  * We will use Framer Motion's `useScroll` (tracking `scrollYProgress` of the pinned section container) and `useTransform` to map scroll progress to visual states.
  * The section will be `sticky` (pinned) taking up `400vh` so the user scrolls to trigger animations rather than moving past them.
  * **Sequence**:
    1. *[0% - 20%]*: Phone UI scales up, showing a "recording" state (blinking red dot).
    2. *[20% - 40%]*: Simultaneous chunk upload visualization starts. Discreet visual chunks/packets flow up from the phone *while* recording time continues to tick.
    3. *[40% - 60%]*: Cloud iconography/container receives the data stream, glowing sky-blue, dynamically showing storage size increasing.
    4. *[60% - 80%]*: Desktop editor UI (NLE timeline mockup) slides in alongside the cloud, displaying the incoming video chunks appearing directly on the timeline seamlessly.
    5. *[80% - 100%]*: The Session/Version UI overlays appear (Avatars pop in with "Approved" / "V2 Added" badges) to signify real-time collaboration and version control.
* **Intersection Observers**: For non-pinned sections (Comparison, Workflow, Integrations), we will use `whileInView` with `viewport={{ once: true, margin: "-100px" }}` to trigger elegant fade-ins and transforms as they enter the screen.

## 3. State Management & Performance Approach

* **Performance Optimization**:
  * **Transforms Only**: All scroll-driven animations will exclusively animate CSS `transform` (scale, x, y) and `opacity`. Animating layout properties (width, height, top, left) will be strictly avoided to prevent layout thrashing and maintain 60fps.
  * **Avoid Re-renders**: Scroll variables (`scrollYProgress`) from `useScroll` will be passed directly into `motion` components via `useTransform` motion values. This bypasses the React render cycle entirely.
* **Component State (React `useState`)**: Used sparingly for simple local interactions:
  * Header state (scrolled vs at top to toggle glassmorphism class).
  * Waitlist form submission status (idle, loading, success, error).
* **No Global State**: Since this is a streamlined landing page with isolated interactivity, Redux/Zustand/Context is unnecessary complexity. React props and local state will suffice.
* **Responsive behavior**:
  * Collapse cinematic animation into step cards on mobile
  * Reduce scroll height (400vh → ~200vh)
  * Simplify visuals for performance

## 4. Font Loading Strategy

* **Optimized Font Delivery**: 
  * Fonts (Instrument Serif, Inter) will be self-hosted or preloaded via `<link rel="preload">` in `index.html` to eliminate render-blocking and prevent FOUT (Flash of Unstyled Text) or layout shift.
  * Font-display will be set to `swap` as a fallback, ensuring text remains visible while fonts download.

## 5. Folder/File Responsibilities

```text
/project-root
├── index.html                   (Vite entry point, font preloading)
├── package.json                 (Dependencies & scripts)
├── tailwind.config.js           (Tailwind setup, colors: white/sky-blue, fonts)
├── vite.config.js               (Vite bundler configuration)
├── /public
│   └── /assets                  (Static non-optimized files, fonts)
└── /src
    ├── main.jsx                 (React DOM render)
    ├── App.jsx                  (Root Layout and Section Assembly)
    ├── /components
    │   ├── /layout
    │   │   ├── Layout.jsx       (Lenis initialization, master wrapper)
    │   │   ├── Header.jsx       (Navigation bar)
    │   │   └── Footer.jsx       (Footer block)
    │   ├── /sections
    │   │   ├── Hero.jsx         (Hero block)
    │   │   ├── HowItWorks.jsx   (Scroll animation orchestrator)
    │   │   ├── Workflow.jsx     (Creator -> Cloud -> Editor pipeline visual)
    │   │   ├── Comparison.jsx   (Vs. traditional method)
    │   │   ├── Integrations.jsx (NLE tool logos)
    │   │   └── Waitlist.jsx     (Email capture)
    │   └── /ui
    │       ├── Button.jsx       (Standardized interactive button)
    │       └── GradientGlow.jsx (Blurred background decorators)
    ├── /styles
    │   ├── index.css            (Tailwind directives, custom font imports)
    │   └── animations.css       (Optional vanilla CSS keyframes if needed)
    └── /utils
        └── cn.js                (Tailwind class merging utility - clsx + twMerge)
```

## 6. Dependencies List

* **Core Framework**:
  * `react`, `react-dom`
* **Development/Bundler**:
  * `vite`, `@vitejs/plugin-react`
* **Styling**:
  * `tailwindcss`, `postcss`, `autoprefixer`
  * `clsx`, `tailwind-merge` (For conditional Tailwind class merging)
* **Animations & Scrolling**:
  * `framer-motion` (Declarative UI animations and scroll tracking)
  * `@studio-freight/react-lenis` (Smooth momentum scrolling for the viewport)
* **Icons**:
  * `lucide-react` (Clean, modern SVG icon library)
