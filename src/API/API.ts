import { ErrorResponse, PhotosWithTotalResults, createClient } from 'pexels';

const client = createClient(
  'CsF3NY4jj3Y6JYwpuDNITyJvMU6FUEDNfM5w0hXvwisPKagpERyfQiE8'
);

export default function queryPhotos(query: string) {
  return client.photos
    .search({ query })
    .then((obj: PhotosWithTotalResults | ErrorResponse) => obj);
}
