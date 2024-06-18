<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>

  <chi-tabs :active-tab="activeTab.id" :tabs.prop="tabs" :id="groupDetailsPageTabInputConfig.id"
    :solid="groupDetailsPageTabInputConfig.solid" :border="groupDetailsPageTabInputConfig.border"
    :size="groupDetailsPageTabInputConfig.size" @chiTabChange="(e: any) => navigateToAllTabs(e.detail)"
    data-cy="cy-groupDetailsPage-tabs"></chi-tabs>

</template>

<script lang="ts">

interface Igroups {
  name: string;
  id: string;
  totalTNs: number;
}

enum ComponentId {
  GROUP_SUMMARY = 'group-summary',
  TN_SUMMARY = 'tn-summary',
  GROUP_PROFILE = 'group-profile',
  CALLING_PLANS = 'calling-plans',
}

interface ItabInput {
  id: string;
  label: string;
  content?: string;
  componentId: ComponentId;
  showAlert?: boolean;
}

interface ITabProps {
  id: string;
  size: 'lg' | 'md' | 'sm' | 'xl' | 'xs';
  solid: boolean;
  border: boolean;
  vertical: boolean;
  tabInput: ItabInput[];
}

interface HeadItem {
  label?: string;
  sortable?: boolean;
  sortDataType?: string;
  sortBy?: string;
  align?: string;
  allowOverflow?: boolean;
  key?: boolean;
  bold?: boolean;
}

const baseTabPropsConfig: Omit<ITabProps, 'id' | 'tabInput'> = {
  size: 'lg',
  solid: true,
  border: true,
  vertical: false,
};

const groupDetailsPageTabInputConfig: ITabProps = {
  ...baseTabPropsConfig,
  id: 'tab-vc-group-details-page',
  tabInput: [
    {
      id: 'tab-phone-numbers',
      label: 'Phone Numbers',
      componentId: ComponentId.TN_SUMMARY,
      showAlert: false,
    },
    {
      id: 'tab-group-profile',
      label: 'Group Profile',
      componentId: ComponentId.GROUP_PROFILE,
      showAlert: true,
    },
    {
      id: 'tab-calling-plans',
      label: 'Calling Plans',
      componentId: ComponentId.CALLING_PLANS,
      showAlert: false,
    },
  ],
};

const groupsPhoneNumbersSummaryTableHead: Record<string, HeadItem> = {
  phoneNumbers: {
    label: 'Phone Numbers',
    sortable: true,
    align: 'left',
  },
  userName: {
    label: 'User Name',
    sortable: true,
    align: 'left',
  },
  mobility: {
    label: 'Mobility',
    sortable: true,
    align: 'left',
  },
  actions: {
    label: 'Actions',
    sortable: false,
    align: 'left',
  },
};

enum ModuleID {
  HOME_ADMIN = 'home-admin',
  GROUP_DETAILS = 'group-details',
}

import { defineStore } from 'pinia';

export const useMainStore = defineStore('$_voice-feature-mgmt', {
  state: () => ({
    groups: ref<Igroups[]>([]),
    selectedGroup: ref<Igroups | null>(null),
    selectedTn: ref<string>(''),
  }),
  getters: {},
  actions: {
    async setGroups(groups: Igroups[]) {
      this.groups = groups;
    },
    async setSelectedGroup(group: Igroups) {
      this.selectedGroup = group;
    },
    async setSelectedTn(tn: string) {
      this.selectedTn = tn;
    },

  },
});

import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  components: {

  },
  computed: {
    store() {
      return useMainStore();
    },
    moduleTitle() {
      console.log('store', this.store.selectedGroup);
      return this.store.selectedGroup?.name || '';
    },
    subTitle() {
      return this.store.selectedGroup?.totalTNs ? `${this.store.selectedGroup.totalTNs} Numbers` : '';
    },
  },
  setup() {
    const activeTab = ref(groupDetailsPageTabInputConfig.tabInput[0]);
    const tabs = ref(groupDetailsPageTabInputConfig.tabInput);

    onMounted(() => {
      console.log('mounted');
      const helpButton = document.querySelector(`#vc__help-button`);
      if (helpButton) {
        helpButton.addEventListener('click', () => {
          const popoverElem: any = document.querySelector(`#vc__help-popover`);
          popoverElem.toggle();
        });
      }
    });

    return {
      activeTab,
      tabs,
      moduleId: ModuleID,
      groupDetailsPageTabInputConfig,
      groupsPhoneNumbersSummaryTableHead,
    };
  },
  methods: {
    navigateToAllTabs(tab: any) {
      this.activeTab = tab;
    },
    handleBackLinkNavigation() {
      //this.router.push({ name: 'HomeAdmin' });
    },
  },
});
</script>
