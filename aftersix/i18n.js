// English lives in the HTML; this file holds the German texts and the DE/EN switch.
// data-i18n → textContent, data-i18n-html → innerHTML, data-i18n-placeholder → placeholder.
const DE = {
  'title.home': 'After Six — Digital Marketing',
  'title.login': 'Anmelden — After Six',

  'nav.system': 'Das System',
  'nav.commitment': '90 Tage',
  'nav.apply': 'Anfragen',
  'nav.login': 'Anmelden',

  'hero.title': 'Wir bauen planbare Wachstumsmotoren für <span class="grad">Dienstleister &amp; Kliniken.</span>',
  'hero.subtitle': 'Ihre Marke arbeitet weiter – auch nach Feierabend. Wir entwickeln Ihre Systeme für Kundengewinnung, Conversion und Kundenbindung, damit Sie sich zu 100 % auf Ihre Kunden konzentrieren können.',
  'hero.cta': 'Growth Audit anfragen',
  'hero.secondary': 'Das System ansehen',

  'system.title': 'Das 3-Ebenen-Wachstumssystem',
  'system.lead': 'Keine Liste einzelner Leistungen, sondern ein integriertes System, in dem jede Ebene die nächste antreibt.',
  'layer1.kicker': 'Ebene 1',
  'layer1.title': 'Kundengewinnung',
  'layer1.a': 'Paid Ads auf Meta &amp; Google',
  'layer1.b': 'Retargeting',
  'layer1.c': 'Ein solides Traffic-Fundament',
  'layer2.kicker': 'Ebene 2',
  'layer2.title': 'Conversion',
  'layer2.a': 'Funnels für Erstgespräche',
  'layer2.b': 'Landingpages, die konvertieren',
  'layer2.c': 'Angebote, die überzeugen',
  'layer3.kicker': 'Ebene 3',
  'layer3.title': 'Kundenbindung',
  'layer3.a': 'Terminerinnerungen &amp; Follow-ups',
  'layer3.b': 'Bewertungsanfragen für Ihre Reputation',
  'layer3.c': 'Reaktivierung per E-Mail &amp; SMS',

  'commit.title': 'Das 90-Tage-Commitment',
  'commit.lead': 'Ein planbarer Motor für Traffic und Conversion entsteht nicht in wenigen Wochen. Deshalb beginnt jede Zusammenarbeit mit 90 Tagen: der Zeit, die es braucht, um Ihre Ergebnisse zu analysieren, zu optimieren und zu skalieren – mit klaren Zielen und Meilensteinen ab dem ersten Tag.',
  'step1.kicker': 'Tag 1–30',
  'step1.title': 'Analyse',
  'step1.text': 'Wir nehmen Funnel, Angebot, Werbekonten und Daten auseinander und finden heraus, wo Wachstum verloren geht.',
  'step2.kicker': 'Tag 31–60',
  'step2.title': 'Optimierung',
  'step2.text': 'Wir bauen um, was Sie bremst, und testen Angebote, Creatives und Seiten, bis die Zahlen stimmen.',
  'step3.kicker': 'Tag 61–90',
  'step3.title': 'Skalierung',
  'step3.text': 'Wir setzen das Budget dort ein, wo es wirkt, und machen daraus einen verlässlichen Wachstumsmotor.',

  'apply.title': '<span class="grad">Growth Audit</span> anfragen.',
  'apply.lead': 'Erzählen Sie uns, wo Ihr Unternehmen steht. Wenn es passt, melden wir uns mit einem Plan für Ihre nächsten 90 Tage.',
  'apply.limit': 'Wir nehmen pro Quartal nur wenige neue Kunden auf, damit wir jedes Projekt selbst umsetzen können.',
  'form.name': 'Name',
  'form.email': 'E-Mail',
  'form.business': 'Art des Unternehmens',
  'form.business.ph': 'z. B. Klinik, Physiotherapie, Ästhetik, Beratung',
  'form.channels': 'Wie finden neue Kunden Sie heute?',
  'form.ads': 'Schalten Sie aktuell Werbung?',
  'form.ads.choose': 'Bitte wählen',
  'form.ads.no': 'Nein',
  'form.ads.under': 'Ja, unter 1.000 € im Monat',
  'form.ads.over': 'Ja, über 1.000 € im Monat',
  'form.ads.unsure': 'Weiß nicht',
  'form.goal': 'Wichtigstes Ziel für die nächsten 90 Tage',
  'form.message': 'Möchten Sie uns noch etwas mitteilen? <span class="optional">(optional)</span>',
  'form.submit': 'Growth Audit anfragen',
  'form.wait': 'Bitte warten Sie, bis die Sicherheitsprüfung abgeschlossen ist, und versuchen Sie es erneut.',
  'form.sent': 'Anfrage erhalten. Wir prüfen sie und melden uns in Kürze.',
  'form.toomany': 'Zu viele Nachrichten von dieser Verbindung. Bitte versuchen Sie es später erneut.',
  'form.error': 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
  'form.offline': 'Verbindungsfehler. Bitte versuchen Sie es erneut.',

  'login.tag': 'Kundenportal',
  'login.title': 'Anmelden',
  'login.lead': 'Zugang zu Ihren Kampagnen, Berichten und Ergebnissen.',
  'login.email': 'E-Mail',
  'login.password': 'Passwort',
  'login.submit': 'Anmelden',
  'login.wrong': 'E-Mail oder Passwort ist falsch.',
  'login.back': '← Zurück zu After Six',
};

