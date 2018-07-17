<template>
  <div class="footer">
    <div class="footer-top">
      <div class="hours-info">
        <h3 class="footer-top_item_metadata">Opening Hours</h3>
        <p>Mon - Thu 11-22</p>
        <p>Fri 11-23</p>
        <p>Sat 12-23</p>
        <p>Sun 12-22</p>
      </div>
      <div class="address-info">
        <h3 class="footer-top_item_metadata">Address</h3>
        <p>Eerikinkatu 5, 20100 Turku Finland</p>
        <h3 class="footer-top_item_metadata">Phone</h3>
        <p>0405432055, 0440712555</p>
        <h3 class="footer-top_item_metadata">Email</h3>
        <p>kamalbanjade@yahoo.com</p>
      </div>
      <div class="logo">
        <img src="./../../../../resources/static/images/logo.jpeg" alt="logo">
      </div>
    </div>
    <div class="footer-bottom"></div>
  </div>
  
</template>

<style lang="scss" scoped>
  .footer {
    position: absolute;
    height: 12.2rem;
    bottom: 0;
    width: 100%;
  }
  .footer-top {
    background: #b2beb5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 0.4rem;

    &_item_metadata {
      text-transform: uppercase;
      margin: 0.5rem 0;
      color: #fff;
      font-size: 0.8rem;
      font-family: 'Josefin Slab', serif;
      font-weight: 600;
    }

    .hours-info, .address-info, .logo {
      flex: 0 1 33%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    p {
      color: #fff;
      font-size: 1rem;
      font-family: 'Josefin Slab', serif;

    }
    .logo > img {
      height: 3.6rem;
      width: 17.2rem;
    }
  }

  .footer-bottom {
    background: rgba(255, 165, 0, 0.7);
    height: 3.2rem;
  }

  
</style>

