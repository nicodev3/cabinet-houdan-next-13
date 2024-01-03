const Dispos = () => {
  return (
    <section className="mb-10 md:mb-12">
      <h2 className="mb-5 text-2xl font-semibold">
        Disponibilités (janvier 2024)
      </h2>

      <table className="table-fixed border-separate border-spacing-1">
        <thead>
          <tr>
            <th></th>
            <th className="font-medium">Lundi</th>
            <th className="font-medium">Mardi</th>
            <th className="font-medium">Mercredi</th>
            <th className="font-medium">Jeudi</th>
            <th className="font-medium">Vendredi</th>
            <th className="font-medium">Samedi</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>AM</td>
            <td className="bg-red-200"></td>
            <td className="bg-lime-600 text-white">&#10004;</td>
            <td className="bg-lime-600 text-white">&#10004;</td>
            <td className="bg-lime-600 text-white">&#10004;</td>
            <td className="bg-lime-600 text-white">&#10004;</td>
            <td className="bg-red-200"></td>
          </tr>
          <tr className="text-center">
            <td>PM</td>
            <td className="bg-lime-600 text-white">&#10004;</td>
            <td className="bg-red-200"></td>
            <td className="bg-red-200"></td>
            <td className="bg-red-200"></td>
            <td className="bg-red-200"></td>
            <td className="bg-red-200"></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Dispos
