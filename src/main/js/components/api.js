

// reservation form api

const reservation = '/api/makereservation';

// lunch menu apis

const monday = '/api/lunch/monday';

const tuesday = '/api/lunch/tuesday';

const wednesday = '/api/lunch/wednesday';

const thursday = '/api/lunch/thursday';

const friday = '/api/lunch/friday';

// alakart menu apis

const salads = '/api/alakartmenu/salads';

const drinks = '/api/alakartmenu/drinks';

const desserts = '/api/alakartmenu/desserts';

const childrenMenu = '/api/alakartmenu/childrenmenu';

const appetizers = '/api/alakartmenu/appetizers';

const groupMenu = '/api/alakartmenu/groupmenu';

const vegetarianDishes = '/api/alakartmenu/vegetariandishes';

const chickenDishes = '/api/alakartmenu/chickendishes';

const lambDishes = '/api/alakartmenu/lambdishes';

const seaDishes = '/api/alakartmenu/seadishes';

const duckDishes = '/api/alakartmenu/duckdishes';

const tandooriDishes = '/api/alakartmenu/tandooridishes';

const thaliDishes = '/api/alakartmenu/thalidishes';

export default {
   reservation: reservation,
   lunchApi : {
     monday : monday,
     tuesday: tuesday,
     wednesday: wednesday,
     thursday: thursday,
     friday: friday,
   },
   alakartApi :{
     appetizers,
     salads,
     drinks,
     desserts,
     childrenMenu,
     groupMenu,
     vegetarianDishes,
     chickenDishes,
     lambDishes,
     seaDishes,
     duckDishes,
     tandooriDishes,
     thaliDishes,
   }

}
