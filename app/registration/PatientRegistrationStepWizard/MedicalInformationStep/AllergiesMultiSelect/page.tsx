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
    label: "Insect Allergy"
  },
  {
    value: 2,
    label: "Insect Allergy1"
  },
  {
    value: 3,
    label: "Insect Allergy2"
  }
];

const AllergiesMultiSelect: FC<{ data?: any, Allergies?: any }> = ({ data, Allergies }): ReactElement => {
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);
  const handleChange = (values: Option[]) => {
    setSelectedValues(values);
  };

  return (
    <div className='customMultiSelect'>
      <Select
        className='!border-2 !border-midextralightgray !min-h-12 !shadow-none'
        options={Allergies}
        labelField="allergies_name"
        valueField="id"
        onChange={(e) => {
          data?.onChange(e);
          handleChange
        }}
        values={selectedValues}
        multi
      />
    </div>
  );
}

export default AllergiesMultiSelect;