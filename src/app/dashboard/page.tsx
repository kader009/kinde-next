import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Image from 'next/image';

const UserDashboard = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div>
      <h1>user</h1>
      <Image
        src={user?.picture || '/placeholder.jpg'}
        height={300}
        width={400}
        alt="profile picture"
      />
      <h2>
        {user?.given_name} {user?.family_name}
      </h2>
    </div>
  );
};

export default UserDashboard;
