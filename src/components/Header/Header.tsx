import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface HeaderProps extends WithHeading, WithClassName, PropsWithChildren {}

const Header = styled(({ headingLevel, className, children }: HeaderProps) => {
  return (
    <div role="heading" aria-level={headingLevel} className={className}>
      {children}
    </div>
  );
})``;

export default Header;
