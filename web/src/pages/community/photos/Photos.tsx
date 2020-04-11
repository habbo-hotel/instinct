import { photoService } from 'app/service';
import { Photo } from 'fashionkilla-interfaces';
import React, { useEffect, useState } from 'react';
import { defaultPhotosState, PhotosState } from './';
import { UserLayout, setURL, Jumbotron, Container, Row, PhotoContainer, Loading } from 'components';

setURL('community/photos', <Photos />);

export function Photos() {
  const [state, setState] = useState<PhotosState>(defaultPhotosState);

  async function fetchPhotos(): Promise<void> {
    const photos: Photo[] = await photoService.getAll();
    setState({
      photos,
      showSpinner: false,
    });
  }

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <UserLayout section="community_photos">
      <Jumbotron title="The best moments in the Hotel">
        <p>All the latest photos from the community.</p>
      </Jumbotron>
      <Container>
        <Loading isLoading={state.showSpinner}>
          <Row>
            <div className="photos-container">
              <div className="photo-container">
                {state.photos.map(photo => (
                  <PhotoContainer key={photo.id} photo={photo} />
                ))}
              </div>
            </div>
          </Row>
        </Loading>
      </Container>
    </UserLayout>
  );
}
