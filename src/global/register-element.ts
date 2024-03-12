import { App } from "vue";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/base.css";
import { ElCard } from "element-plus";

const components = [ElCard];

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
