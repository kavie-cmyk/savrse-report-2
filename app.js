
(()=>{"use strict";
const q=(s,c=document)=>c.querySelector(s),qa=(s,c=document)=>[...c.querySelectorAll(s)];
const nav=q('#anchor-nav'),toggle=q('#nav-toggle');
if(toggle){toggle.addEventListener('click',()=>{const collapsed=nav.classList.toggle('is-collapsed');toggle.setAttribute('aria-expanded',String(!collapsed));});}
const links=qa('.anchor-nav a');
const obs=new IntersectionObserver(entries=>{for(const en of entries){if(en.isIntersecting){links.forEach(a=>a.classList.toggle('is-active',a.getAttribute('href')==='#'+en.target.id));}}},{rootMargin:'-25% 0px -65% 0px',threshold:0});
qa('.site-section').forEach(s=>obs.observe(s));
// Shortlist filters stay lane-local and never mutate canonical totals.
qa('.shortlist-explorer').forEach(ex=>{const items=qa('.shortlist-item',ex),buttons=qa('[data-shortlist-filter]',ex),counter=q('.filter-count',ex);buttons.forEach(btn=>btn.addEventListener('click',()=>{buttons.forEach(b=>b.classList.remove('is-active'));btn.classList.add('is-active');const f=btn.dataset.shortlistFilter;let shown=0;items.forEach(it=>{const ok=f==='all'||it.dataset.shortlistStatus===f;it.classList.toggle('hidden-by-filter',!ok);if(ok)shown++;});counter.textContent=`Đang hiển thị ${shown} / ${items.length}`;}));});
// Metric registry filters.
const ms=q('#metric-search'),me=q('#metric-evidence'),mso=q('#metric-source'),mc=q('#metric-count'),mitems=qa('#metric-grid .metric-card');
function filterMetrics(){if(!mc)return;const term=(ms.value||'').trim().toLowerCase(),ev=me.value,src=(mso.value||'').trim().toLowerCase();let n=0;mitems.forEach(it=>{const okTerm=!term||it.dataset.search.toLowerCase().includes(term),okEv=ev==='all'||it.dataset.evidenceClass===ev,okSrc=!src||it.dataset.sourceFilter.toLowerCase().includes(src);const ok=okTerm&&okEv&&okSrc;it.classList.toggle('hidden-by-filter',!ok);if(ok)n++;});mc.textContent=`Đang hiển thị ${n} / ${mitems.length}`;}
[ms,me,mso].filter(Boolean).forEach(el=>el.addEventListener(el.tagName==='SELECT'?'change':'input',filterMetrics));
// Source search.
const ss=q('#source-search'),sc=q('#source-count'),sitems=qa('#source-list .source-card');if(ss){ss.addEventListener('input',()=>{const t=ss.value.trim().toLowerCase();let n=0;sitems.forEach(it=>{const ok=!t||it.dataset.sourceSearch.toLowerCase().includes(t);it.classList.toggle('hidden-by-filter',!ok);if(ok)n++;});sc.textContent=`Đang hiển thị ${n} / ${sitems.length}`;});}
// Accessible citation drawer.
const drawer=q('#citation-drawer'),backdrop=q('#citation-backdrop'),dc=q('#drawer-content'),close=q('#drawer-close');let lastFocus=null;let scrollY=0;
function focusables(){return qa('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])',drawer).filter(el=>!el.disabled&&!el.hidden);}
function openSource(id,updateHash=false){const tpl=q(`#source-template-${CSS.escape(id)}`);if(!tpl)return;lastFocus=document.activeElement;scrollY=window.scrollY;dc.replaceChildren(tpl.content.cloneNode(true));drawer.hidden=false;backdrop.hidden=false;document.body.style.overflow='hidden';close.focus();if(updateHash)history.replaceState(null,'',`#source-${id}`);}
function closeDrawer(){if(drawer.hidden)return;drawer.hidden=true;backdrop.hidden=true;document.body.style.overflow='';window.scrollTo(0,scrollY);if(lastFocus&&document.contains(lastFocus))lastFocus.focus();}
document.addEventListener('click',ev=>{const t=ev.target.closest('[data-source-id]');if(t){ev.preventDefault();openSource(t.dataset.sourceId,true);}});close.addEventListener('click',closeDrawer);backdrop.addEventListener('click',closeDrawer);
document.addEventListener('keydown',ev=>{if(drawer.hidden)return;if(ev.key==='Escape'){ev.preventDefault();closeDrawer();return;}if(ev.key==='Tab'){const fs=focusables();if(!fs.length)return;const first=fs[0],last=fs[fs.length-1];if(ev.shiftKey&&document.activeElement===first){ev.preventDefault();last.focus();}else if(!ev.shiftKey&&document.activeElement===last){ev.preventDefault();first.focus();}}});
function hashSource(){const m=location.hash.match(/^#source-(S\d{2})$/);if(m)openSource(m[1],false);}window.addEventListener('hashchange',hashSource);hashSource();
// On mobile, collapse deep finalist detail by default; rank ladder remains first.
if(matchMedia('(max-width:768px)').matches){qa('.finalist-card[open]').forEach(x=>x.removeAttribute('open'));}
})();
