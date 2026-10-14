// Jump page configuration.
//
// icons: every icon the picker offers. To add one, drop an image (.svg, .png,
// .webp, ...) into the icons/ folder and add a line here. The id is what cards
// refer to, so don't rename an id once cards use it.
//
// cards: the shortcuts a first-time visitor sees. Changes made with the pencil
// button are saved in that visitor's browser and take precedence over these.
window.JUMP_CONFIG = {
  icons: [
    { id: 'dr',          label: 'DR',               file: 'icons/dricon.png' },
    { id: 'politiken',   label: 'Politiken',        file: 'icons/policon.png' },
    { id: 'guardian',    label: 'The Guardian',     file: 'icons/guardicon.png' },
    { id: 'information', label: 'Information',      file: 'icons/informationicon.png' },
    { id: 'abc',         label: 'ABC',              file: 'icons/abcicon.png' },
    { id: 'videnskab',   label: 'Videnskab',        file: 'icons/videnskab.png' },
    { id: 'youtube',     label: 'YouTube',          file: 'icons/youtubeicon.png' },
    { id: 'x',           label: 'X',                file: 'icons/xicon.png' },
    { id: 'facebook',    label: 'Facebook',         file: 'icons/facebook.png' },
    { id: 'maps',        label: 'Google Maps',      file: 'icons/maps2icon.png' },
    { id: 'translate',   label: 'Google Translate', file: 'icons/translateicon.png' },
    { id: 'google',      label: 'Google',           file: 'icons/googleicon.png' },
    { id: 'usgs',        label: 'USGS',             file: 'icons/usgsicon.png' },
    { id: 'noaa',        label: 'NOAA',             file: 'icons/noaaicon.png' },
    { id: 'dmi',         label: 'DMI',              file: 'icons/dmi2icon.png' },
    { id: 'bibelen',     label: 'Bibelen',          file: 'icons/bibelsel.png' },
    { id: 'kalender',    label: 'Google Calendar',  file: 'icons/kalender.png' },

    { id: 'link',     label: 'Link',     file: 'icons/link.svg' },
    { id: 'globe',    label: 'Web',      file: 'icons/globe.svg' },
    { id: 'mail',     label: 'Mail',     file: 'icons/mail.svg' },
    { id: 'chat',     label: 'Chat',     file: 'icons/chat.svg' },
    { id: 'calendar', label: 'Calendar', file: 'icons/calendar.svg' },
    { id: 'board',    label: 'Tasks',    file: 'icons/board.svg' },
    { id: 'code',     label: 'Code',     file: 'icons/code.svg' },
    { id: 'doc',      label: 'Document', file: 'icons/doc.svg' },
    { id: 'folder',   label: 'Folder',   file: 'icons/folder.svg' },
    { id: 'chart',    label: 'Chart',    file: 'icons/chart.svg' },
    { id: 'building', label: 'Company',  file: 'icons/building.svg' },
    { id: 'search',   label: 'Search',   file: 'icons/search.svg' },
    { id: 'sparkle',  label: 'AI',       file: 'icons/sparkle.svg' },
    { id: 'star',     label: 'Favorite', file: 'icons/star.svg' }
  ],

  cards: [
    { id: 'c1', title: 'DR', url: 'https://www.dr.dk/nyheder', icon: 'dr' },
    { id: 'c2', title: 'Politiken', url: 'https://pol.dk', icon: 'politiken' },
    { id: 'c3', title: 'The Guardian', url: 'https://www.theguardian.com/international', icon: 'guardian' },
    { id: 'c4', title: 'Information', url: 'https://www.information.dk/', icon: 'information' },
    { id: 'c5', title: 'ABC', url: 'https://abcnews.go.com/', icon: 'abc' },
    { id: 'c6', title: 'Videnskab', url: 'https://videnskab.dk/seneste-nyt/', icon: 'videnskab' },
    { id: 'c7', title: 'Youtube', url: 'https://www.youtube.com/feed/subscriptions', icon: 'youtube' },
    { id: 'c8', title: 'Twitter', url: 'https://x.com/home', icon: 'x' },
    { id: 'c9', title: 'facebook', url: 'https://www.facebook.com/', icon: 'facebook' },
    { id: 'c10', title: 'Maps', url: 'https://www.google.com/maps/@55.713972,12.3637916,12.25z?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D', icon: 'maps' },
    { id: 'c11', title: 'Translate', url: 'https://translate.google.com/?sl=da&tl=en&op=translate', icon: 'translate' },
    { id: 'c12', title: 'Google', url: 'https://google.com', icon: 'google' },
    { id: 'c13', title: 'Jordskælv', url: 'https://earthquake.usgs.gov/earthquakes/map/?extent=-86.73823,-192.30469&extent=86.73823,222.53906&range=month&magnitude=significant&listOnlyShown=true&baseLayer=terrain&timeZone=utc&settings=true', icon: 'usgs' },
    { id: 'c14', title: 'Nordlys', url: 'https://www.swpc.noaa.gov/', icon: 'noaa' },
    { id: 'c15', title: 'DMI', url: 'https://www.dmi.dk/lokation/show/DK/2624906/Albertslund/', icon: 'dmi' },
    { id: 'c16', title: 'Bibelen', url: 'https://www.bibelselskabet.dk/brugbibelen/bibelenonline/Joh/1', icon: 'bibelen' },
    { id: 'c17', title: 'Kalender', url: 'https://calendar.google.com/calendar/u/0/r', icon: 'kalender' }
  ]
};
