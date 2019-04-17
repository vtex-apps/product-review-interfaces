import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'

const QnA: FunctionComponent<QnAProps> = props => {
  return (
    <div>
      <FormattedMessage
        id="qna"
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

interface QnAProps {
  productQuery: any
}

export default QnA
