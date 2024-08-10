import {
  RegisterLink,
  LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components';

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h1 className='capitalize'>Register YourSelf with kinde</h1>
        <br />

        <LoginLink className='bg-black text-white p-2 rounded ms-2'>Sign in</LoginLink>

        <RegisterLink className='bg-black text-white p-2 rounded ms-2'>Sign up</RegisterLink>
      </div>
    </div>
  );
};

export default Home;
