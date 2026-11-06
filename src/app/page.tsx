"use client";

import React, { useState } from "react";
import { ResumeData, ResumeTheme } from "@/types/resume";
import { 
  FileText, 
  Download, 
  Code, 
  RotateCcw, 
  ShieldCheck, 
  User, 
  Briefcase, 
  GraduationCap, 
  Layers, 
  Plus, 
  Trash2, 
  Printer, 
  Sun,
  Moon,
  CheckCircle2
} from "lucide-react";

const initialResume: ResumeData = {
  basics: {
    name: "Carlos Henrique Silva",
    label: "Senior Full Stack Engineer & Tech Lead",
    email: "carlos.silva@techmail.com",
    phone: "+55 (11) 98765-4321",
    url: "https://linkedin.com/in/carlos-silva-dev",
    location: {
      city: "São Paulo",
      region: "SP",
      countryCode: "BR"
    },
    summary: "Engenheiro de Software com mais de 8 anos de experiência em arquiteturas escaláveis, ecossistema Next.js, Node.js e computação em nuvem. Histórico comprovado de liderança técnica, otimização de performance e redução de custos de infraestrutura em ambientes de alto tráfego."
  },
  work: [
    {
      id: "w1",
      company: "Fintech Inovação Digital",
      position: "Lead Full Stack Engineer",
      startDate: "2022",
      endDate: "Atual",
      current: true,
      summary: "Liderou a migração da plataforma principal de pagamentos para Next.js 15 e microserviços em Node.js.",
      highlights: [
        "Aumento de 45% na taxa de conversão do checkout ao reduzir o tempo de carregamento em 1.8 segundos.",
        "Implementou arquitetura orientada a eventos processando mais de 500k transações diárias com 99.99% de uptime."
      ]
    },
    {
      id: "w2",
      company: "CloudScale Soluções Web",
      position: "Senior Frontend Engineer",
      startDate: "2019",
      endDate: "2022",
      current: false,
      summary: "Desenvolveu painéis de telemetria analítica corporativa e design system interno.",
      highlights: [
        "Criou biblioteca de componentes com TypeScript estrito adotada por 5 squads simultâneos.",
        "Reduziu o bundle size inicial em 35% com code-splitting e otimização de assets."
      ]
    }
  ],
  education: [
    {
      id: "e1",
      institution: "Universidade de São Paulo (USP)",
      area: "Engenharia de Computação",
      studyType: "Bacharelado",
      startDate: "2015",
      endDate: "2019"
    }
  ],
  skills: [
    {
      id: "s1",
      name: "Linguagens & Frameworks",
      keywords: ["TypeScript", "Next.js 15", "React 19", "Node.js", "Tailwind CSS", "GraphQL", "PostgreSQL", "Docker", "AWS"]
    },
    {
      id: "s2",
      name: "Ferramentas & Metodologias",
      keywords: ["Git", "Jest", "CI/CD (GitHub Actions)", "Vercel", "Prisma ORM", "Stripe API"]
    }
  ],
  projects: []
};

type AccentColor = "emerald" | "blue" | "violet" | "amber" | "slate";

const accentMap: Record<AccentColor, { hex: string; text: string; border: string }> = {
  emerald: { hex: "#059669", text: "text-emerald-700", border: "border-emerald-600" },
  blue: { hex: "#2563eb", text: "text-blue-700", border: "border-blue-600" },
  violet: { hex: "#7c3aed", text: "text-violet-700", border: "border-violet-600" },
  amber: { hex: "#d97706", text: "text-amber-700", border: "border-amber-600" },
  slate: { hex: "#334155", text: "text-slate-800", border: "border-slate-800" },
};

