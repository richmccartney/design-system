# spd-button

Button component for the Speedbird design system. Test

<!-- Auto Generated Below -->


## Usage

### Javascript

```html
<!-- Default -->
<spd-button>Default</spd-button>

<!-- Anchor -->
<spd-button href="#">Anchor</spd-button>

<!-- Name -->
<spd-button name="default">Default</spd-button>
<spd-button name="primary">Primary</spd-button>
<spd-button name="secondary">Secondary</spd-button>
<spd-button name="link">Link</spd-button>

<!-- Disabled -->
<spd-button disabled>Disabled</spd-button>



## Properties

| Property    | Attribute    | Description                                                                                                                                                                                                                                                                               | Type                                                           | Default     |
| ----------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ----------- |
| `ariaLabel` | `aria-label` | Defines the aria label content                                                                                                                                                                                                                                                            | `string`                                                       | `undefined` |
| `buttonId`  | `id`         | Sets the ID of the button element                                                                                                                                                                                                                                                         | `string \| undefined`                                          | `undefined` |
| `disabled`  | `disabled`   | If `true`, the user cannot interact with the button.                                                                                                                                                                                                                                      | `boolean`                                                      | `false`     |
| `download`  | `download`   | This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). | `string \| undefined`                                          | `undefined` |
| `href`      | `href`       | Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.                                                                                                                                                                   | `string`                                                       | `undefined` |
| `name`      | `name`       | Name type of the button                                                                                                                                                                                                                                                                   | `"default" \| "link" \| "negative" \| "positive" \| "primary"` | `'default'` |
| `rel`       | `rel`        | Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).                                                                                                    | `string \| undefined`                                          | `undefined` |
| `target`    | `target`     | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.                                                                                                                                       | `string \| undefined`                                          | `undefined` |
| `type`      | `type`       | The type of button                                                                                                                                                                                                                                                                        | `"button" \| "reset" \| "submit"`                              | `'button'`  |
| `value`     | `value`      | Sets a value on the button                                                                                                                                                                                                                                                                | `string \| undefined`                                          | `undefined` |


## Events

| Event     | Description                          | Type                |
| --------- | ------------------------------------ | ------------------- |
| `isBlur`  | Emitted when the button loses focus. | `CustomEvent<void>` |
| `isFocus` | Emitted when the button has focus.   | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
