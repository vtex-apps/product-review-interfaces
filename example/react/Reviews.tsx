import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import withSettings, { Settings } from './components/withSettings'
import { ChildProps } from 'react-apollo'

const Reviews: FunctionComponent<ChildProps<Partial<Props>, Settings>> = props => {
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

interface Props {
  productQuery: any
}

export default withSettings(Reviews)
