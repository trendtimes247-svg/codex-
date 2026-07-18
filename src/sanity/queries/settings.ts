import { seoFragment } from "./fragments";
export const globalSettingsQuery = `*[_type == "globalSettings"][0]{ siteName, description, organizationJsonLd, seo ${seoFragment} }`;
