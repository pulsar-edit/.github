---
name: Regular Release Checklist
about: Checklist to ensure all Regular release steps are done and "deliverables" are
  published
title: Release Checklist for Regular Release v[version here, e.g. v1.130.0]
labels: ''
assignees: ''

---

# Regular Release v[version here, such as v1.130.0]

- [ ] ChangeLog (`CHANGELOG.md`) updated
- [ ] `welcome` package updated
- [ ] Blurb Text Complete (Comment Below)
- [ ] Version Bump PR Created
- [ ] Binaries Uploaded to GitHub (Including renamed binaries, and SHASUM file)
- [ ] Release Posted! 🎊
- [ ] Update Chocolatey Release
- [ ] Did the API change? If so, change `@pulsar-edit/types` and do a release with an equivalent major and minor version (incrementing the patch version as needed, but it should usually be `0`)
- [ ] Did the OS/version support change? If so, address it as part of the automated website PR
- [ ] Website Links updated
- [ ] Blog Post
- [ ] Discord Announcement
- [ ] Reddit Announcement
- [ ] Mastodon Announcement
- [ ] Lemmy Announcement
