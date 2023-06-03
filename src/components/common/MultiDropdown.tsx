import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface Props {
  setValue: (value: string[]) => void
  value: string[]
  options: Option[]
  label: string
  width: number
}

interface Option {
  key: string
  value: string
}

const MultiDropdown: React.FC<Props> = ({
  options,
  value,
  setValue,
  label,
  width,
}) => {
  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    const v = event.target.value
    setValue(typeof v === 'string' ? v.split(',') : v);
  };

  return (
    <FormControl sx={{ m: 1, width: `${width}%` }}>
      <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={value}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
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
  );
}

export default MultiDropdown