const getTime = () => {
  const date = new Date();
  const a = date.toLocaleDateString("FR-fr");
  const b = date.toLocaleTimeString("FR-fr");
  return `${a} ${b}`;
};

export default getTime;
