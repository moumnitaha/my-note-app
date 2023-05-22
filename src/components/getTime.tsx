const getTime = () => {
  const date = new Date();
  const a = date.toLocaleDateString("FR-fr");
  const b = date.toLocaleTimeString("FR-fr").slice(0, 5);
  return `${a} ${b}`;
};

export default getTime;
