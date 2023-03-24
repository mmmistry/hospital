'use client'
import { FC, ReactElement, useState } from 'react'
import Select from "react-dropdown-select";

interface Option {
  value: number;
  label: string;
}

const options: Option[] = [
  { 
    value: 1,
    label: "Cardiologist"
  },
  {
    value: 2,
    label: "Audiologist"
  },
  {
    value: 3,
    label: "Dermatologist"
  }
];

const SpecialityMultiSelect: FC = (): ReactElement => {
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);

  const handleChange = (values: Option[]) => {
    setSelectedValues(values);
  };

  return (
    <div className='customMultiSelect'>
      <Select
        className='!border-2 !border-midextralightgray !min-h-12 !shadow-none'
        options={options}
        labelField="label"
        valueField="value"
        onChange={handleChange}
        values={selectedValues}
        multi
      />
    </div>
  );
}

export default SpecialityMultiSelect;