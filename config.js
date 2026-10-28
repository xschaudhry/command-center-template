// White-label settings. Change these to rebrand the dashboard for a client.
window.CONFIG = {
  business: 'Riverside Auto',
  tagline: 'Command center',
  owner: 'Mike',
  colors: {
    accent: '#1F5FD1',   // buttons, links, highlights
    ink: '#10213A',      // main text
    paper: '#F2F4F6'     // page background
  },
  currency: 'USD',
  // Each quick action writes a line to the activity log. In a client build these call the agent's API.
  quickActions: [
    { id: 'chase', label: 'Follow up on quotes older than 3 days', log: 'Sent friendly follow-up texts about {staleCount} open quotes.' },
    { id: 'summary', label: "Text me today's summary", log: 'Summary sent: {quotes} quotes drafted, {booked} jobs booked.' },
    { id: 'reorder', label: 'List parts below reorder level', log: 'Low stock: brake pads (front, Civic) 2 left, 5W-30 synthetic 6 qt left.' }
  ]
};
