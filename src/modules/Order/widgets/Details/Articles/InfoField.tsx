import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props extends PropsWithChildren {
  label: string;
}

const Label = styled.span`
  font-size: 0.8rem;
  margin-right: 0.5rem;
`;
const InfoField = ({ label, children }: Props) => {
  return (
    <div>
      <Label>{`${label}:`}</Label>
      {children}
    </div>
  );
};

export default InfoField;
