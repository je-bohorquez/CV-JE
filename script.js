// --- 1. BASE DE DATOS (DATA SOURCE) ---
const DATA = {
    summary: "Especialista en Inteligencia de Negocios y Analítica con más de 10 años de trayectoria. Transformo datos financieros y operativos en dashboards estratégicos, optimizando la toma de decisiones bajo estándares NIIF y metodologías ágiles.",
    kpis: [
        { label: 'Años Experiencia', val: '10+', icon: '⏳' },
        { label: 'Procesos Optimizados', val: '15+', icon: '⚙️' },
        { label: 'Especialización', val: 'BI/ETL', icon: '💎' },
        { label: 'Certificaciones', val: '5+', icon: '📜' }
    ],
    competencies: {
        labels: ['Análisis SQL', 'Power BI/DAX', 'Normas NIC/NIIF', 'Gestión EVM', 'Python/ETL'],
        values: [90, 95, 85, 80, 75]
    },
    experience: [
        {
            id: 1,
            role: "Responsable de Control Patrimonial",
            company: "EPS Selva Central S.A.",
            period: "2024 - Presente",
            type: "Público",
            details: [
                "Conciliación del 100% de activos bajo NIC 16/36.",
                "Reducción del 30% en sobrestock mediante dashboards de Kardex remoto.",
                "Automatización de procesos contables con Python y VBA."
            ]
        },
        {
            id: 2,
            role: "Analista de Negocios / BI",
            company: "Arrendamientos MAGUI",
            period: "2023",
            type: "Privado",
            details: [
                "Diseño de modelos SQL para control de morosidad.",
                "Automatización de prorrateo de servicios con VBA.",
                "Estandarización de flujos de cobranza en Bizagi."
            ]
        },
        {
            id: 3,
            role: "Analista de Proyectos",
            company: "PROMORE SAC",
            period: "2020 - 2023",
            type: "Privado",
            details: [
                "Control de indicadores SPI/CPI mediante EVM.",
                "Gestión de riesgos y planes de contingencia PMBOK.",
                "Optimización de trazabilidad documental."
            ]
        }
    ],
    skills: {
        tech: {
            labels: ['Excel VBA', 'SQL Server', 'Python', 'Power Query'],
            data: [98, 85, 75, 92]
        },
        bi: {
            labels: ['Power BI', 'ETL Logic', 'Bizagi BPM', 'Data Modeling'],
            data: [96, 90, 88, 92]
        }
    },
    education: [
        { title: "Ingeniería Empresarial", inst: "UTP", year: "2017-2022" },
        { title: "Especialización Evaluación Proyectos", inst: "ESAN", year: "2018" },
        { title: "Gestión por Procesos", inst: "TECSUP", year: "2017" }
    ],
    merits: [
        { title: "Buenas Prácticas CAD", body: "Reconocimiento Ciudadanos al Día por indicadores de infraestructura." },
        { title: "Reconocimiento OIP", body: "Estandarización de formatos y automatización AutoCAD." }
    ]
};

