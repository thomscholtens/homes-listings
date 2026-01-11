export interface ListingDetailResponse {
  AangebodenSinds: string;
  AangebodenSindsTekst: string;
  AantalBadkamers: number;
  AantalKamers: number;
  AantalSlaapkamers: unknown;
  AantalWoonlagen: string;
  Aanvaarding: string;
  Adres: string;
  AfgekochtDatum: unknown;
  BalkonDakterras: unknown;
  BedrijfsruimteCombinatieObject: unknown;
  BezichtingDagdelen: BezichtingDagdelen[];
  BezichtingDagen: BezichtingDagen[];
  BijdrageVVE: unknown;
  Bijzonderheden: unknown;
  Bouwjaar: string;
  Bouwvorm: string;
  BronCode: string;
  ContactpersoonEmail: unknown;
  ContactpersoonTelefoon: unknown;
  Cv: string;
  DatumOndertekeningAkte: unknown;
  Deeplink: unknown;
  DetailInfo: DetailInfo;
  EigendomsSituatie: unknown;
  Energielabel: Energielabel;
  ErfpachtBedrag: unknown;
  Garage: string;
  GarageIsolatie: unknown;
  GarageVoorzieningen: string;
  GelegenOp: unknown;
  GewijzigdDatum: string;
  HoofdFoto: string;
  HoofdFotoSecure: string;
  HoofdTuinType: string;
  Id: number;
  IndBasisPlaatsing: boolean;
  IndFotos: boolean;
  IndIpix: boolean;
  IndOpenhuizenTopper: boolean;
  IndPDF: boolean;
  IndPlattegrond: boolean;
  IndTop: boolean;
  IndVeilingProduct: boolean;
  IndVideo: boolean;
  Inhoud: number;
  InternalId: string;
  IsIngetrokken: boolean;
  IsVerhuurd: boolean;
  IsVerkocht: boolean;
  Isolatie: string;
  Kenmerken: Kenmerken[];
  KenmerkenKort: KenmerkenKort;
  KenmerkenTitel: unknown;
  Ligging: string;
  MLIUrl: string;
  Makelaar: string;
  MakelaarId: number;
  MakelaarTelefoon: string;
  MedeAanbieders: unknown[];
  Media: Media[];
  'Media-Foto': string[];
  MobileURL: string;
  ObjectType: string;
  ObjectTypeMetVoorvoegsel: string;
  OpenHuizen: unknown[];
  PerceelOppervlakte: number;
  PermanenteBewoning: string;
  Plaats: string;
  Postcode: string;
  Prijs: Prijs;
  PrijsGeformatteerd: string;
  Project: unknown;
  ProjectNaam: unknown;
  PublicatieDatum: string;
  PublicatieStatus: number;
  SchuurBerging: string;
  SchuurBergingIsolatie: unknown;
  SchuurBergingVoorzieningen: string;
  ScrambledId: string;
  ServiceKosten: number;
  SoortAanbod: number;
  SoortDak: string;
  SoortGarage: string;
  SoortParkeergelegenheid: string;
  SoortPlaatsing: number;
  SoortWoning: string;
  Titels: Titel[];
  ToonBezichtigingMaken: boolean;
  ToonBrochureAanvraag: boolean;
  ToonMakelaarWoningaanbod: boolean;
  ToonReageren: boolean;
  TransactieAfmeldDatum: unknown;
  TransactieMakelaarId: unknown;
  TransactieMakelaarNaam: unknown;
  TuinLigging: string;
  TypeProject: number;
  URL: string;
  Veiling: Veiling;
  VerkoopStatus: string;
  Verwarming: string;
  Video: unknown;
  VolledigeOmschrijving: string;
  Voorzieningen: string;
  WGS84_X: number;
  WGS84_Y: number;
  WarmWater: string;
  WoonOppervlakte: number;
  EersteHuurPrijs: unknown;
  EersteHuurPrijsLang: unknown;
  EersteKoopPrijs: unknown;
  EersteKoopPrijsLang: unknown;
  HuurPrijs: unknown;
  HuurPrijsLang: unknown;
  HuurPrijsTot: unknown;
  Huurprijs: unknown;
  HuurprijsFormaat: unknown;
  KoopPrijs: number;
  KoopPrijsLang: string;
  Koopprijs: number;
  KoopprijsFormaat: string;
  KoopprijsTot: unknown;
  ShortURL: string;
  Tuin: string;
  VeilingGeformatteerd: unknown;
}

export interface BezichtingDagdelen {
  Naam: string;
  Waarde: string;
}

export interface BezichtingDagen {
  Naam: string;
  Waarde: string;
}

export interface DetailInfo {
  HasPromotionLabel: boolean;
  PromotionLabelType: number;
  RibbonColor: number;
  RibbonText: unknown;
  Tagline: string;
}

export interface Energielabel {
  Definitief: boolean;
  Index: unknown;
  Label: string;
  NietBeschikbaar: boolean;
  NietVerplicht: boolean;
}

export interface Kenmerken {
  Ad: unknown;
  Kenmerken: Kenmerken2[];
  LokNummer: number;
  SubKenmerk?: SubKenmerk;
  Titel: string;
}

export interface Kenmerken2 {
  Naam: string;
  NaamCss?: string;
  Waarde: string;
  WaardeCss?: string;
}

export interface SubKenmerk {
  Ad: string;
  Kenmerken: unknown[];
  LokNummer: number;
  SubKenmerk: unknown;
  Titel: string;
}

export interface KenmerkenKort {
  Ad: unknown;
  Kenmerken: Kenmerken3[];
  LokNummer: number;
  SubKenmerk: unknown;
  Titel: unknown;
}

export interface Kenmerken3 {
  Naam: string;
  NaamCss: unknown;
  Waarde: string;
  WaardeCss: unknown;
}

export interface Media {
  Categorie: number;
  ContentType: number;
  Id: string;
  IndexNumber: number;
  MediaItems: MediaItem[];
  Metadata?: string;
  Omschrijving?: string;
  RegistratieVerplicht: boolean;
  Soort: number;
}

export interface MediaItem {
  Category: number;
  Height: number;
  Url: string;
  UrlSecure?: string;
  Width: number;
}

export interface Prijs {
  GeenExtraKosten: unknown;
  HuurAbbreviation: string;
  Huurprijs: unknown;
  HuurprijsOpAanvraag: string;
  HuurprijsTot: unknown;
  KoopAbbreviation: string;
  Koopprijs: number;
  KoopprijsOpAanvraag: string;
  KoopprijsTot: unknown;
  OriginelePrijs: unknown;
  VeilingText: string;
}

export interface Titel {
  Omschrijving: string;
  Pagina: number;
}

export interface Veiling {
  EindDatum: unknown;
  Link: unknown;
  StartDatum: unknown;
  VeilingPartij: unknown;
}
