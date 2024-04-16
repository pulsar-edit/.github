# Release Checklist for Pulsar

A checklist for releases. This is for the "Regular" releases. (Rolling releases happen automatically.)

## Inputs (Preparation Tasks):

- Candidate commit for the release, with the desired state of the app, on `master` branch (make sure the app is actually ready for release)
- Changelog up to date with changes since last release
- Blurb text (some flavor text and info about what happened this release, for GitHub release and blog post)

## Outputs:

- Changelog (within the welcome package + GitHub Release and blog post)
- Version bump PR
- GitHub Release
  - With binaries
- Update download links on website
- Pulsar Chocolatey Release
- Blog Post
- Social posts
  - Discord announcement
  - Reddit post
  - Mastodon post
  - Lemmy post

## Steps:

Note: after the "Changelog" steps are done, the remaining steps can be done in whatever order.

- Prepare the Changelog.
  - We should make sure last-minute PRs being included in the release are also in the changelog.

- Update the Changelog in-app (in the `welcome` package)
  - Example PR: https://github.com/pulsar-edit/pulsar/pull/489


- Do the version bump pull request.
  - (Open this once fairly confident the app is ready to roll out, after the in-app Changelog PR is merged -- make sure to include any last-minute changes. If more last-minute changes happen, update the PR and potentially the tag, see next bullet point.)
  - This should PR be opened from a branch up to date with `master`, plus one commit which changes the version in package.json to the version you're going to release. (It is recommended that the name of this branch be something unique compared to the tag name for the release (see next bullet point below), to avoid conflicts in git. Such as this example branch name: `v1.107.0-release`. Adding `-release` distinguishes (disambiguates) the branch name from the tag name, making the repo easier to work with.)
    - Example commands to create a new branch based off of upstream `master` branch: `git remote update` (update your local knowledge/data for the remote repos) `git switch -c v1.107.0-release origin/master` (create and switch to (in other words, "check out") a branch called `v1.107.0-release` that is up to date with `master` branch at the upstream repo.)
    - Edit the version string in `package.json` and commit that change. The new version string should end in the desired number, with no `-dev` at the end. Such as: `1.107.1`.
    - Tag that "version update" commit with the tag name starting with v and then the version number of the release. (For example v1.103.0)
      - Example commands: `git tag v1.106.0` and then `git push origin v1.106.0`
  - Let CI run, grab the generated binaries from Cirrus, since we're going to upload these to GitHub Releases as well.
  - Before actually merging this PR, change the version number to end with -dev again, for the sake of the Rolling releases that will build later on `master` branch.
  - Example PR: https://github.com/pulsar-edit/pulsar/pull/430

- Do the GitHub release, suggested to include the blurb text and the changelog.
  - Can start drafting this any time.
  - Recommended to only have one person editing it at once, to avoid overwrites and lost edits
  - Once we have binaries generated (see the "pull request" steps above), someone can start downloading these and re-uploading them to GitHub Releases under the draft release
  - Post the GitHub release! 🎉
  - Example release: https://github.com/pulsar-edit/pulsar/releases

- Draft and post the blog post, suggested to be based on the blurb text plus the changelog.
  - See past blog post PRs for examples
  - Example PR: https://github.com/pulsar-edit/pulsar-edit.github.io/pull/204

- Release the new Version on Chocolatey (More Details on the [`pulsar-edit/pulsar-chocolatey` Readme](https://github.com/pulsar-edit/pulsar-chocolatey#automated-releases))
  - Create an Issue on `pulsar-edit/pulsar-chocolatey`, where the title is the new version (e.g. `1.108.0`)
  - Once this issue is posted, add the label `release`.
  - A PR will be automatically created, with the updated package information.
  - Let tests run, view the test summary page to confirm the version that's been installed, via the changes.
  - If tests are successful merge the pull request
  - Trigger the GitHub Action `Chocolatey Publish Pulsar Package` manually to publish the new version
- Update the download links on the website
  - This will at least need updates for the new version number.
  - Recommended to verify the exact filenames of all binaries, in case some of them may have changed, such as if new or different formats were built this release. Adjust the download page as-needed if new/different formats were built than last time.
  - Update the `Current version is...` value to the new version.
  - Can optionally be done in the same PR as the blog post (see "blog post" steps just above)
  - Example PR: https://github.com/pulsar-edit/pulsar-edit.github.io/commit/9f2c3e611756ab9d17ab74fb764be584532439db#diff-29528fb31258a56dda5f112cb5780226ebbf8016cadbdeb4948ad84b89ccf533

- Write posts on the various social medias we have.
  - Mastodon: https://fosstodon.org/@pulsaredit
  - Reddit: https://old.reddit.com/r/pulsaredit/
  - Discord announcement: https://discord.com/channels/992103415163396136/992231561724436591

## How to...

### How to rename binaries

_\[NOTE: Feel free to skip this section. This section is now automated by a script in CI. This section of the guide remains as a reference "for reference's sake" -- if you want to know how it's done manually, or context for how this naming convention came about, feel free to read, otherwise know it is handled automatically in CI._

_See the script: https://github.com/pulsar-edit/pulsar/blob/master/script/rename.js, and the PR that introduced it, for explanation/context: https://github.com/pulsar-edit/pulsar/pull/675. Original section continues below:\]_

Here is the naming scheme we have been using, which was initially suggested by @confused-techie. Copy-pasted from here: https://discord.com/channels/992103415163396136/1064364297033093150/1064393610910511197

Add prefixes to the binary names output by electron-builder in Cirrus, like so:

* ARM.Linux.XX
* Intel.Mac.XX
* Linux.XX
* Silicon.Mac.XX
* Windows.XX

Also, spaces " " in the Windows binaries' filenames are converted to periods "."

Example bash one-liner to rename all not-yet-renamed binaries in the current folder with the Windows-specific prefix, replacing any spaces in the filename with periods:

```bash
for file in *; do if [[ $file == p* || $file == P* ]]; then mv "${file}" "Windows.${file// /.}"; fi; done
```

If you like, you can copy binaries into a folder one platform at a time, and successively batch rename the given platform's binaries in one go with this one-liner. Just be sure to replace the `Windows.` in the example one-liner with the particular prefix from the list above that you're currently renaming... And not try to rename more than one platform's binaries at the same time with this method (since it'll do _all_ not-yet-renamed binaries (any beginning with "p" or "P") and won't distinguish between different platforms' binaries).

(Note: There has been an attempt at a consensus naming scheme, but it is stalled at the moment this is being written: https://github.com/orgs/pulsar-edit/discussions/134).

### How to make SHA256SUMS.txt

Just run a shasum program set to SHA256 algorithm on all files in the dir with the renamed binaries, redirecting the output of this shasum command to a file...

Example on macOS:

```zsh
shasum -a 256 * | tee SHA256SUMS.txt
```

## Release Day Template

On release day it may be helpful to create a new issue with the following template. Which allows contributors to communicate in a central location about executing the release, and allows easy communication about the steps of the release that are completed.

```markdown
# Regular Release

- [ ] ChangeLog updated (`CHANGELOG.md` and `welcome` package)
- [ ] Blurb Text Complete (Comment Below)
- [ ] Version Bump PR Created
- [ ] Binaries Uploaded to GitHub (Including renamed binaries, and SHASUM file)
- [ ] Release Posted! 🎊
- [ ] Update Chocolatey Release
- [ ] Website Links updated
- [ ] Blog Post
- [ ] Discord Announcement
- [ ] Reddit Announcement
- [ ] Mastodon Announcement
- [ ] Lemmy Announcement
```
