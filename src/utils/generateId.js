const generateId = () => {
  return parseInt(Math.random() * 10 ** 8) * Date.now();
};

export { generateId };
