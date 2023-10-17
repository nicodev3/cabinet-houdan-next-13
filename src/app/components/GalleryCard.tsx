import Image from 'next/image'

interface GalleryCardProps {
  image_src: string
  image_alt: string
  image_width: number
  image_height: number
}

const GalleryCard = (props: GalleryCardProps) => {
  return (
    <Image
      alt={props.image_alt}
      src={props.image_src}
      width={props.image_width}
      height={props.image_height}
      className="object-cover"
    />
  )
}

export default GalleryCard
