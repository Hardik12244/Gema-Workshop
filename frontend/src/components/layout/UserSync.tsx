import { useEffect, useRef } from 'react';
import { useAuth, useUser } from '@clerk/clerk-react';

const UserSync = () => {
  const { getToken, isSignedIn } = useAuth();
  const { user } = useUser();
  const syncedRef = useRef(false);

  useEffect(() => {
    const syncUser = async () => {
      if (isSignedIn && user && !syncedRef.current) {
        try {
          const token = await getToken();
          await fetch('http://localhost:5001/api/users/sync', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              email: user.primaryEmailAddress?.emailAddress,
              firstName: user.firstName,
              lastName: user.lastName
            })
          });
          syncedRef.current = true;
        } catch (error) {
          console.error("Failed to sync user", error);
        }
      }
    };
    syncUser();
  }, [isSignedIn, user, getToken]);

  return null;
};

export default UserSync;
