function genUrl(f: any): string {
  const { storageKey } = f
  const { postfix } = f
  return `http://public-api.rico.org.cn/${storageKey}.${postfix}`
}

export default {
  genUrl,
}
