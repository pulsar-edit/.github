# Public Messaging

This folder relates to, and controls the public messaging put out by the Pulsar team.

Due to our large presence across the web, there are many services or systems that contain small summaries of our project or who we are, that is very difficult to keep in sync.

The introduction of this series of documents will aim to have a unified, and single source of truth for what this messaging should be. Allowing Pulsar maintainers to quickly review all public messaging, update it as needed, or consider changes it may need.

It's important to understand that the documents here are only that, documents. Ensuring that the messaging shown here is present everywhere it says it is, and ensuring to never change that messaging without first modifying the text here, is enforced only be practice, to ensure messaging is consistent, and accurate.

## Specification

Each document in this directory should indicate where this public messaging is available. With a short name to indicate this.

At the top level of the document should be a YAML table to define some key information.

* title: This can be a more descriptive title of the messaging if needed.
* url: This should be the URL this text is available at.
* lastChange: The date of this document's last change. In format: `YYYY-MM-DD`
* markdownSupported: This optional boolean can help indicate if the location of this public messaging supports Markdown. Which can be helpful to know when editing the text via PR.

The rest of the document should be the text that is displayed.

## Public Messaging **NOT** within this directory

Some documents are intentionally left out of this directory:

* The `https://github.com/pulsar-edit` ORG ReadMe is left out, because this file is available in this same repo under `./profile/README.md`.
