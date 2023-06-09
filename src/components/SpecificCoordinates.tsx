import React from 'react'
import Box from '@mui/material/Box'
import Dropdown from './common/Dropdown'
import MultiDropdown from './common/MultiDropdown'
import styled from 'styled-components'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import SyntaxHighlighter from 'react-syntax-highlighter'
import TextField from './common/TextField'

interface Props {
  execute: (latitude: string, longitude: string, include: string[], units: string) => void
  include: string[]
  units: string
  data: any
  setUnits: (values: string) => void;
  setFeatures: (values: string[]) => void;
  features: string[]
  latitude: string
  setLatitude: (values: string) => void
  longitude: string
  setLongitude: (values: string) => void
}

const Column = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1em;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`

const SpecificCoordinates: React.FC<Props> = ({
  execute,
  include,
  units,
  data,
  features,
  setFeatures,
  setUnits,
  latitude,
  setLatitude,
  longitude,
  setLongitude,
}) => {
  return (
    <Paper
      sx={{
        padding: '1em',
        marginTop: '1em',
        marginBottom: '1em',
      }}
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <Row>
          <Column>
            <Row>
              <Typography
                variant='h5'
                sx={{ paddingBottom: '0.5em' }}
              >
                Resolve Specific Coordinates
              </Typography>

              <TextField
                value={latitude}
                setValue={setLatitude}
                label="Latitude"
                width={100}
              />

              <TextField
                value={longitude}
                setValue={setLongitude}
                label="Longitude"
                width={100}
              />

              <Dropdown
                value={units}
                setValue={setUnits}
                label="Units"
                options={[
                  { key: 'Imperial', value: 'imperial' },
                  { key: 'Metric', value: 'metric' },
                ]}
                width={100}
              />

              <MultiDropdown
                value={features}
                setValue={setFeatures}
                label="Features"
                options={[
                  { key: 'Geocoding', value: 'geocoding' },
                  { key: 'Weather', value: 'weather' },
                ]}
                width={100}
              />

              <Button
                onClick={
                  () => execute(latitude, longitude, include, units)
                }
                sx={{
                  width: '100%'
                }}
              >
                Fetch
              </Button>
            </Row>
          </Column>
          <Column>
            <Row>
              <SyntaxHighlighter language='bash' wrapLongLines={true}>
                {`curl "https://coordinates-api.usingthe.computer/coordinates?lat=${latitude}&lon=${longitude}&include=${include.join(',')}&units=${units}"`}
              </SyntaxHighlighter>
            </Row>
          </Column>
        </Row>
      </Box>

      {
        data?.type === 'specific' && data?.data && (
          <SyntaxHighlighter language='json'>
            {JSON.stringify(data?.data, null, 4)}
          </SyntaxHighlighter>
        )
      }
    </Paper>
  )
}

export default SpecificCoordinates