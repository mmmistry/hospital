export interface FindDoctorInterface {
    findTitle: string
    findContent: string
    findImg: any
    alt: any
  }
  
export const items: Array<FindDoctorInterface> = [
    {
        findTitle: 'Search nearest hospital',
        findContent: 'Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Nunc scelerisque tincidunt Nunc scelerisque tincidunt elit.',
        findImg: '/assets/images/searchDoctor.svg',
        alt: 'Search doctor'
    },
    {
        findTitle: 'Appointment with the best doctor',
        findContent: 'Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Nunc scelerisque tincidunt Nunc scelerisque tincidunt elit.',
        findImg: '/assets/images/ic_doctor.svg',
        alt: 'Search doctor'
    },
    {
        findTitle: 'Get consultant',
        findContent: 'Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Nunc scelerisque tincidunt Nunc scelerisque tincidunt elit.',
        findImg: '/assets/images/ic_call.svg',
        alt: 'Search doctor'
    },
]