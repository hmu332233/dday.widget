import React, { useId } from 'react';

const ID = 'Drawer';

type DrawerProps = {
  children: React.ReactNode;
};
function Drawer({ children }: DrawerProps) {
  return (
    <div className="drawer drawer-end">
      <input id={ID} type="checkbox" className="drawer-toggle" />
      {children}
    </div>
  );
}

type ContentProps = {
  children: React.ReactNode;
};
function Content({ children }: ContentProps) {
  return <div className="drawer-content">{children}</div>;
}

type SideProps = {
  children: React.ReactNode;
};
function Side({ children }: SideProps) {
  return (
    <div className="drawer-side">
      <label htmlFor={ID} className="drawer-overlay" />
      <div className="p-4 overflow-y-auto w-1/2 bg-base-100 text-base-content">
        {children}
      </div>
    </div>
  );
}

type ButtonProps = {
  children: React.ReactNode;
};
function Button({ children }: ButtonProps) {
  return (
    <label htmlFor={ID} className="btn">
      {children}
    </label>
  );
}

Drawer.Content = Content;
Drawer.Side = Side;
Drawer.Button = Button;

export default Drawer;
