
'use client'
import { FC, ReactElement, useState ,useEffect} from 'react'
import Select from "react-dropdown-select";
import { getAllEducatioList } from '@/utils/api-handler/doctor/page';

interface EducationList {
  id: string;
  education_name: string;
}



const EducationsSelectDropDown: FC<{data:any}> = ({data}): ReactElement => {
  const [selectedValues, setSelectedValues] = useState<EducationList[]>([]);
   const [educationList, setEducationList] = useState<any>([])

  useEffect(() => {
    try {
      getAllEducatioList({ search: "" }).then((educationListData: any) => { setEducationList(educationListData?.SearchEducationList) })
    } catch (error) {
      console.log(error)
    }

  }, [])
  const handleChange = (values: EducationList[]) => {
      data.onChange(values.map((c) => c.id))
    // data.onChange(values.map((c) =>  {
    //   let value = [{"education_name":`${c.value}`}]
    //   return value;
    // }))
    setSelectedValues(values);
  };

  return (
    <div className='customMultiSelect'>
      <Select
        className='!border-2 !border-midextralightgray !min-h-12 !shadow-none'
        options={educationList}
        labelField="education_name"
        valueField="id"
        onChange={val=>handleChange(val)}
        values={selectedValues}
        multi
      />
    </div>
  );
}

export default EducationsSelectDropDown;