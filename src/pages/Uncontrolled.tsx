import { useNavigate } from 'react-router-dom';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { ValidationError } from 'yup';
import CustomButton from '../components/CustomButton';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  DEFAULT_ERRORS,
  INPUT_DATA,
  ROUTE_HOME,
  TC_CONTENT,
  UNCONTROLLED_FORM,
  countryList,
} from '../utils/constants';
import styles from './Uncontrolled.module.scss';
import { IFormData } from '../utils/interfaces';
import schema, { SchemaValidation } from '../Validation/FormValidation';
import convertToBase64 from '../utils/convertToBase64';
import { setData } from '../redux/slice/formSlice';
import GenderInput from '../components/GenderInput';
import passwordSchema from '../Validation/PasswordValidation';

function Uncontrolled() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cuttentFormsData = useAppSelector((state) => state.formData);
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef('');
  const countryRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const tandcRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState(DEFAULT_ERRORS);

  const [passProgress, setPassProgress] = useState(1);

  const getFormData = () => {
    return {
      name: nameRef.current?.value || '',
      age: ageRef.current?.value || '',
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      confirmPassword: confirmPasswordRef.current?.value || '',
      gender: genderRef.current || '',
      country: countryRef.current?.value || '',
      image: imageRef.current?.files || '',
      tandc: tandcRef.current?.checked || '',
    } as unknown as SchemaValidation;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = getFormData();
      await schema.validate(formData, { abortEarly: false });
      const imgBase64 = formData.image
        ? await convertToBase64(formData.image[0] as File)
        : '';
      const newFormData: IFormData = { ...formData, image: imgBase64 };
      const newArrData: IFormData[] = [newFormData, ...cuttentFormsData];
      dispatch(setData(newArrData));
      navigate(ROUTE_HOME);
    } catch (error) {
      let errorsValidation = DEFAULT_ERRORS;
      if (error instanceof ValidationError) {
        error.inner.forEach((e) => {
          const path = e.path as keyof SchemaValidation;
          errorsValidation = { ...errorsValidation, [path]: e.message };
        });
      }
      setErrors(errorsValidation);
    }
  };

  useEffect(() => {
    try {
      passwordSchema.validateSync(
        {
          password: passwordRef.current?.value,
        },
        { abortEarly: false }
      );
    } catch (error) {
      if (error instanceof ValidationError) {
        const strong: number = 6;
        const rest = (error as ValidationError).inner.length;
        setPassProgress(strong - rest);
      }
    }
  }, [passwordRef.current?.value]);

  return (
    <div className={styles.uncontrolledWrapper}>
      <h2>{UNCONTROLLED_FORM}</h2>
      <form
        className={styles.form}
        noValidate
        onSubmit={(event: FormEvent<HTMLFormElement>) => onSubmit(event)}
      >
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="nameId">
            name
            <input
              className={styles.inputText}
              id="nameId"
              type="text"
              ref={nameRef}
            />
            <div className="error-wrapper">
              {errors?.name && <p className="error-text">{errors.name}</p>}
            </div>
          </label>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="ageId">
            age
            <input
              className={styles.inputText}
              id="ageId"
              type="number"
              ref={ageRef}
            />
            <div className="error-wrapper">
              <p className="error-text">{errors.age}</p>
            </div>
          </label>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="emailID">
            email
            <input
              className={styles.inputText}
              id="emailID"
              type="text"
              ref={emailRef}
            />
            <div className="error-wrapper">
              <p className="error-text">{errors?.email}</p>
            </div>
          </label>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="passwordId">
            password
            <input
              className={styles.inputText}
              id="passwordId"
              type="password"
              ref={passwordRef}
            />
            <div className="strength-container">
              <progress
                max="5"
                value={passProgress}
                className={styles.progress}
              />
            </div>
            <div className="error-wrapper">
              <p className="error-text">{errors.password}</p>
            </div>
          </label>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="confirmpPasswordId">
            confirm password
            <input
              className={styles.inputText}
              id="confirmpPasswordId"
              type="password"
              ref={confirmPasswordRef}
            />
            <div className="error-wrapper">
              <p className="error-text">{errors.confirmPassword}</p>
            </div>
          </label>
        </div>

        <GenderInput
          inputData={INPUT_DATA}
          gender={genderRef}
          error={errors.gender}
        />

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="countriesID">
            country
            <input
              className={styles.textInput}
              type="text"
              id="countriesID"
              list="countryList"
              ref={countryRef}
            />
            <datalist id="countriesID">
              {countryList.map((country) => {
                return (
                  <option
                    id="country"
                    key={country.code}
                    value={country.name}
                  />
                );
              })}
            </datalist>
            <div className="error-wrapper">
              <p className="error-text">{errors.country}</p>
            </div>
          </label>
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="imageId">
            Upload image
            <input
              className={styles.inputImage}
              id="imageId"
              type="file"
              ref={imageRef}
            />
            <div className="error-wrapper">
              <p className="error-text">{errors.image}</p>
            </div>
          </label>
        </div>
        <div className={styles.inputWrapperRadio}>
          <div className={styles.inputBoxRadio}>
            <label className={styles.labelRadio} htmlFor="tandc">
              {TC_CONTENT}
              <input
                className={styles.inputRadio}
                id="tandc"
                type="checkbox"
                ref={tandcRef}
              />
            </label>
          </div>
          <div className="error-wrapper">
            <p className="error-text">{errors.tandc}</p>
          </div>
        </div>
        <CustomButton title="Submit" onClick={() => {}} buttonType="submit" />
      </form>
    </div>
  );
}

export default Uncontrolled;
