'use client'
import { getAllFacilityList } from '@/utils/api-handler/doctor/page';
import { FC, ReactElement, useEffect, useState } from 'react'
import Select from "react-dropdown-select";

interface Facilities {
  id: string;
  facilities: string
}

const FacilityMultiSelect: FC<{ data: any }> = ({data}): ReactElement => {
  const [selectedValues, setSelectedValues] = useState<Facilities[]>([]);
  const [facilitiesDetails, setFacilities] = useState<Facilities[]>([])

  useEffect(() => {
    try {
      getAllFacilityList({ search: "" }).then((facilityData: any) => { setFacilities(facilityData?.SearchHospitalFacilitiesList) })
    } catch (error) {
      console.log(error)
    }

  }, [])

  const handleChange = (values: Facilities[]) => {
    data.onChange(values.map((c) => c.id))
    setSelectedValues(values);

  };

  return (
    <div className='customMultiSelect'>
      <Select
        className='!border-2 !border-midextralightgray !min-h-12 !shadow-none'
        options={facilitiesDetails}
        labelField="facilities"
        valueField="id"
        onChange={val => handleChange(val)}
        values={selectedValues}
        multi
      />
    </div>
  );
}

export default FacilityMultiSelect;