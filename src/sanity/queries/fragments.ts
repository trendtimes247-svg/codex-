export const imageFragment = `{
  alt,
  asset->{_id, url, metadata { lqip, dimensions { width, height } }}
}`;
export const seoFragment = `{
  title,
  description,
  canonical,
  noIndex,
  image ${imageFragment}
}`;
