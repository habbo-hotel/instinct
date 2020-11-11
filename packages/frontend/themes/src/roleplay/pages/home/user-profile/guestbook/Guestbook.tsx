import {Link} from 'wouter';
import Moment from 'moment';
import React, {useEffect, useState} from 'react';
import {UserGuestbookPost} from '@instinct-prj/interface';
import {UserProfileWidgetProps} from '../UserProfile.types';
import {CreatePostModal} from './create-post-modal/CreatePostModal';
import {Avatar, Card, guestbookService, Icon} from '@instinct-prj/frontend';
import {DeletePostModal} from './delete-post-modal';

export function Guestbook({profile}: UserProfileWidgetProps) {
  const [comments, setComments] = useState<UserGuestbookPost[]>();

  useEffect(() => {
    async function fetchGuestbook() {
      setComments(undefined);
      const data = await guestbookService.getAllForUser(profile!.user.id);
      setComments(data);
    }
    fetchGuestbook();
  }, [profile?.user?.id]);

  function onPostCreated(post: UserGuestbookPost) {
    setComments(_ => [..._!, post]);
  }

  function onPostDeleted(postID: number) {
    setComments(_ => _!.filter(p => p.id !== postID));
  }

  function getHeader() {
    return (
      <div className="row">
        <div className="col-6">Guestbook</div>
        <div className="col-6 text-right">
          <CreatePostModal
            profileID={profile!.user!.id}
            onCreation={onPostCreated}
          />
        </div>
      </div>
    );
  }

  return (
    <Card header={getHeader()}>
      {!comments && <Icon className="fa-spin" type="spinner" />}
      {comments?.length === 0 && <p>There aren't any comments to display.</p>}
      {comments?.map(_ => (
        <div className="row" key={_.id}>
          <Avatar look={_.author.figure} headOnly />
          <div style={{marginTop: 20}}>
            <h5>{_.content}</h5>
            <div className="d-inline">
              Posted by{' '}
              <Link to={`/profile/${_.author.username}`}>
                <b style={{cursor: 'pointer'}}>{_.author.username}</b>
              </Link>
              , {Moment.unix(_.timestamp).fromNow()}
              <DeletePostModal
                post={_}
                onDeletion={() => onPostDeleted(_.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
}
