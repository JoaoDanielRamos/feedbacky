export default function Card({
  children,
  reverse,
}: {
  children: any;
  reverse: boolean;
}) {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
}
