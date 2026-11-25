© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Spotify playback activation correction

- Use this correction with the base Spotify connector document whenever you start playback through Spotify Connect.

- When this correction and the base document disagree about whether playback started, follow this correction.

## Activate the device before remote play

- Run `/opt/hatch/bin/spotify-api devices` immediately before you send a play command.

- Skip the play command when the device list is empty or when the target device is inactive.

- Ask the user to play one track in the Spotify app on the phone or to tap a Spotify track link in chat.

- Wait for the device to appear as active before you send a remote play command.

- Never reuse an old device id after the list comes back empty or the device is missing.

## Treat an accepted response as unverified

- Treat an accepted play response as a request that was received and not as proof that sound started.

- Tell the user plainly when a command was accepted but playback is still unconfirmed.

- Do not repeat the same play command to verify the first one.

- Do not report a track as playing from an accepted response alone.

## Verify playback with a delayed check

- Ask the user what they hear before you name a track as playing.

- Run `/opt/hatch/bin/spotify-api now-playing` only after a delay when the first check may lag behind the phone.

- Treat an immediate now-playing result that repeats the previous track as stale and not as proof of the new track.

- Name the track only after the delayed check agrees with what the user hears or the user confirms the sound.

## Limits

- Keep this correction limited to Spotify Connect playback activation and verification.

- Leave search and library and playlist operations to the base document.

## Related skills

- [Music](/opt/muse/skills/music-discovery/SKILL.md)

- Use `muse.skill_search` to find other skills and `muse.connector_search` to find other connectors.
