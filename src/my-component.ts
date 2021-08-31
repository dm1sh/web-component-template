import { MyComponent, tagName } from "./MyComponent";

if (!window.customElements.get(tagName))
  window.customElements.define(tagName, MyComponent);

export { MyComponent, tagName };
