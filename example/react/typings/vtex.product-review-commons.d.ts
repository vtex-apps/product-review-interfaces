declare module 'vtex.product-review-commons' {
  import { ComponentType } from 'react'

  export const Stars: ComponentType<StarsProps>

  interface StarsProps {
    rating: number
  }

  export const NumberOfReviews: ComponentType<NumberOfReviewsProps>

  interface NumberOfReviewsProps {
    number: number
    linkTo?: string
  }

  export const WriteAReview: ComponentType<WriteAReviewProps>

  interface WriteAReviewProps {
    number: number
    linkTo?: string
  }
}
