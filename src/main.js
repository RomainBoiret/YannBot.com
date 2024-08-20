import './style.css';
import { createApp } from 'vue';

import DefaultSection from './components/DefaultSection/DefaultSection.vue';
import FooterEmbed from './components/FooterEmbed/FooterEmbed.vue';
import HeaderEmbed from './components/HeaderEmbed/HeaderEmbed.vue';
import HeaderNavbar from './components/HeaderNavbar/HeaderNavBar.vue';
import MainMenuOptions from './components/MainMenuOptions/MainMenuOptions.vue';
import MenuOptionCard from './components/MainMenuOptions/MenuOptionCard.vue';
import StickyIllustration from './components/StickyIllustration/StickyIllustration.vue';

const app = createApp({});

app.component('default-section', DefaultSection);
app.component('footer-embed', FooterEmbed);
app.component('header-embed', HeaderEmbed);
app.component('header-navbar', HeaderNavbar);
app.component('main-menu-options', MainMenuOptions);
app.component('menu-option-card', MenuOptionCard);
app.component('sticky-illustration', StickyIllustration);

app.mount('#app');
