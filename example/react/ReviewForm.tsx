import React, { FunctionComponent, useEffect, useState } from 'react'
import { useRuntime } from 'vtex.render-runtime'

const ReviewForm: FunctionComponent = () => {
  const { culture: { locale }, query } = useRuntime()
  const [loaded, setLoaded] = useState(false)

  const API_KEY = query && query.pr_api_key
  const MERCHANT_GROUP_ID = query && query.pr_merchant_group_id
  const MERCHANT_ID = query && query.pr_merchant_id
  const PAGE_ID = query && query.pr_page_id
  const PAGE_ID_VARIANT = query && query.pr_page_id_variant

  useEffect(() => {
    var script = document.createElement('script')
    script.onload = function () {
      setLoaded(true)
    }
    script.src = 'https://ui.powerreviews.com/stable/4.0/ui.js'

    document.body.appendChild(script);
  }, [])

  useEffect(() => {
    if (!window.POWERREVIEWS) { return }
    window.POWERREVIEWS.display.render({
      api_key: API_KEY,
      locale: locale,
      merchant_group_id: MERCHANT_GROUP_ID,
      merchant_id: MERCHANT_ID,
      page_id: PAGE_ID,
      page_id_variant: PAGE_ID_VARIANT, //only required if specifying a Page ID variant
      components: {
        Write: 'pr-write'
      }
    });
  }, [loaded, API_KEY, locale, MERCHANT_GROUP_ID, MERCHANT_ID, PAGE_ID, PAGE_ID_VARIANT])

  return (
    <div id="pr-write"></div>
  )
}

export default ReviewForm
