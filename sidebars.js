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
    'entregable-1/acuerdoPrivacidadRegistroING',
    {
      type: 'category',
      label: 'Entregable 1',
      items: ['entregable-1/definicionClientes','entregable-1/definicionIdeaNegocio','entregable-1/definicionTipoNegocio',
       'entregable-1/herramientasSoporteDesarrollo', 'entregable-1/herramientasAnalisisCodigo',
       'entregable-1/discusionInnovacionTenologica', 'entregable-1/medicionesAportadoPorEquipos',
      'entregable-1/planMejoraCalidad','entregable-1/metodologiaAnalisisCompetidores','entregable-1/analisis',
       'entregable-1/scrum', 'entregable-1/casosUso', 'entregable-1/reporteTecnologiaUsada', 'entregable-1/SWOTyPESTLE', 'entregable-1/usoIA', 'entregable-1/pilotos'],
              
    },

    {
      type: 'category',
      label: 'Clockify',
      items: ['clockify/Reports', 'clockify/Graphs', 'clockify/Total', 'clockify/Subgroups'],
              
    },
    {
      type: 'category',
      label: 'Actas de reuniones',
      items: ['actas/02-02-2024', 'actas/15-02-2024', 'actas/18-02-2024', 'actas/21-02-2024'],
              
    },

  ],
  

};

export default sidebars;
