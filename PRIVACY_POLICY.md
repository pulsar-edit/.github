# Pulsar Edit Privacy Policy

The Pulsar team greatly values your, and everybody's, privacy. We therefore keep any collection of personal data to an absolute minimum,
but what little is collected across the entirety of the Pulsar Project will be detailed here.

Also please note that this Privacy Policy excludes any Community Packages that may be installed as those are created and maintained by a third party.

At the bottom of each service listed in this document there will be a "TLDR" to quickly sum up all data that is collected, how it's used, and who can use it.

Date of the Last Change to the Privacy Policy:
2022, December 10th

## Pulsar Backend (`https://api.pulsar-edit.dev`)

The Pulsar Backend is the service you connect to when using all Pulsar Packages on the web via `https://web.pulsar-edit.dev` and when using the built in Pulsar Settings View or [Package Manager](https://github.com/pulsar-edit/ppm) to interact with community packages.

All actions are subject to this service's Privacy Policy, including browsing, publishing, installing, deleting, starring, or unstarring packages.

Over the course of using the Pulsar Backend the following personal details are collected about you, and used as described below.

### What Information is Collected

* IP Address
* Browser Used and/or Version
* Operating System and/or Version

### How is this Information Collected

When you send a request of any kind to the Pulsar Backend this information is made available to us through the web request itself and the [User Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) of the request.

### What is Done with this Information

* Your IP address is logged from the Pulsar Backend to aid in later troubleshooting that may need to occur.
* Your Browser Details and Operating System Details are logged by the service used to Host the Pulsar Backend. But no further action is taken with this information once logged.

### Who has Access to this Information

The only individuals that have access to the above details are Pulsar's Core Admin Team in charge of the Pulsar Backend.

### How Long is this information Kept

The logs that contain the above information is kept in the cloud for 30 days before it is automatically deleted.

### TLDR

* The Pulsar Backend logs your IP Address, and your User-Agent Details of your Web Request when accessing it's service.
* These logs are kept for 30 days until they are deleted automatically.
* The only people that have access to these logs are Pulsar's Core Admin Team in charge of the Pulsar Backend.
* The only reason this data is used is to aid in troubleshooting when/if needed.

## Pulsar User Account

When you create a user account with Pulsar to star, or publish packages, you provide some details to Pulsar to create the account.
It should be made explicit that Pulsar does not store any type of credentials your account at any time.

### What Information is Collected

* GitHub Username
* GitHub Gravatar URL
* GitHub `node_id` (Think of your `node_id` like the random number assigned to you when making a user account. This is public information)

### How is this Information Collected

When you sign up with Pulsar, and choose to make an account, this is the data collected to make sure your account works, and is able to protect Packages from Malicious Actors pretending to be someone they're not.

### What is Done with this Information

This information is used to let you authenticate against the Pulsar Backend when publishing, deleted, or starring a package.

### Who has Access to this Information

The only people who have access to this information are Pulsar's Core Admin Team in charge of the Backend.

### How Long is this Information Kept

The above details will be kept until either you request deletion of your account, or there is a built in supported method to delete your Pulsar User Account.

### How do I have this Information Deleted

To request removal of the above details feel free to contact the Pulsar Core Admin Team, for quicker response times, contact use through the [Pulsar Discord](https://discord.gg/7aEbB9dGRT).
Or you can contact us through any of the [supported methods](https://pulsar-edit.dev/community.html), or even via email to admin@pulsar-edit.dev

### TLDR

* Creating a Pulsar User Account provides Pulsar-Edit with your GitHub name, GitHub Gravatar URL, and GitHub `node_id`.
* This information is kept until you request deletion or there is a built in way to delete your Pulsar User Account.
* The only people who can access this information is the Pulsar Core Admin Team.
* This information is purely there to help you use the Pulsar Backend to publish, delete, star, or otherwise interact with Packages.
* Pulsar User Accounts contain **Zero** details of how you log in, or any type of API, OAuth, or other token to access your account.

## Pulsar Website (`https://pulsar-edit.dev`)

The Pulsar Website is a service you connect to anytime you visit our website.

This Website is hosted on [GitHub Pages](https://pages.github.com/) which while conveinent for us, also means that we have no built in mechanism to access any personal data of any kind through this service.
That is to say we don't; no analytics are set up on the website, and no extra code is run on the website to collect any data.

### TLDR

* The Pulsar Website Collects **Zero** Data about you, or where you are.
* It does not Log anything, save anything, or extract anything.
* It's just a basic website.

## Pulsar Editor

The main Pulsar Application, available [here](https://github.com/pulsar-edit/pulsar) is the program you use anytime you launch Pulsar, or edit text within it.

While [Atom](https://atom.io) the original implementation of the Editor did collect telemetry and metrics about the users, when we began work on the editor one of the first things that we removed was the [telemetry](https://github.com/pulsar-edit/pulsar/pull/40).

That is to say now, the Pulsar Editor collects **Zero** information about its users.

### TLDR

* The Pulsar Editor Collects **Zero** Data about you, or where you are.
* It does not log anything, send anything to remote servers, or extract anything.
* You can view when this was removed from our upstream [here](https://github.com/pulsar-edit/pulsar/pull/40).
