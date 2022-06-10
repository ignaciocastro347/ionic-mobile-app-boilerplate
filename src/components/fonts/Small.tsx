interface SmallProps {
  dark?: boolean;
}

const Small: React.FC<SmallProps> = ({ children, dark = false }) => (
  <small
    className="small"
    style={{
      color: dark ? "#92949c" : "#92949c",
    }}
  >
    {children}
  </small>
);

export default Small;
