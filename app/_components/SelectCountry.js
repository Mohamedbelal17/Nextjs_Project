import { getCountries } from "@/app/_lib/data-service"

export default async function SelectCountry({ defaultCountry, name, id, className}) {
    const countries = await getCountries()
    const flag = countries?.find((c)=>((c.name === defaultCountry)?.flag ?? " " ))
    return (
        <select id={id}
        name={name} 
        defaultValue={`${defaultCountry}%${flag}`}
        className={className}>

            <option value={"."}>Select country...</option>
            {countries?.map(country=>(<option  value={`${country.name}%${country.flag}`} key={country.name}>
                {country.name}
            </option>))}
        </select>
    )
}


