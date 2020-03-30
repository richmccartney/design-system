import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'spd-header',
  styleUrl: 'header.css',
  shadow: true
})
export class Header {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
