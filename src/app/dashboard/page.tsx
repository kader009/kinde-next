import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import Image from 'next/image';

const UserDashboard = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <Image
            priority={true}
            className="rounded-full"
            src={user?.picture || '/placeholder.jpg'}
            height={100}
            width={100}
            alt="Profile Picture"
          />
          <h1 className="mt-4 text-xl font-semibold text-gray-900">
            {user?.given_name} {user?.family_name}
          </h1>
          <p className="mt-2 text-gray-600">{user?.email}</p>
          <LogoutLink className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Logout
          </LogoutLink>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
