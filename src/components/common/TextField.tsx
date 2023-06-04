import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'

interface Props {
  setValue: (value: string) => void
  value: string | undefined
  label: string
  width: number
}

interface Option {
  key: string
  value: string
}

const Dropdown: React.FC<Props> = ({
  value,
  setValue,
  label,
  width,
}) => {
  return (
    <FormControl sx={{ m: 1, width: `${width}%` }}>
      <TextField
        id={label}
        label={label}
        value={value}
        defaultValue={''}
        onChange={(e: any) => setValue(e?.target?.value || '')}
      />
    </FormControl>
  )
}

export default Dropdown