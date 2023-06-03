import React, { ChangeEvent } from 'react'
import Box from '@mui/material/Box'
import Dropdown from './common/Dropdown'
import MultiDropdown from './common/MultiDropdown'
import styled from 'styled-components'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

interface Props {
  setUnits: (values: string) => void;
  setFeatures: (values: string[]) => void;
  units: string
  features: string[]
}

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Parameters: React.FC<Props> = ({
  setUnits,
  units,
  setFeatures,
  features,
}) => {
  return (
    <Paper
      sx={{
        padding: '1em'
      }}
    >
      <Typography
        variant='h5'
        sx={{ paddingBottom: '0.5em' }}
      >
        Parameters
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <Row>
          <Dropdown
            value={units}
            setValue={setUnits}
            label="Units"
            options={[
              { key: 'Imperial', value: 'imperial' },
              { key: 'Metric', value: 'metric' },
            ]}
            width={50}
          />

          <MultiDropdown
            value={features}
            setValue={setFeatures}
            label="Features"
            options={[
              { key: 'Geocoding', value: 'geocoding' },
              { key: 'Weather', value: 'weather' },
            ]}
            width={50}
          />
        </Row>
      </Box>
    </Paper>
  )
}

export default Parameters