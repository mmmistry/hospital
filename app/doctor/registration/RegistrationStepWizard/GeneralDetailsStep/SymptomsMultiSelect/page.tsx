'use client'
import { FC, ReactElement, useState , useEffect } from 'react'
import Select from "react-dropdown-select";
import { getAllSymptoms } from '@/utils/api-handler/doctor/page';

interface Symptoms {
  id: string;
  symptom_name: string;
}

// const options: Option[] = [
//   { 
//     value: 1,
//     symptom_name: "Daibites"
//   },
//   {
//     value: 2,
//     label: "Blood Pressure"
//   },
// ];

const SymptomsMultiSelect: FC<{data:any}> = ({data}): ReactElement => {
  const [selectedValues, setSelectedValues] = useState<Symptoms[]>([]);
  const [symptoms, setSymptoms] = useState<any>([])

  useEffect(() => {
    try {
      getAllSymptoms({ search: "" }).then((symptomData: any) => { setSymptoms(symptomData?.SearchSymptomsList) })
    } catch (error) {
      console.log(error)
    }

  }, [])
  const handleChange = (values: Symptoms[]) => {
    data.onChange(values.map((c) => c?.id))
    //  data.onChange(values.map((c) =>  {
    //   let value =  [{"symptom_name":`${c.value}`}]
    //   return value;
    // }))
    setSelectedValues(values);
  };

  return (
    <div className='customMultiSelect'>
      <Select
        className='!border-2 !border-midextralightgray !min-h-12 !shadow-none'
        options={symptoms}
        labelField="symptom_name"
        valueField="id"
        onChange={val=>handleChange(val)}
        values={selectedValues}
        multi
      />
    </div>
  );
}

export default SymptomsMultiSelect;