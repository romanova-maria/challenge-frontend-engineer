import { Card } from '../../../components';
import Checkpoint from './Checkpoint';
import styled from 'styled-components';
import { CardHeader } from '../components';

interface Props extends WithHeading, WithClassName {
  checkpoints: Checkpoint[];
}

const Shipping = styled(({ checkpoints, headingLevel, className = '' }: Props) => {
  return (
    <Card className={className}>
      <CardHeader headingLevel={headingLevel}>Shipping updates</CardHeader>
      {checkpoints.map((checkpoint) => (
        <Checkpoint
          checkpoint={checkpoint}
          headingLevel={headingLevel + 1}
          key={checkpoint.event_timestamp}
        />
      ))}
    </Card>
  );
})`
  ${Checkpoint} {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export default Shipping;
