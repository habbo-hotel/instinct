import { Photo } from 'instinct-interfaces';
import { photoService } from 'instinct-frontend';
import React, { useEffect, useState } from 'react';
import { defaultPhotosState, PhotosState } from './';
import { Container, Jumbotron, Row, Loading, UserLayout, setURL, PhotoContainer } from 'instinct-frontend';

setURL('community/photos', <Photos />);

export function Photos() {
  const [state, setState] = useState<PhotosState>(defaultPhotosState);

  useEffect(() => {
    async function fetchPhotos(): Promise<void> {
      const photos: Photo[] = await photoService.getAll();
      setState({
        photos,
        showSpinner: false,
      });
    }
    fetchPhotos();
  }, []);

  return (
    <UserLayout section="community_photos">
      <Jumbotron title="The best moments in the Hotel">
        <p>All the latest photos from the community.</p>
      </Jumbotron>
      <Container>
        <Loading isLoading={state.showSpinner}>
          {
            state.photos.length === 0 && (
              <>
                <h3>Hmmm...</h3>
                <p>It looks like there aren't any pictures.  Maybe you could be the first!</p>
              </>
            )
          }
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
