
interface SanityResponse extends SanityItem {
  _rev: string
  _updatedAt: string
  _createdAt: string
}

interface SanityItem {
  _id: string
  _type: string
  _key?: string
}

interface SanityImage extends SanityItem {
  _type: string //image
  asset: {
    _ref: string
    _type: string // reference 
  }
}

export interface SanitySlide extends SanityItem {
  paragraph: string
  _key: string
  title: string
  image: SanityImage
}
export interface SanityCarousel extends SanityResponse {
  slides: SanitySlide[]
}

export interface SanityPage extends SanityResponse {
  title: string
  components: SanityMasonry[] | SanityCarousel[] | SanityYoutube[] | SanityView[] | SanityInterview[]
}

export interface SanityMasonry extends SanityResponse {
  images: { image: SanityImage, _key: string, alt?: string, paragraph?: string }[]
  title: string
}

export interface SanityYoutube extends SanityItem {
  url: string
}

export interface SanityVideoGroup extends SanityItem {
  videos: SanityYoutube[]
}

export interface Session {
  title: string
  type: string
  students?: string | null
  location?: string | null
  classroom?: string | null
  time?: string
}

export interface SanityInterview extends SanityResponse {
  company: string
  publishedDate?: string
  title: string
  images: { image: SanityImage, _key: string, alt?: string }[]
  url?: string

}

export interface SanityView extends SanityResponse {
  title: string
  content: any[]
}