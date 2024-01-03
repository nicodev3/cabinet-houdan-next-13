import Image from 'next/image'

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="mb-5 text-2xl font-semibold">Contact</h2>
      <p className="mb-5">
        Pour toute information, nous vous invitons à nous contacter :
      </p>
      <Image
        src="/mail.svg"
        alt="email adress"
        width="278"
        height="86"
      />
    </section>
  )
}

export default Contact
