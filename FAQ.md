# Is Pulsar-Edit the same as Atom-Community?

While the original team that was working on Atom-Community is now the team creating Pulsar, they are not the same.

They are two separate forks of Atom. They have separate goals, separate contributors, and separate editors.

Now of course any open source developer knows that teamwork across organizations and repos is essential to succeed, so in that vein Pulsar-Edit uses contributions from Atom-Community, and hopefully in the future that reverses to let Atom-Community use the wins of Pulsar.

So with the above said if you have questions about Pulsar, or for the team working on it, please contact us on our [GitHub Discussions](https://github.com/orgs/pulsar-edit/discussions), the affected Repo, or on our [Discord Server](https://discord.gg/7aEbB9dGRT).

# Why Split with Atom-Community, isn't more effort on one project better than two?

While more effort on a single project is correct, since we are all volunteers here, effort on a project you believe in is most important.

Due to management, and goal differences a split was needed, since otherwise the team working on a successor of Atom would no longer be working together on any successor.

# What is the goal of Pulsar?

The goal of Pulsar is the same as many others, to create a successor of Atom, once it's sunset.

And for this successor of Atom, we have some hard beliefs on how this is accomplished, mainly through modernizing everything, making the barrier to entry of contributing as low as possible, to allow anyone to make the changes they want to see.

# Who is in charge of Pulsar and where its going?

Well nobody, and everyone. Pulsar is a volunteer and community driven project. While there are members that have administrative rights for the organization, or administrative rights for the repos within a team, a large consideration has been placed on feedback and teamwork. Where any large decisions use polls, allowing everyone to have a voice. And more minor decisions use Pull Requests that can be reviewed by everyone to provide feedback in the functionality or message of new contributions, ensuring that adequate feedback or time is utilized before committing changes.

# How do I contact members of Pulsar?

There are many ways, of course the classical Issues or Pull Requests on Repos is fine and well, additionally there are [discussions](https://github.com/orgs/pulsar-edit/discussions) org wide if needed. We are also all pretty active and responsive on our [Discord Server](https://discord.gg/7aEbB9dGRT), and messages there are always welcome. Additionally feel free to contact us through any of the below resources, or check out our [Org Wide Readme](https://github.com/pulsar-edit) as it's most up to date.

* [GitHub Discussions](https://github.com/orgs/pulsar-edit/discussions)
* [Discord Server](https://discord.gg/7aEbB9dGRT)
* [Reddit](https://www.reddit.com/r/pulsaredit/)
* [Mastodon](https://fosstodon.org/@pulsaredit)

# Why don't you rewrite Pulsar in **insert Popular Web App Framework or Language Here**

At this time, here is our current stance:

Firstly, moving away from Node and Electron will mean a compelete rewrite of the whole editor, something we do not have the manpower to do.

Additionally moving away from these technologies will break every single package we have. The ecosystem of Atom and it's community packages is a huge reason we wanted to keep it alive, rendering these completely useless removes one of the biggest advantages of the editor as a whole, and asking every single package author to rewrite their packages is not realistic.

Even all of our own packages will need to be rewritten, and all of our Native Packages, which are already some of the most combersome to maintain, will no longer function in this new environment.

Lastly, Atom is the editor that created Electron, while it may have it's idiosyncrasies, we feel that it seems almost wrong to ditch it for some hot new thing.

The focus of our team as seen by our mission statement is to modernize and improve Atom, bringing it to the 21st Century, and create a proud sucessor of Atom called Pulsar. It is not to create a brand new editor from scratch.
