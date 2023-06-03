import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl'

interface Props {
  setValue: (value: string) => void
  value: string | undefined
  options: Option[]
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
  options,
  label,
  width,
}) => {
  return (
    <FormControl sx={{ m: 1, width: `${width}%` }}>
      <InputLabel id="dropdown-label">{label}</InputLabel>
      <Select
        id="units-dropdown"
        label={label}
        value={value}
        labelId="dropdown-label"
        onChange={(e: SelectChangeEvent) => setValue(e.target.value)}
      >
        {options.map((option: Option) => (
          <MenuItem
            key={option.key}
            value={option.value}
          >
            {option.key}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default Dropdown