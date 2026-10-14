---
name: Production commit verification
description: Verify the Git checkpoint associated with a live Replit deployment.
---

Match the successful deployment build ID to the `Replit-Commit-Deployment-Build-Id` trailer in Git history before reporting an exact production-associated commit.

**Why:** Deployment metadata and build logs can identify a build without exposing a Git SHA. Timestamp matching is only inference; the publish checkpoint trailer explicitly links the two.

**How to apply:** Inspect full Git commit messages for the matching trailer. Describe the result as the associated publish checkpoint, not proof that the build process checked out that commit: publishing may capture workspace changes before the checkpoint exists.
