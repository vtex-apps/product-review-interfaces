import React, { FunctionComponent, useContext } from 'react'
import { ProductContext } from 'vtex.product-context'
import { Stars, NumberOfReviews, WriteAReview } from 'vtex.product-review-commons'
import classNames from 'classnames'
import randomReview from './modules/randomReview'

const RatingSummary: FunctionComponent = () => {
  const { product } = useContext(ProductContext)

  if (!product) {
    return null
  }
  
  const review = randomReview(product.productName)

  return (
    <div className={classNames('mv4')}>
      <span className="mr3">
        <Stars rating={review.rating} />
      </span>
      <span className="mr3">
        <NumberOfReviews number={review.numberOfReviews} />
      </span>
      <WriteAReview number={review.numberOfReviews} />
    </div>
  )
}

export default RatingSummary
