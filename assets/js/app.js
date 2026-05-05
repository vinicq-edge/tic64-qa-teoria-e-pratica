function getInitials(name) {
    const p = name.trim().split(' ').filter(Boolean);
    if (p.length === 1) return p[0][0].toUpperCase();
    return (p[0][0] + p[p.length - 1][0]).toUpperCase();
}

function renderStudents(list) {
    const container = document.getElementById('studentList');
    const noResults = document.getElementById('noResults');
    container.innerHTML = '';

    if (list.length === 0) {
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    list.forEach(({ student, index }) => {
        const row = document.createElement('div');
        row.className = 'student-row' + (student.link ? '' : ' no-link');

        const color = palette[index % palette.length];
        const initials = getInitials(student.name);

        const action = student.link
            ? `<a href="${student.link}" target="_blank" class="btn-drive">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Abrir Pasta
               </a>`
            : `<span class="btn-soon">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    Em breve
               </span>`;

        row.innerHTML = `
            <span class="student-num">${String(index + 1).padStart(2, '0')}</span>
            <div class="student-avatar" style="background:${color}">${initials}</div>
            <span class="student-name">${student.name}</span>
            ${action}
        `;

        container.appendChild(row);
    });
}

function filterStudents(query) {
    const q = query.toLowerCase().trim();
    const filtered = students
        .map((s, i) => ({ student: s, index: i }))
        .filter(({ student, index }) => {
            const num = String(index + 1).padStart(2, '0');
            return student.name.toLowerCase().includes(q) || num.includes(q);
        });
    renderStudents(filtered);
}

/* ── views ── */
function showView(name) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-' + name).classList.add('active');

    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const nav = document.getElementById('nav-' + name);
    if (nav) nav.classList.add('active');

    window.scrollTo({ top: 0 });
    closeSidebar();
}

function scrollTo(id) {
    setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
}

/* ── sidebar mobile ── */
function openSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
    document.body.style.overflow = '';
}

/* ── init ── */
renderStudents(students.map((s, i) => ({ student: s, index: i })));
