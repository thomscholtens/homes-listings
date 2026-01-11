export interface ListingPageResponse {
  AccountStatus: number;
  EmailNotConfirmed: boolean;
  ValidationFailed: boolean;
  ValidationReport: null | string;
  Website: number;
  Metadata: {
    ObjectType: string;
    Omschrijving: string;
    Titel: string;
  };
  Paging: {
    AantalPaginas: number;
    HuidigePagina: number;
    VolgendeUrl: string | null;
    VorigeUrl: string | null;
  };
  TotaalAantalObjecten: number;
  Objects: ListingObject[];
}

export interface ListingObject {
  AangebodenSindsTekst: string;
  AanmeldDatum: string;
  AantalBeschikbaar: unknown;
  AantalKamers: number;
  AantalKavels: unknown;
  Aanvaarding: string;
  Adres: string;
  Afstand: number;
  BronCode: string;
  ChildrenObjects: unknown[];
  DatumAanvaarding: unknown;
  DatumOndertekeningAkte: unknown;
  Foto: string;
  FotoLarge: string;
  FotoLargest: string;
  FotoMedium: string;
  FotoSecure: string;
  GewijzigdDatum: unknown;
  GlobalId: number;
  GroupByObjectType: string;
  Heeft360GradenFoto: boolean;
  HeeftBrochure: boolean;
  HeeftOpenhuizenTopper: boolean;
  HeeftOverbruggingsgrarantie: boolean;
  HeeftPlattegrond: boolean;
  HeeftTophuis: boolean;
  HeeftVeiling: boolean;
  HeeftVideo: boolean;
  HuurPrijsTot: unknown;
  Huurprijs: unknown;
  HuurprijsFormaat: unknown;
  Id: string;
  InUnitsVanaf: unknown;
  IndProjectObjectType: boolean;
  IndTransactieMakelaarTonen: unknown;
  IsSearchable: boolean;
  IsVerhuurd: boolean;
  IsVerkocht: boolean;
  IsVerkochtOfVerhuurd: boolean;
  Koopprijs: number;
  KoopprijsFormaat: string;
  KoopprijsTot: number;
  Land: unknown;
  MakelaarId: number;
  MakelaarNaam: string;
  MobileURL: string;
  Note: unknown;
  OpenHuis: unknown[];
  Oppervlakte: number;
  Perceeloppervlakte: number;
  Postcode: string;
  Prijs: Prijs;
  PrijsGeformatteerdHtml: string;
  PrijsGeformatteerdTextHuur: string;
  PrijsGeformatteerdTextKoop: string;
  Producten: string[];
  Project: Project;
  ProjectNaam: unknown;
  PromoLabel: PromoLabel;
  PublicatieDatum: string;
  PublicatieStatus: number;
  SavedDate: unknown;
  'Soort-aanbod': string;
  SoortAanbod: number;
  StartOplevering: unknown;
  TimeAgoText: unknown;
  TransactieAfmeldDatum: unknown;
  TransactieMakelaarId: unknown;
  TransactieMakelaarNaam: unknown;
  TypeProject: number;
  URL: string;
  VerkoopStatus: string;
  WGS84_X: number;
  WGS84_Y: number;
  WoonOppervlakteTot: number;
  Woonoppervlakte: number;
  Woonplaats: string;
  ZoekType: number[];
}

export interface Prijs {
  GeenExtraKosten: boolean;
  HuurAbbreviation: string;
  Huurprijs: unknown;
  HuurprijsOpAanvraag: string;
  HuurprijsTot: unknown;
  KoopAbbreviation: string;
  Koopprijs: number;
  KoopprijsOpAanvraag: string;
  KoopprijsTot: number;
  OriginelePrijs: unknown;
  VeilingText: string;
}

export interface Project {
  AantalKamersTotEnMet: unknown;
  AantalKamersVan: unknown;
  AantalKavels: unknown;
  Adres: unknown;
  FriendlyUrl: unknown;
  GewijzigdDatum: unknown;
  GlobalId: unknown;
  HoofdFoto: string;
  IndIpix: boolean;
  IndPDF: boolean;
  IndPlattegrond: boolean;
  IndTop: boolean;
  IndVideo: boolean;
  InternalId: string;
  MaxWoonoppervlakte: unknown;
  MinWoonoppervlakte: unknown;
  Naam: unknown;
  Omschrijving: unknown;
  OpenHuizen: unknown[];
  Plaats: unknown;
  Prijs: unknown;
  PrijsGeformatteerd: unknown;
  PublicatieDatum: unknown;
  Type: number;
  Woningtypen: unknown;
}

export interface PromoLabel {
  HasPromotionLabel: boolean;
  PromotionPhotos: string[];
  PromotionPhotosSecure: string[];
  PromotionType: number;
  RibbonColor: number;
  RibbonText: unknown;
  Tagline: string;
}
