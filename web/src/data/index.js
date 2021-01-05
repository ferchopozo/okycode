/**
 * 
 */
const binariespath = process.env.GATSBY_BINARIES
export const itemsLanguage = [
  { index:0, value: 'en', label: 'English', icon: `${binariespath}english.jpg`, path:"/en" },
  { index:1, value: 'es', label: 'Español', icon: `${binariespath}spanish.jpg`, path:"/"  }]

export const itemMenuEnglish = [
  { index:0, menu: 'Home', path: '/en', component: 'link'},
  { index:1, menu: 'What we do?', path: '/en/categories', component: 'link' },
  { index:2, menu: 'About Us', path: '/en/aboutus', component: 'link' },
  { index:3, menu: 'Language', path: '', component: 'language'},
  { index:4, menu: 'Blog', path: '/en/blog', component: 'link' },
  { index:5, menu: 'Contact Us', path: '/en/contactus', component: 'link' }
]

export const itemMenuSpanish = [
  { index:0, menu: 'Home', path: '/', component: 'link'},
  { index:1, menu: '¿Qué hacemos?', path: '/categories', component: 'link' },
  { index:2, menu: 'Acerca de nosotros', path: '/aboutus', component: 'link' },
  { index:3, menu: 'Lenguaje', path: '', component: 'language'},
  { index:4, menu: 'Blog', path: '/blog', component: 'link' },
  { index:5, menu: 'Contáctanos', path: '/contactus', component: 'link' }
]