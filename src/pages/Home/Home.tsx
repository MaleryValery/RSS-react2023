import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/UI/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import classes from './Home.module.css';
import Box from '../../components/UI/Box/Box';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const onClose = () => {
    if (location.pathname.includes('details')) navigate('/');
  };

  return (
    <>
      <Header />
      <Box className={classes.homeMainWrapper}>
        <div
          tabIndex={0}
          aria-label="overlay"
          onKeyDown={onClose}
          role="button"
          className={classes.homeContentWrapper}
          onClick={onClose}
        >
          <MainSection />
        </div>
        <Outlet />
      </Box>
    </>
  );
}

export default Home;
