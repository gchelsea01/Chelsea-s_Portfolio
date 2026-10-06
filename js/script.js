/* ==========================================================
   script.js — dipakai semua halaman.
   Setiap bagian dicek dulu (if) agar tidak error di halaman
   yang tidak memiliki elemen tersebut.
   ========================================================== */

/* ---------- 1. Data ---------- */
const CAT = {
  work: { n: 'Work', c: '--c-work' }, intern: { n: 'Internship', c: '--c-intern' }, org: { n: 'Organisasi', c: '--c-org' },
  panitia: { n: 'Panitia', c: '--c-panitia' }, vol: { n: 'Volunteer', c: '--c-vol' },
  it: { n: 'IT', c: '--c-it' }, video: { n: 'Video Editing', c: '--c-video' }
};
const EXP = [
  ['intern', 'Data Management Intern — Property Management', 'Mengelola timesheet staf dan catatan inventaris untuk mendukung administrasi payroll dan pelacakan aset yang akurat.', '2025'],
  ['work', 'Teaching Assistant — Venture Creation and Scaling', 'Asisten dosen untuk mata kuliah Introduction to Venture Creation and Scaling.', '2026'],
  ['work', 'Teaching Assistant — Introduction to Entrepreneurship', 'Mendampingi kegiatan belajar mengajar mata kuliah Introduction to Entrepreneurship.', '2025'],
  ['org', 'Secretary — Student Union IMT', 'Menangani administrasi dan korespondensi organisasi mahasiswa Informatika.', '2025/2026'],
  ['org', 'Class Representative — Entrepreneurship Selling', 'Jembatan komunikasi antara mahasiswa dan dosen di kelas.', '2024'],
  ['panitia', 'Secretary &amp; Treasurer — UC Election Day', 'Mengelola administrasi, jadwal, anggaran, dan koordinasi lintas divisi. PIC Design, Documentation, dan Inventory.', '2026'],
  ['panitia', 'Secretary — NPLC', 'Mengurus proposal, surat resmi, MOU, TOR, sertifikat, dan laporan, serta mengawasi semua divisi sampai hari acara.', '2025'],
  ['panitia', 'Secretary — Informatics Student Camping', 'Mengelola administrasi, penggalangan dana, dan presensi. Juga menjadi PIC juri.', '2025'],
  ['panitia', 'Event Committee — O-Week Batch 1 &amp; 2', 'MC, PIC pembicara, juri showcase, stage manager, dan koordinator registrasi serta tenant.', '2025'],
  ['panitia', 'Mentor — LD101 Batch 3', 'Membimbing peserta, menyampaikan informasi program, dan melakukan evaluasi serta asesmen individual.', '2025'],
  ['vol', 'Master of Ceremonies — Community Service Petra 1', 'Menjadi MC pada kegiatan pengabdian masyarakat.', '']
];
const PRJ = [
  ['it', 'Zeneat App', 'UI/UX Design', 'Aplikasi kesehatan mental: jurnal teks dan voice-to-text, AI Wawasan untuk pola emosi, indikator burnout, dan chat dengan konselor.', ['Figma', 'UI/UX']],
  ['it', 'StrideApp', 'Application Developer', 'Caregiver Dashboard untuk memantau lansia: ringkasan kesehatan, jadwal obat otomatis, dan integrasi data Apple Watch.', ['SwiftUI', 'Firestore', 'MVVM']],
  ['it', 'Aether', 'Application Developer', 'Aplikasi mahasiswa untuk mengelola tugas dengan Task Manager, Focus Timer bermusik tenang, dan Block Game anti-stres.', ['Kotlin', 'PostgreSQL']],
  ['it', 'EcoPlate', 'UI/UX Design', 'Platform penghubung donatur makanan dan yayasan untuk mengurangi food waste, lengkap dengan donasi, chat, dan peringkat.', ['Figma', 'UI/UX']],
  ['it', 'Mahreen Indonesia Hub', 'UI/UX Design', 'Website agency yang dirancang modern dan mudah dipahami agar menarik perhatian generasi masa kini.', ['Figma', 'Web design']],
  ['it', 'Chelsea’s Web', 'Website Developer', 'Website portfolio responsif berisi profil, pendidikan, keterampilan, aktivitas, pengalaman, dan proyek.', ['HTML', 'CSS', 'Tailwind']],
  ['it', 'Sports Store Website', 'Website Developer', 'Toko online olahraga dengan katalog produk dan manajemen data.', ['Laravel', 'MySQL']],
  ['video', 'Video Project 1', 'Video Editing', 'Tempat untuk karya video editing Anda. Ganti dengan judul dan deskripsi asli.', ['CapCut']],
  ['video', 'Video Project 2', 'Video Editing', 'Tambahkan highlight acara, konten sosial media, atau video dokumentasi.', ['CapCut', 'Canva']]
];
const IMG = {};/* Foto kartu: taruh file di assets/images/ lalu isi, contoh: IMG.p0='assets/images/zeneat.jpg'  (e = experience, p = project, c = certificate, diikuti nomor urut mulai 0). Path ditulis dari root; halaman di folder pages/ otomatis disesuaikan. */
const CERT = ['Nama Sertifikat 1', 'Nama Sertifikat 2', 'Nama Sertifikat 3', 'Nama Sertifikat 4'];

