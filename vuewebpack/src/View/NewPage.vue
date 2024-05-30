<template>
    <div class="row">
      <div class="col-4">
        <router-link to="/newpage/a" class="list-group-item active" aria-current="true">元件一</router-link>
        <router-link to="/newpage/b" class="list-group-item active" aria-current="true">元件二</router-link>
        </div>
        <div class="col-8">
          <router-view></router-view>
          </div>
    </div>
</template>

<style>
  .list-group-item{
    border: 1px solid saddlebrown;
    box-shadow: 5px 5px 5px 5px black;
  }
  .row{
    background-color: rebeccapurple;
    color: aliceblue
    };
</style>
