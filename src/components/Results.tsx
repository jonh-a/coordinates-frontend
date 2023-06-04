import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Box from '@mui/material/Box'
import RandomCoordinates from './RandomCoordinates'
import SpecificCoordinates from './SpecificCoordinates'
import { useQuery } from '@tanstack/react-query'

const Container = styled(Box)`
`


const Results: React.FC = () => {
  const [include, setInclude] = useState<string[]>([])
  const [units, setUnits] = useState<string>('imperial')
  const [data, setData] = useState<any>({})
  const [latitude, setLatitude] = useState<string>('')
  const [longitude, setLongitude] = useState<string>('')
  const [country, setCountry] = useState<string>('any')

  const requestCountries = async () => {
    const url = `https://coordinates-api.usingthe.computer/countries`
    const resp = await axios.get(url, { timeout: 5000 })
    return resp?.data?.map((country: any) => ({ key: country?.name_long, value: country?.name_long })) || []
  }

  const { data: countries } = useQuery({
    queryKey: ['country'],
    queryFn: requestCountries,
    initialData: []
  })

  const requestRandomCoordinates = async (include: string[], units: string, country: string) => {
    let url = `https://coordinates-api.usingthe.computer/random?include=${include?.join(',')}&units=${units}`
    if (country !== 'any') {
      url = `https://coordinates-api.usingthe.computer/random/${country}?include=${include?.join(',')}&units=${units}`
    }
    const resp = await axios.get(url, { timeout: 5000 })
    setData({ data: resp?.data, type: 'random' })
  }

  const requestSpecificCoordinates = async (latitude: string, longitude: string, include: string[], units: string) => {
    const url = `https://coordinates-api.usingthe.computer/coordinates?lat=${latitude}&lon=${longitude}&include=${include?.join(',')}&units=${units}`
    const resp = await axios.get(url, { timeout: 5000 })
    setData({ data: resp?.data, type: 'specific' })
  }

  return (
    <Container>
      <RandomCoordinates
        execute={requestRandomCoordinates}
        data={data}
        include={include}
        units={units}
        country={country}
        setCountry={setCountry}
        countries={countries}
        setUnits={setUnits}
        setFeatures={setInclude}
        features={include}
      />

      <SpecificCoordinates
        execute={requestSpecificCoordinates}
        data={data}
        include={include}
        units={units}
        setUnits={setUnits}
        setFeatures={setInclude}
        features={include}
        latitude={latitude}
        setLatitude={setLatitude}
        longitude={longitude}
        setLongitude={setLongitude}
      />

    </Container>
  )
}

export default Results