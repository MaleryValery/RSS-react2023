import classes from './Loader.module.css';

function Loader() {
  return (
    <div data-testid="loader-container" className={classes.loaderContainer}>
      <div className={classes.loader} />
    </div>
  );
}

export default Loader;
