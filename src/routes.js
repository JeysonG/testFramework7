import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

// RUTINA DE EJERCICIOS

import MaAbdomen from './pages/MaAbdomen/MaAbdomen.vue';
import MaAntebrazo from './pages/MaAntebrazo/MaAntebrazo.vue';
import MaBicep from './pages/MaBicep/MaBicep.vue';
import MaEspalda from './pages/MaEspalda/MaEspalda.vue';
import MaHombro from './pages/MaHombro/MaHombro.vue';
import MaPecho from './pages/MaPecho/MaPecho.vue';
import MaPierna from './pages/MaPierna/MaPierna.vue';
import MaTrapecio from './pages/MaTrapecio/MaTrapecio.vue';
import MaTricep from './pages/MaTricep/MaTricep.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/abdomen/',
    component: MaAbdomen,
  },
  {
    path: '/antebrazo/',
    component: MaAntebrazo,
  },
  {
    path: '/bicep/',
    component: MaBicep,
  },
  {
    path: '/espalda/',
    component: MaEspalda,
  },
  {
    path: '/hombro/',
    component: MaHombro,
  },
  {
    path: '/pecho/',
    component: MaPecho,
  },
  {
    path: '/pierna/',
    component: MaPierna,
  },
  {
    path: '/trapecio/',
    component: MaTrapecio,
  },
  {
    path: '/tricep/',
    component: MaTricep,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  }
];
