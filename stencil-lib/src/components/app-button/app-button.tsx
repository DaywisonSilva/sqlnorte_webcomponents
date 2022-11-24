import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'app-button.css',
  shadow: true,
})
export class MyComponent {
  render() {
    return (
      <Host>
        <button class="button">
          <slot></slot>
        </button>
      </Host>
    );
  }
}
