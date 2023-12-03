import { ChangeEvent, MutableRefObject } from 'react';
import styles from './GenderInput.module.scss';

interface GenderValue {
  id: string;
  name: string;
  label: string;
  defaultValue: string;
}
interface IGenderProps {
  inputData: GenderValue[];
  gender: MutableRefObject<string>;
  error: string;
}

function GenderInput(props: IGenderProps) {
  const { inputData, error, gender } = props;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    gender.current = event.target.value;
  };

  return (
    <div className={styles.inputBox}>
      <div className={styles.inputWrapperRadio}>
        your gender:
        <div className={styles.inputBoxRadio}>
          {inputData.map((input) => (
            <label key={input.id} htmlFor={input.id}>
              {input.label}
              <input
                id={input.id}
                name={input.name}
                type="radio"
                defaultChecked={false}
                defaultValue={input.defaultValue}
                onChange={onChange}
              />
            </label>
          ))}
        </div>
        <div className="error-wrapper">
          <p className="error-text">{error}</p>
        </div>
      </div>
    </div>
  );
}
export default GenderInput;
