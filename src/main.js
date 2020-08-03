import Vue from 'vue';
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import './assets/sass/app.scss';

import DefaultLayout from '~/layouts/Default.vue';
// import VModal from 'vue-js-modal';

// base components
import VerticalDivider from '~/components/VerticalDivider';
import Divider from '~/components/Divider';

// home page components
import Hero from '~/components/home/Hero.vue';
import Carousel from '~/components/home/Carousel.vue';
import Tools from '~/components/home/Tools.vue';
import Brands from '~/components/home/Brands.vue';
import WorkFlow from '~/components/home/WorkFlow.vue';
import CallToAction from '~/components/home/CallToAction.vue';
import Pricing from '~/components/home/Pricing.vue';
import Benefits from '~/components/home/Benefits.vue';
import Contact from '~/components/home/Contact.vue';

export default function(Vue, { router, head, isClient, appOptions }) {

  // GENERAL METADATA
  head.meta.push({
    name: 'Title',
    content: `Juicee Design`
  })
  head.meta.push({
    name: 'Description',
    content: `Your application designed in just two weeks!`
  })
  head.meta.push({
    name: 'Author',
    content: `Juicee`
  })

  head.meta.push({
    name: 'keywords',
    content: 'website design, web design, best website design, site design, responsive web design, designer websites, creative logo, simple logo, name logo, logo service, business logo'
  })

  // FACEBOOK METADATA
  head.meta.push({
    property: 'og:title',
    content: 'Juicee Design'
  })

  head.meta.push({
    property: 'og:site_name',
    content: 'Juicee Design'
  })

  head.meta.push({
    property: 'og:type',
    content: 'website'
  })

  head.meta.push({
    property: 'og:description',
    content: 'Your application designed in just two weeks!'
  })
  head.meta.push({
    property: 'og:url',
    content: 'https://www.juicee.design'
  })

  head.meta.push({
    property: 'og:image',
    content: 'https://d33wubrfki0l68.cloudfront.net/a7540785093925ad135b17da5e0a58614ebe6f6d/be8ae/assets/img/meta_media.c4351be3.png'
  })

  head.meta.push({
    property: 'og:image:url',
    content: 'https://d33wubrfki0l68.cloudfront.net/a7540785093925ad135b17da5e0a58614ebe6f6d/be8ae/assets/img/meta_media.c4351be3.png"'
  })

  // TWITTER
  head.meta.push({
    name: 'twitter:card',
    content: 'website'
  });

  head.meta.push({
    name: 'twitter:site',
    content: 'https://www.juicee.design',
  });

  head.meta.push({
    name: 'twitter:title',
    content: 'Juicee Design',
  });

  head.meta.push({
    name: 'twitter:description',
    content: 'Your application designed in just two weeks!'
  });

  head.meta.push({
    name: 'twitter:creator',
    content: 'Juicee'
  });

  head.meta.push({
    name: 'twitter:img:src',
    content: 'https://d33wubrfki0l68.cloudfront.net/a7540785093925ad135b17da5e0a58614ebe6f6d/be8ae/assets/img/meta_media.c4351be3.png'
  });

  // GOOGLE + 
  head.meta.push({
    itemprop: 'name',
    content: 'Juicee Design'
  });

  head.meta.push({
    itemprop: 'description',
    content: 'Your application designed in just two weeks!'
  });

  head.meta.push({
    itemprop: 'image',
    content: 'https://d33wubrfki0l68.cloudfront.net/a7540785093925ad135b17da5e0a58614ebe6f6d/be8ae/assets/img/meta_media.c4351be3.png"'
  });

  // CANONICAL
  head.link.push({
    rel: 'canonical',
    href: 'https://www.juicee.design'
  });
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  // base components
  Vue.component('vertical-divider', VerticalDivider);
  Vue.component('divider', Divider);


  // home components
  Vue.component('hero', Hero);
  Vue.component('carousel', Carousel);
  Vue.component('tools', Tools);
  Vue.component('brands', Brands);
  Vue.component('work-flow', WorkFlow);
  Vue.component('call-to-action', CallToAction);
  Vue.component('pricing', Pricing);
  Vue.component('benefits', Benefits);
  Vue.component('contact', Contact);

};