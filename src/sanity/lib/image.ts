import imageUrlBuilder from "@sanity/image-url";
import { sanityConfig } from "./env";
import type { SanityImage } from "@/types/cms/homepage";

const builder = imageUrlBuilder({ projectId: sanityConfig.projectId || "placeholder", dataset: sanityConfig.dataset });
export function urlForImage(image: SanityImage) { return builder.image(image); }
export function getImageBlur(image?: SanityImage) { return image?.asset?.metadata?.lqip; }
