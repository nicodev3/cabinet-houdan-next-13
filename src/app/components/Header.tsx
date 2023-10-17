import Link from 'next/link'

const Header = () => {
  return (
    <header className="sticky top-0 mx-auto border-b border-secondary bg-white py-5">
      <nav className="container mx-auto flex items-center gap-5 text-lg md:text-2xl">
        <Link
          href="#avantages"
          className="transition-colors hover:text-lime-600"
        >
          Le cabinet
        </Link>
        <Link href="#gallery" className="transition-colors hover:text-lime-600">
          Gallerie
        </Link>
        <Link href="#tarifs" className="transition-colors hover:text-lime-600">
          Tarifs
        </Link>
        <Link
          href="#contact"
          className="ml-auto rounded bg-lime-600 p-3 text-white"
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Header
