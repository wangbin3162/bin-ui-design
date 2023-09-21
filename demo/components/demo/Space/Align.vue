<template>
  <b-space>
    <div style="width: 240px; margin-bottom: 20px; padding: 8px; border: 1px solid #ccc">
      <b-space>
        string
        <b-button>button</b-button>
        <b-card>
          <template #header>header</template>
          body
        </b-card>
      </b-space>
    </div>
    <div style="width: 240px; margin-bottom: 20px; padding: 8px; border: 1px solid #ccc">
      <b-space alignment="flex-start">
        string
        <b-button>button</b-button>
        <b-card>
          <template #header>header</template>
          body
        </b-card>
      </b-space>
    </div>
    <div style="width: 240px; margin-bottom: 20px; padding: 8px; border: 1px solid #ccc">
      <b-space alignment="flex-end">
        string
        <b-button>button</b-button>
        <b-card>
          <template #header>header</template>
          body
        </b-card>
      </b-space>
    </div>
  </b-space>
</template>
