import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement>, WithClassName {
  id: string;
  label: string;
}
const Input = styled(({ id, label, className = '', ...props }: Props) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} />
    </div>
  );
})`
  label {
    margin-right: 0.5rem;
  }
`;

export default Input;