const EN = {};
const STORE = 'aftersix-lang';

function t(key, fallback) {
  return document.documentElement.lang === 'de' && DE[key] ? DE[key] : (EN[key] ?? fallback ?? key);
}

function setLang(lang) {
  document.documentElement.lang = lang;
  for (const el of document.querySelectorAll('[data-i18n]')) {
    el.textContent = lang === 'de' ? DE[el.dataset.i18n] ?? EN[el.dataset.i18n] : EN[el.dataset.i18n];
  }
  for (const el of document.querySelectorAll('[data-i18n-html]')) {
    el.innerHTML = lang === 'de' ? DE[el.dataset.i18nHtml] ?? EN[el.dataset.i18nHtml] : EN[el.dataset.i18nHtml];
  }
  for (const el of document.querySelectorAll('[data-i18n-placeholder]')) {
    el.placeholder = lang === 'de' ? DE[el.dataset.i18nPlaceholder] ?? EN[el.dataset.i18nPlaceholder] : EN[el.dataset.i18nPlaceholder];
  }
  const titleKey = document.body.dataset.title;
  if (titleKey) document.title = lang === 'de' ? DE[titleKey] : EN[titleKey];
  for (const b of document.querySelectorAll('.lang button')) {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  }
  try { localStorage.setItem(STORE, lang); } catch {}
}

// Remember the English texts from the HTML before switching anything
for (const el of document.querySelectorAll('[data-i18n]')) EN[el.dataset.i18n] = el.textContent;
for (const el of document.querySelectorAll('[data-i18n-html]')) EN[el.dataset.i18nHtml] = el.innerHTML;
for (const el of document.querySelectorAll('[data-i18n-placeholder]')) EN[el.dataset.i18nPlaceholder] = el.placeholder;
if (document.body.dataset.title) EN[document.body.dataset.title] = document.title;

for (const b of document.querySelectorAll('.lang button')) {
  b.addEventListener('click', () => setLang(b.dataset.lang));
}

let initial = 'en';
try { initial = localStorage.getItem(STORE) || ''; } catch {}
if (initial !== 'de' && initial !== 'en') {
  initial = (navigator.language || '').toLowerCase().startsWith('de') ? 'de' : 'en';
}
setLang(initial);
