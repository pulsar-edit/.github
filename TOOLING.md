# Pulsar tooling

Here you will find a list of tools used by the Pulsar team and information about them.

## Continuous Integration

### [Cirrus CI](https://cirrus-ci.com/github/pulsar-edit/pulsar)

Cirrus CI is used for Pulsar's continuous integration as well as for building application binaries.

### [Codacy](https://app.codacy.com/gh/pulsar-edit/repositories)

Codacy is used to scan committed code for any issues that may have been missed.

Currently though Codacy is only used on the following repositories:

* [ppm](https://app.codacy.com/gh/pulsar-edit/ppm/dashboard)
* [pulsar](https://app.codacy.com/gh/pulsar-edit/pulsar/dashboard)
* [background-tips](https://app.codacy.com/gh/pulsar-edit/background-tips/dashboard)
* [autocomplete-plus](https://app.codacy.com/gh/pulsar-edit/autocomplete-plus/dashboard)

## i18n (Internationalization)

### [Crowdin](https://crowdin.pulsar-edit.dev/)

Crowdin will be used for Pulsar's internationalization efforts but exact details on this are still pending.

## Package Managers

While most repositories you can easily tell what Package Manager is being used by checking for a specific lock file, there are some execptions to this that should be noted.

* [pulsar](https://github.com/pulsar-edit/pulsar) uses `yarn` as it's Package Manager.
* [pulsar-edit.github.io](https://github.com/pulsar-edit/pulsar-edit.github.io) uses `pnpm` as it's Package Manager.

## Cloud Database

The [package-backend](https://github.com/pulsar-edit/package-backend) currently uses DigitalOcean to host the PostgreSQL Pulsar Package Repositories data in the cloud.

## Cloud Compute

Both the [package-backend](https://github.com/pulsar-edit/package-backend) and [package-frontend](https://github.com/pulsar-edit/package-frontend) use Google App Engine to host the compute instance of these websites in the cloud.

## Additional Testing tools

### [Action Pulsar Dependency Tester](https://github.com/marketplace/actions/action-pulsar-dependency-tester)

Pulsar Dependency Tester is a GitHub action used to test changes of a core Pulsar Dependency if you need to determine how your core package dependency will run on the current version of the Pulsar Editor.

This GitHub Action is a direct Pulsar replacement of the previous Action to test Atom Dependencies [Setup Atom](https://github.com/marketplace/actions/setup-atom).
