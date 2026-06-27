import { Button } from '@/components/base/button';
import { Link } from 'react-router';
import type { Route } from './+types/404';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Not Found | lingbopro's Homepage" },
    {
      name: 'description',
      content: 'Cannot find the page you are looking for.',
    },
  ];
}

export default function NotFound() {
  return (
    <main className="flex flex-col items-stretch justify-center pt-14 pb-14">
      <section className="flex flex-col items-center justify-center h-[calc(100vh-14rem)]">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Not Found</p>
        <div className="pt-8 flex justify-center gap-4">
          <Link to="/">
            <Button>返回主页</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
