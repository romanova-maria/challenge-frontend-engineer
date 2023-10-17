import styled from 'styled-components';
import { PropsWithChildren } from 'react';
import { BREAKPOINTS, MIN_MOBILE_WIDTH } from '../../../../styles/breakpoints';
import { Button } from '../../../../components';
import { MOBILE_SIDE_PADDING } from '../../../../styles/themes/theme';

interface Props extends WithClassName, PropsWithChildren {}

const Card = styled(({ children, className = '' }: Props) => {
  return <div className={className}>{children}</div>;
})`
  border: 2px solid lightslategray;
  border-radius: 10px;
  box-shadow: 3px 2px 10px lightslategray;
  padding: 1rem;
  min-width: calc(${MIN_MOBILE_WIDTH} - ${MOBILE_SIDE_PADDING} * 2);
  width: 100%;

  ${Button} {
    width: 100%;
    margin-top: 1rem;
  }

  @media (${BREAKPOINTS.desktop}) {
    max-width: calc(${MIN_MOBILE_WIDTH} * 1.2);
  }
`;

export default Card;
