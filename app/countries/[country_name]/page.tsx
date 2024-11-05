import Navbar from "@/app/Navbar/page";
import CountrydetailCard from "@/app/component/props";

export default function Dynamic({ params }: { params: { country_name: string } }) {
  // Define the type for country names and country data
  const countries = [
    {
      name: "Pakistan",
      population: 235824862,
      capital: "Islamabad",
    },
    {
      name: "Saudiarab",
      population: 36408818,
      capital: "Riyadh",
    },
    {
      name: "Turkiye",
      population: 87473805,
      capital: "Ankara",
    },
    {
      name: "China",
      population: 1425887337,
      capital: "Beijing",
    },
    {
      name: "Japan",
      population: 123951692,
      capital: "Tokyo",
    },
  ];

  function findCountry(countryUrl: string) {
    return countries.find(country => country.name.toLowerCase() === countryUrl.toLowerCase());
  }

  const result = findCountry(params.country_name);

  return (
    <div>
      <Navbar />

      <CountrydetailCard countryinfo = {result} url = {params.country_name} />
      <div>
      {/*   {result ? (
          <div className="flex-col space-y-4 font-semibold">
            <h1>Country Name: {result.name}</h1>
            <h1>Country Capital: {result.capital}</h1>
            <h1>Country Population: {result.population}</h1>
          </div>
        ) : (
          <h1 className="text-lg text-center">{params.country_name} Not Found</h1>
        )} */}
      </div>
    </div>
  );
}
