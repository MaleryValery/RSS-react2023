const convertToBase64 = (img: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result?.toString() || '');
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(img);
  });
};

export default convertToBase64;
