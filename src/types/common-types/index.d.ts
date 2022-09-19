declare module 'common-types' {
  // Succes data fetch
  export interface SuccessProps<T> {
    readonly data: T
    readonly status: 'success'
  }
  // Error data fetch
  export interface ErrorProps {
    readonly status: 'error'
    readonly statusCode: number
  }

  // Remote data types
  export interface User {
    readonly name: string
    readonly image: string
    readonly following: number
    readonly followers: number
    readonly bio: string
  }
  export interface Image {
    readonly original: string
    readonly thumb: string
  }
  export interface Livestream {
    readonly id: number
    readonly title: string
    readonly category: string
    readonly type: 'clip' | 'terjadwal' | 'live'
    readonly image: Image
    readonly audience: number
  }
  export interface Berita {
    readonly id: number
    readonly title: string
    readonly date: string
    readonly category: string
    readonly image: Image
    readonly slug: string
    readonly content: string
    readonly author: {
      name: string
      image: string
    }
  }
  export interface Quiz {
    readonly id: number
    readonly title: string
    readonly category: string
    readonly playCount: number
    readonly image: Image
  }
}
