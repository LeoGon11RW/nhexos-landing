'use strict';
// Change this address if your Cloudflare routing uses a different inbox.
const CONTACT_EMAIL = 'contact@nhexos.tech';
const dialog = document.querySelector('#access');
let selectedProject = 'New Product';
let previousTrigger;
document.querySelectorAll('[data-access]').forEach(button => {
  button.addEventListener('click', () => {
    selectedProject = button.dataset.project || 'New Product';
    previousTrigger = button;
    document.querySelector('#email-ready').classList.add('hidden');
    dialog.showModal();
  });
});
document.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => previousTrigger?.focus());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
});
const modes = [
  ['Your idea: a scalable digital product', 'Build. Deploy. Scale.', 'Product strategy → engineering → cloud delivery', [['WEB','Applications'],['MOBILE','Platforms'],['AI','Workflows']]],
  ['Your goal: connect tools and automate work', 'Connect. Reason. Act.', 'Business context → intelligent workflows', [['CONTEXT','Business data'],['MCP','Connected tools'],['LLMs','Intelligence']]],
  ['Your goal: repeatable product delivery', 'Release. Monitor. Improve.', 'Application code → automated deployment', [['BUILD','Pipelines'],['DEPLOY','Serverless'],['OPERATE','Infrastructure']]]
];
document.querySelectorAll('[data-mode]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-mode]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    const m = modes[Number(button.dataset.mode)];
    document.querySelector('#goal').textContent = m[0];
    document.querySelector('#engine-title').textContent = m[1];
    document.querySelector('#engine-desc').textContent = m[2];
    document.querySelector('#nodes').replaceChildren(...m[3].map(n => {
      const d = document.createElement('div');
      d.append(document.createTextNode(n[0]));
      const s = document.createElement('small'); s.textContent = n[1]; d.append(s); return d;
    }));
  });
});
const milestones = [
  'Discovery: define the audience, core workflows, and acceptance criteria.',
  'Development: review the core application and planned AI integrations.',
  'Delivery: review deployment, documentation, and handover requirements.'
];
let milestone = 0;
document.querySelector('#demo-next').addEventListener('click', () => {
  document.querySelector('#demo-status').textContent = milestones[milestone];
  document.querySelectorAll('.milestone').forEach((card,i) => { card.style.borderColor = i === milestone ? '#76efdb' : ''; });
  milestone = (milestone + 1) % milestones.length;
});
document.querySelector('#access-form').addEventListener('submit', event => {
  event.preventDefault();
  const values = new FormData(event.target);
  const body = 'Hello Nhexos,\n\nI would like to discuss a project.\n\nName: ' + values.get('name') + '\nWork email: ' + values.get('email') + '\nService: ' + selectedProject + '\n\nProject details:\n' + values.get('message');
  const href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent('Nhexos — ' + selectedProject + ' Inquiry') + '&body=' + encodeURIComponent(body);
  document.querySelector('#send-link').href = href;
  document.querySelector('#email-ready').classList.remove('hidden');
  document.querySelector('#send-link').click();
});
