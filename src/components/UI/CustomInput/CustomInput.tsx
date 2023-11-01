import CustomInputProps from './CustomInputProps';

function CustomInput(props: CustomInputProps) {
  const { placeholder, onChange, className } = props;
  return (
    <div>
      <input
        placeholder={placeholder}
        type="text"
        onChange={onChange}
        className={className}
      />
    </div>
  );
}

export default CustomInput;

// class CustomInput extends Component<CustomInputProps, CustomInputState> {
//   constructor(props: CustomInputProps) {
//     super(props);
//     this.state = {
//       inputValue: localStorage.getItem('searchValue') || '',
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   public async componentDidMount() {
//     const { onChange } = this.props;
//     const search = localStorage.getItem('searchValue');
//     if (search) {
//       this.setState({
//         inputValue: search,
//       });
//       onChange(search);
//     } else {
//       this.setState({
//         inputValue: '',
//       });
//       onChange();
//     }
//   }

//   public componentWillUnmount(): void {
//     const { inputValue } = this.state;
//     localStorage.setItem('searchValue', inputValue || '');
//   }

//   private handleChange(event: ChangeEvent<HTMLInputElement>) {
//     this.setState({ inputValue: event.target.value });
//   }

//   private async onSubmit(event: MouseEvent): Promise<void> {
//     event.preventDefault();
//     const { onChange } = this.props;
//     const { inputValue } = this.state;
//     await onChange(inputValue || '');
//     localStorage.setItem('searchValue', inputValue || '');
//   }

//   render() {
//     const { inputValue } = this.state;
//     return (
//       <div className={classes.searchWrapper}>
//         <input
//           type="text"
//           value={inputValue || ''}
//           className={classes.inputSearch}
//           onChange={(event: ChangeEvent<HTMLInputElement>) =>
//             this.handleChange(event)
//           }
//         />
//         <CustomButton
//           disabled={false}
//           onClick={async (event?: MouseEvent<HTMLElement>): Promise<void> => {
//             if (event) this.onSubmit(event);
//           }}
//         >
//           Search
//         </CustomButton>
//       </div>
//     );
//   }
// }

// export default CustomInput;
