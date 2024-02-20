import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div>
      <h2>Page is not found</h2>
      <Link to="/">Back to home page</Link>
    </div>
  );
}

export default PageNotFound;
