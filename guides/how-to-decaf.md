# How to Decaffeinate Code

This guide serves as the template for how to properly decaffeinate code for the Pulsar Edit organization code base, that is any repo under the `pulsar-edit` org on GitHub.

This guide informs contributors not only the best practices to proper decaffeination, but how to achieve readable, and **reviewable** diffs, to ensure their efforts are accepted and merged.

## What is Decaffeination?

The process of **Decaffeinating (decaf)** a codebase, is the part automated, part manual task of turning valid CoffeeScript code into valid and functionally identical JavaScript code.

## Who is this for and what will you learn?

This guide is made for any new contributors to Pulsar, or existing contributors who have never decaffeinated code, that want to help in the projects goals of converting all of our CoffeeScript code to JavaScript.

This guide should teach you the following:

  * Know what Decaffeination is.
  * Best Practices to decaf code.
  * Best Practices to decaf code for Pulsar.
  * How to make your decaf work easy to review for maintainers.

## Overview

This section covers the general overview and workflow you should adopt to successfully decaf some code.

But first to do so, there is one big rule:

  * No matter what, any PR that decafs **both** the source files of a repo/package **and** the specs cannot be accepted. Since decaffing code can be tricky, we need to ensure we catch any errors that are being produced. If both the specs are decaffed at the same time the source files are, it is impossible to tell if the process happened successfully, and which aspect is producing any test failures or errors we see later on. Generally, if a repo/package needs both the specs and source files decaffed, they should each occur as their own unique PRs.

Secondly, here is a general recommendation when choosing what to decaf:

  * When you decide to decaf a repo/package, it's a good idea to decaf the entirety of what you are working on. Decaffeinating only a single spec file or single source file doesn't do us much good, and in many cases may be totally invalid on its own, so it's highly recommended to, within a single PR, decaf the entirety of the source or spec files.

With those rules/recommendations out of the way, below is the general guide that should be followed:

1. As you might expect, decide what you are going to decaffeinate. To help make everyone's lives easier, you should ensure the file you are decaffing doesn't have any open PRs against it, or that it is at risk of receiving major changes anytime soon. If you aren't sure of this, feel free to ask the Pulsar maintainers.

2. Once you've decided what repo/package you are going to decaf, then decide if you want to decaf the specs or source files.

3. Now with the choices out of the way, you can get started. You'll want to make sure to create the Machine Decaf branch (more on that later) but this would be a branch that exists on the remote repo that contains only machine decaffed files. (If you don't have permissions to make this, feel free to ask the Pulsar maintainers). While we could be done there, the machine decaffed code is valid, but very unreadable and difficult to work with, so it requires manual intervention to improve.

4. To start you manual decaffeination, create a fork of the machine decaf files branch, and apply any changes needed on top of it (more on that later). Once you've applied all changes you need to, to improve the machine decaf work you can finally submit a PR.

5. When submitting the PR of your manual decaf work, ensure the target branch is the machine decaf branch. Having this be the target allows maintainers to quickly and painlessly review your work, and check for any actual changes that you've made.

6. Finally, once your manual decaf work is approved, it should be merged directly into the `master`/`main` branch on that repo. So that your decaf changes are applied directly to the source. From here you can cleanup by deleting the machine decaf branch.

## Machine Decaf

Like mentioned earlier, using automated tools to decaf CoffeeScript produces valid, yet unreadable and unmaintainable code.

To produce this new code in a way that we know is functional, you'll want to keep lookout for a few things:

First note, that in general using CoffeeScript 2.x (the latest version as of this writing) is totally valid. But if you find any tests are failing with only machine decaf code, it may be because there are very few edge cases where CoffeeScript code decafs differently from 2.x tooling and 1.x tooling. Which, because nearly all the CoffeeScript for Atom was written back in the CoffeeScript 1.x days, we need to account for. You can always check if a particular repo/package is using 1.x CoffeeScript tooling by checking the version of `coffee-script` or `coffeescript` within the relevant `package.json` either `dependencies` or `devDependencies`. If those are within the 1.x range, you should use older tooling to decaf. While keeping in mind that the 1.x CoffeeScript decaf tooling will usually strip any comments from the code, and will have to be added back in.

## Manual Decaf

The process of turning automatically generated JavaScript code into usable code via manual decaf work, can be somewhat subjective. That means that while there are a few obvious choices, there are others that may come up based on who is reviewing that section of code and those choices should be respected. There is no one correct way to manually decaf code, as the goal is to make it maintainable and readable, which means different things to different people.

But there are some things to do that can, generally, be universally agreed on:

  * Turn any usage of [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) to [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) or [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) as needed.
  * Replace Nested [Ternary Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) with `if` statements.
  * Remove `return` statements when it's unnecessary.
  * Remove useless arrays whenever possible.
  * Replace `for` loops with [`for...of loops`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) when it makes sense to do so.
  * Use [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) whenever possible, and it makes sense to do so.
  * Remove unneeded `ref` variables.
  * Remove [`do` blocks](https://devdocs.io/coffeescript~1/index#loops) and use `let` or `const` instead.

## Resources

Now that you fully understand what Decaffing a codebase is, what that looks like, and how best to do it for Pulsar, the following list contains many links that might be helpful either as resources to directly aide in this process, or for reference into what has been done before:

  * [CoffeeScript 1.12.7](https://www.npmjs.com/package/coffeescript/v/1.12.7) on GitHub that can be used to automatically decaf CoffeeScript 1.x code.
  * [Decaffeinate Project v4.0.0](https://github.com/decaffeinate/decaffeinate/releases/tag/v4.0.0) the Decaffeinate Project for CoffeeScript 1.x tooling.
  * [Decaffeinate Project latest](https://github.com/decaffeinate/decaffeinate) the Decaffeinate Project for CoffeeScript 2.x tooling.
  * [Example PR](https://github.com/pulsar-edit/pulsar/pull/443) of successfully decaffing a core bundled package.
  * [Example PR](https://github.com/pulsar-edit/ppm/pull/8) of what **not** to do, in this case because the source files were decaffed at the same time as the specs. Making it impossible to know if everything was successful.
