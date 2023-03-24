export interface ServiceBlockInterface {
    servTitle: string
    servContent: string
    servImg: any
    alt: any
  }
  
export const Services: Array<ServiceBlockInterface> = [
    {
      servTitle: 'Visit a doctor for an in-clinic consultation',
      servContent: 'Our diverse set of tech tools includes modern tech stacks and IDEs for optimizing our development workflows.',
      servImg: '/assets/images/ic_clinic.png',
      alt: 'visit doctor'
    },
    {
        servTitle: 'Consult a doctor via video call',
        servContent: 'Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam non rhoncus magna. Suspendisse aliquet tincidunt enim, ut commodo elit feugiat et. Maecenas interdum lorem eleifend orci aliquam mollis.',
        servImg: '/assets/images/nurse.png',
        alt: 'nurse'
    },
    {
        servTitle: 'Consult a doctor via audio call',
        servContent: 'Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam non rhoncus magna. Suspendisse aliquet tincidunt enim, ut commodo elit feugiat et. Maecenas interdum lorem eleifend orci aliquam mollis.',
        servImg: '/assets/images/calendar.png',
        alt: 'Consult a doctor'
    },
    {
        servTitle: 'Chat with a doctor',
        servContent: 'Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam non rhoncus magna. Suspendisse aliquet tincidunt enim, ut commodo elit feugiat et. Maecenas interdum lorem eleifend orci aliquam mollis.',
        servImg: '/assets/images/emergency-call.png',
        alt: 'Chat doctor'
      }
]