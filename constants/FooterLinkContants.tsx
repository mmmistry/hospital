interface IFooterLink {
    url: string
    title: string
  }
  
  interface IFooterMenuLink {
    footerTitle: string
    links: IFooterLink[]
  }
  
  const MENU_SECTION_LINKS: IFooterLink[] = [
    {
      url: '/',
      title: 'About',
    },
    {
      url: '/',
      title: 'Services',
    },
    {
      url: '/',
      title: 'Contact us',
    },
  ]
  
  const CONNECT_SECTION_LINKS: IFooterLink[] = [
    {
      url: '/',
      title: 'Facebook',
    },
    {
      url: '/',
      title: 'Twitter',
    },
  ]
  
  const DOCTOR_SECTION_LINKS: IFooterLink[] = [
    {
      url: '/',
      title: 'Dr HUB Profile',
    },
  ]
  
  const PATIENTS_SECTION_LINKS: IFooterLink[] = [
    {
      url: '/',
      title: 'Search for doctors',
    },
    {
      url: '/',
      title: 'Search for symptoms',
    },
    {
      url: '/',
      title: 'Search for hospitals',
    },
  ]

  const MORE_MENU_SECTION_LINKS: IFooterLink[] = [
    {
      url: '/',
      title: 'Privacy Policy',
    },
    {
      url: '/',
      title: 'Terms & conditions',
    },
  ]
const LINKS = {
    FOOTER: {
      DEFAULT: [
        {
          footerTitle: 'Menu',
          links: MENU_SECTION_LINKS,
        },
        {
          footerTitle: 'For patients',
          links: PATIENTS_SECTION_LINKS,
        },
        {
          footerTitle: 'For doctors',
          links: DOCTOR_SECTION_LINKS,
        },
        {
            footerTitle: 'More',
            links: MORE_MENU_SECTION_LINKS,
        },
        {
          footerTitle: 'Follow us',
          links: CONNECT_SECTION_LINKS,
        },
      ],
    },
  }
  
  export default LINKS