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

      {/* Just for test, TODO remove this */}
      <div className="h-[114514px]"></div>
    </div>
  );
}
