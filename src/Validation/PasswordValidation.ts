import * as yup from 'yup';
import { MIN_LENGTH, MIN_LENGTH_ERR, REQUIRED } from '../utils/constants';
import getCharacterValidationError from '../utils/getCharacterValidationError';

const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .required(REQUIRED)
    .min(MIN_LENGTH, MIN_LENGTH_ERR)
    .matches(/^(?=.*[0-9])/, getCharacterValidationError('digit'))
    .matches(/^(?=.*[A-Z])/, getCharacterValidationError('uppercase'))
    .matches(/^(?=.*[a-z])/, getCharacterValidationError('lowercase'))
    .matches(
      /^(?=.*[!@#$%^&*(),.?":{}|<>+=])/,
      getCharacterValidationError('special character')
    ),
});

export default passwordSchema;
