import htmlTemplate from "./template.html";

export const tagName = "my-component";

export class MyComponent extends HTMLElement {
  #shadow: ShadowRoot;

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: "open" });
    this.#shadow.innerHTML = htmlTemplate;
  }

  connectedCallback() {}

  disconnectedCallback() {}
}
