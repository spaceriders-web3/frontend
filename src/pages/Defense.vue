<template>
  <q-card dark class="q-my-md">
    <q-item>
      <q-item-section class="text-center text-h6">
        <q-item-label>Defenses</q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-img src="data_img/defense.webp" style="height: 350px; width: 100%">
      <ResourcesDisplay class="absolute-bottom" />
    </q-img>

    <q-card-section class="q-pa-none">
      <q-slide-transition>
        <div v-show="currentTabComponent == 'DefaultSlider'"></div>
      </q-slide-transition>
      <q-slide-transition :duration="duration">
        <div v-show="currentTabComponent != 'DefaultSlider'">
          <InfoSlider
            itemType
            :data="researchInfo"
            type="installation"
            key="defenseSlider"
            @cancelled="cancelled"
          />
        </div>
      </q-slide-transition>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <ItemList
        itemType
        listName="Defense Buildings"
        :data="this.$store.getters.defenseData"
        @change="slideDiv"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import InfoSlider from "src/components/lvl_up/InfoSlider.vue";
import DefaultSlider from "src/components/lvl_up/Defaultslider.vue";
import ResourcesDisplay from "src/components/ResourcesDisplay.vue";
import ItemList from "src/components/lvl_up/ItemList.vue";

export default defineComponent({
  name: "Research",
  components: {
    InfoSlider,
    ItemList,
    ResourcesDisplay,
  },
  setup() {
    const currentTab = ref("DefaultSlider");
    const researchInfo = ref();

    function slideDiv(data) {
      currentTab.value = "DefenseSlider";
      researchInfo.value = data;
    }

    const currentTabComponent = computed(() => {
      return currentTab.value;
    });

    function cancelled() {
      currentTab.value = "DefaultSlider";
    }

    return {
      duration: 500,
      slideDiv: slideDiv,
      cancelled: cancelled,
      currentTabComponent: currentTabComponent,
      researchInfo: researchInfo,
    };
  },
});
</script>
