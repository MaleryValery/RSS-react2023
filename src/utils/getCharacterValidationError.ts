const getCharacterValidationError = (str: string) => {
  return `Password must have at least 1 ${str} character`;
};

export default getCharacterValidationError;
