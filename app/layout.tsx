import { Link, Outlet } from 'react-router';
import Button from './components/base/button';
import AdaptiveMenu from './components/base/adaptive-menu';

export default function Layout() {
  return (
    <div>
      <div className="flex justify-center sticky top-0 w-full select-none">
        <header className="flex justify-between items-center p-4 w-full md:max-w-[80%] lg:max-w-[70%] bg-md-surface/80 dark:bg-md-surface-dark/80 backdrop-blur-md rounded-b-2xl">
          <div className="font-bold text-md-primary dark:text-md-primary-dark">
            lingbopro's homepage
          </div>
          <div className="flex justify-center text-md-on-surface-variant dark:text-md-on-surface-variant-dark">
            <nav>
              <AdaptiveMenu>
                <Link to="/">
                  <Button variant="text">Home</Button>
                </Link>
                <Link to="https://github.com/lingbopro" target="_blank">
                  <Button variant="text">GitHub</Button>
                </Link>
              </AdaptiveMenu>
            </nav>
          </div>
        </header>
      </div>
      <div>
        <Outlet />
      </div>
      <footer className="flex justify-stretch p-8 mt-10 w-full bg-md-surface/80 dark:bg-md-surface-dark/80 backdrop-blur-md rounded-t-2xl">
        <div className="text-md-on-surface-variant dark:text-md-on-surface-variant-dark">
          <p>Copyright © 2026 lingbopro</p>
          <p>
            {'This site is '}
            <Link
              to="https://github.com/lingbopro/homepage"
              target="_blank"
              className="text-md-primary dark:text-md-primary-dark decoration-none"
            >
              open source
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
