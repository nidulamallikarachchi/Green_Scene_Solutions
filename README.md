# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Search Engine Optimization

This project uses **react-helmet** to manage page titles and meta descriptions. Each page now includes an `<SEO>` component that sets relevant information for search engines. After installing dependencies (`npm install`), run the development server with `npm run dev` to preview the optimized pages locally.

## Robots and Sitemap

A `robots.txt` and `sitemap.xml` have been added to the `public/` directory. These files help search engines index your pages. Update the domain inside them if you deploy the site to a different URL.
