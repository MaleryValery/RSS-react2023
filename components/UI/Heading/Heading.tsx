interface HeadingProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
  className?: string;
}

const Heading = ({ tag, text, className }: HeadingProps) => {
  const Tag = tag || 'h1';
  return (
    <Tag data-testid="tag-name" className={className}>
      {text}
    </Tag>
  );
};

export default Heading;
