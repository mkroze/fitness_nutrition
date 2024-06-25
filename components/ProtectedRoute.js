// components/ProtectedRoute.js
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useRouter } from 'next/router';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return children;
};

export default ProtectedRoute;
