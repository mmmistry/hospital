export interface SidebarLinkContants {
    title: string
    path: string
    img: string
    id: number
}

export const Links: SidebarLinkContants[] = [
    { title: 'Appointments', path: '/doctor/appointments', img: '/assets/images/appoinment.svg', id: 1 },
    { title: 'My Payment', path: '/', img: '/assets/images/payment.svg', id: 2 },
    { title: 'Reviews', path: '/doctor/reviews', img: '/assets/images/reviews.svg', id: 3 },
    { title: 'Settings', path: '/', img: '/assets/images/setting.svg', id: 4 }
]