import Image from "next/image";

type OverlayType = {
  alt: string;
  src: string;
};

export function Overlay({ alt, src }: OverlayType) {
  return (
    <>
      <Image className="inset-0 object-cover" fill alt={alt} src={src} />
      <div className="absolute inset-0 bg-black/60" />
    </>
  );
}