// --- 2. MOTOR DE RENDERIZADO (UI LOGIC) ---
const UI = {
    init() {
        this.renderHome();
        this.renderExperience();
        this.renderSkills();
        this.renderEducation();
    },

    renderHome() {
        document.getElementById('summary-text').innerText = DATA.summary;

        const kpiHTML = DATA.kpis.map(k => `
            <div class="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center group">
                <div class="text-3xl mb-3 transform group-hover:scale-110 transition-transform">${k.icon}</div>
                <div class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 mb-1">${k.val}</div>
                <div class="text-[11px] uppercase font-bold text-slate-400 tracking-widest">${k.label}</div>
            </div>
        `).join('');
        document.getElementById('kpi-container').innerHTML = kpiHTML;

        const areasHTML = DATA.competencies.labels.map((l, i) => `
            <li class="flex items-center gap-4 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                <div class="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-sm"></div>
                <span class="font-bold text-slate-700">${l}</span>
                <span class="ml-auto text-sm font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">${DATA.competencies.values[i]}%</span>
            </li>
        `).join('');
        document.getElementById('key-areas-list').innerHTML = areasHTML;

        this.charts.mainRadar();
    },

    renderExperience(filter = 'Todos') {
        const container = document.getElementById('timeline-container');
        const filtered = filter === 'Todos' ? DATA.experience : DATA.experience.filter(e => e.type === filter);

        container.innerHTML = filtered.map(e => `
            <div class="exp-card bg-white p-6 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-6 relative">
                <div class="md:w-1/4">
                    <span class="text-xs font-black text-blue-600 uppercase tracking-widest">${e.period}</span>
                    <h4 class="text-xl font-bold text-slate-900 mt-1">${e.company}</h4>
                </div>
                <div class="flex-1">
                    <h5 class="text-lg font-bold text-slate-700 mb-3">${e.role}</h5>
                    <ul class="space-y-2">
                        ${e.details.map(d => `<li class="text-slate-500 flex gap-2">
                            <span class="text-blue-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                            <span>${d}</span>
                        </li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');

        // Render filtros
        const filterBtns = ['Todos', 'Privado', 'Público'];
        document.getElementById('filter-container').innerHTML = filterBtns.map(f => `
            <button onclick="UI.renderExperience('${f}')" class="px-4 py-1.5 text-xs font-bold rounded-md transition-all ${filter === f ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-900'}">
                ${f}
            </button>
        `).join('');
    },

    renderSkills() {
        this.charts.techBar();
        this.charts.biBar();
    },

    renderEducation() {
        const container = document.getElementById('edu-merit-container');
        const eduHTML = `
            <div class="space-y-6">
                <h3 class="text-2xl font-bold flex items-center gap-2">🏛️ Académico</h3>
                ${DATA.education.map(e => `
                    <div class="flex gap-4">
                        <div class="w-1 bg-slate-200 rounded-full"></div>
                        <div>
                            <h4 class="font-bold text-slate-900">${e.title}</h4>
                            <p class="text-sm text-slate-500">${e.inst} | ${e.year}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        const meritHTML = `
            <div class="space-y-6">
                <h3 class="text-2xl font-bold flex items-center gap-2">🏆 Reconocimientos</h3>
                ${DATA.merits.map(m => `
                    <div class="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                        <h4 class="font-bold text-blue-900 mb-1">${m.title}</h4>
                        <p class="text-sm text-blue-700/70">${m.body}</p>
                    </div>
                `).join('')}
            </div>
        `;
        container.innerHTML = eduHTML + meritHTML;
    },

    charts: {
        mainRadar() {
            new Chart(document.getElementById('mainRadarChart'), {
                type: 'radar',
                data: {
                    labels: DATA.competencies.labels,
                    datasets: [{
                        data: DATA.competencies.values,
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderColor: '#3b82f6',
                        pointBackgroundColor: '#3b82f6',
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: { r: { ticks: { display: false }, min: 0, max: 100 } }
                }
            });
        },
        techBar() {
            new Chart(document.getElementById('techSkillsChart'), {
                type: 'bar',
                data: {
                    labels: DATA.skills.tech.labels,
                    datasets: [{
                        data: DATA.skills.tech.data,
                        backgroundColor: '#0f172a',
                        borderRadius: 8
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: { x: { display: false, max: 100 }, y: { grid: { display: false } } }
                }
            });
        },
        biBar() {
            new Chart(document.getElementById('biSkillsChart'), {
                type: 'bar',
                data: {
                    labels: DATA.skills.bi.labels,
                    datasets: [{
                        data: DATA.skills.bi.data,
                        backgroundColor: '#3b82f6',
                        borderRadius: 8
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: { x: { display: false, max: 100 }, y: { grid: { display: false } } }
                }
            });
        }
    }
};

// --- 3. ENRUTADOR (ROUTER) ---
const router = {
    navigate(section) {
        // Actualizar UI
        document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
        document.getElementById(`sec-${section}`).classList.add('active');

        // Actualizar Nav
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.getElementById(`btn-${section}`).classList.add('active');

        // Reset Scroll
        document.querySelector('main').scrollTop = 0;
    }
};

// Inicio automático
window.onload = () => UI.init();
