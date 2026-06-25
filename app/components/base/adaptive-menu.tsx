import React from 'react';
import Button from './button';
import classNames from 'classnames';

export default function AdaptiveMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = React.useState(false);
  return (
    <div className="flex justify-center">
      <Button className="md:hidden" onClick={() => setShow(!show)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          className="text-md-on-primary dark:text-md-on-primary-dark"
        >
          <path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z" />
        </svg>
      </Button>
      <div
        className={classNames(
          'flex flex-row justify-center max-md:flex-col max-md:absolute max-md:right-3 max-md:top-20',
          'max-md:bg-md-surface/80 max-md:dark:bg-md-surface-dark/80 max-md:p-2 children:m-1.5 max-md:min-w-1/5 rounded-lg',
          'duration-150 opacity-100 z-11',
          show
            ? 'max-md:translate-y-0'
            : 'max-md:opacity-0 max-md:-translate-y-3 max-md:scale-0 max-md:pointer-events-none',
        )}
      >
        {children}
      </div>
    </div>
  );
}
