// Finds the handbook entry that best answers a staff question.
// Keyword scoring keeps the demo offline; in a client build this step is a retrieval call over the shop's real SOPs.
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.Handbook = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  const normalize = s => s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');

  function score(question, entry) {
    const q = ' ' + normalize(question) + ' ';
    return entry.keywords.reduce((n, k) => n + (q.includes(' ' + normalize(k).trim()) ? 1 : 0), 0);
  }

  // Returns the best entry, or null when nothing matches well enough to answer.
  function findAnswer(question, entries, minScore = 1) {
    let best = null, bestScore = 0;
    for (const e of entries) {
      const s = score(question, e);
      if (s > bestScore) { best = e; bestScore = s; }
    }
    return bestScore >= minScore ? best : null;
  }

  return { findAnswer, score };
});
