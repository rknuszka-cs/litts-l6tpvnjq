import { packd_export_3 } from 'https://srv.divriots.com/packd/lit,lit-html@next-major,lit/decorators.js,tslib';const { __decorate,__metadata } = packd_export_3;;
import { packd_export_0 } from 'https://srv.divriots.com/packd/lit,lit-html@next-major,lit/decorators.js,tslib';const { html,css,LitElement } = packd_export_0;;
import { packd_export_2 } from 'https://srv.divriots.com/packd/lit,lit-html@next-major,lit/decorators.js,tslib';const { customElement,property } = packd_export_2;;
let SimpleGreeting = class SimpleGreeting extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 0;
    }
    render() {
        return html `
      <button @click="${this.dec}">-</button>
      <span>${this.count}</span>
      <button @click="${this.inc}">+</button>
    `;
    }
    inc() {
        this.count++;
    }
    dec() {
        this.count--;
    }
};
SimpleGreeting.styles = css `
    * {
      font-size: 200%;
    }

    span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    button {
      width: 4rem;
      height: 4rem;
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
    }
  `;
__decorate([
    property(),
    __metadata("design:type", Object)
], SimpleGreeting.prototype, "count", void 0);
SimpleGreeting = __decorate([
    customElement('my-counter')
], SimpleGreeting);
export { SimpleGreeting };
//# sourceMappingURL=index.js.map