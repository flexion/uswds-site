{% include accessibility-tests/a11y-note.html %}

{:.usa-content-list}
- **Convey relationship.** If not using a list element, give the parent element `role="group"` in order to convey to screen readers that actions are part of a group. If using as part of a toolbar, use `role="toolbar"`.
- **Use `aria-label` to give the buttons a useful name.** Some contexts may require additional context provided to screen readers.
- **Use the `<button type="button">` element.** Don't use `<a>` because it's a link. Don't use `<span>` because screen readers won't know it's a usable button.
