import { Link } from 'react-router-dom';
import classes from './PageNotfFound.module.css';
import image from '../../assets/images/not-found.png';

function PageNotFound() {
  return (
    <div className={classes.notFoundBox}>
      <h2 className={classes.title}>Page is not found</h2>
      <img className={classes.img} src={image} alt="thanos hand" />
      <Link to="/" className={classes.buttonBack}>
        Back to home page
      </Link>
    </div>
  );
}

export default PageNotFound;
