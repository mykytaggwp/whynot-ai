(() => {
  'use strict';
  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------- i18n ---------- */
  const I18N = {
    uk: {
      'nav.how': 'Як це працює', 'nav.features': 'Можливості', 'nav.pricing': 'Тарифи', 'nav.faq': 'FAQ', 'nav.cta': 'Заявка',
      'hero.badge': 'ШІ-автоматизація для малого бізнесу',
      'hero.title': 'Команда ШІ-агентів <em>для вашого бізнесу</em>',
      'hero.sub': 'Підбираємо і збираємо систему ШІ-агентів під ваш бізнес. Флагман — ШІ-адміністратор: відповідає клієнтам 24/7, записує на послугу і передає заявку вам.',
      'hero.cta': 'Залишити заявку', 'hero.cta2': 'Побачити в дії',
      'nav.agents': 'Агенти',
      'stat.1': '24/7', 'stat.1p': 'Відповідь кожному зверненню, навіть уночі',
      'stat.2': '<5 сек', 'stat.2p': 'на першу відповідь',
      'stat.3': 'до 3 каналів', 'stat.3p': 'у тарифі «Бізнес»',
      'ag.eyebrow': 'Каталог', 'ag.title': 'Каталог ШІ-агентів', 'ag.sub': 'Ми підбираємо агентів під ваш бізнес. Почніть з одного, додавайте інших.',
      'ag.flag': 'Флагман', 'ag.for': 'Для:', 'ag.0cta': 'Дивитись тарифи',
      'ag.0t': 'ШІ-адміністратор', 'ag.0': 'Відповідає клієнтам 24/7, називає орієнтовну вилку цін, записує на послугу і передає заявку вам.', 'ag.0f': 'салони, автосервіси, клініки, студії.',
      'ag.1t': 'Агент заявок', 'ag.1': 'Приймає звернення з месенджерів і сайту, складає їх у Google Таблицю та Telegram.', 'ag.1f': 'будь-якого бізнесу з потоком звернень.',
      'ag.2t': 'Агент повернення клієнтів', 'ag.2': 'Нагадує про повторний візит і повертає тих, хто давно не приходив.', 'ag.2f': 'автосервіси, салони, барбершопи, стоматології.',
      'ag.3t': 'Агент-аналітик', 'ag.3': 'Збирає дані із заявок і таблиць та готує тижневий звіт: звідки клієнти, що запитують, де втрачаємо.', 'ag.3f': 'магазини, студії, сервіси.',
      'ag.4t': 'Агент збору даних', 'ag.4': 'Знаходить і впорядковує публічну інформацію: конкуренти, ціни, майданчики.', 'ag.4f': 'маркетинг, магазини, агентства.',
      'ag.5t': 'Агент публікацій', 'ag.5': 'Допомагає підібрати майданчики та групи і розмістити оголошення.', 'ag.5f': 'малий бізнес, якому потрібні клієнти із соцмереж.',
      'ag.6t': 'Потрібен інший агент? Зберемо під ваш запит', 'ag.6cta': 'Написати нам',
      'price.for': 'Тарифи для ШІ-адміністратора',
      'nav.skip': 'Перейти до змісту', 'hero.works': 'Працює в',
      'hc.1': 'Добрий вечір! Скільки коштує манікюр?', 'hc.2': 'Вітаю! Орієнтовно 600–800 грн. Є вільний час завтра.',
      'hc.3': '14:30 підійде', 'hc.4t': 'Запис підтверджено', 'hc.4': 'Завтра, 14:30 · Манікюр',
      'toast.now': 'щойно', 'toast.row': 'додано в таблицю',
      'float.1': 'Запис на завтра, 14:30', 'float.2': 'Нова заявка в Telegram',
      'problem.eyebrow': 'Проблема',
      'problem.title': 'Кожне пропущене повідомлення — це втрачений клієнт',
      'problem.hot': 2, 'problem.l1': '22:40', 'problem.l2': 'Сб', 'problem.l3': '№1',
      'problem.s1': 'Клієнт питає ціну ввечері. Відповіді немає, він іде до конкурента.',
      'problem.s2': 'У вихідні ніхто не бере слухавку. Запис лишається в іншому місці.',
      'problem.s3': 'Хто відповів першим, той отримує запис.',
      'how.eyebrow': 'Запуск', 'feat.eyebrow': 'Можливості', 'demo.eyebrow': 'Демо', 'price.eyebrow': 'Тарифи', 'faq.eyebrow': 'FAQ',
      'viz.q': 'Ви ще працюєте? Скільки коштує стрижка?', 'viz.a': 'Так, я на зв\'язку. Підкажу орієнтовну ціну і запишу вас.',
      'viz.tone': 'Ваш тон', 'viz.rem': 'Час оновити манікюр', 'viz.rem2': 'Минуло 3 тижні · надіслано клієнту',
      'foot.tm': 'Назви та логотипи Telegram, Instagram, WhatsApp, Viber і Google Sheets належать їхнім власникам.',
      'how.title': 'Як це працює',
      'how.sub': 'Чотири прості кроки. Без складних інтеграцій і навчання персоналу.',
      'how.s1t': 'Знайомимось з бізнесом', 'how.s1': 'Збираємо послуги, ціни, графік і правила спілкування.',
      'how.s2t': 'Підбираємо і налаштовуємо агентів', 'how.s2': 'Вони вивчають ваші дані й говорять у вашому тоні.',
      'how.s3t': 'Агенти працюють з клієнтами', 'how.s3': 'Відповідають, підказують ціни, записують.',
      'how.s4t': 'Ви отримуєте заявки', 'how.s4': 'Миттєво у Telegram і таблицю, нагадування повертають клієнтів.',
      'feat.title': 'Усе, що робить хороший адміністратор',
      'feat.1t': 'Відповіді 24/7', 'feat.1': 'Миттєво реагує у будь-який час, навіть коли ви зайняті або відпочиваєте.',
      'feat.2t': 'Запис на послугу', 'feat.2': 'Уточнює деталі, пропонує час і фіксує запис без вашої участі.',
      'feat.3t': 'Ваш стиль спілкування', 'feat.3': 'Розмовляє українською та англійською, у тоні вашого бренду.',
      'feat.4t': 'Нагадування клієнтам', 'feat.4': 'Нагадує про повторний візит і повертає клієнтів, які про вас забули.',
      'feat.5t': 'Орієнтовні ціни', 'feat.5': 'Називає вилку цін за вашим прайсом. Остаточну суму узгоджуєте ви.',
      'feat.6t': 'Заявки власнику', 'feat.6': 'Кожне звернення потрапляє вам у Telegram та Google Таблицю.',
      'aud.title': 'Підходить будь-якому бізнесу, де клієнти пишуть',
      'aud.crew': 'Команда ШІ-агентів, яка не втомлюється',
      'demo.title': 'Подивіться, як це працює',
      'price.title': 'Прозорі тарифи', 'price.sub': 'Остаточна вартість залежить від задач, ми одразу все озвучимо.',
      'price.from': 'від', 'price.mo': ' / міс', 'price.custom': 'Індивідуально', 'price.hot': 'Популярний', 'price.cta': 'Обрати',
      'price.p1': 'Старт', 'price.p1a': 'Один канал (Telegram або сайт)', 'price.p1b': 'Відповіді на питання', 'price.p1c': 'Заявки в таблицю',
      'price.p2': 'Бізнес', 'price.p2a': 'До 3 каналів', 'price.p2b': 'Запис на послуги', 'price.p2c': 'Нагадування клієнтам', 'price.p2d': 'Заявки в Telegram',
      'price.p3': 'Система агентів під ваш бізнес', 'price.p3a': 'Кастомні сценарії', 'price.p3b': 'Інтеграція з вашими системами', 'price.p3c': 'Підтримка та розвиток',
      'faq.title': 'Часті запитання',
      'faq.q1': 'Агент замінить моїх співробітників?', 'faq.a1': 'Ні. Він бере на себе рутину: відповіді на типові питання та запис. Складні випадки передає вам.',
      'faq.q2': 'Скільки часу займає запуск?', 'faq.a2': 'Зазвичай кілька днів: залежить від кількості послуг і каналів.',
      'faq.q3': 'Чи правильно агент називає ціни?', 'faq.a3': 'Він називає орієнтовну вилку за вашим прайсом і ніколи не обіцяє остаточну суму.',
      'faq.q4': 'У яких месенджерах це працює?', 'faq.a4': 'Telegram і сайт підключаємо одразу. Viber та Instagram потребують окремого підключення.',
      'faq.q5': 'Що з даними моїх клієнтів?', 'faq.a5': 'Заявки надходять вам. Деталі обробки даних уточнюємо під ваш бізнес — напишіть нам.',
      'form.title': 'Обговоримо ваш бізнес?', 'form.sub': 'Залиште контакт, і ми підкажемо, які ШІ-агенти допоможуть саме вам.',
      'form.name': "Ім'я", 'form.contact': 'Контакт', 'form.contact_ph': 'Telegram, телефон або email',
      'form.biz': 'Сфера бізнесу', 'form.biz_ph': 'Оберіть сферу', 'form.msg': 'Повідомлення (необов\'язково)',
      'form.send': 'Залишити заявку', 'form.ok': 'Дякуємо! Ми скоро зв\'яжемося з вами.', 'form.err': 'Заповніть обов\'язкові поля.',
      'biz.beauty': 'Салон краси / б\'юті', 'biz.auto': 'Автосервіс', 'biz.med': 'Клініка / медицина', 'biz.shop': 'Магазин / сервіс', 'biz.edu': 'Освіта / курси', 'biz.other': 'Інше',
      'foot.text': 'ШІ-автоматизація для малого бізнесу.',
      'meta.title': 'whynot.ai — каталог ШІ-агентів для бізнесу', 'meta.desc': 'whynot.ai підбирає і збирає систему ШІ-агентів під ваш бізнес. Флагман — ШІ-адміністратор: відповідає клієнтам 24/7, записує на послуги, передає заявки.',
      'chips': ['Салони краси', 'Автосервіси', 'Стоматології', 'Барбершопи', 'Фітнес-студії', 'Клініки', 'Школи та курси', 'Юристи', 'Інтернет-магазини', 'Ремонт техніки', 'Турагентства', 'Фотостудії']
    },
    en: {
      'nav.how': 'How it works', 'nav.features': 'Features', 'nav.pricing': 'Pricing', 'nav.faq': 'FAQ', 'nav.cta': 'Get started',
      'hero.badge': 'AI automation for small business',
      'hero.title': 'A team of AI agents <em>for your business</em>',
      'hero.sub': 'We pick and build a system of AI agents for your business. The flagship is the AI receptionist: it answers customers 24/7, books appointments and sends the lead to you.',
      'hero.cta': 'Request a demo', 'hero.cta2': 'See it in action',
      'nav.agents': 'Agents',
      'stat.1': '24/7', 'stat.1p': 'A reply to every inquiry, even at night',
      'stat.2': '<5 sec', 'stat.2p': 'to the first reply',
      'stat.3': 'up to 3 channels', 'stat.3p': 'in the Business plan',
      'ag.eyebrow': 'Catalog', 'ag.title': 'AI agent catalog', 'ag.sub': 'We pick agents for your business. Start with one, add others later.',
      'ag.flag': 'Flagship', 'ag.for': 'For:', 'ag.0cta': 'See pricing',
      'ag.0t': 'AI receptionist', 'ag.0': 'Answers customers 24/7, quotes an approximate price range, books the appointment and sends the lead to you.', 'ag.0f': 'salons, auto services, clinics, studios.',
      'ag.1t': 'Leads agent', 'ag.1': 'Takes inquiries from messengers and your site and puts them into a Google Sheet and Telegram.', 'ag.1f': 'any business with a flow of inquiries.',
      'ag.2t': 'Win-back agent', 'ag.2': 'Reminds customers about a repeat visit and brings back those who have not come in a while.', 'ag.2f': 'auto services, salons, barbershops, dental clinics.',
      'ag.3t': 'Analyst agent', 'ag.3': 'Collects data from leads and sheets and prepares a weekly report: where customers come from, what they ask, where we lose them.', 'ag.3f': 'shops, studios, services.',
      'ag.4t': 'Data collection agent', 'ag.4': 'Finds and organizes public information: competitors, prices, platforms.', 'ag.4f': 'marketing, shops, agencies.',
      'ag.5t': 'Publishing agent', 'ag.5': 'Helps pick platforms and groups and post your listings.', 'ag.5f': 'small businesses that need customers from social media.',
      'ag.6t': 'Need another agent? We will build it for your request', 'ag.6cta': 'Contact us',
      'price.for': 'Pricing for the AI receptionist',
      'nav.skip': 'Skip to content', 'hero.works': 'Works in',
      'hc.1': 'Good evening! How much is a manicure?', 'hc.2': 'Hi! Roughly 600–800 UAH. There is a free slot tomorrow.',
      'hc.3': '14:30 works', 'hc.4t': 'Booking confirmed', 'hc.4': 'Tomorrow, 14:30 · Manicure',
      'toast.now': 'just now', 'toast.row': 'added to the sheet',
      'float.1': 'Booked for tomorrow, 14:30', 'float.2': 'New lead in Telegram',
      'problem.eyebrow': 'The problem',
      'problem.title': 'Every missed message is a lost customer',
      'problem.hot': 2, 'problem.l1': '10:40 pm', 'problem.l2': 'Sat', 'problem.l3': '1st',
      'problem.s1': 'A customer asks the price in the evening. No reply, so they go to a competitor.',
      'problem.s2': 'Nobody picks up on weekends. The booking goes somewhere else.',
      'problem.s3': 'Whoever replies first gets the booking.',
      'how.eyebrow': 'Launch', 'feat.eyebrow': 'Features', 'demo.eyebrow': 'Demo', 'price.eyebrow': 'Pricing', 'faq.eyebrow': 'FAQ',
      'viz.q': 'Are you still open? How much is a haircut?', 'viz.a': 'Yes, I am here. I will give an approximate price and book you.',
      'viz.tone': 'Your tone', 'viz.rem': 'Time to refresh your nails', 'viz.rem2': '3 weeks passed · sent to the customer',
      'foot.tm': 'Telegram, Instagram, WhatsApp, Viber and Google Sheets names and logos are trademarks of their owners.',
      'how.title': 'How it works',
      'how.sub': 'Four simple steps. No complex integrations or staff training.',
      'how.s1t': 'We learn your business', 'how.s1': 'We collect services, prices, schedule and communication rules.',
      'how.s2t': 'We pick and set up the agents', 'how.s2': 'They learn your data and speak in your tone.',
      'how.s3t': 'The agents work with customers', 'how.s3': 'They answer, suggest prices and book appointments.',
      'how.s4t': 'You receive the leads', 'how.s4': 'Instantly in Telegram and your sheet; reminders bring customers back.',
      'feat.title': 'Everything a great receptionist does',
      'feat.1t': '24/7 replies', 'feat.1': 'Responds instantly at any time, even when you are busy or off.',
      'feat.2t': 'Appointment booking', 'feat.2': 'Clarifies details, offers a time and records the booking on its own.',
      'feat.3t': 'Your tone of voice', 'feat.3': 'Speaks Ukrainian and English in your brand style.',
      'feat.4t': 'Customer reminders', 'feat.4': 'Reminds about the next visit and wins back customers who forgot you.',
      'feat.5t': 'Approximate prices', 'feat.5': 'Quotes a price range from your price list. You agree on the final amount.',
      'feat.6t': 'Leads to the owner', 'feat.6': 'Every inquiry arrives in your Telegram and Google Sheet.',
      'aud.title': 'Fits any business where customers write',
      'aud.crew': 'A team of AI agents that never gets tired',
      'demo.title': 'See how it works',
      'price.title': 'Simple pricing', 'price.sub': 'Final cost depends on your needs, and we tell you upfront.',
      'price.from': 'from', 'price.mo': ' / mo', 'price.custom': 'Custom', 'price.hot': 'Popular', 'price.cta': 'Choose',
      'price.p1': 'Start', 'price.p1a': 'One channel (Telegram or site)', 'price.p1b': 'Answers to questions', 'price.p1c': 'Leads to a spreadsheet',
      'price.p2': 'Business', 'price.p2a': 'Up to 3 channels', 'price.p2b': 'Appointment booking', 'price.p2c': 'Customer reminders', 'price.p2d': 'Leads to Telegram',
      'price.p3': 'An agent system for your business', 'price.p3a': 'Custom scenarios', 'price.p3b': 'Integration with your systems', 'price.p3c': 'Support and growth',
      'faq.title': 'Frequently asked questions',
      'faq.q1': 'Will an agent replace my staff?', 'faq.a1': 'No. It handles routine: common questions and booking. Complex cases go to you.',
      'faq.q2': 'How long does launch take?', 'faq.a2': 'Usually a few days, depending on the number of services and channels.',
      'faq.q3': 'Does the agent quote prices correctly?', 'faq.a3': 'It gives an approximate range from your price list and never promises a final amount.',
      'faq.q4': 'Which messengers does it support?', 'faq.a4': 'Telegram and your website right away. Viber and Instagram need separate setup.',
      'faq.q5': 'What about my customers\' data?', 'faq.a5': 'Leads come to you. We settle the details of data handling for your business: write to us.',
      'form.title': "Let's talk about your business", 'form.sub': 'Leave a contact and we will show which AI agents can help you.',
      'form.name': 'Name', 'form.contact': 'Contact', 'form.contact_ph': 'Telegram, phone or email',
      'form.biz': 'Business type', 'form.biz_ph': 'Choose a type', 'form.msg': 'Message (optional)',
      'form.send': 'Request a demo', 'form.ok': 'Thank you! We will contact you soon.', 'form.err': 'Please fill in the required fields.',
      'biz.beauty': 'Beauty salon', 'biz.auto': 'Auto service', 'biz.med': 'Clinic / medical', 'biz.shop': 'Shop / service', 'biz.edu': 'Education / courses', 'biz.other': 'Other',
      'foot.text': 'AI automation for small business.',
      'meta.title': 'whynot.ai — AI agent catalog for business', 'meta.desc': 'whynot.ai picks and builds a system of AI agents for your business. The flagship is the AI receptionist: answers customers 24/7, books appointments, sends leads.',
      'chips': ['Beauty salons', 'Auto services', 'Dental clinics', 'Barbershops', 'Fitness studios', 'Clinics', 'Schools & courses', 'Law firms', 'Online stores', 'Repair shops', 'Travel agencies', 'Photo studios'],
    }
  };

  let lang = 'uk';
  try {
    const saved = localStorage.getItem('lang');
    if (saved && I18N[saved]) lang = saved;
    else if ((navigator.language || '').toLowerCase().startsWith('en')) lang = 'en';
  } catch (e) {}

  const t = (k) => I18N[lang][k];

  function applyLang(next) {
    lang = next;
    try { localStorage.setItem('lang', lang); } catch (e) {}
    root.lang = lang;
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    $$('.lang button').forEach(b => b.classList.toggle('is-active', b.dataset.lang === lang));
    document.title = t('meta.title');
    const setMeta = (sel, v) => { const m = $(sel); if (m) m.setAttribute('content', v); };
    setMeta('meta[name="description"]', t('meta.desc'));
    setMeta('meta[property="og:title"]', t('meta.title'));
    setMeta('meta[property="og:description"]', t('meta.desc'));
    setMeta('meta[property="og:locale"]', lang === 'uk' ? 'uk_UA' : 'en_US');
    renderChips();
    renderStatement();
    if (window.WNDemo) WNDemo.setLang(lang);
    restartHeroChat();
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }

  /* ---------- chips ---------- */
  function renderChips() {
    const track = $('#track');
    const items = t('chips');
    const html = items.map(c => `<span class="chip">${c}</span>`).join('');
    track.innerHTML = html + html;
    if (marqueeTween) marqueeTween.invalidate().restart();
  }

  /* ---------- statement: words light up as you scroll (the one type moment) ---------- */
  let stTrigger = null;
  function renderStatement() {
    const el = $('#statement');
    const words = t('problem.title').split(' ');
    const hot = t('problem.hot');
    el.innerHTML = words.map((w, i) => `<span class="w${i >= words.length - hot ? ' hot' : ''}">${w}</span>`).join(' ');
    if (stTrigger) { stTrigger.kill(); stTrigger = null; }
    const spans = $$('.w', el);
    if (reduce || !window.ScrollTrigger) { spans.forEach(s => s.classList.add('on')); return; }
    stTrigger = ScrollTrigger.create({
      trigger: el, start: 'top 85%', end: 'bottom 45%', scrub: true,
      onUpdate: self => {
        const n = Math.round(self.progress * spans.length);
        spans.forEach((s, i) => s.classList.toggle('on', i < n));
      }
    });
  }

  /* ---------- hero chat: plays once on load, loops calmly ---------- */
  let heroChatTl = null;
  function restartHeroChat() {
    const items = $$('#hero-chat > *');
    if (heroChatTl) { heroChatTl.kill(); heroChatTl = null; }
    gsap_clear(items);
    if (reduce || !window.gsap) return;
    heroChatTl = gsap.timeline({ repeat: -1, repeatDelay: 4.5, delay: 1.2 });
    heroChatTl.set(items, { autoAlpha: 0, y: 14 });
    items.forEach((it, i) => heroChatTl.to(it, { autoAlpha: 1, y: 0, duration: .45, ease: 'back.out(1.5)' }, i === 0 ? 0 : '+=0.9'));
    heroChatTl.to(items, { autoAlpha: 0, duration: .5 }, '+=4.5');
  }
  function gsap_clear(items) { if (window.gsap) gsap.set(items, { clearProps: 'opacity,visibility,transform' }); }

  let reduce = false;

  /* ---------- FAQ ---------- */
  function initFaq() {
    $$('.qa').forEach(qa => {
      const btn = $('button', qa), panel = $('.a', qa);
      btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') === 'true';
        $$('.qa').forEach(o => {
          if (o !== qa && $('button', o).getAttribute('aria-expanded') === 'true') toggle(o, false);
        });
        toggle(qa, !open);
      });
    });
    function toggle(qa, open) {
      const btn = $('button', qa), panel = $('.a', qa);
      btn.setAttribute('aria-expanded', String(open));
      if (window.gsap && !reduce) gsap.to(panel, { height: open ? 'auto' : 0, duration: .4, ease: 'power2.out', onComplete: () => window.ScrollTrigger && ScrollTrigger.refresh() });
      else panel.style.height = open ? 'auto' : '0';
    }
  }

  /* ---------- form (design only: no sending yet) ---------- */
  function initForm() {
    const form = $('#lead-form'), status = $('#form-status');
    form.addEventListener('submit', e => {
      e.preventDefault();
      status.className = 'form-status';
      if (form.website.value) return; // honeypot
      let ok = true;
      ['name', 'contact', 'biz'].forEach(n => {
        const f = form[n];
        const bad = !f.value.trim();
        f.classList.toggle('invalid', bad);
        if (bad) ok = false;
      });
      if (!ok) { status.textContent = t('form.err'); status.classList.add('err'); return; }
      // TODO: send to backend (Google Apps Script) when connected
      status.textContent = t('form.ok'); status.classList.add('ok');
      form.reset();
    });
  }

  /* ---------- GSAP ---------- */
  let marqueeTween = null;

  function initMotion() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: 'power3.out' });
    const mm = gsap.matchMedia();

    mm.add({
      motion: '(prefers-reduced-motion: no-preference)',
      reduced: '(prefers-reduced-motion: reduce)',
      desktop: '(min-width: 1024px)'
    }, ctx => {
      const { motion, desktop } = ctx.conditions;
      reduce = !motion;

      if (!motion) {
        gsap.set('[data-anim]', { clearProps: 'opacity,visibility,transform' });
        $$('.step').forEach(s => s.classList.add('is-on'));
        $('.steps-fill').style.transform = 'scaleY(1)';
        return;
      }

      // hero intro
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .fromTo('[data-anim="hero"]', { y: 36, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .9, stagger: .1 })
        .fromTo('[data-anim="stage"]', { y: 50, autoAlpha: 0, scale: .96 }, { y: 0, autoAlpha: 1, scale: 1, duration: 1.1, ease: 'power4.out' }, .2)
        .from('.scroll-hint', { autoAlpha: 0, duration: .6 }, '-=.3');

      // scroll progress bar
      gsap.to('#progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: .2 } });

      // toast notifications: gentle idle float + pointer depth on desktop
      const toasts = $$('.toast');
      toasts.forEach((f, i) => {
        gsap.from(f, { y: 30, autoAlpha: 0, scale: .92, duration: .9, delay: 1.6 + i * .3, ease: 'back.out(1.5)',
          onComplete: () => gsap.to(f, { y: i % 2 ? 10 : -10, duration: 2.8 + i * .5, repeat: -1, yoyo: true, ease: 'sine.inOut' }) });
      });
      if (window.matchMedia('(hover: hover)').matches) {
        const setters = toasts.map(f => gsap.quickTo(f, 'x', { duration: .8, ease: 'power3.out' }));
        $('.hero').addEventListener('pointermove', e => {
          const nx = e.clientX / innerWidth - .5;
          toasts.forEach((f, i) => setters[i](-nx * +f.dataset.depth));
        });
      }

      gsap.to('.hero-glow', { x: -60, y: 50, duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut' });

      // 3D: the app window follows the pointer in depth; the demo phone tips upright as it scrolls in
      const frame = $('.app-frame');
      if (frame && window.matchMedia('(hover: hover)').matches) {
        gsap.set(frame, { transformPerspective: 1100 });
        const rx = gsap.quickTo(frame, 'rotationX', { duration: .9, ease: 'power3.out' });
        const ry = gsap.quickTo(frame, 'rotationY', { duration: .9, ease: 'power3.out' });
        $('.hero').addEventListener('pointermove', e => {
          ry((e.clientX / innerWidth - .5) * -14);
          rx((e.clientY / innerHeight - .5) * 10);
        });
        $('.hero').addEventListener('pointerleave', () => { rx(0); ry(0); });
      }
      gsap.fromTo('.bento .bviz', { rotationX: 18, transformPerspective: 800, transformOrigin: '50% 100%' },
        { rotationX: 0, ease: 'none', stagger: .04, scrollTrigger: { trigger: '.bento', start: 'top 85%', end: 'top 35%', scrub: true } });

      // nav background
      ScrollTrigger.create({ start: 40, end: 99999, onToggle: s => $('#nav').classList.toggle('scrolled', s.isActive) });

      // marquee
      marqueeTween = gsap.to('#track', { xPercent: -50, duration: 38, ease: 'none', repeat: -1 });
      const mq = $('.marquee');
      mq.addEventListener('mouseenter', () => marqueeTween.timeScale(.2));
      mq.addEventListener('mouseleave', () => marqueeTween.timeScale(1));

      // how: pinned scrub on desktop, simple reveal otherwise
      // AI agent mascots: each one runs its own dance loop, paused while off-screen
      $$('.agent').forEach((el, i) => {
        const q = gsap.utils.selector(el);
        const wave = el.classList.contains('agent-peek');
        const point = el.classList.contains('agent-side');
        const speed = point ? 1 : .9 + (i % 3) * .12;
        const o = (x, y) => ({ svgOrigin: x + ' ' + y });
        const tl = gsap.timeline({ repeat: -1, yoyo: !point, repeatDelay: point ? 1.2 : 0, paused: true, defaults: { duration: .45, ease: 'sine.inOut' } });
        const anims = [tl];
        if (point) {
          // points at the form on the right: raise arm, tap the air, hop twice, lower arm, pause
          tl.fromTo(q('.arm-r'), { rotation: 0, ...o(95, 84) }, { rotation: -95, ...o(95, 84), duration: .5, ease: 'back.out(1.8)' }, 0)
            .to(q('.head'), { rotation: 8, ...o(60, 72), duration: .4 }, 0)
            .to(q('.arm-r'), { rotation: -78, ...o(95, 84), duration: .22, yoyo: true, repeat: 5 }, .6)
            .to(q('.a-body'), { y: -14, duration: .2, yoyo: true, repeat: 3, ease: 'power1.out' }, .6)
            .to(q('.arm-r'), { rotation: 0, ...o(95, 84), duration: .5, ease: 'power2.inOut' }, 2.3)
            .to(q('.head'), { rotation: 0, ...o(60, 72), duration: .4 }, 2.3);
        } else if (wave) {
          tl.fromTo(q('.arm-r'), { rotation: -115, ...o(95, 84) }, { rotation: -165, ...o(95, 84), duration: .3 }, 0)
            .fromTo(q('.head'), { rotation: -4, ...o(60, 72) }, { rotation: 4, ...o(60, 72), duration: .7 }, 0);
        } else {
          tl.fromTo(q('.arm-l'), { rotation: 150, ...o(25, 84) }, { rotation: 20, ...o(25, 84) }, 0)
            .fromTo(q('.arm-r'), { rotation: -20, ...o(95, 84) }, { rotation: -150, ...o(95, 84) }, 0)
            .fromTo(q('.leg-l'), { rotation: 10, ...o(50, 120) }, { rotation: -10, ...o(50, 120) }, 0)
            .fromTo(q('.leg-r'), { rotation: -10, ...o(70, 120) }, { rotation: 10, ...o(70, 120) }, 0)
            .fromTo(q('.head'), { rotation: -6, ...o(60, 72) }, { rotation: 6, ...o(60, 72) }, 0);
          anims.push(gsap.to(q('.a-body'), { y: -8, duration: .225, repeat: -1, yoyo: true, ease: 'sine.inOut', paused: true }));
        }
        anims.push(gsap.timeline({ repeat: -1, repeatDelay: 2.4 + i * .7, paused: true })
          .to(q('.eye'), { scaleY: .1, transformOrigin: '50% 50%', duration: .08, yoyo: true, repeat: 1 }));
        anims.forEach(a => a.timeScale(speed));
        ScrollTrigger.create({
          trigger: el, start: 'top bottom', end: 'bottom top',
          onToggle: s => anims.forEach(a => a.paused(!s.isActive))
        });
      });
      gsap.from('.agent-hero', { y: 60, autoAlpha: 0, scale: .8, duration: 1, delay: 1.2, ease: 'back.out(1.6)' });

      // how: plain vertical timeline, no pinning. Line fills as you scroll, steps light up as they enter.
      gsap.to('.steps-fill', {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: '.timeline', start: 'top 60%', end: 'bottom 60%', scrub: true }
      });
      $$('.step').forEach(s => {
        ScrollTrigger.create({
          trigger: s, start: 'top 60%',
          onEnter: () => s.classList.add('is-on'),
          onLeaveBack: () => s.classList.remove('is-on')
        });
      });

      return () => { reduce = false; };
    });
  }

  /* the hero must never stay hidden if an animation stalls */
  setTimeout(() => { $$('[data-anim]').forEach(el => { if (+getComputedStyle(el).opacity < .05) { el.style.opacity = 1; el.style.transform = 'none'; } }); }, 3500);

  /* ---------- boot ---------- */
  function boot() {
    $('#year').textContent = new Date().getFullYear();
    const agentTpl = $('#agent-tpl');
    $$('.agent').forEach(el => el.appendChild(agentTpl.content.cloneNode(true)));
    $$('.lang button').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
    reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    initFaq();
    initForm();
    if (window.WNDemo) WNDemo.init();
    // cursor-follow glow on cards
    document.addEventListener('pointermove', e => {
      const el = e.target.closest && e.target.closest('.bcard');
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
    if (window.gsap && window.ScrollTrigger) {
      initMotion();
    } else {
      root.classList.remove('js'); // CDN failed: show everything statically
      $$('.step').forEach(s => s.classList.add('is-on'));
      $('.steps-fill').style.transform = 'scaleY(1)';
    }
    applyLang(lang);
    if (window.gsap && window.ScrollTrigger) {
      window.addEventListener('load', () => ScrollTrigger.refresh());
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
    }
  }
  boot();
})();