export default function ResumeBuilderPage() {
  const [resume, setResume] = useState<ResumeData>(initialResume);
  const [activeTab, setActiveTab] = useState<"profile" | "experience" | "education" | "skills">("profile");
  const [theme, setTheme] = useState<ResumeTheme>("modern");
  const [accent, setAccent] = useState<AccentColor>("emerald");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resume, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `resume-${resume.basics.name.toLowerCase().replace(/\s+/g, "-")}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleExportMarkdown = () => {
    let md = `# ${resume.basics.name}\n`;
    md += `**${resume.basics.label}** | ${resume.basics.email} | ${resume.basics.phone} | ${resume.basics.location.city}, ${resume.basics.location.region || ""}\n\n`;
    md += `## Resumo Profissional\n${resume.basics.summary}\n\n`;
    md += `## Experiência Profissional\n`;
    resume.work.forEach((w) => {
      md += `### ${w.position} — ${w.company} (${w.startDate} - ${w.endDate})\n${w.summary}\n\n`;
      if (w.highlights && w.highlights.length) {
        w.highlights.forEach((h) => (md += `- ${h}\n`));
        md += "\n";
      }
    });
    md += `## Educação\n`;
    resume.education.forEach((e) => {
      md += `- **${e.area}**, ${e.institution} (${e.startDate} - ${e.endDate})\n`;
    });
    md += `\n## Competências Técnicas\n`;
    resume.skills.forEach((s) => {
      md += `- **${s.name}:** ${s.keywords.join(", ")}\n`;
    });

    const dataStr = "data:text/markdown;charset=utf-8," + encodeURIComponent(md);
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `resume-${resume.basics.name.toLowerCase().replace(/\s+/g, "-")}.md`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const addExperience = () => {
    setResume((prev) => ({
      ...prev,
      work: [
        ...prev.work,
        {
          id: `w-${Date.now()}`,
          company: "Nova Empresa",
          position: "Novo Cargo",
          startDate: "2023",
          endDate: "Presente",
          current: true,
          summary: "Descrição das principais responsabilidades e métricas de impacto.",
          highlights: []
        }
      ]
    }));
  };

  const removeExperience = (id: string) => {
    setResume((prev) => ({
      ...prev,
      work: prev.work.filter((w) => w.id !== id)
    }));
  };

  const addEducation = () => {
    setResume((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: `e-${Date.now()}`,
          institution: "Nova Universidade",
          area: "Área de Estudo",
          studyType: "Bacharelado",
          startDate: "Ano",
          endDate: "Ano"
        }
      ]
    }));
  };

  const removeEducation = (id: string) => {
    setResume((prev) => ({
      ...prev,
      education: prev.education.filter((e) => e.id !== id)
    }));
  };

  const activeColor = accentMap[accent];

  return (
    <div className={`min-h-screen flex flex-col transition-colors ${isDarkMode ? "dark bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"}`}>
      {/* Top Navbar */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur sticky top-0 z-40 px-6 py-3.5 no-print transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-600/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
                  HackMyResume <span className="text-emerald-600 dark:text-emerald-400">Pro</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> ATS 98%
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Criador de Currículos Otimizados para IA & Recrutamento
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-end">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 transition border border-slate-200 dark:border-slate-800 flex items-center justify-center w-9 h-9"
              title="Alternar Modo Claro / Escuro"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>
            <button
              onClick={() => setResume(initialResume)}
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 text-xs font-semibold transition border border-slate-200 dark:border-slate-800 flex items-center gap-1.5 shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Exemplo
            </button>
            <button
              onClick={handleExportJSON}
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 text-xs font-semibold transition border border-slate-200 dark:border-slate-800 flex items-center gap-1.5 shadow-sm"
            >
              <Code className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" /> JSON
            </button>
            <button
              onClick={handleExportMarkdown}
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 text-xs font-semibold transition border border-slate-200 dark:border-slate-800 flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" /> Markdown
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition flex items-center gap-2 shadow-md shadow-emerald-600/20"
            >
              <Printer className="w-3.5 h-3.5" /> Baixar em PDF (A4)
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: Visual Editor */}
        <div className="lg:col-span-5 flex flex-col gap-4 no-print">
          {/* Tabs Navigation */}
          <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-1.5 flex gap-1 text-xs shadow-sm backdrop-blur">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex-1 py-2 rounded-xl font-bold transition flex items-center justify-center gap-1.5 ${
                activeTab === "profile" ? "bg-emerald-600 text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <User className="w-3.5 h-3.5" /> Perfil
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex-1 py-2 rounded-xl font-bold transition flex items-center justify-center gap-1.5 ${
                activeTab === "experience" ? "bg-emerald-600 text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" /> Cargos
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`flex-1 py-2 rounded-xl font-bold transition flex items-center justify-center gap-1.5 ${
                activeTab === "education" ? "bg-emerald-600 text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" /> Educação
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`flex-1 py-2 rounded-xl font-bold transition flex items-center justify-center gap-1.5 ${
                activeTab === "skills" ? "bg-emerald-600 text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" /> Skills
            </button>
          </div>

          {/* Form Fields */}
          <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4 max-h-[720px] overflow-y-auto">
            {activeTab === "profile" && (
              <div className="space-y-3.5">
                <div className="flex items-center justify-between pb-1 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
                    Dados Pessoais & Contato
                  </h3>
                  <span className="text-[11px] text-slate-400">Essencial para ATS</span>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    value={resume.basics.name}
                    onChange={(e) =>
                      setResume({ ...resume, basics: { ...resume.basics, name: e.target.value } })
                    }
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Título Profissional</label>
                  <input
                    type="text"
                    value={resume.basics.label}
                    onChange={(e) =>
                      setResume({ ...resume, basics: { ...resume.basics, label: e.target.value } })
                    }
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">E-mail</label>
                    <input
                      type="email"
                      value={resume.basics.email}
                      onChange={(e) =>
                        setResume({ ...resume, basics: { ...resume.basics, email: e.target.value } })
                      }
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Telefone</label>
                    <input
                      type="text"
                      value={resume.basics.phone}
                      onChange={(e) =>
                        setResume({ ...resume, basics: { ...resume.basics, phone: e.target.value } })
                      }
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Localização</label>
                    <input
                      type="text"
                      value={`${resume.basics.location.city}, ${resume.basics.location.region || ""}`}
                      onChange={(e) =>
                        setResume({
                          ...resume,
                          basics: {
                            ...resume.basics,
                            location: { ...resume.basics.location, city: e.target.value }
                          }
                        })
                      }
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">LinkedIn / Portfólio</label>
                    <input
                      type="text"
                      value={resume.basics.url || ""}
                      onChange={(e) =>
                        setResume({ ...resume, basics: { ...resume.basics, url: e.target.value } })
                      }
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Resumo Executivo</label>
                  <textarea
                    rows={4}
                    value={resume.basics.summary}
                    onChange={(e) =>
                      setResume({ ...resume, basics: { ...resume.basics, summary: e.target.value } })
                    }
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 leading-relaxed transition"
                  />
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-1 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
                    Histórico Profissional
                  </h3>
                  <button
                    onClick={addExperience}
                    className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white text-xs font-bold transition flex items-center gap-1 border border-emerald-200 dark:border-emerald-500/20"
                  >
                    <Plus className="w-3.5 h-3.5" /> Adicionar
                  </button>
                </div>
                {resume.work.map((w, idx) => (
                  <div key={w.id} className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 space-y-2 relative">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">#{idx + 1} {w.company}</span>
                      <button
                        onClick={() => removeExperience(w.id)}
                        className="text-rose-500 hover:text-rose-600 text-xs"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Empresa"
                        value={w.company}
                        onChange={(e) => {
                          const updated = [...resume.work];
                          updated[idx].company = e.target.value;
                          setResume({ ...resume, work: updated });
                        }}
                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-900 dark:text-white"
                      />
                      <input
                        type="text"
                        placeholder="Cargo"
                        value={w.position}
                        onChange={(e) => {
                          const updated = [...resume.work];
                          updated[idx].position = e.target.value;
                          setResume({ ...resume, work: updated });
                        }}
                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-900 dark:text-white"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Período"
                      value={`${w.startDate} - ${w.endDate}`}
                      onChange={(e) => {
                        const updated = [...resume.work];
                        updated[idx].startDate = e.target.value;
                        setResume({ ...resume, work: updated });
                      }}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-900 dark:text-white"
                    />
                    <textarea
                      placeholder="Resumo de impacto e conquistas"
                      rows={2}
                      value={w.summary}
                      onChange={(e) => {
                        const updated = [...resume.work];
                        updated[idx].summary = e.target.value;
                        setResume({ ...resume, work: updated });
                      }}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                ))}
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-1 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
                    Formação Acadêmica
                  </h3>
                  <button
                    onClick={addEducation}
                    className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white text-xs font-bold transition flex items-center gap-1 border border-emerald-200 dark:border-emerald-500/20">
                    <Plus className="w-3.5 h-3.5" /> Adicionar
                  </button>
                </div>
                {resume.education.map((e, idx) => (
                  <div key={e.id} className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">#{idx + 1} {e.institution}</span>
                      <button
                        onClick={() => removeEducation(e.id)}
                        className="text-rose-500 hover:text-rose-600 text-xs"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Instituição"
                      value={e.institution}
                      onChange={(ev) => {
                        const updated = [...resume.education];
                        updated[idx].institution = ev.target.value;
                        setResume({ ...resume, education: updated });
                      }}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-900 dark:text-white"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Curso / Área"
                        value={e.area}
                        onChange={(ev) => {
                          const updated = [...resume.education];
                          updated[idx].area = ev.target.value;
                          setResume({ ...resume, education: updated });
                        }}
                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-900 dark:text-white"
                      />
                      <input
                        type="text"
                        placeholder="Período"
                        value={`${e.startDate} - ${e.endDate}`}
                        onChange={(ev) => {
                          const updated = [...resume.education];
                          updated[idx].startDate = ev.target.value;
                          setResume({ ...resume, education: updated });
                        }}
                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "skills" && (
              <div className="space-y-4">
                <div className="pb-1 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
                    Competências Técnicas
                  </h3>
                </div>
                {resume.skills.map((s, idx) => (
                  <div key={s.id}>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">{s.name}</label>
                    <input
                      type="text"
                      value={s.keywords.join(", ")}
                      onChange={(ev) => {
                        const updated = [...resume.skills];
                        updated[idx].keywords = ev.target.value.split(",").map((k) => k.trim()).filter(Boolean);
                        setResume({ ...resume, skills: updated });
                      }}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Refined Minimalist ATS Badge */}
          <div className="bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-500/30 rounded-2xl p-3.5 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>Leitura ATS: 98% de Compatibilidade</span>
                  <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300">Rank A+</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Estrutura linear semântica aprovada para triagem automática de RH</p>
              </div>
            </div>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold hidden sm:inline-flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Seguro
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: Styling Controls + Live Paper Canvas */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Styling Toolbar */}
          <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 flex flex-wrap items-center justify-between gap-3 shadow-sm backdrop-blur no-print">
            {/* Theme Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Tema:</span>
              <div className="flex items-center gap-1">
                {(["modern", "minimal", "executive", "ats"] as ResumeTheme[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition ${
                      theme === t
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {t === "modern" ? "Modern Clean" : t === "minimal" ? "Minimal Tech" : t === "executive" ? "Executive" : "Compact ATS"}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Accent Picker */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Cor de Destaque:</span>
              <div className="flex items-center gap-1.5">
                {(["emerald", "blue", "violet", "amber", "slate"] as AccentColor[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setAccent(c)}
                    className={`w-6 h-6 rounded-full transition ${
                      c === "emerald"
                        ? "bg-emerald-600"
                        : c === "blue"
                        ? "bg-blue-600"
                        : c === "violet"
                        ? "bg-violet-600"
                        : c === "amber"
                        ? "bg-amber-600"
                        : "bg-slate-800"
                    } ${accent === c ? "ring-2 ring-emerald-600/40 scale-110" : "hover:scale-105"}`}
                    title={c}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Paper Canvas */}
          <div className="flex-1 bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-4 md:p-8 overflow-x-auto flex justify-center items-start shadow-inner">
            <div
              id="printableArea"
              className={`w-full max-w-[794px] min-h-[1123px] bg-white text-slate-900 shadow-lg p-8 md:p-12 transition-all ${
                theme === "minimal"
                  ? "font-mono text-[13px]"
                  : theme === "executive"
                  ? "font-serif text-[14.5px]"
                  : theme === "ats"
                  ? "text-[12px] leading-tight"
                  : "font-sans text-[13.5px]"
              }`}
            >
              {/* Header */}
              <div
                className={`pb-4 mb-6 ${
                  theme === "executive" || theme === "ats"
                    ? "text-center border-b-2 border-slate-900"
                    : `border-b-2 ${activeColor.border}`
                }`}
              >
                <h1 className="text-2xl font-black text-slate-950 tracking-tight mb-1">
                  {resume.basics.name}
                </h1>
                <div className={`text-xs font-bold ${activeColor.text} uppercase tracking-wider mb-2`}>
                  {resume.basics.label}
                </div>
                <div className={`flex flex-wrap items-center ${theme === "executive" || theme === "ats" ? "justify-center" : ""} gap-x-4 gap-y-1 text-xs text-slate-600`}>
                  <span>{resume.basics.email}</span>
                  <span>•</span>
                  <span>{resume.basics.phone}</span>
                  <span>•</span>
                  <span>{resume.basics.location.city}, {resume.basics.location.region}</span>
                  {resume.basics.url && (
                    <>
                      <span>•</span>
                      <span>{resume.basics.url.replace("https://", "")}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Summary */}
              <div className="mb-6">
                <h2 className={`text-xs font-extrabold uppercase tracking-wider ${activeColor.text} border-b border-slate-200 pb-1 mb-2.5`}>
                  Resumo Profissional
                </h2>
                <p className="text-xs text-slate-700 leading-relaxed">{resume.basics.summary}</p>
              </div>

              {/* Work Experience */}
              <div className="mb-6">
                <h2 className={`text-xs font-extrabold uppercase tracking-wider ${activeColor.text} border-b border-slate-200 pb-1 mb-2.5`}>
                  Experiência Profissional
                </h2>
                {resume.work.map((w) => (
                  <div key={w.id} className="mb-4">
                    <div className="flex justify-between items-baseline">
                      <span className="font-extrabold text-slate-950 text-sm">{w.position}</span>
                      <span className="text-xs font-medium text-slate-500">{w.startDate} - {w.endDate}</span>
                    </div>
                    <div className="text-xs font-bold text-slate-700 mb-1">{w.company}</div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-1.5">{w.summary}</p>
                    {w.highlights && w.highlights.length > 0 && (
                      <ul className="list-disc list-inside text-xs text-slate-600 space-y-0.5 ml-1">
                        {w.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="mb-6">
                <h2 className={`text-xs font-extrabold uppercase tracking-wider ${activeColor.text} border-b border-slate-200 pb-1 mb-2.5`}>
                  Formação Acadêmica
                </h2>
                {resume.education.map((e) => (
                  <div key={e.id} className="mb-3">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-slate-950 text-sm">{e.area}</span>
                      <span className="text-xs font-medium text-slate-500">{e.startDate} - {e.endDate}</span>
                    </div>
                    <div className="text-xs text-slate-700">
                      {e.institution} {e.studyType ? `• ${e.studyType}` : ""}
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h2 className={`text-xs font-extrabold uppercase tracking-wider ${activeColor.text} border-b border-slate-200 pb-1 mb-2.5`}>
                  Competências Técnicas
                </h2>
                <div className="text-xs text-slate-700 space-y-1.5">
                  {resume.skills.map((s) => (
                    <div key={s.id}>
                      <span className="font-bold text-slate-900">{s.name}:</span>{" "}
                      {s.keywords.join(" • ")}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
