import { createApp } from "vue";
import App from "./App.vue";

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import Panel from "primevue/panel";
import Fieldset from "primevue/fieldset";
import Card from "primevue/card";
import Tag from "primevue/tag";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Timeline from "primevue/timeline";
import Image from "primevue/image";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Message from "primevue/message";
import Divider from "primevue/divider";
import Galleria from "primevue/galleria";
import ScrollPanel from "primevue/scrollpanel";

import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/lara-light-teal/theme.css";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import "./scss/_fonts.scss";

import { router } from "./router/index";
import PrimeVue from "primevue/config";
import { apolloProvider } from "./apollo/index.js";
import SvgIcon from "@jamescoyle/vue-icon";
import MasonryWall from "@yeger/vue-masonry-wall";
import Markdown from "vue3-markdown-it";
import "bootstrap";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(apolloProvider);
app.use(MasonryWall);

app.component("MarkdownBase", Markdown);

app.component("InputText", InputText);
app.component("Button", Button);
app.component("Menubar", Menubar);
app.component("Panel", Panel);
app.component("Fieldset", Fieldset);
app.component("Card", Card);
app.component("Tag", Tag);
app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);
app.component("Timeline", Timeline);
app.component("Image", Image);
app.component("TabView", TabView);
app.component("TabPanel", TabPanel);
app.component("Message", Message);
app.component("Divider", Divider);
app.component("Galleria", Galleria);
app.component("ScrollPanel", ScrollPanel);

app.component("SvgIcon", SvgIcon);

app.mount("#app");
