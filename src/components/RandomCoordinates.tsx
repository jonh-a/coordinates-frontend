import React, { ChangeEvent } from 'react'
import Box from '@mui/material/Box'
import Dropdown from './common/Dropdown'
import styled from 'styled-components'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

interface Props {
  execute: (include: string[], units: string, country: string) => void
  include: string[]
  units: string
  data: any
  country: string
  setCountry: (country: string) => void
  countries: any
}

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const RandomCoordinates: React.FC<Props> = ({
  execute,
  include,
  units,
  data,
  country,
  setCountry,
  countries,
}) => {
  return (
    <Paper
      sx={{
        padding: '1em',
        marginTop: '1em',
        marginBottom: '1em',
      }}
    >
      <Typography
        variant='h5'
        sx={{ paddingBottom: '0.5em' }}
      >
        Get Random Coordinates
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <Row>
          <Dropdown
            value={country}
            setValue={setCountry}
            label="Country"
            options={[
              { key: 'Any', value: 'any' },
              ...countries
                ?.sort((curr: any, next: any) => curr?.key?.localeCompare(next?.key))
            ]}
            width={50}
          />

          <Button
            onClick={
              () => execute(include, units, country)
            }
            sx={{
              width: '50%'
            }}
          >
            Fetch
          </Button>
        </Row>
      </Box>

      {
        data?.type === 'random' && data?.data && (<pre>
          {JSON.stringify(data?.data, null, 4)}
        </pre>)
      }
    </Paper>
  )
}

export default RandomCoordinates