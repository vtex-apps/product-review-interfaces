import React, { useContext, FunctionComponent } from 'react'
import { ProductSummaryContext } from 'vtex.product-summary'
import { FormattedMessage } from 'react-intl'

const RatingInline: FunctionComponent<RatingInlineProps> = props => {
  const { product } = useContext(ProductSummaryContext)

  return (
    <div>
      <FormattedMessage id="stars" values={{ name: product.productName }} />
    </div>
  )
}

interface RatingInlineProps {
  productQuery: any
}

export default RatingInline
