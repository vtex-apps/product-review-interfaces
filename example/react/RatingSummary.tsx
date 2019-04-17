import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'

const RatingSummary: FunctionComponent<RatingSummaryProps> = props => {
  return (
    <div>
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
