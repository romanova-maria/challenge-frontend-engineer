import { Header } from '../components';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../../../../styles/breakpoints';
import { InfoField } from './index';

interface Props extends WithClassName, WithHeading {
  article: Article;
}

const Price = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
`;

const Article = styled(({ headingLevel, article, className = '' }: Props) => {
  const { articleName, price, articleNo, quantity, articleImageUrl } = article;

  return (
    <div className={className}>
      <img src={articleImageUrl} alt={`${articleName} image`} />
      <div>
        <Header headingLevel={headingLevel}>{articleName}</Header>
        <InfoField label="Article number">{articleNo}</InfoField>
        <InfoField label="Price">
          <Price>{price}</Price>
        </InfoField>
        {quantity > 1 && <div>Amount: {quantity}</div>}
      </div>
    </div>
  );
})`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  img {
    width: 100%;
  }

  @media (${BREAKPOINTS.desktop}) {
    flex-direction: row;
    align-items: start;

    img {
      min-width: unset;
      max-width: 30%;
    }
  }
`;

export default Article;
