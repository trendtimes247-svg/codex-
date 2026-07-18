import Image from "next/image";
import type { SanityImage } from "@/types/cms/homepage";
import { getImageBlur, urlForImage } from "@/sanity/lib/image";

export function SanityImageView({ image, className, sizes, priority = false }: { image?: SanityImage; className?: string; sizes: string; priority?: boolean }) {
  if (!image?.asset) return null;
  const dimensions = image.asset.metadata?.dimensions;
  return <Image src={urlForImage(image).width(1600).quality(82).auto("format").url()} alt={image.alt} width={dimensions?.width ?? 1600} height={dimensions?.height ?? 1000} className={className} sizes={sizes} priority={priority} placeholder={getImageBlur(image) ? "blur" : "empty"} blurDataURL={getImageBlur(image)} />;
}
