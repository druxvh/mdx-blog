interface BlogType {
  slug: string;
  content: string;
  title: string;
  description: string;
  imageURL: string;
}

const blogData: BlogType[] = [
  {
    slug: "why-javascript-rules-the-web",
    title: "Why JavaScript Rules the Web in 2024",
    description:
      "Explore why JavaScript remains the dominant language for web development and how it continues to evolve with frameworks like Next.js, React, and others.",
    imageURL:
      "https://images.pexels.com/photos/29666174/pexels-photo-29666174/free-photo-of-abstract-geometric-stained-glass-windows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: `
  # Why JavaScript Rules the Web in 2024
  
  ![JavaScript](https://example.com/images/javascript-rules.webp)
  
  JavaScript has come a long way since its inception in 1995. In 2024, it remains the **king of web development**, powering not just frontend experiences but also backend, mobile apps, and even machine learning.
  
  ---
  
  ## 🚀 **Why JavaScript Remains Undefeated**
  
  - **Universal Language**: Runs everywhere (browsers, servers, mobile, desktop).
  - **Massive Ecosystem**: Frameworks like **Next.js**, **React**, and **Vue**.
  - **Modern Features**: Async/await, destructuring, arrow functions.
  
  > *“JavaScript is the language of the web, and it’s here to stay.”*
  `,
  },
  {
    slug: "nextjs-14-new-features",
    title: "Top 5 Features of Next.js 14 You Should Know",
    description:
      "Discover the top new features of Next.js 14 that improve performance, scalability, and developer experience.",
    imageURL:
      "https://images.pexels.com/photos/29666174/pexels-photo-29666174/free-photo-of-abstract-geometric-stained-glass-windows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: `
  # Top 5 Features of Next.js 14 You Should Know
  
  ![Next.js](https://example.com/images/nextjs-14-features.webp)
  
  Next.js 14 introduces a variety of performance and developer-friendly enhancements.
  
  ---
  
  ## ⚡ **Top Features**
  
  1. **Server Components**: Improve rendering performance.
  2. **Middleware Enhancements**: Better control over requests.
  3. **Improved Build Speed**: Faster bundling and optimizations.
  4. **Edge Functions**: Deploy globally on edge networks.
  5. **Enhanced TypeScript Support**: Improved DX for TS developers.
  
  ---
  
  Next.js continues to innovate, making it the go-to framework for modern web applications.
  `,
  },
  {
    slug: "react-18-features",
    title: "React 18: What’s New and Why It Matters",
    description:
      "Learn about React 18's new features, including concurrent rendering, suspense, and automatic batching.",
    imageURL:
      "https://images.pexels.com/photos/29666174/pexels-photo-29666174/free-photo-of-abstract-geometric-stained-glass-windows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: `
  # React 18: What’s New and Why It Matters
  
  ![React](https://example.com/images/react-18.webp)
  
  React 18 introduced powerful new features to improve performance and developer experience.
  
  ---
  
  ## 🎉 **Key Features**
  
  - **Concurrent Rendering**: Smoother UI updates.
  - **Suspense Improvements**: Better data fetching capabilities.
  - **Automatic Batching**: Reduces unnecessary re-renders.
  
  React 18 ensures faster and more efficient web applications.
  `,
  },
  {
    slug: "fullstack-development-guide",
    title: "The Ultimate Fullstack Development Guide for Beginners",
    description:
      "A complete guide for beginners to start building fullstack web applications using modern tools like Next.js and Node.js.",
    imageURL:
      "https://images.pexels.com/photos/29666174/pexels-photo-29666174/free-photo-of-abstract-geometric-stained-glass-windows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: `
  # The Ultimate Fullstack Development Guide for Beginners
  
  ![Fullstack](https://example.com/images/fullstack-guide.webp)
  
  Are you new to web development? This guide will take you through the essential tools and steps to become a fullstack developer.
  
  ---
  
  ## 🔧 **What You Will Learn**
  
  1. **Frontend**: Build UI using **React** and **Next.js**.
  2. **Backend**: Create APIs with **Node.js** and **Express**.
  3. **Database**: Store data with **MongoDB** or **PostgreSQL**.
  4. **Deployment**: Deploy apps to **Vercel** or **Heroku**.
  
  By the end, you'll be able to build and deploy fullstack applications from scratch!
  `,
  },
  {
    slug: "why-typescript-is-important",
    title: "Why TypeScript is Essential for Modern JavaScript Projects",
    description:
      "Explore how TypeScript improves code quality and reduces bugs in large-scale JavaScript applications.",
    imageURL:
      "https://images.pexels.com/photos/29666174/pexels-photo-29666174/free-photo-of-abstract-geometric-stained-glass-windows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: `
  # Why TypeScript is Essential for Modern JavaScript Projects
  
  ![TypeScript](https://example.com/images/typescript-importance.webp)
  
  TypeScript adds static types to JavaScript, improving code quality and maintainability.
  
  ---
  
  ## 🛠️ **Benefits of TypeScript**
  
  1. **Type Safety**: Reduces runtime errors with static checking.
  2. **Better IntelliSense**: Autocompletion and hints in editors.
  3. **Improved Refactoring**: Make changes with confidence.
  
  If you're building a large-scale app, TypeScript is a game-changer!
  `,
  },
];

export default blogData;
