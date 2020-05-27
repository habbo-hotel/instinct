import { Link } from 'react-router-dom';
import { userService } from 'app/service';
import { User } from 'instinct-rp-interfaces';
import React, { useEffect, useState } from 'react';
import { Avatar, Loading } from 'instinct-frontend';
import { defaultLeaderboardState, LeaderBoardState } from '../';

export function MostMoney() {
  const [state, setState] = useState<LeaderBoardState>(defaultLeaderboardState);

  useEffect(() => {
    async function fetchMostPixels(): Promise<void> {
      const users: User[] = await userService.getMostPixels();
      setState({
        users,
        showSpinner: false,
      });
    }
    fetchMostPixels();
  }, []);

  return (
    <article className="default-section ranking-container">
      <Loading isLoading={state.showSpinner}>
        <table className="default-table ranking-content">
          <thead>
            <tr>
              <th colSpan={2}>Username</th>
              <th>Most Money</th>
            </tr>
          </thead>
          <tbody>
            {state.users.map((user) => (
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
                  <span>{user.pixels}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Loading>
    </article>
  );
}