/* ---------- 2. Helper & template kartu ---------- */
const BASE = document.body.dataset.base || '';/* '' di index.html, '../' di folder pages/ */
const $ = id => document.getElementById(id);
function filters(el, keys, cb) {
  el.innerHTML = '';
  [['all', 'Semua', '--accent'], ...keys.map(k => [k, CAT[k].n, CAT[k].c])].forEach(([k, n, c], i) => {
    const b = document.createElement('button'); b.className = 'f'; b.textContent = n; b.style.setProperty('--c', `var(${c})`);
    b.setAttribute('aria-pressed', i === 0);
    b.onclick = () => { el.querySelectorAll('.f').forEach(x => x.setAttribute('aria-pressed', x === b)); cb(k) };
    el.appendChild(b);
  });
}
const CC = ['--c-it', '--c-work', '--c-panitia', '--c-vol', '--c-intern', '--c-video'];
const imgSrc = v => /^(data:|https?:|\/)/.test(v) ? v : BASE + v;
const ph = k => `<div class="ph">${IMG[k] ? `<img src="${imgSrc(IMG[k])}" alt="">` : '<span>Foto</span>'}</div>`;
const E = i => { const [k, t, d, y] = EXP[i]; return `<article class="item" data-k="${k}" style="--c:var(${CAT[k].c})"><div class="meta">${y}</div><div><span class="tag">${CAT[k].n}</span><h3>${t}</h3><p>${first(d)}</p><button class="see" data-t="e" data-i="${i}">See detail</button></div></article>` };
const P = i => { const [k, t, r, d, st] = PRJ[i]; return `<article class="card ${k === 'video' ? 'soon' : ''}" data-k="${k}" style="--c:var(${CAT[k].c})"><div class="thumb"><em>${CAT[k].n}</em><span>${k === 'video' ? '▶' : t[0]}</span></div><div class="body"><small>${r}</small><h3>${t}</h3><p>${first(d)}</p><div class="stack">${st.map(x => `<i>${x}</i>`).join('')}</div><button class="see" data-t="p" data-i="${i}">See detail</button></div></article>` };
const first = d => { const m = d.match(/^.*?[.!?](?=\s|$)/); return m ? m[0] : d };
const all = n => [...Array(n).keys()];
const setHTML = (id, html) => { const el = $(id); if (el) el.innerHTML = html };

