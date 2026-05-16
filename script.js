const DATA = {
    summary: "Ingeniero Empresarial con sólida especialización en <strong>Business Intelligence y Control de Gestión</strong>, orientado al análisis financiero y la gestión presupuestal estratégica. Transformo datos complejos en información accionable que impulsa decisiones de alto impacto corporativo.<br/><br/><strong>▸ Modelado y Control Presupuestal:</strong> Diseño de modelos de datos alineados a clasificadores del MEF para la planificación, seguimiento y control de la ejecución presupuestal (PIA/PIM).<br/><strong>▸ Automatización ETL:</strong> Desarrollo de procesos de extracción, transformación y carga con SQL, Power Query y Power BI que eliminan tareas repetitivas y aseguran la integridad de los datos.<br/><strong>▸ Dashboards Financieros Estratégicos:</strong> Construcción de soluciones analíticas ejecutivas — Flujo de Caja en Tesorería, Control de Inversiones en Activos Fijos y monitoreo de Kardex remoto — que fortalecen la visibilidad operativa y aceleran la toma de decisiones.",
    kpis: [
        { label: 'Años Exp.', val: '8+', icon: '<i class="ph ph-briefcase text-[32px]"></i>' },
        { label: 'Procesos BI', val: '10+', icon: '<i class="ph ph-strategy text-[32px]"></i>' },
        { label: 'Dominio', val: 'ETL/NIIF', icon: '<i class="ph ph-cube-transparent text-[32px]"></i>' },
        { label: 'Certificados', val: '7+', icon: '<i class="ph ph-certificate text-[32px]"></i>' }
    ],
    competencies: {
        labels: ['Power BI / DAX', 'SQL Server / ETL', 'Python / Auto', 'NIIF & Finanzas', 'EVM / Proyectos'],
        values: [95, 88, 75, 90, 85]
    },
    experience: [
        {
            id: 1,
            role: "Analista Senior BI & Control Patrimonial",
            company: "EPS Selva Central",
            period: "Dic 2024 - Presente",
            type: "Público",
            details: [
                "Lideré el diseño e implementación de ecosistemas analíticos en Power BI enfocados en gestión logística, logrando una reducción histórica del 30% en sobrestock.",
                "Orquesté la automatización de conciliaciones de datos (Patrimonio vs Contabilidad) empleando Python y VBA, minimizando drásticamente la carga operativa.",
                "Garanticé la trazabilidad y cumplimiento financiero del 100% de activos bajo las estrictas normativas internacionales NIIF (NIC 16/36)."
            ]
        },
        {
            id: 2,
            role: "Analista de Procesos y Datos Estratégicos",
            company: "Promore Inmobiliaria",
            period: "Oct 2023 - Dic 2024",
            type: "Privado",
            details: [
                "Implementé metodologías de Valor Ganado (EVM) para el monitoreo avanzado de proyectos, mitigando desviaciones críticas en cronograma y presupuesto.",
                "Consolidé un repositorio digital centralizado que optimizó la accesibilidad documental y la automatización en la gestión de riesgos corporativos."
            ]
        },
        {
            id: 3,
            role: "Consultor de Mejora Continua y BPM",
            company: "EPS Selva Central",
            period: "Oct 2023 - Dic 2024",
            type: "Público",
            details: [
                "Reestructuré flujos de control patrimonial mediante Bizagi, alcanzando una estandarización del 100% en los procesos de altas y bajas de activos.",
                "Diseñé un modelo de clasificación ABC que redefinió y optimizó la asignación de prioridades de inversión de capital."
            ]
        },
        {
            id: 4,
            role: "Analista PMO",
            company: "OIP - Infraestructura",
            period: "Ene 2016 - Dic 2017",
            type: "Público",
            details: [
                "Controló el desempeño y líneas base de inversiones mediante MS Project y KPIs gerenciales.",
                "Mitigó incompatibilidades técnicas cruzando requerimientos interdisciplinarios."
            ]
        }
    ],
    skills: {
        tech: {
            labels: ['Power BI', 'SQL Server', 'Excel / VBA', 'Python', 'MS Project', 'Bizagi'],
            data: [95, 88, 92, 75, 85, 80]
        },
        bi: {
            labels: ['Arquitectura ETL', 'Dashboarding', 'Control Presupuestal', 'Modelado Dimensional'],
            data: [90, 95, 88, 92]
        }
    },
    education: [
        { title: "Ingeniería Empresarial", inst: "UTP — Universidad Tecnológica del Perú", year: "2017 – 2022", type: "grado" },
        { title: "Especialización Business Analytics & Intelligence", inst: "Escuela de Especialización y Posgrado — EEP", year: "2026 – actualidad", type: "esp" },
        { title: "Especialización en Gestión Pública", inst: "Centro Integrado de Formación Profesional — CIFP", year: "feb 2025 – feb 2026", type: "esp" },
        { title: "Especialización en Monitoreo y Evaluación de Proyectos", inst: "Universidad ESAN", year: "2017 – 2018", type: "esp" },
        { title: "Inteligencia de Negocios — Power BI", inst: "CEPS — UNI", year: "marzo 2023", type: "cert" },
        { title: "SQL Server — Nivel Intermedio", inst: "CINFO — UNMSM", year: "feb – mar 2023", type: "cert" },
        { title: "Técnico en Big Data", inst: "Fundación Carlos Slim", year: "2023", type: "cert" },
        { title: "Técnico en Inteligencia de Negocios", inst: "Fundación Carlos Slim", year: "2023", type: "cert" },
        { title: "Gestión por Procesos", inst: "TECSUP", year: "2017", type: "cert" },
        { title: "Gerencia, Diseño y Evaluación de Proyectos — PMBOK", inst: "Corporación Americana de Desarrollo — CAD", year: "2015", type: "cert" }
    ],
    merits: [
        { title: "Premio CAD (Ciudadanos al Día)", body: "Reconocimiento nacional por indicadores de optimización de infraestructura (2017)." },
        { title: "Eficiencia Documental OIP", body: "Automatización de cuantificación de materiales usando bloques dinámicos en AutoCAD (2016)." }
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
        document.getElementById('summary-text').innerHTML = DATA.summary;

        const kpiHTML = DATA.kpis.map((k, index) => `
            <div class="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center group stagger-anim" style="animation-delay: ${index * 100}ms">
                <div class="mb-3 flex justify-center text-navy transform group-hover:scale-110 transition-transform">${k.icon}</div>
                <div class="text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-charcoal to-mgray mb-1">${k.val}</div>
                <div class="text-[11px] uppercase font-display font-bold text-gray-400 tracking-widest">${k.label}</div>
            </div>
        `).join('');
        document.getElementById('kpi-container').innerHTML = kpiHTML;

        const areasHTML = DATA.competencies.labels.map((l, index) => `
            <li class="flex items-center gap-4 bg-cream/50 p-3 rounded-xl border border-cream stagger-anim" style="animation-delay: ${index * 100}ms">
                <div class="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-navy to-navy shadow-sm"></div>
                <span class="font-display font-bold text-mgray">${l}</span>
                <span class="ml-auto text-sm font-display font-black text-navy bg-cream px-2 py-1 rounded-lg">${DATA.competencies.values[index]}%</span>
            </li>
        `).join('');
        document.getElementById('key-areas-list').innerHTML = areasHTML;

        this.charts.mainRadar();
    },

    renderExperience(filter = 'Todos') {
        const container = document.getElementById('timeline-container');
        const filtered = filter === 'Todos' ? DATA.experience : DATA.experience.filter(e => e.type === filter);

        container.innerHTML = filtered.map((e, index) => `
            <div class="exp-card bg-white p-6 rounded-2xl border border-cream flex flex-col md:flex-row gap-6 relative stagger-anim" style="animation-delay: ${index * 150}ms">
                <div class="md:w-1/4">
                    <span class="text-xs font-display font-black text-navy uppercase tracking-widest">${e.period}</span>
                    <h4 class="text-xl font-display font-bold text-charcoal mt-1">${e.company}</h4>
                </div>
                <div class="flex-1">
                    <h5 class="text-lg font-display font-bold text-mgray mb-3">${e.role}</h5>
                    <ul class="space-y-2">
                        ${e.details.map(d => `<li class="text-gray-500 flex gap-2">
                            <span class="text-gold mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></span>
                            <span class="text-justify">${d}</span>
                        </li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');

        const filterBtns = ['Todos', 'Privado', 'Público'];
        document.getElementById('filter-container').innerHTML = filterBtns.map(f => `
            <button onclick="UI.renderExperience('${f}')" class="px-4 py-1.5 text-xs font-display font-bold rounded-md transition-all ${filter === f ? 'bg-white shadow-sm text-navy' : 'text-gray-500 hover:text-charcoal'}">
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
        const grado = DATA.education.filter(e => e.type === 'grado');
        const esps  = DATA.education.filter(e => e.type === 'esp');
        const certs = DATA.education.filter(e => e.type === 'cert');

        const renderGroup = (items, delay0) => items.map((e, i) => `
            <div class="flex gap-4 stagger-anim" style="animation-delay: ${(delay0 + i) * 120}ms">
                <div class="w-1 rounded-full ${e.type === 'grado' ? 'bg-navy' : e.type === 'esp' ? 'bg-gold' : 'bg-gray-300'}"></div>
                <div>
                    <h4 class="font-display font-bold text-charcoal text-sm">${e.title}</h4>
                    <p class="text-xs text-gray-500">${e.inst} &nbsp;·&nbsp; ${e.year}</p>
                </div>
            </div>
        `).join('');

        const eduHTML = `
            <div class="space-y-5">
                <h3 class="text-lg font-display font-bold text-navy mb-4 flex items-center gap-2">
                    <i class="ph ph-graduation-cap text-[24px]"></i> Grado Académico
                </h3>
                ${renderGroup(grado, 0)}

                <h3 class="text-lg font-display font-bold text-navy mt-8 mb-4 flex items-center gap-2">
                    <i class="ph ph-book-open-text text-[24px]"></i> Especializaciones
                </h3>
                ${renderGroup(esps, grado.length)}

                <h3 class="text-lg font-display font-bold text-navy mt-8 mb-4 flex items-center gap-2">
                    <i class="ph ph-certificate text-[24px]"></i> Certificaciones
                </h3>
                ${renderGroup(certs, grado.length + esps.length)}
            </div>
        `;

        const meritHTML = `
            <div class="space-y-5">
                <h3 class="text-lg font-display font-bold text-gold mb-4 flex items-center gap-2">
                    <i class="ph ph-medal text-[24px]"></i> Reconocimientos
                </h3>
                ${DATA.merits.map((m, index) => `
                    <div class="bg-cream/50 p-5 rounded-2xl border border-cream stagger-anim" style="animation-delay: ${index * 150}ms">
                        <h4 class="font-display font-bold text-navy mb-1 text-sm">${m.title}</h4>
                        <p class="text-sm text-mgray text-justify">${m.body}</p>
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
                        backgroundColor: 'rgba(20, 72, 160, 0.1)',
                        borderColor: '#1448a0',
                        pointBackgroundColor: '#f2c911',
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        duration: 1500,
                        easing: 'easeOutQuart'
                    },
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
                        backgroundColor: '#1448a0',
                        borderRadius: 8
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        duration: 1500,
                        easing: 'easeOutQuart'
                    },
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
                        backgroundColor: '#f2c911',
                        borderRadius: 8
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        duration: 1500,
                        easing: 'easeOutQuart'
                    },
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
