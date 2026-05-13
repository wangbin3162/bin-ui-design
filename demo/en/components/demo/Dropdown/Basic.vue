<template>
  <div>
    <b-dropdown>
      <a href="javascript:void(0)">
        Dropdown
        <b-icon name="down"></b-icon>
      </a>
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

    <b-dropdown style="margin-left: 20px">
      <b-button type="primary">
        Dropdown
        <b-icon name="down"></b-icon>
      </b-button>
      <template #dropdown>
        <b-dropdown-menu>
          <b-dropdown-item>Donkey Burger</b-dropdown-item>
          <b-dropdown-item disabled>Zhajiang Noodles</b-dropdown-item>
          <b-dropdown-item>Beef Noodles</b-dropdown-item>
          <b-dropdown-item divided>Braised Chicken</b-dropdown-item>
          <b-dropdown-item>Street BBQ</b-dropdown-item>
        </b-dropdown-menu>
      </template>
    </b-dropdown>
  </div>
</template>
