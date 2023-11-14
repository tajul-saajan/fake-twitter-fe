export default function () {
  const generateQueryString = function <T>(filterData: T) {
    const urlSearchParams = new URLSearchParams()
    for (const [key, val] of Object.entries(filterData)) {
      urlSearchParams.append(key, val)
    }

    return urlSearchParams.toString()
  }

  return {
    generateQueryString
  }
}
