import React, { ChangeEvent } from 'react'
import Box from '@mui/material/Box'
import Dropdown from './common/Dropdown'
import MultiDropdown from './common/MultiDropdown'
import styled from 'styled-components'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

interface Props {
  execute: (include: string[], units: string) => void
  include: string[]
  units: string
  data: any
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
        Get Random Coordinates
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <Row>
          <Button
            onClick={
              () => execute(include, units)
            }
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