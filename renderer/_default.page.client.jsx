export { render }

import React from 'react'
import ReactDOM from 'react-dom/client'
import { hydrateRoot } from 'react-dom/client'
import { PageShell } from './PageShell'

let root

async function render(pageContext) {
  const { Page, pageProps } = pageContext

  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  const container = document.getElementById('page-view')

  if (pageContext.isHydration) {
    console.log('SSR')
    root = hydrateRoot(container, page)
  } else {
    console.log('Client navigation')
    if (!root) {
      root = ReactDOM.createRoot(container)
    }
    root.render(page)
  }
}

export const clientRouting = true
