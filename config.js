// White-label settings. Change these to rebrand the dashboard for a client.
window.CONFIG = {
  business: 'Riverside Auto',
  tagline: 'Command center',
  owner: 'Mike',
  // Default: the TRXmode dark theme. Any color left out keeps the default.
  // Light example: { accent: '#0E7C66', accentInk: '#FFFFFF', ink: '#10213A', muted: '#55667E', paper: '#F3F6F5', panel: '#FFFFFF', panel2: '#F7F9F8', line: '#D5DCE5' }
  colors: {
    accent: '#C7F24E',    // buttons, labels, highlights
    accentInk: '#17200B', // text on accent buttons
    ink: '#EEF2F4',       // main text
    muted: '#9CAEBB',     // secondary text
    paper: '#080D14',     // page background
    panel: '#101923',     // cards
    panel2: '#16212D',    // tiles and list rows
    line: '#25313D'       // borders
  },
  currency: 'USD',
  // Each quick action writes a line to the activity log. In a client build these call the agent's API.
  quickActions: [
    { id: 'chase', label: 'Follow up on quotes older than 3 days', log: 'Sent friendly follow-up texts about {staleCount} open quotes.' },
    { id: 'summary', label: "Text me today's summary", log: 'Summary sent: {quotes} quotes drafted, {booked} jobs booked.' },
    { id: 'reorder', label: 'List parts below reorder level', log: 'Low stock: brake pads (front, Civic) 2 left, 5W-30 synthetic 6 qt left.' }
  ]
};
