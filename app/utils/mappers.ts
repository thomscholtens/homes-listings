import type { Media } from '#shared/types/api/listing-detail';
import type { ListingObject } from '#shared/types/api/listing-overview';

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

export function mapApiObjectToListing(apiObject: ListingObject): Listing {
  return {
    id: apiObject.Id,
    photo: {
      url: apiObject.FotoMedium,
      alt: apiObject.Adres,
    },
    address: apiObject.Adres,
    postalCode: apiObject.Postcode,
    city: apiObject.Woonplaats,
    priceHtml: apiObject.PrijsGeformatteerdHtml,
    realtorName: apiObject.MakelaarNaam,
  };
}

export function mapApiObjectsToListings(apiObjects: ListingObject[]): Listing[] {
  return apiObjects.map(mapApiObjectToListing);
}
