import React from 'react';
import Moment from 'moment';
import { Link } from 'react-router-dom';
import { PhotoContainerProps } from './';
import { Avatar, PhotoView } from 'components';

export function PhotoContainer({ photo }: PhotoContainerProps) {
  return (
    <>
      <div className="photo-container">
        <div className="photo-content">
          <Link className="photo-picture" style={{ backgroundImage: `url(${photo.imagePath})` }} to={`/community/photos/${photo.id}`} />
          <Link className="photo-meta flex-container flex-vertical-center" to={`/profile/${photo.user!.username}`}>
            <div className="photo-meta-left-side">
              <Avatar look={photo.user!.figure} />
            </div>
            <div className="photo-meta-right-side">
              <div className="creator-name">{photo.user!.username}</div>
              <div className="published-date">{Moment(photo.createdAt).format('MM/DD/YY')}</div>
            </div>
          </Link>
        </div>
      </div>
      <PhotoView photo={photo}/>
    </>
  );
}
