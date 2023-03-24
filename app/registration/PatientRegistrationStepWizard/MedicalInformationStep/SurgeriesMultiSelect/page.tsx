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
    label: "Cardiologist"
  },
  {
    value: 3,
    label: "Cardiologist"
  }
];

const SurgeriesMultiSelect: FC<{ data?: any, Surgeries?: any }> = ({ data, Surgeries }): ReactElement => {
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);
  const handleChange = (values: Option[]) => {
    setSelectedValues(values);
  };

  return (
    <div className='customMultiSelect'>
      <Select
        className='!border-2 !border-midextralightgray !min-h-12 !shadow-none'
        options={Surgeries}
        labelField="surgeries_name"
        valueField="id"
        onChange={(e) => {
          data?.onChange(e);
          handleChange;
        }}
        values={selectedValues}
        multi
      />
    </div>
  );
}

export default SurgeriesMultiSelect;