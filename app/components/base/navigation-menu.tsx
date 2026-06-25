import React from 'react';
import { NavigationMenu as R_NavigationMenu, VisuallyHidden } from 'radix-ui';
import classNames from 'classnames';

interface NavigationMenuProps {
  children: React.ReactNode;
  className?: string;
}

// interface MenuItemProps extends React.ComponentProps<typeof R_NavigationMenu.Item> {
//   className?: string;
//   trigger?: React.ReactNode;
//   content?: React.ReactNode;
//   children?: React.ReactNode;
// }

export function NavigationMenu({ children, className }: NavigationMenuProps) {
  return (
    <R_NavigationMenu.Root>
      <R_NavigationMenu.List
        className={classNames(
          'flex items-center justify-center gap-1',
          className,
        )}
      >
        {children}
      </R_NavigationMenu.List>

      <div className="absolute">
        <R_NavigationMenu.Viewport
          className={classNames(
            'absolute p-4 h-[calc-size(auto)] rounded-lg bg-md-surface-bright/60 dark:bg-md-surface-bright-dark/60 backdrop-blur-lg',
            'transition duration-200 data-[state=open]:animate-enterFromTop data-[state=closed]:animate-exitToTop',
          )}
        />
      </div>
    </R_NavigationMenu.Root>
  );
}

// export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
//   ({ className, trigger, content, children, ...props }, ref: React.Ref<HTMLLIElement>) => (
//     <R_NavigationMenu.Item
//       ref={ref}
//       className={classNames(
//         'px-3 py-1.5 rounded-md text-on-surface-variant',
//         'hover:bg-primary-container hover:text-on-primary-container',
//         'focus:bg-primary-container focus:text-on-primary-container',
//         'data-[active]:bg-primary-container data-[active]:text-on-primary-container',
//         'transition-colors duration-200',
//         className,
//       )}
//       {...props}
//     >
//       {trigger && (
//         <R_NavigationMenu.Trigger
//           className={classNames(
//             'w-full text-left',
//             'hover:bg-primary-container hover:text-on-primary-container',
//             'focus:bg-primary-container focus:text-on-primary-container',
//           )}
//         >
//           {trigger}
//         </R_NavigationMenu.Trigger>
//       )}
//       {content && (
//         <R_NavigationMenu.Content
//           className={classNames(
//             'absolute mt-2 min-w-[180px] rounded-md bg-surface-container-highest p-2 shadow-lg',
//           )}
//         >
//           {content}
//         </R_NavigationMenu.Content>
//       )}
//       {children}
//     </R_NavigationMenu.Item>
//   ),
// );

// // Keep backward compatibility
// NavigationMenu.Item = MenuItem;
// NavigationMenu.Trigger = R_NavigationMenu.Trigger;
// NavigationMenu.Content = R_NavigationMenu.Content;
// NavigationMenu.Link = R_NavigationMenu.Link;

interface NavigationMenuItemProps {
  trigger: React.ReactNode | string;
  subItems?: Array<{
    title: string | React.ReactNode;
    props?: React.ComponentProps<'li'>;
  }>;
  children: React.ReactNode;
  className?: string;
}

export function NavigationMenuItem({
  trigger,
  subItems,
  children,
  className,
  ...props
}: NavigationMenuItemProps) {
  return (
    <R_NavigationMenu.Item
      className={classNames(
        'p-3 rounded-md text-on-surface-variant',
        'hover:bg-primary-container hover:text-on-primary-container',
        'focus:bg-primary-container focus:text-on-primary-container',
        'data-active:bg-primary-container data-active:text-on-primary-container',
        'transition duration-200',
        className,
      )}
      {...props}
    >
      <R_NavigationMenu.Trigger
        className={classNames(
          'p-3 rounded-md text-on-surface-variant',
          'hover:bg-primary-container hover:text-on-primary-container',
          'focus:bg-primary-container focus:text-on-primary-container',
          'data-active:bg-primary-container data-active:text-on-primary-container',
          'transition duration-200',
          className,
        )}
      >
        {trigger}
      </R_NavigationMenu.Trigger>
      <R_NavigationMenu.Content>
        {subItems && subItems.length > 0 && (
          <ul>
            {subItems.map((item) => {
              const { className = '', ...itemProps } = item.props || {};
              return (
                <li
                  className={classNames(
                    'm-1 p-3 rounded-md hover:bg-primary-container duration-200',
                    'hover:bg-md-surface/80 hover:dark:bg-md-surface-dark/80',
                    className,
                  )}
                  key={item.title?.toString()}
                  {...itemProps}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        )}
        {children}
      </R_NavigationMenu.Content>
    </R_NavigationMenu.Item>
  );
}
