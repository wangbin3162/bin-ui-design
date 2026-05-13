<template>
  <b-space>
    <b-dropdown trigger="hover">
      <b-button type="primary">
        Hover Trigger
        <b-icon name="down"></b-icon>
      </b-button>
      <template #dropdown>
        <b-dropdown-menu>
          <b-dropdown-item name="Donkey Burger" selected>Donkey Burger</b-dropdown-item>
          <b-dropdown-item name="Zhajiang Noodles" disabled>Zhajiang Noodles</b-dropdown-item>
          <b-dropdown-item name="Beef Noodles">Beef Noodles</b-dropdown-item>
          <b-dropdown-item name="Braised Chicken" divided>Braised Chicken</b-dropdown-item>
          <b-dropdown-item name="Street BBQ">Street BBQ</b-dropdown-item>
        </b-dropdown-menu>
      </template>
    </b-dropdown>
    <b-dropdown>
      <b-button type="primary">
        Click Trigger
        <b-icon name="down"></b-icon>
      </b-button>
      <template #dropdown>
        <b-dropdown-menu>
          <b-dropdown-item selected>Donkey Burger</b-dropdown-item>
          <b-dropdown-item disabled>Zhajiang Noodles</b-dropdown-item>
          <b-dropdown-item>Beef Noodles</b-dropdown-item>
          <b-dropdown-item divided>Braised Chicken</b-dropdown-item>
          <b-dropdown-item>Street BBQ</b-dropdown-item>
        </b-dropdown-menu>
      </template>
    </b-dropdown>
    <b-dropdown trigger="contextmenu">
      <b-button type="primary">
        Right Click
        <b-icon name="down"></b-icon>
      </b-button>
      <template #dropdown>
        <b-dropdown-menu>
          <b-dropdown-item>Back</b-dropdown-item>
          <b-dropdown-item style="color: #ed4014">Delete</b-dropdown-item>
        </b-dropdown-menu>
      </template>
    </b-dropdown>
  </b-space>
</template>
