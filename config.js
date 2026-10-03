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
    { id: 'c1', title: 'Azure DevOps', url: 'https://dev.azure.com/idqtfs', icon: 'board' },
    { id: 'c2', title: 'Outlook',      url: 'https://outlook.office.com',  icon: 'mail' },
    { id: 'c3', title: 'Teams',        url: 'https://teams.microsoft.com', icon: 'chat' },
    { id: 'c4', title: 'GitHub',       url: 'https://github.com/BiQ',      icon: 'code' },
    { id: 'c5', title: 'CVR',          url: 'https://datacvr.virk.dk',     icon: 'building' },
    { id: 'c6', title: 'Claude',       url: 'https://claude.ai',           icon: 'sparkle' }
  ]
};
