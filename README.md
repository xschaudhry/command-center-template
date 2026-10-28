# command-center-template

A white-label dashboard where a shop owner runs their AI agents from one screen. They can approve quotes, clear follow-ups with one click, let the crew ask the shop handbook, and see what the agent remembers about each customer.

**[▶ Open the live demo](https://xschaudhry.github.io/command-center-template/)** · Example data only.

## What's on the screen

| Panel | What the owner does there |
|---|---|
| **Today** | Sees quotes drafted, quotes waiting for approval, leads followed up and jobs booked |
| **Approval queue** | Approves and sends each AI-drafted quote, or holds it to call the customer first |
| **Quick actions** | One click to chase quotes older than 3 days, text a daily summary or check low stock |
| **Ask the shop handbook** | Staff ask "what's our brake warranty?" and get the answer with the handbook section. Unknown questions go to the owner instead of a guess |
| **Customer memory** | Each customer's vehicle, history and preferences, plus a suggestion such as "mention the rotors she declined in March" |

## Rebrand it for a client

Everything client-specific lives in two files:

```
config.js   business name, owner, brand colors, quick actions
data.js     example tiles, approval queue, handbook entries, customers
```

Change the name and colors in `config.js` and the whole dashboard follows. There's no build step: open `index.html` in a browser.

```js
window.CONFIG = {
  business: 'Northside Plumbing',
  owner: 'Sam',
  colors: { accent: '#0E7C66', ink: '#10213A', paper: '#F3F6F5' },
  ...
};
```

## In a client build

The demo is fully offline so anyone can try it. In a real build:

- `data.js` is replaced by live data from the shop's CRM, calendar and the quoting and follow-up agents.
- `src/handbook.js` keyword matching is replaced by retrieval over the shop's real SOPs, keeping the rule that it says "not in the handbook" instead of guessing.
- Quick actions call the agents, and every customer-facing message still needs the owner's approval until the shop decides otherwise.

```bash
npm test   # handbook matching tests, Node 18+
```

Related: [quote-agent-demo](https://github.com/xschaudhry/quote-agent-demo) · [calibration-kit](https://github.com/xschaudhry/calibration-kit)

---

Built by [Chaudhry Usman](https://www.linkedin.com/in/chaudhryusmantrx/) · TRXmode. Contact: usman@trxmode.com
