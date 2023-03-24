'use client'
import { ChatIcn, VideoIcn, VisitIcn } from '@/components/icons/CommonIcons/page'
import { APPOINTMENTMODE } from '@/constants/AppointmentMode'
import { getUpcomingAppoinmentList } from '@/utils/api-handler/doctor/page'
import { dateFormate } from '@/utils/helpers/common'
import { PhoneIcon } from '@heroicons/react/20/solid'
import { useSession } from 'next-auth/react'
import Nextlink from 'next/link'
import { FC, ReactElement, useEffect, useState } from 'react'

const UpcomingList:FC = (): ReactElement => {
    const [upcoming, setUpcoming] = useState([]);
    const [loader, setLoader] = useState(false);
    const { data: session }: any = useSession();
    const {VIDEO , AUDIO , CHAT , CLINIC } = APPOINTMENTMODE;

    useEffect(() => {
        if (session?.user) {
            (async () => {
                setLoader(true)
                try {
                    let data = await getUpcomingAppoinmentList({ doctor_id: session?.user?.id });
                    if (data && data?.BookPastAppointment) {
                        setLoader(false);
                        setUpcoming(data?.BookPastAppointment);
                    } else {
                        setLoader(false);
                        setUpcoming([]);
                    }
                } catch (error) {
                    setUpcoming([]);
                    setLoader(false);
                }
            })();
        }
    }, [session?.user])

    const appointmentMode = (mode: string) => {
        let appDetail;
        switch (mode) {
            case VIDEO:
                appDetail = <> <VideoIcn className='mr-1' /> Video Call</>
                break;
            case AUDIO:
                appDetail = <> <PhoneIcon className='mr-1 w-4 h-4' /> Audio Call</>
                break;
            case CHAT:
                appDetail = <> <ChatIcn className='mr-1' /> Chat </>
                break;
            case CLINIC:
                appDetail = <> <VisitIcn className='mr-1' /> Visit us</>
                break;
            default:
                appDetail = <> <VisitIcn className='mr-1' /> Visit us </>
                break;
        }
        return appDetail;
    }

    return (
        <div className='responsive-table overflow-x-auto w-full custom-scrollbar'>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th className='text-sm font-bold px-4 border-b border-smextralightgray py-3 text-left'>Patient</th>
                        <th className='text-sm font-bold px-4 border-b border-smextralightgray py-3 text-left'>Appointment for</th>
                        <th className='text-sm font-bold px-4 border-b border-smextralightgray py-3 text-left'>Appointment on</th>
                        <th className='text-sm font-bold px-4 border-b border-smextralightgray py-3 text-left'>Appointment mode</th>
                        <th className='text-sm font-bold px-4 border-b border-smextralightgray py-3 text-left'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loader ? <>
                            <tr>
                                <td colSpan={5} className="text-center p-4">Loading ...</td>
                            </tr>

                        </> : <>
                            {upcoming.length ?
                                <>
                                    {upcoming.map((list: any , key) => {
                                        const { slot_time, date, GetAppointmentConsultation, GetSymptomDetails, GetUserDetails, status } = list;
                                        let appDate = new Date(date.concat(" " + slot_time));
                                        let appOn = dateFormate(appDate)
                                        let appDetail = appointmentMode(GetAppointmentConsultation[0]?.consultation_mode_name);
                                        return (
                                            <tr className='bg-transparent transition-all hover:bg-secondaryLight' key={`list-${key}`}>
                                                <td className='text-sm px-4 py-3 text-left'>
                                                    <Nextlink href='/appointment-details'>{GetUserDetails[0]?.full_name}</Nextlink>
                                                </td>
                                                <td className='text-sm px-4 py-3 text-left'>{GetSymptomDetails[0]?.symptom_name}</td>
                                                <td className='text-sm px-4 py-3 text-left'>{appOn}</td>
                                                <td className='text-sm px-4 py-3 text-left'>
                                                    <Nextlink href='/'
                                                        className='flex items-center justify-center w-32 px-1.5 py-1.5 border border-transparent rounded transition-all hover:border-darkgray'>
                                                        {appDetail}
                                                    </Nextlink>
                                                </td>
                                                <td className='text-sm px-4 py-3 text-left'>
                                                    {status === "Confirm" ?
                                                        <span className='confirm-badge font-xs rounded-3xl px-2 py-1 text-center inline-block bg-lightsuccess text-mdsuccess'>
                                                            Confirmed
                                                        </span>
                                                        :
                                                        <span className='warning-badge font-xs rounded-3xl px-2 py-1 text-center inline-block bg-lightwarning text-mdwarning'>Cancelled</span>
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </>
                                :
                                <>
                                    <tr>
                                        <td colSpan={5} className="text-center p-4">No Record Found</td>
                                    </tr>
                                </>}
                        </>
                    }
            </tbody>
        </table>
       
    </div>
  )
}

export default UpcomingList