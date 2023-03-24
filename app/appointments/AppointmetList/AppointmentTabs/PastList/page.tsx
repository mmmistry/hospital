'use client'
import { FC, ReactElement, useEffect, useState } from 'react'
import Nextlink from 'next/link'
import { useSession } from 'next-auth/react'
import { StarIcn } from '@/components/icons/CommonIcons/page'
import { dateFormate } from '@/utils/helpers/common'
import { bookUserPastAppointment } from '@/utils/api-handler/patient/page'
import FeedBackModal from '@/components/Modals/FeedBackModal/page'

const PastList: FC = (): ReactElement => {
    const [isOpenFeedBackModal, setIsOpenFeedBackModal] = useState(false)
    const [pastList, setPastList] = useState([]);
    const [loader, setLoader] = useState(false);
    const { data: session }: any = useSession();

    useEffect(() => {
        if (session?.user) {
            (async () => {
                setLoader(true)
                try {
                    let data = await bookUserPastAppointment({ user_id: session?.user?.id });
                    if (data && data?.BookUserPastAppointment) {
                        setLoader(false);
                        setPastList(data?.BookUserPastAppointment);
                    } else {
                        setLoader(false);
                        setPastList([]);
                    }
                } catch (error) {
                    setPastList([]);
                    setLoader(false);
                }
            })();
        }
    }, [])
    const closeFeedBackModal= () => {
        setIsOpenFeedBackModal(false)
      }
    
      const openFeedBackModal = () =>{
          setIsOpenFeedBackModal(true)
      }

    return (
        <>
        <div className='responsive-table overflow-x-auto w-full custom-scrollbar'>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th className='text-sm font-bold px-4 border-b border-smextralightgray py-3 text-left'>Doctor</th>
                        <th className='text-sm font-bold px-4 border-b border-smextralightgray py-3 text-left'>Appointment for</th>
                        <th className='text-sm font-bold px-4 border-b border-smextralightgray py-3 text-left'>Appointment on</th>
                        <th className='text-sm font-bold px-4 border-b border-smextralightgray py-3 text-left'>Status</th>
                        <th className='text-sm font-bold px-4 border-b border-smextralightgray py-3 text-left'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loader ? <>
                            <tr>
                                <td colSpan={5} className="text-center p-4">Loading ...</td>
                            </tr>

                        </> : <>
                            {pastList.length ?
                                <>
                                    {pastList.map((list: any, key) => {
                                        const { slot_time, date, GetSymptomDetails, GetDoctorDetails, status } = list;
                                        let appDate = new Date(date.concat(" " + slot_time));
                                        let appOn = dateFormate(appDate)
                                        return (
                                            <tr className='bg-transparent transition-all hover:bg-secondaryLight' key={`list-${key}`}>
                                                <td className='text-sm px-4 py-3 text-left'>
                                                    <Nextlink href={`/appointment-details/${GetDoctorDetails[0]?.id}`}>{GetDoctorDetails[0]?.full_name}</Nextlink>
                                                </td>
                                                <td className='text-sm px-4 py-3 text-left'>{GetSymptomDetails[0]?.symptom_name}</td>
                                                <td className='text-sm px-4 py-3 text-left'>{appOn}</td>
                                                <td className='text-sm px-4 py-3 text-left'>
                                                    {status === "Confirm" ?
                                                        <span className='confirm-badge font-xs rounded-3xl px-2 py-1 text-center inline-block bg-lightsuccess text-mdsuccess'>
                                                            Confirmed
                                                        </span>
                                                        :
                                                        <span className='warning-badge font-xs rounded-3xl px-2 py-1 text-center inline-block bg-lightwarning text-mdwarning'>Cancelled</span>
                                                    }
                                                </td>
                                                <td className='text-sm px-4 py-3 text-left'>
                                                    <button onClick={openFeedBackModal}
                                                        className='flex items-center justify-center w-32 px-1.5 py-1.5 border border-transparent rounded transition-all hover:border-darkgray'>
                                                        <StarIcn className='mr-1' />Write Review
                                                    </button>
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
        <FeedBackModal isOpenFeedBackModal={isOpenFeedBackModal}
          closeFeedBackModal={closeFeedBackModal} />
        </>
    )
}

export default PastList