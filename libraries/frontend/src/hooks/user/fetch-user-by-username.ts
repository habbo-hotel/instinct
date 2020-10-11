import { userService } from 'services';
import { useEffect, useState } from 'react';
import { UserProfile } from 'instinct-interfaces';

export function useFetchUserByUsername(username: string): UserProfile | undefined {
  const [user, setUser] = useState<UserProfile>();

  useEffect(() => {
    setUser(undefined);
    async function fetchUser() {
      const userData = await userService.getByUsername(username);
      setUser(userData);
    }

    fetchUser();
  }, [username]);

  return user;
}
