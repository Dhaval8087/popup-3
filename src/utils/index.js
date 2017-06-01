export const getQueryParams = () => {
  const urlParams = {}
  const pl = /\+/g  // Regex for replacing addition symbol with a space
  const search = /([^&=]+)=?([^&]*)/g
  const decode = s => decodeURIComponent(s.replace(pl, " "))
  const query = window.location.search.substring(1)

  let match = search.exec(query)
  while (match) {
    urlParams[decode(match[1])] = decode(match[2])
    match = search.exec(query)
  }
  return urlParams
}