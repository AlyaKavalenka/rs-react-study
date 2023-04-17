import { Photo, PhotosWithTotalResults, createClient } from 'pexels';

const client = createClient(
  'CsF3NY4jj3Y6JYwpuDNITyJvMU6FUEDNfM5w0hXvwisPKagpERyfQiE8'
);

export default function queryPhotos(query: string) {
  const photosArr: Photo[] = [];
  client.photos
    .search({ query })
    .then((photos) =>
      photosArr.push(...(photos as PhotosWithTotalResults).photos)
    );
  return photosArr;
}
