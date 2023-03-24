'use client'
import { FC, ReactElement, useState, useEffect } from 'react'
import Select from "react-dropdown-select";
import { getAllSpecialitites } from '@/utils/api-handler/doctor/page';

interface Specialities {
  id: string;
  specialitie_name: string;
}


const SpecialityMultiSelect: FC<{ data: any }> = ({ data }): ReactElement => {
  const [selectedValues, setSelectedValues] = useState<Specialities[]>([]);
  const [specialities, setSpecialities] = useState<Specialities[]>([])

  useEffect(() => {
    try {
      getAllSpecialitites({ search: "" }).then((specialityData: any) => { setSpecialities(specialityData?.SearchSpecialitiesList) })
    } catch (error) {
      console.log(error)
    }

  }, [])

  const handleChange = (values: Specialities[]) => {
    data.onChange(values.map((c) => c.id))
    setSelectedValues(values);
  };
  
  return (
    <div className='customMultiSelect'>
      <Select
        className='!border-2 !border-midextralightgray !min-h-12 !shadow-none'
        options={specialities}
        labelField="specialitie_name"
        valueField="id"
        onChange={val => handleChange(val)}
        values={selectedValues}
        multi
      />
    </div>
  );
}

export default SpecialityMultiSelect;