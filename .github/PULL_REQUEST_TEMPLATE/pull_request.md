---
name: Pull Request 
about: Open a PR for this project
---

### Requirements

* Filling out the template is required. Any pull request that does not include enough information to be reviewed in a timely manner may be closed at the maintainers' discretion.
* All new code requires tests to ensure against regressions.
  * However, if your PR contains zero code changes, such as in the event of a PR for Markdown files. Pulsar [PR 109](https://github.com/pulsar-edit/pulsar/pull/109) allows for the use of `[skip-ci]`, `[skip-package-ci]`, or `[skip-editor-ci]` at the start of your PR title.
  * This only disables the workflows for the `pull_request`, the workflows will still run after merging.

### Description of the Change

<!--

We must be able to understand the design of your change from this description. If we can't get a good idea of what the code will be doing from the description here, the pull request may be closed at the maintainers' discretion. Keep in mind that the maintainer reviewing this PR may not be familiar with or have worked with the code here recently, so please walk us through the concepts.

-->

### Alternate Designs

<!-- Explain what other alternates were considered and why the proposed version was selected -->

### Benefits

<!-- What benefits will be realized by the code change? -->

### Possible Drawbacks

<!-- What are the possible side-effects or negative impacts of the code change? -->

### Applicable Issues

<!-- Enter any applicable Issues here -->
