'use strict';

const CONTACT_EMAIL = 'contact@nhexos.tech';
const dialog = document.querySelector('#access');
const form = document.querySelector('#access-form');
const sendLink = document.querySelector('#send-link');
const emailReady = document.querySelector('#email-ready');
let selectedProject = 'Interés general';
let previousTrigger;

document.querySelectorAll('[data-access]').forEach((button) => {
  button.addEventListener('click', () => {
    selectedProject = button.dataset.project || 'Interés general';
    previousTrigger = button;
    emailReady.classList.add('hidden');
    dialog.showModal();
    form.elements.name.focus();
  });
});

document.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => previousTrigger?.focus());
dialog.addEventListener('click', (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  const isOutside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (isOutside) dialog.close();
});

const solutions = [
  { title:'Nhexos Retail', description:'Punto de venta, inventario y reportes para comercios que necesitan una operación más clara.', nodes:[['VENTAS','Cobro y pedidos'],['INVENTARIO','Existencias actualizadas'],['REPORTES','Visibilidad del negocio']], metrics:['En desarrollo','Suscripción prevista'] },
  { title:'Nhexos Services', description:'Citas, clientes y operaciones para negocios de servicios que coordinan tiempo, equipo y atención.', nodes:[['SOLICITUDES','Casos y clientes'],['AGENDA','Tareas y horarios'],['SEGUIMIENTO','Estado compartido']], metrics:['En desarrollo','Suscripción prevista'] },
  { title:'Nhexos Inventory', description:'Control de existencias, movimientos y alertas de stock para negocios que necesitan actuar con más contexto.', nodes:[['ENTRADAS','Registro de mercancía'],['EXISTENCIAS','Control por ubicación'],['ALERTAS','Reposición a tiempo']], metrics:['En desarrollo','Suscripción prevista'] },
  { title:'Nhexos AI', description:'Capacidades de asistencia planeadas para consultar, resumir y capturar información con datos autorizados.', nodes:[['CONSULTA','Pregunta del usuario'],['BACKEND','Datos autorizados'],['CLAUDE','Respuesta asistida']], metrics:['Capacidades previstas','Revisión humana'] }
];

const setText = (id, value) => { document.querySelector(id).textContent = value; };
document.querySelectorAll('[data-mode]').forEach((button) => {
  button.addEventListener('click', () => {
    const solution = solutions[Number(button.dataset.mode)];
    document.querySelectorAll('[data-mode]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    setText('#panel-title', solution.title);
    setText('#panel-description', solution.description);
    setText('#node-one-label', solution.nodes[0][0]); setText('#node-one-value', solution.nodes[0][1]);
    setText('#node-two-label', solution.nodes[1][0]); setText('#node-two-value', solution.nodes[1][1]);
    setText('#node-three-label', solution.nodes[2][0]); setText('#node-three-value', solution.nodes[2][1]);
    setText('#metric-one', solution.metrics[0]); setText('#metric-two', solution.metrics[1]);
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const values = new FormData(form);
  const body = ['Hola, Nhexos:', '', 'Quiero conocer más sobre la plataforma.', '', `Nombre: ${values.get('name')}`, `Correo: ${values.get('email')}`, `Interés: ${selectedProject}`, '', 'Giro o necesidad:', values.get('message')].join('\n');
  sendLink.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Nhexos — ${selectedProject}`)}&body=${encodeURIComponent(body)}`;
  emailReady.classList.remove('hidden');
  sendLink.focus();
});

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold:0.12 });
  document.querySelectorAll('[data-reveal]').forEach((section) => observer.observe(section));
} else {
  document.querySelectorAll('[data-reveal]').forEach((section) => section.classList.add('is-visible'));
}
