interface Props extends WithTestId {}
const Loading = ({ testId = 'loading' }: Props) => {
  return <div data-testid={testId}>Loading ...</div>;
};

export default Loading;
