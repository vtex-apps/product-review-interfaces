import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'

const Reviews: FunctionComponent<ReviewsProps> = props => {
  return (
    <div>
      <FormattedMessage
        id="reviews"
        values={{
          name:
            props.productQuery &&
            props.productQuery.product &&
            props.productQuery.product.productName,
        }}
      />
    </div>
  )
}

interface ReviewsProps {
  productQuery: any
}

export default Reviews
