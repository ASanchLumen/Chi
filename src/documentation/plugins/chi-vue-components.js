import { library } from '@centurylink/chi-vue';

const components = {
  ChiPagination: library.components['ChiPagination'],
  ChiDataTableToolbar: library.components['ChiDataTableToolbar'],
  ChiDataTable: library.components['ChiDataTable'],
  ChiDataTableBulkActions: library.components['ChiDataTableBulkActions'],
  ChiDataTableFilters: library.components['ChiDataTableFilters'],
  ChiDataTableViews: library.components['ChiDataTableViews'],
  ChiDrawer: library.components['ChiDrawer'],
  ChiSearchInput: library.components['ChiSearchInput'],
  ChiTooltip: library.components['ChiTooltip'],
  ChiColumnCustomization: library.components['ChiColumnCustomization'],
  ChiSaveView: library.components['ChiSaveView'],
  ChiExpansionPanel: library.components['ChiExpansionPanel'],
};


export default defineNuxtPlugin(nuxtApp => {
    // debugger
    // console.log('installing chi-vue plugin')

    // Object.entries(components).forEach(([name, component]) => {
    //   const newName = ['ChiVue', ...name.split('Chi')].join('');
    //   console.debug(`Registering ${name} as ${newName}`)
    //   nuxtApp.vueApp.component(
    //       newName,
    //       component
    //   )
    // })
})