/* ---------- 3. Render per halaman ---------- */
setHTML('expH', [5, 0, 3].map(i => E(i)).join(''));/* Home: experience pilihan */
setHTML('prjH', [0, 1, 2].map(i => P(i)).join(''));/* Home: project pilihan */
setHTML('exp', all(EXP.length).map(E).join(''));/* pages/experience.html */
setHTML('prj', all(PRJ.length).map(P).join(''));/* pages/projects.html */
setHTML('certs', CERT.map((c, i) => `<div class="fl" style="--c:var(${CC[i % CC.length]})"><div class="fi"><div class="cert front"><div class="ci">★</div><h3>${c}</h3><p>Penerbit · Tahun</p></div><div class="back">${ph('c' + i)}</div></div></div>`).join(''));/* pages/certificates.html */
if ($('expF') && $('exp')) filters($('expF'), ['work', 'intern', 'org', 'panitia', 'vol'], k => $('exp').querySelectorAll('.item').forEach(i => i.hidden = k !== 'all' && i.dataset.k !== k));
if ($('prjF') && $('prj')) filters($('prjF'), ['it', 'video'], k => $('prj').querySelectorAll('.card').forEach(i => i.hidden = k !== 'all' && i.dataset.k !== k));

/* ---------- 4. Popup "See detail" & flip kartu (touch) ---------- */
const dlg = $('dlg');
document.addEventListener('click', e => {
  const b = e.target.closest('.see');
  if (b && dlg) {
    const i = +b.dataset.i; let k, t, sub, desc, st = '';
    if (b.dataset.t === 'e') { [k, t, desc, sub] = EXP[i] } else { let a;[k, t, sub, desc, a] = PRJ[i]; st = `<div class="stack">${a.map(x => `<i>${x}</i>`).join('')}</div>` }
    dlg.style.setProperty('--c', `var(${CAT[k].c})`);
    dlg.innerHTML = `<div class="in"><span class="tag" style="--c:var(${CAT[k].c})">${CAT[k].n}</span><h3>${t}</h3><div class="meta">${sub}</div><p>${desc}</p>${st}<div><button class="x" data-x>Tutup</button></div></div>`;
    dlg.showModal(); return;
  }
  if (dlg && (e.target === dlg || e.target.closest('[data-x]'))) dlg.close();
  const f = e.target.closest('.fl'); if (f && matchMedia('(hover:none)').matches) f.classList.toggle('on');
});

/* ---------- 5. Link CV & Portfolio (hanya ada di Home) ---------- */
const LINKS = { portfolio: '', cv: '' };/* isi dengan link portfolio dan CV Anda */
[['lp', 'portfolio'], ['lc', 'cv']].forEach(([id, k]) => { const a = $(id); if (!a) return; if (LINKS[k]) { a.href = LINKS[k]; a.target = '_blank'; a.rel = 'noopener' } else { a.title = 'Link belum diisi'; a.setAttribute('aria-disabled', 'true') } });

/* ---------- 6. Tema terang/gelap ---------- */
const root = document.documentElement, thBtn = $('th');
function theme(t) { root.dataset.theme = t; if (thBtn) thBtn.textContent = t === 'dark' ? '☀' : '☾'; try { localStorage.setItem('theme', t) } catch (e) { } }
let t0 = 'dark'; try { t0 = localStorage.getItem('theme') || 'dark' } catch (e) { }
theme(t0); if (thBtn) thBtn.onclick = () => theme(root.dataset.theme === 'dark' ? 'light' : 'dark');

/* ---------- 7. Burger menu ---------- */
const nv = document.querySelector('nav'), bg = $('bg');
if (nv && bg) bg.onclick = () => { const o = nv.classList.toggle('open'); bg.setAttribute('aria-expanded', o) };
addEventListener('keydown', e => { if (e.key === 'Escape' && nv) { nv.classList.remove('open'); if (bg) bg.setAttribute('aria-expanded', 'false') } });

/* ---------- 8. Menu aktif & animasi masuk halaman ---------- */
const cp = document.querySelector('.page');
if (cp) {
  document.querySelectorAll('.exp,.grid,.certs').forEach(c => [...c.children].forEach((x, i) => x.style.setProperty('--n', Math.min(i, 8))));
  document.querySelectorAll('nav ul a').forEach(a => a.classList.toggle('on', a.dataset.p === cp.dataset.p));
  cp.classList.add('in');
}
