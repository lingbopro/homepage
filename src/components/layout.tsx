import { ReactNode, useState } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="page">
      <header className="flex flex-row justify-between items-center sticky top-0 z-10 p-1 bg-light dark:bg-black bg-op-60 backdrop-blur-lg">
        <div className="flex flex-row items-center"></div>
        <div>
          <nav className="flex flex-row space-x-4 children:p-3">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </div>
      </header>
      <main className="overflow-x-hidden">{children}</main>
    </div>
  );
}
