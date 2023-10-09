<template>
  <div>
    <b-alert closable>An info prompt</b-alert>
    <b-alert type="success" show-icon closable>
      A success prompt
      <template #desc>
        Content of prompt. Content of prompt. Content of prompt. Content of prompt.
      </template>
    </b-alert>
    <b-alert type="warning" closable>
      Custom closing content
      <template #close>No longer prompt</template>
    </b-alert>
  </div>
</template>
