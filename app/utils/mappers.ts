export function mapMediaToGalleryPhoto(media: Media): Photo {
  // Get the image with Category 7 (size large enough for gallery)
  const mediaItem = media.MediaItems.find(item => item.Category === 7);

  return {
    url: mediaItem?.Url || '',
    alt: media.Omschrijving || `Photo ${media.IndexNumber}`
  };
}

export function mapMultipleMediaToGalleryPhotos(mediaArray: Media[]): Photo[] {
  return mediaArray.map(mapMediaToGalleryPhoto).filter(photo => Boolean(photo.url));
}
