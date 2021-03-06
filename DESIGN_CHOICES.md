* Use class React Component when event-listening and/or state management are needed; use functional React Component otherwise (e.g. the Landing component itself should be a functional Component with a useHistory() hook).

* Use inline styling when the styling is not to be reused for other files; else, write the styles in [style.scss](src/style.scss) and use className.
  * note: ALthough "sign-in" and "sign-up" currently share the same inline styling, it may differ in the future.