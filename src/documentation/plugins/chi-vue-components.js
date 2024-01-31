import { library } from '@centurylink/chi-vue';

console.log('loading chi-vue-components', library);

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
    console.log('installing chi-vue plugin')
    // nuxtApp.vueApp.use(
    //     ChiVueLibrary.ChiVue,
    //     {
    //         chiOptions: {
    //             theme: 'portal',
    //             forceVersion: '5.39.0'
    //         }
    //     }
    // )
    Object.entries(components).forEach(([name, component]) => {
        console.debug(`Registering ${name}`)
        nuxtApp.vueApp.component(
            name,
            component
        )
    })
})
