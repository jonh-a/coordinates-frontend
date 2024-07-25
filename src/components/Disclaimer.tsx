import React from 'react'
import Box from '@mui/material/Box'
import styled from 'styled-components'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`

const Disclaimer: React.FC = () => {
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
          <Typography
            variant='body2'
          >
            This service maps the borders of each country using Geojson data created by the <a href='https://github.com/nvkelso/natural-earth-vector/tree/master/10m_cultural'>Natural Earth</a> project.
            Each country's borders are represented at a 1:10m scale. It's possible that coordinates may occassionally be generated just outside of a given country's borders.

            The raw Geojson data can be accessed through the linked repo or through the <a href='https://github.com/jonh-a/coordinates-api/blob/main/src/geojson/10m.geojson'>Coordinates API repository</a>.

            Geocoding and weather are provided by OpenStreetMap and OpenWeatherMap respectively.

            <br />
            <br />

            I had no part in the creation of the Geojson data, and unfortunately I can't speak to the accuracy of the data with regards to territorial disputes.

            This project isn't under active maintenance, so if any of the data seems incorrect please don't hesitate to fork the <a href='https://github.com/jonh-a/coordinates-api'>Coordinates API</a> to utilize a different source.
          </Typography>
        </Row>
      </Box>
    </Paper>
  )
}

export default Disclaimer