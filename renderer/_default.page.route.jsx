import { extractLocale } from '../locales'

export { onBeforeRoute }

function onBeforeRoute(pageContext) {
  let { locale, url } = pageContext

  if (locale === undefined) {
    // Make sure locale is set on client-side navigation
    const { urlWithoutLocale, locale: extractedLocale } = extractLocale(url)
    locale = extractedLocale
    url = urlWithoutLocale
  }

  return {
    pageContext: {
      locale,
      url,
    },
  }
}
