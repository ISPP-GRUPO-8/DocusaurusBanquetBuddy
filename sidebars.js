/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  docsSidebar: [
    'CommitmentAgreement',
    'gestionCodigo',
    'Devising a Project/acuerdoPrivacidadRegistroING',
    {
      type: 'category',
      label: 'Devising a Project',
      items: ['Devising a Project/definicionClientes', 'Devising a Project/definicionIdeaNegocio', 'Devising a Project/definicionTipoNegocio',
        'Devising a Project/herramientasSoporteDesarrollo', 'Devising a Project/herramientasAnalisisCodigo',
        'Devising a Project/discusionInnovacionTenologica', 'Devising a Project/medicionesAportadoPorEquipos',
        'Devising a Project/planMejoraCalidad', 'Devising a Project/metodologiaAnalisisCompetidores', 'Devising a Project/analisis',
        'Devising a Project/scrum', 'Devising a Project/casosUso', 'Devising a Project/reporteTecnologiaUsada', 'Devising a Project/SWOTyPESTLE',
        'Devising a Project/usoIA', 'Devising a Project/pilotos'],

    },

    {
      type: 'category',
      label: 'Sprint-1',
      items: ['Sprint-1/CostAnalisys', 'Sprint-1/CustomerAgreement', 'Sprint-1/GitHubTaskAssignment',
        'Sprint-1/PerformanceMetrics', 'Sprint-1/PerformanceEvaluation',
        'Sprint-1/Pilots', 'Sprint-1/Presentacion',
        'Sprint-1/Revision', 'Sprint-1/BusinessIdeaConcepts', 'Sprint-1/report',
        'Sprint-1/QualityMetrics', 'Sprint-1/RiskAnalysis', 'Sprint-1/TaskReviewProcess', 'Sprint-1/TestingProcedure',
        'Sprint-1/Time-Effort-report', 'Sprint-1/AI-usage'],

    },

    {
      type: 'category',
      label: 'Clockify',
      items: ['clockify/Reports', 'clockify/Graphs', 'clockify/Total', 'clockify/Subgroups'],

    },

    {
      type: 'category',
      label: 'Sprint 2',
      items: ['Sprint-2/PerformanceEvaluation', 'Sprint-2/AI-usage', 'Sprint-2/Cost-analysis',
        'Sprint-2/pilotUsersCommitmentAgreementExternal', 'Sprint-2/pilotUsersCommitmentAgreementMorningGroup', 'Sprint-2/pilots', 'Sprint-2/revision'],

    },

    {
      type: 'category',
      label: 'Actas de reuniones',
      items: ['actas/02-02-2024', 'actas/15-02-2024', 'actas/18-02-2024', 'actas/21-02-2024'],

    },

  ],


};

export default sidebars;
