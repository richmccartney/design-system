import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
  Listen,
  Event,
  EventEmitter
} from '@stencil/core'
import { AnchorInterface, ButtonInterface } from '../../utils/element-interface';

@Component({
  tag: 'spd-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button implements ComponentInterface, AnchorInterface, ButtonInterface {
  @Element() el: HTMLElement;

  private form = this.el.closest('form')
  private submitButtons: any | undefined = this.form?.getElementsByClassName('submit-button');

  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop({
    reflect: true,
    attribute: 'disabled'
  })
  disabled = false

  /**
   * This attribute instructs browsers to download a URL instead of navigating to
   * it, so the user will be prompted to save it as a local file. If the attribute
   * has a value, it is used as the pre-filled file name in the Save prompt
   * (the user can still change the file name if they want).
   */
  @Prop() download: string | undefined;

    /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  @Prop() target: string | undefined;

  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered.
   */
  @Prop({
    reflect: true,
    attribute: 'href'
  })
  href: string

  /**
   * Specifies the relationship of the target object to the link object.
   * The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
   */
  @Prop() rel: string | undefined;

  /**
   * Sets the ID of the button element
   */
  @Prop({
    reflect: true,
    attribute: 'id'
  })
  buttonId?: string

  /**
   * Defines the aria label content
   */
  @Prop({
    reflect: true
  }) ariaLabel: string

  /**
   *  Name type of the button
   */

  @Prop() name: 'default' | 'primary' | 'positive' | 'negative' | 'link' =
    'default'

  /**
   * The type of button
   */
  @Prop({
    reflect: true,
    attribute: 'type'
  })
  type: 'submit' | 'reset' | 'button' = 'button'

  /**
   * Sets a value on the button
   */
  @Prop() value: string | undefined;

  /**
   * Emitted when the button has focus.
   */
  @Event() isFocus!: EventEmitter<void>;

  /**
   * Emitted when the button loses focus.
   */
  @Event() isBlur!: EventEmitter<void>;

  componentWillLoad() {
    // Adds a hidden button to the DOM so normal form
    // functions can proceed.
    if (this.type === 'submit' && this.form) {
      const fakeButton = document.createElement('button')
      fakeButton.type = this.type
      fakeButton.style.display = 'none'
      fakeButton.className = 'submit-button'
      this.form.appendChild(fakeButton)
    }
  }

  componentDidLoad() {
    if (this.submitButtons.length > 1) {
      console.warn(`Error: Multiple Button components set with type="submit" found in ${this.form}`)
    }
  }

  componentDidUnload() {
    if (this.type === 'submit' && this.form) {
      document.querySelector('.submit-button')?.remove()
    }
  }

  /**
   * Listening for a click event on the button
   * 
   * @param ev event
   */
  @Listen('click', { capture: true })
  handleClick(ev: Event) {
    this.submitEvent(ev)
  }

  /**
   * Listening for a keyboard event on the button
   * 
   * @param ev 
   */
  @Listen('keydown', { capture: true })
  handleKeyDown(ev: KeyboardEvent) {
    this.submitEvent(ev)
  }

  /**
   * 
   * @param ev
   */
  private navigateLink = (ev: any) => {
    if (ev.type === 'click' || ev.key === 'Enter') {
      window.open(this.href, this.target ? this.target : '_self');
    }
  }

  /**
   * 
   * @param ev
   */
  private submitEvent = (ev: any) => {
    if (this.href) {
      this.navigateLink(ev)
    } else if (this.type === 'submit') {
      const button: any = document.querySelector('.submit-button')

      if (this.form && button) {
        ev.preventDefault()
        button.click()
      }
    }
    return
  }

  private onBlur = () => {
    this.isBlur.emit()
  }

  private onFocus = () => {
    this.isFocus.emit()
  }

  render() {
    const { disabled, href, name, ariaLabel } = this
    const tagType = href !== undefined ? ('link' as any) : 'button'

    return (
      <Host
        aria-disabled={disabled ? 'true' : 'false'}
        aria-label={ariaLabel}
        class={{
          [`${name}`]: true,
          ['is-disabled']: disabled
        }}
        disabled={disabled}
        role={tagType}
        tabindex="0"
        value={this.value}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      >
        <slot></slot>
      </Host>
    )
  }
}
