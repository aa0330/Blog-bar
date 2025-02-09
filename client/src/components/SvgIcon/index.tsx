//SvgIcon.jsx

const SvgIcon = (props) => {
  const { name, prefix = "icon", width, height } = props;
  const symbolId = `#${prefix}-${name}`;
  return (
    <svg aria-hidden="true" style={{ width, height }}>
      <use href={symbolId} />
    </svg>
  );
};

export default SvgIcon;
