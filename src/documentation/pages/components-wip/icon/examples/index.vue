<template lang="pug">
  div
    h3 Overview
    p.-text
      | Chi icons are a collection of high-quality vector icons designed by Lumen for use in consumer, enterprise, and internal applications.
      | All icons have been manually optimized to achieve the fastest load time without compromising visual path and shape quality. For icon requests or
      | feedback, please email <a href="mailto:chi.support@centurylink.com">Chi Support</a>.
    h3 Using Icons
    p.-text
      | Chi icons can be added to projects in one of two ways: Web Component (SVG) or HTML Blueprint (Web Font).
      | The Web Component approach is dependent on your project using Chi's <a :href="`${baseUrl}getting-started/installation`">Web Components</a>.
      | The HTML Blueprint approach has no dependencies and all icons come pre-packaged in <a :href="`${baseUrl}getting-started/installation`">Chi CSS</a>.
    h3 Examples
    BaseExample
    <Sizes />
    h3 Colors
    p.-text
      | By default, icons are rendered in the same color as the text color defined on their parent container.
      | Easily change an icon's color using the examples below.
    <Brand />
    <Semantic />
    <BrandComplimentaryLumenPortal v-if="['lumen', 'portal', 'lumenrebrand24', 'portalrebrand24'].includes(selectedTheme)" />
    <Icons />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Base from './_base.vue';
import Brand from './_brand.vue';
import BrandComplimentaryLumenPortal from './_brand_complimentary-lumen-portal.vue';
import Icons from './_icons.vue';
import Semantic from './_semantic.vue';
import Sizes from './_sizes.vue';

@NuxtComponent({
  components: {
    BaseExample: Base,
    Sizes,
    Brand,
    Semantic,
    BrandComplimentaryLumenPortal,
    Icons,
  },
})
export default class Examples extends Vue {
  selectedTheme = useSelectedTheme();
  baseUrl = useRuntimeConfig().public.baseUrl;
}
</script>
