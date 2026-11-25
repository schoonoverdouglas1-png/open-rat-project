© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# INSTALL-PLAN — Android toolchain for building Ember Browser

**Status: STAGED, not executed.** Written Nov 13, 2026. On that date the box was verified to have **no Java, no Gradle, no Kotlin, and no Android SDK** (`which java javac gradle kotlinc` all empty; `ANDROID_HOME` unset; no `~/Android`, `/opt/android*`, or `/usr/lib/android-sdk`). Douglas ordered the app built the same day; per his standing agreement (Nov 10) and the Reversibility Rule, the toolchain install runs only as this plan — snapshot first, exact lists, undo recorded before anything changes.

> Sizes marked *(est.)* are published figures for Ubuntu 24.04 / Google's SDK as of late 2026. The plan confirms real numbers with a dry run (Step 1) **before** installing, and the build does not proceed on estimates alone. Disk is not a constraint: 113 GB free verified Nov 13, 2026; total footprint below is ~1.2–1.6 GB.

---

## Step 0 — Reversibility snapshot (do first, always)

```bash
dpkg --get-selections > ~/workspace/ember-browser/pre-install-dpkg-selections.txt
dpkg -l               > ~/workspace/ember-browser/pre-install-dpkg-l.txt
apt-mark showmanual   > ~/workspace/ember-browser/pre-install-apt-manual.txt
```

Undo is defined against these three files: anything installed later that is not in them comes back off; everything in them stays.

## Step 1 — Refresh lists and dry-run the apt install (installs nothing)

```bash
sudo apt-get update
sudo apt-get install -s openjdk-17-jdk-headless unzip
```

Record the dry run's package list and download size into `install-record.md` in this folder. That list — not this plan's summary — becomes the exact undo list.

**Exact apt packages intended (2 named + their dependencies as the dry run lists them):**

| Package | Why | Size (est.) |
|---|---|---|
| `openjdk-17-jdk-headless` | AGP 8.5 requires JDK 17 to run | ~47 MB download, ~190 MB installed |
| `openjdk-17-jre-headless` | dependency of the JDK | ~48 MB download, ~200 MB installed |
| (JDK shared deps: `java-common`, `libxi6`, etc., per dry run) | dependencies | small |
| `unzip` | unpack SDK/Gradle zips (skip if already present) | ~0.2 MB |

**Do NOT `apt install gradle`** — Ubuntu 24.04's Gradle is far too old for AGP 8.5. Gradle comes from the official distribution zip in Step 3.

## Step 2 — Android SDK (user-space only, no root, no dpkg)

All of this lives under two directories that did not exist before, which is what makes the undo clean:

```bash
mkdir -p ~/ember-android-tools ~/Android/Sdk/cmdline-tools
cd ~/ember-android-tools
wget https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip   # ~150 MB (est.)
unzip commandlinetools-linux-11076708_latest.zip -d ~/Android/Sdk/cmdline-tools
mv ~/Android/Sdk/cmdline-tools/cmdline-tools ~/Android/Sdk/cmdline-tools/latest
export ANDROID_HOME=~/Android/Sdk
export PATH=$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$PATH
yes | sdkmanager --licenses
sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0"
```

| Component | Size (est.) |
|---|---|
| cmdline-tools zip | ~150 MB download, ~300 MB unpacked |
| platform-tools (adb, fastboot) | ~25 MB |
| platforms;android-34 | ~65 MB |
| build-tools;34.0.0 (aapt, apksigner, zipalign) | ~60 MB |

## Step 3 — Gradle 8.7 standalone (user-space)

```bash
cd ~/ember-android-tools
wget https://services.gradle.org/distributions/gradle-8.7-bin.zip   # ~125 MB (est.)
unzip gradle-8.7-bin.zip
export PATH=~/ember-android-tools/gradle-8.7/bin:$PATH
java -version   # must say 17.x
gradle -v       # must say Gradle 8.7
```

## Step 4 — Point the project at the SDK and generate the wrapper

```bash
cd ~/workspace/ember-browser
printf 'sdk.dir=%s/Android/Sdk\n' "$HOME" > local.properties
gradle wrapper --gradle-version 8.7    # generates gradlew + gradle/wrapper/gradle-wrapper.jar
```

## Step 5 — Build and verify (evidence, not adjectives)

```bash
./gradlew assembleDebug
cp app/build/outputs/apk/debug/app-debug.apk ~/workspace/ember-browser/EmberBrowser-debug.apk
ls -la ~/workspace/ember-browser/EmberBrowser-debug.apk
$ANDROID_HOME/build-tools/34.0.0/aapt dump badging EmberBrowser-debug.apk | head -5
$ANDROID_HOME/build-tools/34.0.0/apksigner verify --print-certs EmberBrowser-debug.apk
```

Expected verify output: package `org.purplerat.emberbrowser`, versionName `0.1.0`, one signer (the auto-generated Android debug key at `~/.android/debug.keystore`). **The APK is reported as built only with this output in hand.**

Installing on Douglas's Pixel 7 Pro is a later together step (his phone, his hand — e.g. `adb install` after he enables it, or opening the APK file on the phone). Not part of this plan's execution.

## Step 6 — THE UNDO MANIFEST (undoing everything above, exactly)

Run only on Douglas's explicit word at that time (the Guard: no automated destructive action — this section is a *recorded path*, not a job):

1. **apt:** `sudo apt-get purge -y openjdk-17-jdk-headless openjdk-17-jre-headless unzip` — using the *install-record.md* dry-run list from Step 1 as the authority if it differs — then `sudo apt-get autoremove --purge`. Verify restoration: `diff` a fresh `dpkg --get-selections` against `pre-install-dpkg-selections.txt`; expected difference: none.
2. **User-space dirs (all created by this plan, nothing pre-existing inside them):** `~/Android/`, `~/ember-android-tools/`, plus build outputs `~/workspace/ember-browser/app/build/`, `~/workspace/ember-browser/build/`, `~/workspace/ember-browser/local.properties`, `~/.gradle/`, `~/.android/` (debug keystore created by the first build).
3. The **project source stays** — undoing the toolchain never deletes the app itself.
