import Heading from '@/components/UI/Heading/Heading';
import CustomButton from '@/components/UI/CustomButton/CustomButton';
import Head from 'next/head';
import { useRouter } from 'next/router';

const PageNotHound = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div className="content">
      <Head>
        <title>Error 404</title>
      </Head>
      <Heading tag={'h1'} text={'404 - Page Not Found'} />
      <CustomButton title={'Go back'} onClick={handleClick} />
    </div>
  );
};

export default PageNotHound;
