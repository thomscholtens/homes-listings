export interface Listing {
  id: string;
  photo: Photo;
  address: string;
  postalCode: string;
  city: string;
  priceHtml: string;
  realtorName: string;
}

export interface Photo {
  url: string;
  alt: string;
}
