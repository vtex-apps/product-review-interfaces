import React, { useContext, FunctionComponent } from 'react'
import { ProductSummaryContext } from 'vtex.product-summary'
import Stars from './components/Stars'

const RatingInline: FunctionComponent<RatingInlineProps> = () => {
  const { product } = useContext(ProductSummaryContext)

  return (
    <div title={product.name}>
      <Stars rating={4} />
    </div>
  )
}

interface RatingInlineProps {
  productQuery: any
}

export default RatingInline
