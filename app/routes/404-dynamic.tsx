import type { Route } from './+types/404-dynamic';
import NotFound from './404';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Not Found | lingbopro's Homepage" },
    {
      name: 'description',
      content: 'Cannot find the page you are looking for.',
    },
  ];
}

export default NotFound;
