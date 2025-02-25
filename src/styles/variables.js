import { css } from 'styled-components';

// const darkVariable = css`
//   :root {
//     --dark-navy: #020c1b;
//     --navy: #000000;
//     --light-navy: #111111;
//     --lightest-navy: #233554;
//     --navy-shadow: rgba(2, 12, 27, 0.7);
//     --dark-slate: #495670;
//     --slate: #cacedc;
//     --light-slate: #ccd6f6;
//     --lightest-slate: #f1f4ff;
//     --white: #e6f1ff;
//     --green: #70ceff;
//     --green-tint: rgba(100, 255, 218, 0.1);
//     --pink: #f57dff;
//     --blue: #57cbff;

//     --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
//       sans-serif;
//     --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

//     --fz-xxs: 12px;
//     --fz-xs: 13px;
//     --fz-sm: 14px;
//     --fz-md: 16px;
//     --fz-lg: 18px;
//     --fz-xl: 20px;
//     --fz-xxl: 22px;
//     --fz-heading: 32px;

//     --border-radius: 4px;
//     --nav-height: 100px;
//     --nav-scroll-height: 70px;

//     --tab-height: 42px;
//     --tab-width: 120px;

//     --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
//     --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

//     --hamburger-width: 30px;

//     --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
//     --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
//     --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
//     --ham-after-active: bottom 0.1s ease-out,
//       transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
//   }
// `;

const lightVariables = css`
  :root {
    --dark-navy: #020c1b;
    --navy: #ffffff;
    --light-navy: #ffffff;
    --lightest-navy: #233554;
    --navy-shadow: rgba(214, 214, 214, 0.7);
    --dark-slate: #495670;
    --slate: #4b5563;
    --light-slate: #707d90;
    --lightest-slate: #101827;
    --white: #e6f1ff;
    --green: #00a8ff;
    --green-tint: rgba(0, 168, 255, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
  .dark-mode {
    --dark-navy: #020c1b;
    --navy: #000000;
    --light-navy: #111111;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #495670;
    --slate: #cacedc;
    --light-slate: #ccd6f6;
    --lightest-slate: #f1f4ff;
    --white: #e6f1ff;
    --green: #70ceff;
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;
  }
`;

export default lightVariables;
