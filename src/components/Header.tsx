export default function Header({
  text,
  bgColor,
  textColor,
}: {
  text: string;
  bgColor: string;
  textColor: string;
}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedbacky',
  bgColor: 'rgba(0,0,0,0.4',
  textColor: '#ff6a95',
};
