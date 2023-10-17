import Image from 'next/image'
import Test from '@/app/components/Test'

export default function Home() {
  return (
    <main className="container mx-auto py-12">
      <Test />
      <section className="mb-10 grid gap-5 md:mb-12 md:grid-cols-2 md:gap-28">
        <div>
          <h1 className="mb-5 text-2xl font-semibold">
            Cabinet Pluridisciplinaire à Sceaux
          </h1>
          <p className="mb-5">
            Découvrez notre cabinet pluridisciplinaire à Sceaux, l&apos;endroit
            parfait pour établir votre pratique de santé. Notre espace moderne
            offre une variété de bureaux équipés pour les professionnels de la
            santé, des psychologues aux thérapeutes en passant par les experts
            en bien-être.
          </p>
          <p className="pb-5">
            Avec un emplacement central dans la ville de Sceaux, vos patients
            auront un accès facile à votre cabinet. Nous nous engageons à créer
            un environnement accueillant et fonctionnel pour votre travail.
            Réservez dès aujourd&apos;hui pour offrir à vos patients le meilleur
            de la santé et du bien-être.
          </p>
          <p>
            Pour les professionnels de la santé cherchant un cabinet
            pluridisciplinaire à Sceaux, notre établissement offre des bureaux
            équipés dans un emplacement central de la ville. Adapté aux
            psychologues, thérapeutes et experts en bien-être, le cabinet vise à
            fournir un espace de travail fonctionnel et accueillant.
            L&apos;accès aux transports en commun est aisé. Pour plus
            d&apos;informations ou pour prendre une réservation, n&apos;hésitez
            pas à nous contacter.
          </p>
        </div>
        <Image
          src="/photo-2-1200w.jpg"
          width={500}
          height={333}
          alt="Cabinet Pluridisciplinaire à Sceaux"
        />
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-semibold">
          Les avantages du cabinet
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-2xl">Équipements de Notre Cabinet</h3>
            <p>
              Notre cabinet pluridisciplinaire à Sceaux est équipé pour répondre
              à vos besoins professionnels. Vous trouverez des espaces de
              consultation confortables, une cuisine bien équipée pour vos
              pauses, ainsi que des toilettes modernes pour votre confort.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-2xl">Espace de Consultation Polyvalent</h3>
            <p>
              Notre espace de consultation est conçu pour accueillir des
              professionnels de toutes disciplines. Que vous soyez médecin,
              psychologue, thérapeute, ou expert en bien-être, nos bureaux sont
              adaptés à votre pratique indépendante. Personnalisez votre espace
              pour répondre à vos besoins spécifiques.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-2xl">Situation Idéale à Sceaux</h3>
            <p>
              Notre cabinet est stratégiquement situé au cœur de Sceaux, offrant
              un accès facile à vos patients. Vous bénéficierez de la proximité
              des transports en commun, de commerces locaux, et d&apos;un
              environnement paisible propice à la consultation. La localisation
              idéale pour votre pratique.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-2xl">Professions Adaptées au Cabinet</h3>
            <p>
              Les professionnels de la santé, psychologues, psychiatres,
              thérapeutes, nutritionnistes, coachs, et bien d&apos;autres
              peuvent exercer dans notre cabinet pluridisciplinaire. Nous
              favorisons la diversité des pratiques pour offrir à nos locataires
              une communauté riche en connaissances et en opportunités de
              collaboration.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-semibold">Tarifs</h2>
        <p className="mb-3">
          Tarif à la Demi-journée : <span className="font-semibold">40</span> €
          pour une demi-journée de 6 heures, incluant les charges, soit{' '}
          <span className="font-semibold">175</span> € par mois, toutes charges
          comprises pour une demi-journée de 6h par semaine.
        </p>
        <p className="mb-3">
          Les consultations sont disponibles en matinée jusqu&apos;à 13h45,
          l&apos;après-midi à partir de 14h00.
        </p>

        <p>
          Profitez de nos tarifs compétitifs pour louer un espace dans notre
          cabinet pluridisciplinaire à Sceaux et assurez-vous de disposer
          d&apos;un lieu de travail fonctionnel et abordable pour développer
          votre activité. Pour plus d&apos;informations ou pour réserver un
          espace, contactez-nous dès aujourd&apos;hui.
        </p>
      </section>
    </main>
  )
}
