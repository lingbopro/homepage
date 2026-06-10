import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "lingbopro's Homepage" },
    { name: 'description', content: "This is lingbopro's website! (∠・ω< )⌒★" },
  ];
}

export default function Home() {
  return <Welcome />;
}
