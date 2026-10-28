// Example data for the demo. In a client build this comes from the shop's CRM, calendar and the agents.
window.DATA = {
  today: { quotes: 14, leadsFollowedUp: 9, booked: 5 },

  approvals: [
    { id: 'RA-1047', customer: 'Dana Ruiz', vehicle: '2018 Honda Civic', job: 'Front pads and rotors', total: 471.90 },
    { id: 'RA-1048', customer: 'Tom Becker', vehicle: '2015 Ford F-150', job: 'Rear brakes', total: 604.00 },
    { id: 'RA-1049', customer: 'Priya Patel', vehicle: '2019 Honda CR-V', job: 'Oil change and rotation', total: 131.00 }
  ],

  staleQuotes: 4,

  handbook: [
    { q: "What's our warranty on brake jobs?", keywords: ['warranty', 'brake', 'guarantee', 'pads', 'rotors'],
      a: 'Brake pads and rotors are covered for 12 months or 12,000 miles, parts and labor, whichever comes first.', src: '§4.2 Warranties' },
    { q: 'Can I give a repeat customer a discount?', keywords: ['discount', 'repeat', 'loyal', 'price', 'cheaper'],
      a: "Service advisors can take up to 10% off labor for customers with 3 or more visits. Anything bigger needs the owner's OK.", src: '§2.5 Discounts' },
    { q: "When do we need the customer's sign-off?", keywords: ['sign', 'approval', 'authorize', 'authorization', 'permission', 'okay'],
      a: "Before any work over $250, or any work that wasn't on the original estimate. A text reply counts as approval.", src: '§3.1 Authorizations' },
    { q: 'What do we do if a customer brings their own parts?', keywords: ['own parts', 'customer parts', 'bring', 'supplied'],
      a: "We install customer-supplied parts at our normal labor rate, with no warranty on the part. Write 'customer part' on the work order.", src: '§3.4 Customer parts' },
    { q: 'How do we handle a comeback?', keywords: ['comeback', 'came back', 'redo', 'again', 'complaint'],
      a: 'Inspect free of charge within 30 days. If it is our workmanship, fix it at no cost and tell the owner the same day.', src: '§5.1 Comebacks' }
  ],

  customers: [
    { name: 'Priya Patel', phone: '(315) 555-0142', vehicle: '2019 Honda CR-V',
      history: ['Mar 12: oil change, declined front rotors ($284)', 'Nov 3: new tires'],
      prefs: 'Prefers texts after 5pm', suggestion: 'Mention the front rotors when she books her next oil change.' },
    { name: 'Tom Becker', phone: '(315) 555-0177', vehicle: '2015 Ford F-150',
      history: ['Today: rear brakes quoted', 'Jan 20: spark plugs'],
      prefs: 'Calls only, mornings', suggestion: 'Truck is at 112k miles. Offer a coolant flush with the brake job.' },
    { name: 'Dana Ruiz', phone: '(315) 555-0109', vehicle: '2018 Honda Civic',
      history: ['Today: front pads and rotors quoted', 'First visit'],
      prefs: 'Booked online', suggestion: 'New customer. Send the welcome text with the 12-month brake warranty.' }
  ]
};
