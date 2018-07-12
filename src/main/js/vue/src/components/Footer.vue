<template>
  <div class="page-footer">
    <div class="hours-info">
      <h3 class="page-footer_item_metadata">Opening Hours</h3>
      <p>Mon - Thu 11-22</p>
      <p>Fri 11-23</p>
      <p>Sat 12-23</p>
      <p>Sun 12-22</p>
    </div>
    <div class="address-info">
      <h3 class="page-footer_item_metadata">Address</h3>
      <p>Eerikinkatu 5, 20100 Turku Finland</p>
      <h3 class="page-footer_item_metadata">Phone</h3>
      <p>0405432055, 0440712555</p>
      <h3 class="page-footer_item_metadata">Email</h3>
      <p>kamalbanjade@yahoo.com</p>
    </div>
    <div class="logo">
      <img src="./../../../../resources/static/images/logo.jpg" alt="logo">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .page-footer {
    background: #b2beb5;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 20vh;
    justify-content: space-around;

    &_item_metadata {
      text-transform: uppercase;
      margin: 0.5rem 0;
      color: #fff;
      font-size: 1.0rem;
      font-weight: 500;
    }
  }

  .hours-info, .address-info, .logo {
    flex: 0 1 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .logo > img {
    height: 4.0rem;
    width: 16rem;
  }

</style>

