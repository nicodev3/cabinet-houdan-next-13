import Image from 'next/image'
import GalleryCard from '@/app/components/GalleryCard'
import Avantages from '@/app/components/Avantages'
import Tarifs from '@/app/components/Tarifs'
import Contact from '@/app/components/Contact'

export default function Home() {
  return (
    <main className="container mx-auto py-12">
      <section className="mb-10 grid gap-5 md:mb-12 md:grid-cols-2 md:gap-28">
        <div>
          <h1 className="mb-5 text-2xl font-semibold">
            Cabinet Pluridisciplinaire à Sceaux
          </h1>
          <p className="mb-5">
            Découvrez notre cabinet pluridisciplinaire à Sceaux, l&apos;endroit
            idéal pour établir votre pratique. Notre espace moderne et agréable
            offre une variété de bureaux équipés pour les professionnels du
            soin, des psychologues aux thérapeutes en passant par les experts en
            bien-être.
          </p>
          <p className="pb-5">
            Avec un emplacement central dans la ville de Sceaux, vos patients
            auront un accès facile à votre cabinet. Nous nous engageons à créer
            un environnement accueillant et fonctionnel pour votre travail.
          </p>
          <p>
            Pour les professionnels cherchant un cabinet pluridisciplinaire à
            Sceaux, notre établissement offre des bureaux équipés dans un
            emplacement central de la ville. Adapté aux psychologues,
            thérapeutes et experts en bien-être, le cabinet vise à fournir un
            espace de travail fonctionnel et accueillant. L&apos;accès aux
            transports en commun est aisé. Pour plus d&apos;informations,
            n&apos;hésitez pas à nous contacter.
          </p>
        </div>
        <Image
          src="/photo-2-1200w.jpg"
          width={500}
          height={333}
          alt="Cabinet Pluridisciplinaire à Sceaux"
        />
      </section>

      <Avantages />

      <section
        id="gallery"
        className="mb-10 grid gap-5 md:mb-12 md:grid-cols-2"
      >
        <GalleryCard
          image_src="/cabinet-houdan-paysage-1.jpg"
          image_alt=""
          image_width={1000}
          image_height={500}
        />
        <GalleryCard
          image_src="/cabinet-houdan-paysage-2.jpg"
          image_alt=""
          image_width={1000}
          image_height={500}
        />
        <GalleryCard
          image_src="/cabinet-houdan-portrait-2.jpg"
          image_alt=""
          image_width={500}
          image_height={1000}
        />
        <GalleryCard
          image_src="/cabinet-houdan-portrait-3.jpg"
          image_alt=""
          image_width={500}
          image_height={1000}
        />
      </section>

      <Tarifs />

      <Contact />
    </main>
  )
}
