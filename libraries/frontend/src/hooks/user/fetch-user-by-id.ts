import { userService } from 'services';
import { User } from 'instinct-interfaces';
import { useEffect, useState } from 'react';

export function useFetchUserByID(userID: string): User | undefined {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser(undefined);
    async function fetchUser() {
      const userData = await userService.getByID(Number(userID));
      setUser(userData);
    }

    fetchUser();
  }, [userID]);

  return user;
}
