import queryPhotos from './API';

describe('API', () => {
  it('should be not empty', async () => {
    const response = await queryPhotos('cat');
    expect(response).toBeTruthy();
  });
});
