import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { ValidationError } from 'yup';
import CustomButton from '../components/CustomButton';
import CustomForm from '../components/CustomForm';
import {
  CONTROLLED_FORM,
  NAME_DEFAULT_ERR,
  ROUTE_HOME,
  TC_CONTENT,
  countryList,
} from '../utils/constants';
import styles from './Controlled.module.scss';
import schema from '../Validation/FormValidation';
import { IFormData, IFormFilds } from '../utils/interfaces';
import convertToBase64 from '../utils/convertToBase64';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setData } from '../redux/slice/formSlice';
import passwordSchema from '../Validation/PasswordValidation';

function Controlled() {
  const navigate = useNavigate();
  const [passProgress, setPassProgress] = useState(1);
  const currentFormsData = useAppSelector((state) => state.form.formData);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const password = watch('password');

  const onSubmit = async (formData: IFormFilds) => {
    const imgBase64 = formData.image
      ? await convertToBase64(formData.image[0] as File)
      : '';
    const newFormData: IFormData = { ...formData, image: imgBase64 };
    const newArrData: IFormData[] = [newFormData, ...currentFormsData];
    dispatch(setData(newArrData));
    navigate(ROUTE_HOME);
    reset();
  };

  useEffect(() => {
    try {
      passwordSchema.validateSync(
        {
          password,
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
  }, [password]);

  return (
    <div className={styles.controlledWrapper}>
      <h2>{CONTROLLED_FORM}</h2>
      <CustomForm className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="nameId">
            name
            <input
              className={styles.inputText}
              id="nameId"
              type="text"
              {...register('name')}
            />
            <div className="error-wrapper">
              {errors?.name && (
                <p className="error-text">
                  {errors?.name?.message?.toString() || NAME_DEFAULT_ERR}
                </p>
              )}
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
              {...register('age')}
            />
            <div className="error-wrapper">
              {errors?.age && (
                <p className="error-text">{errors?.age?.message}</p>
              )}
            </div>
          </label>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="emailID">
            email
            <input
              className={styles.inputText}
              id="emailID"
              type="email"
              {...register('email')}
            />
            <div className="error-wrapper">
              {errors?.email && (
                <p className="error-text">
                  {errors?.email?.message?.toString()}
                </p>
              )}
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
              {...register('password')}
            />
            <div className="strength-container">
              <progress
                max="5"
                value={passProgress}
                className={styles.progress}
              />
            </div>
            <div className="error-wrapper">
              {errors?.password && (
                <p className="error-text">
                  {errors?.password?.message?.toString()}
                </p>
              )}
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
              {...register('confirmPassword')}
            />
            <div className="error-wrapper">
              {errors?.confirmPassword && (
                <p className="error-text">
                  {errors?.confirmPassword?.message?.toString()}
                </p>
              )}
            </div>
          </label>
        </div>

        <div className={styles.inputBox}>
          <div className={styles.inputWrapperRadio}>
            your gender:
            <div className={styles.inputBoxRadio}>
              <label className={styles.labelRadio} htmlFor="male">
                male
                <input
                  className={styles.inputRadio}
                  {...register('gender')}
                  id="male"
                  value="male"
                  type="radio"
                />
              </label>
              <label className={styles.labelRadio} htmlFor="female">
                female
                <input
                  className={styles.inputRadio}
                  {...register('gender')}
                  id="female"
                  value="female"
                  type="radio"
                />
              </label>
            </div>
            <div className="error-wrapper">
              {errors?.gender && (
                <p className="error-text">
                  {errors?.gender?.message?.toString()}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="countriesID">
            country
            <input
              className={styles.textInput}
              type="text"
              id="countriesID"
              list="countryList"
              {...register('country')}
            />
            <datalist id="countryList">
              {countryList.map((country) => {
                return <option key={country.code} value={country.name} />;
              })}
            </datalist>
            <div className="error-wrapper">
              {errors?.country && (
                <p className="error-text">
                  {errors?.country?.message?.toString()}
                </p>
              )}
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
              {...register('image')}
            />
            <div className="error-wrapper">
              {errors?.image && (
                <p className="error-text">{errors?.image?.message}</p>
              )}
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
                {...register('tandc')}
              />
            </label>
          </div>
          <div className="error-wrapper">
            {errors?.tandc && (
              <p className="error-text">{errors?.tandc?.message?.toString()}</p>
            )}
          </div>
        </div>
        <CustomButton
          className={styles.submitBtn}
          disabled={!isValid}
          title="Submit"
          onClick={() => {}}
          buttonType="submit"
        />
      </CustomForm>
    </div>
  );
}

export default Controlled;
