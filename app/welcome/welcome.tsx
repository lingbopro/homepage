import { Link } from 'react-router';
import { Button } from '@/components/base/button';

export function Welcome() {
  return (
    <main className="flex flex-col items-stretch justify-center pt-14 pb-14">
      <section className="flex flex-col items-center justify-center h-[calc(100vh-14rem)]">
        <h1 className="text-4xl font-bold text-center">你好!</h1>
        <p className="text-xl text-center mt-4">这里是 lingbopro 的小站!</p>
        <div className="pt-8 flex justify-center gap-4">
          <Link to="https://github.com/lingbopro">
            <Button>前往我的 GitHub</Button>
          </Link>
          <Link to="/projects">
            <Button variant="secondary">我的项目</Button>
          </Link>
          <Link to="/about">
            <Button variant="tertiary">关于我</Button>
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center mt-14 h-96">
        <p className="text-2xl text-center pb-4">🚧</p>
        <h2 className="text-2xl font-bold text-center">
          Working in Progress...
        </h2>
        <p className="text-xl text-center mt-4">过会再来看看吧～</p>
      </section>
    </main>
  );
}
