import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props extends PropsWithChildren, WithClassName {
  label: string;
}

const Label = styled.span`
  font-size: 0.9rem;
  margin-right: 0.5rem;
  font-weight: bold;
`;
const InfoField = styled(({ label, children, className = '' }: Props) => {
  return (
    <div className={className}>
      <Label>{`${label}:`}</Label>
      {children}
    </div>
  );
})``;

export default InfoField;
