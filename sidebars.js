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
    {
      type: 'category',
      label: 'Entregable 1',
      items: ['entregable-1/definicionClientes', 'clockify/Graphs', 'clockify/Total', 'clockify/Subgroups'],
              
    },

    {
      type: 'category',
      label: 'Clockify',
      items: ['clockify/Reports', 'clockify/Graphs', 'clockify/Total', 'clockify/Subgroups'],
              
    },
    {
      type: 'category',
      label: 'Actas de reuniones',
      items: ['clockify/Graphs', 'clockify/Total', 'clockify/Subgroups'],
              
    },

  ],
  

};

export default sidebars;
