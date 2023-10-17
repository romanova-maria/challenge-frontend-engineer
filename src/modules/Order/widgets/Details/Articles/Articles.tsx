import { Card } from '../../../components';
import { CardHeader } from '../components';
import Article from './Article';
import styled from 'styled-components';

interface Props extends WithHeading {
  articles: Article[];
}

const Articles = styled(({ articles, headingLevel }: Props) => {
  return (
    <Card>
      <CardHeader headingLevel={headingLevel}>Articles</CardHeader>
      {articles.map((article) => (
        <Article
          article={article}
          headingLevel={headingLevel + 1}
          key={article.articleNo}
        />
      ))}
    </Card>
  );
})`
  ${Article} {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export default Articles;
