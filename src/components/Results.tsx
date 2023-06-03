import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Box from '@mui/material/Box'
import Parameters from './Parameters'
import RandomCoordinates from './RandomCoordinates'
import {
  QueryClient,
  useQueryClient,
  useQuery
} from '@tanstack/react-query'

const Container = styled(Box)`
`


const Results: React.FC = () => {
  const [include, setInclude] = useState<string[]>([])
  const [units, setUnits] = useState<string>('imperial')
  const [data, setData] = useState<any>({})
  const [latitude, setLatitude] = useState<string>('')
  const [longitude, setLongitude] = useState<string>('')
  const [country, setCountry] = useState<string>('any')

  const queryClient = useQueryClient();

  const requestCountries = async () => {
    const url = `http://localhost:3001/countries`
    const resp = await axios.get(url, { timeout: 5000 })
    return resp?.data?.map((country: any) => ({ key: country?.name_long, value: country?.name_long })) || []
  }

  const { data: countries } = useQuery({
    queryKey: ['country'],
    queryFn: requestCountries
  })

  const requestRandomCoordinates = async (include: string[], units: string, country: string) => {
    let url = `https://coordinates-api.usingthe.computer/random?include=${include?.join(',')}&units=${units}`
    if (country !== 'any') {
      url = `https://coordinates-api.usingthe.computer/random/${country}?include=${include?.join(',')}&units=${units}`
    }
    const resp = await axios.get(url, { timeout: 5000 })
    setData({ data: resp?.data, type: 'random' })
  }

  const requestSpecificCoordinates = async () => {
    const url = `https://coordinates-api.usingthe.computer/coordinates?lat=${latitude}&lon=${longitude}&include=${include?.join(',')}&units=${units}`
    const resp = await axios.get(url, { timeout: 5000 })
    setData({ data: resp?.data, type: 'specific' })
  }

  return (
    <Container>
      <Parameters
        setUnits={setUnits}
        units={units}
        setFeatures={setInclude}
        features={include}
      />

      <RandomCoordinates
        execute={requestRandomCoordinates}
        data={data}
        include={include}
        units={units}
        country={country}
        setCountry={setCountry}
        countries={countries}
      />
    </Container>
  )
}

export default Results