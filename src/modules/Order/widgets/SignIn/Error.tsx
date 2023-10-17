import styled from 'styled-components';

interface Props extends WithClassName {
  message: string;
}

const Error = styled(({ message, className = '' }: Props) => {
  return <div className={className}>{message}</div>;
})`
  color: ${(props) => props.theme.palette.danger};
`;

export default Error;
