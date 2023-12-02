import React from 'react';

export function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <div>{children}</div>;
}
