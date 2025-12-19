const generateID = (): string => {
  return Math.random().toString(36).substring(2, 15);
};

export default generateID;
