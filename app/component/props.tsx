interface countryinfo {
    name: string;
    population: number;
    capital: string;
}

interface CountrydetailCard{
    countryinfo?: countryinfo;
    url: string
}
const CountrydetailCard=(data: CountrydetailCard)=>{
    
    return(
        <div className="text-lg font-bold ">
            {data.countryinfo ? (
                <div >
                    <h1>Country Name: {data.countryinfo.name}</h1>
                    <h1>Country Capital: {data.countryinfo.capital}</h1>
                    <h1>Country Population: {data.countryinfo.population}</h1>
                </div>
            ) :(
                <div>
                    <h1>{data.url} Not Found</h1>
                </div>
            )}
        </div>
    )
}
export default CountrydetailCard