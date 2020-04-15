import { Link } from 'react-router-dom';
import { userService } from 'app/service';
import { Avatar, Loading } from 'components';
import { User } from 'fashionkilla-interfaces';
import React, { useEffect, useState } from 'react';
import { GamesCardState, defaultGamesCardState } from '../GamesInterface';

export function TopCredits() {
  const [state, setState] = useState<GamesCardState>(defaultGamesCardState);

  useEffect(() => {
    async function fetchMostCredits(): Promise<void> {
      const users: User[] = await userService.getMostCredits();
      setState({
        users,
        showSpinner: false,
      });
    }
    fetchMostCredits();
  }, []);

  return (
    <article className="default-section ranking-container">
      <Loading isLoading={state.showSpinner}>
        <table className="default-table ranking-content">
          <thead>
            <tr>
              <th colSpan={2}>Username</th>
              <th>Most Credits</th>
            </tr>
          </thead>
          <tbody>
            {state.users.map(user => (
              <tr key={user.id}>
                <td>
                  <div className="account-avatar">
                    <Link to={`/profile/${user.username}`}>
                      <Avatar look={user.figure} />
                    </Link>
                  </div>
                </td>
                <td>
                  <Link to={`/profile/${user.username}`}>{user.username}</Link>
                </td>
                <td>
                  <span>{user.credits}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Loading>
    </article>
  );
}
