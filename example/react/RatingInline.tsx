import React, { useContext, FunctionComponent } from 'react'
import { ProductSummaryContext } from 'vtex.product-summary'
import { Stars } from 'vtex.product-review-commons'
import randomReview from './modules/randomReview'

const RatingInline: FunctionComponent = () => {
  const { product } = useContext(ProductSummaryContext)

  if (!product) {
    return null
  }

  const review = randomReview(product.productName)

  return (
    <div title={product.name}>
      <Stars rating={review.rating} />
    </div>
  )
}

export default RatingInline
