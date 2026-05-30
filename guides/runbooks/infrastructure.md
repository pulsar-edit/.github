# Infrastructure

This document attempts to cover the unseen systems that hold Pulsar in place.
Who has access to them, and what they actually do.

## DNS Records

### Description

The Pulsar domain's DNS records are all stored and hosted with Cloudflare. Cloudflare is our primary and only nameserver.

It may be worth noting that originally our nameserver was with Google Domains, but during Squarespace's acquisition we migrated everything over to Cloudflare.

### Access

Currently, confused-Techie is the only person with access to this resource.

## NPM | pulsar-edit Organization

### Description

The NPM pulsar-edit organization is obviously hosted by NPM but controls what accounts have the ability to publish to NPM under our organization. As any accounts with access can have permission to publish under the organization.

### Access

Currently, confused-Techie, Meadowsys, and kaosine all have access to this resource, although to varying degrees.

## Database | Pulsar Package Registry

### Description

The Pulsar Package Registry database is hosted and maintained by DigitalOcean. This power's the entire digital record of every single Pulsar Package, and Pulsar User account, as well as some misc. data used during the signup flow.

### Access

Currently confused-Techie and mauricioszabo have access to this resource.

## Web Hosting | pulsar-edit.dev

### Description

GitHub Pages currently is the host of our main website, meaning it's simple and free.

### Source Code

`pulsar-edit/pulsar-edit.github.io`

### Access

Whatever access is available to the repository `pulsar-edit/pulsar-edit.github.io`.

## Web Hosting | docs.pulsar-edit.dev

### Description

GitHub Pages currently is the host of our documentation website.

### Source Code

`pulsar-edit/documentation`

### Access

Whatever access is available to the repository `pulsar-edit/documentation`

## Web Hosting | blog.pulsar-edit.dev

### Description

GitHub Pages currently is the host of our blog website.

### Source Code

`pulsar-edit/blogumentation`

### Access

Whatever access is available to the repository `pulsar-edit/blogumentation`.

## Web Hosting | api.pulsar-edit.dev

### Description

Google Cloud Platform's App Engine currently hosts and runs the backend API for the Pulsar Package Registry.

### Source Code

`pulsar-edit/package-backend`

### Access

Currently, confused-Techie is the only person with access to this resource.

## Web Hosting | web.pulsar-edit.dev

### Description

Google Cloud Platform's Cloud Run currently hosts and runs the frontend to the Pulsar Package Registry.

### Source Code

`pulsar-edit/package-frontend`

### Access

Currently, confused-Techie is the only person with access to this resource.

## Web Hosting | crowdin.pulsar-edit.dev

### Description

This is a simple domain redirect to our organizational Crowdin instance. Which is intended to help us translate and localize Pulsar.

### Access

Currently, Meadowsys and confused-Techie have access to the Crowdin dashboard.

## Web Hosting | download.pulsar-edit.dev

### Description

Google Cloud Platform's Cloud Run currently hosts and runs the download microservice. This microservice takes some arguments and returns the newest version of the Pulsar installer according to the parameters provided, redirecting to the correct download link.

### Source Code

`pulsar-edit/package-frontend/microservices/download`

### Access

Currently, confused-Techie is the only person with access to this resource.

## Web Hosting | image.pulsar-edit.dev

### Description

Google Cloud Platform's Cloud Run currently hosts and runs the image microservice. This microservice provides social media images for community packages.

### Source Code

`pulsar-edit/package-frontend/microservices/social-cards`

### Access

Currently, confused-Techie is the only person with access to this resource.

## Web Hosting | webhooks.pulsar-edit.dev

### Description

Google Cloud Platform's Cloud Run currently hosts and runs the webhook microservice. This microservice modifies GitHub Sponsors webhooks into a format Discord can accept and forwards them to Discord for display in our server.

### Source Code

`pulsar-edit/package-frontend/microservices/webhooks`

### Access

Currently, confused-Techie is the only person with access to this resource.

## Email | xx@pulsar-edit.dev

### Description

Tuta currently hosts and provides free email for the Pulsar organization. Allowing us to have `admin@pulsar-edit.dev` as an email accessible to our users.

### Access

Currently, confused-Techie, Daeraxa, Meadowsys, and Spiker985 all have access to this shared mailbox.
