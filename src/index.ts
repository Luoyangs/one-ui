import {
  // <% combination temp start %>
  Avatar,
  Button,
  Card,
  Icon,
  Grid,
  // <% combination temp end %>
} from '../packages';
import { VueConstructor } from 'vue';

const components = [
  // <% combination temp start %>
  Avatar,
  Button,
  Card,
  Icon,
  Grid,
  // <% combination temp end %>
];

const install = (Vue: VueConstructor, options?: any) => {
  components.forEach((component: any) => {
    if (component.install) {
      component.install(Vue, options);
    }
  });
};

export {
  // <% combination temp start %>
  Avatar,
  Button,
  Card,
  Icon,
  Grid,
  // <% combination temp end %>
};

export default {
  // <% combination temp start %>
  Avatar,
  Button,
  Card,
  Icon,
  Grid,
  // <% combination temp end %>
  install
};
