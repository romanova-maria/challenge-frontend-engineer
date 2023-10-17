import styled from 'styled-components';
import { Header } from '../components';

interface Props extends WithHeading, WithClassName {
  checkpoint: Checkpoint;
}

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 0.5rem;
  font-size: 0.9rem;
`;

const Checkpoint = styled(({ checkpoint, className = '', headingLevel }: Props) => {
  const { status, city, event_timestamp: date, status_details: details } = checkpoint;
  const dateFormatted = new Date(date).toDateString();

  return (
    <div className={className}>
      <Header headingLevel={headingLevel}>{status}</Header>
      <div>{details}</div>
      <Footer>
        <div>{city}</div>
        <div>{dateFormatted}</div>
      </Footer>
    </div>
  );
})``;

export default Checkpoint;
