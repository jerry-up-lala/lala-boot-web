<template>
  <div v-if="!appStore.navbar" class="fixed-settings" @click="setVisible">
    <a-button type="primary">
      <template #icon>
        <icon-settings />
      </template>
    </a-button>
  </div>
  <a-drawer
    :visible="visible"
    :footer="false"
    :width="300"
    unmount-on-close
    @cancel="cancel"
  >
    <template #title> {{ $t('settings.title') }} </template>
    <Block :options="contentOpts" :title="$t('settings.content')" />
    <Block :options="othersOpts" :title="$t('settings.otherSettings')" />
  </a-drawer>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useAppStore } from '@/store';
  import Block from './block.vue';

  const emit = defineEmits(['cancel']);

  const appStore = useAppStore();
  const visible = computed(() => appStore.globalSettings);
  const contentOpts = computed(() => [
    { name: 'settings.navbar', key: 'navbar', defaultVal: appStore.navbar },
    { name: 'settings.menu', key: 'menu', defaultVal: appStore.menu },
    { name: 'settings.topMenu', key: 'topMenu', defaultVal: appStore.topMenu },
    {
      name: 'settings.menuCollapse',
      key: 'menuCollapse',
      defaultVal: appStore.menuCollapse,
    },
    {
      name: 'settings.menuWidth',
      key: 'menuWidth',
      defaultVal: appStore.menuWidth,
      type: 'number',
    },
    { name: 'settings.footer', key: 'footer', defaultVal: appStore.footer },
    { name: 'settings.tabBar', key: 'tabBar', defaultVal: appStore.tabBar },
  ]);
  const othersOpts = computed(() => [
    {
      name: 'settings.colorWeak',
      key: 'colorWeak',
      defaultVal: appStore.colorWeak,
    },
  ]);

  const cancel = () => {
    appStore.updateSettings({ globalSettings: false });
    emit('cancel');
  };
  const setVisible = () => {
    appStore.updateSettings({ globalSettings: true });
  };
</script>

<style scoped lang="less">
  .fixed-settings {
    position: fixed;
    top: 280px;
    right: 0;

    svg {
      font-size: 18px;
      vertical-align: -4px;
    }
  }
</style>
