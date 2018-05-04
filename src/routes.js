import Notes from './components/notes/NotesPage.vue'
import Home from './components/Home.vue'
import Weather from './components/weatherLocation/WeatherLocationPage.vue'
import Shop from './components/shop/ShopPage.vue'
import Cart from './components/shop/cart/CartPage.vue'
import About from './components/About.vue'
import Fight from './components/fightSimulator/FightPage.vue'
export const routes = [
  {path:'/notes',component: Notes},
  {path: '', component: Home},
  {path: '/weather', component: Weather},
  {path: '/shop', component: Shop},
  {path: '/cart', component: Cart},
  {path: '/about', component: About},
  {path: '/fight', component: Fight}
];
