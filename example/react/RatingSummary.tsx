import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import Stars from './components/Stars'

const RatingSummary: FunctionComponent<RatingSummaryProps> = props => {
  return (
    <div title={name}>
      <Stars rating={4} />
      <FormattedMessage
        id="rating-summary"
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

interface RatingSummaryProps {
  productQuery: any
}

export default RatingSummary
