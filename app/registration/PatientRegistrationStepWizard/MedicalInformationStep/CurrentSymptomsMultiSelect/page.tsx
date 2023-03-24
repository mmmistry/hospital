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

const CurrentSymptomsMultiSelect: FC<{ data?: any, CurrentSymptoms?: any }> = ({ data, CurrentSymptoms }): ReactElement => {
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);
  const handleChange = (values: Option[]) => {
    setSelectedValues(values);
  };

  return (
    <div className='customMultiSelect'>
      <Select
        className='!border-2 !border-midextralightgray !min-h-12 !shadow-none'
        options={CurrentSymptoms}
        labelField="symptom_name"
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

export default CurrentSymptomsMultiSelect;