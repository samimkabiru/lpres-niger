interface Props {
  children: string;
}

const TextSummarizer = ({ children }: Props) => {
  let limit = 50;
  const visibleText =
    children.length <= limit ? children : children.substring(0, limit) + '...';

  return <div>{visibleText}</div>;
};

export default TextSummarizer;
