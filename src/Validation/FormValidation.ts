import * as yup from 'yup';
import {
  AGE_INTEGER,
  AGE_POSITIVE,
  COUNTRY_ERR,
  IMG_FORMAT_ERR,
  IMG_SIZE_ERR,
  MAX_FILE_SIZE,
  MIN_LENGTH,
  PASSWORD_ERR,
  REQUIRED,
  TC_ERR,
  countryList,
} from '../utils/constants';

const getCharacterValidationError = (str: string) => {
  return `Password must have at least 1 ${str} character`;
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required(REQUIRED)
    .matches(/^[A-Z].*$/, getCharacterValidationError('uppercase'))
    .min(1),
  age: yup
    .number()
    .required(REQUIRED)
    .positive(AGE_POSITIVE)
    .integer(AGE_INTEGER),
  email: yup.string().required(REQUIRED).email(),
  password: yup
    .string()
    .required(REQUIRED)
    .min(4, MIN_LENGTH)
    .matches(/^(?=.*[0-9])/, getCharacterValidationError('digit'))
    .matches(/^(?=.*[A-Z])/, getCharacterValidationError('uppercase'))
    .matches(/^(?=.*[a-z])/, getCharacterValidationError('lowercase'))
    .matches(
      /^(?=.*[!@#$%^&*(),.?":{}|<>+=])/,
      getCharacterValidationError('special character')
    ),
  confirmPassword: yup
    .string()
    .required(REQUIRED)
    .oneOf([yup.ref('password')], PASSWORD_ERR),
  country: yup
    .string()
    .required(REQUIRED)
    .test('is country exist', COUNTRY_ERR, (countryValue) => {
      return countryList
        .map((country) => country.name.toLowerCase())
        .includes(countryValue.toLowerCase());
    }),
  gender: yup.string().required(REQUIRED),
  tandc: yup.boolean().required(REQUIRED).oneOf([true], TC_ERR),
  image: yup
    .mixed<FileList>()
    .required(REQUIRED)
    .test('imgFormat', IMG_FORMAT_ERR, (img) => {
      if (!img.length) return false;
      return img[0].type === 'image/jpeg' || img[0].type === 'image/png';
    })
    .test('imgSize', IMG_SIZE_ERR, (img) => {
      if (!img.length) return false;
      return img[0].size <= MAX_FILE_SIZE;
    }),
});

export default schema;
