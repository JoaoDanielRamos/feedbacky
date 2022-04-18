export default function Button({
  children,
  version,
  type,
  isDisabled,
}: {
  children: any;
  version: string;
  type: any;
  isDisabled: boolean;
}) {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
}
