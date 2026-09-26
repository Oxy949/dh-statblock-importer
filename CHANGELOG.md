# 0.3.3

- Requires Daggerheart 2.10.6 or newer
- "All Features" compendium rebuilt from the Daggerheart 2.10.6 adversaries
## Schema update for Daggerheart 2.10.6

- [Fixed] Horde adversaries imported without Horde HP or the half-HP damage swap. The system moved horde data from `hordeHp` and `damage.main.valueAlt` into `system.typeData` (`hordeHP`, `hordeDamage`), and the swap now comes from a flagged "Horde" feature whose effect replaces the standard attack damage. The system only creates that feature when an existing actor changes type, so the importer now builds it itself, replacing the `Horde (XdY)` text feature.
- [Fixed] Dice attack bonuses such as `ATK: +2d4` lost the dice part. Since system 2.10.4 the attack bonus is a formula.
- [Fixed] Positive attack bonuses showed as `++2` in the exporter and in the system's own sheet embed. The leading `+` is no longer stored.
- [Fixed] Create Statblock now reads Horde HP and Horde damage from `typeData`, and fills in data lookups in feature text (e.g. the Horde damage and damage type).
- [Changed] +Features no longer copies the Horde feature to the world, since it only works on its own horde actor.
- [Changed] "All Features" compendium: the old `Horde (1d4+1)`-style entries are replaced by the system's single "Horde" feature (one per tier). Unused alternate damage (`valueAlt`) is now empty, matching 2.10.
## Development

- [Added] `tools/build-features.mjs` rebuilds the "All Features" compendium from the system's adversary pack, with no Foundry running and no manual drag-and-drop. Rebuilding against an unchanged system gives an identical pack.
- [Added] License header in every script and stylesheet.

# 0.3.2

- Requires Daggerheart 2.9.1 or newer
- Homebrew feature template (the module skeleton linked from the Instructions journal) now declares v14 compatibility
## Schema update for Daggerheart 2.9.1

- [Fixed] Create Statblock produced an attack line with no damage. The system moved the attack's HP damage from `damage.parts` into `damage.main`, and `DHBaseAction.migrateData` strips `parts` when an actor loads, so the exporter was reading a field that no longer exists on a live actor.
- [Fixed] The `Horde (XdY)` suffix was never restored on export. It read `damage.parts[0]`, which matched nothing even under the old schema, since `parts` was keyed by `"hitPoints"` rather than indexed.
- [Fixed] Exported damage dropped a dice count of 1 (`d10+2` instead of `1d10+2`), which is not the format statblocks use or the importer expects back.
- [Changed] `damage.parts` replaced by `damage.main` + `damage.resources` throughout the importer — weapon attack, adversary attack, Horde alternate damage, and every inline action damage. `includeBase` and `direct` moved inside `main`. The importer no longer depends on the system's backward-compatibility shim.

# 0.3.1

- The Forge filepicker support
- Compendiums updated to Daggerheart 2.3.2
## Schema update for Daggerheart 2.3.2

- [Fixed] `damage.parts` migrated from array to object (keyed by `"hitPoints"`) — affects weapon attack, adversary attack, and all inline action damage across the importer.
- [Fixed] Armor schema updated: `baseScore` + `marks` replaced by `armor: { current, max }`.
- [Fixed] Adversary resources: `isReversed` field removed, `max` default changed to `null`.
- [Changed] `prototypeToken` for adversary and environment updated with v14 fields: `depth`, `turnMarker`, `movementAction`; `detectionModes` changed to object.
- [Changed] Consumable: `destroyOnEmpty` field removed (no longer in system schema).
- [Changed] All action objects now include `areas: []` field.
- [Changed] Weapon and armor templates now include `quantity: 1`.
- [Changed] Adversary template now includes `advantageSources` and `disadvantageSources` fields.

# 0.3.0

- v14 only
- Compendiums updated to v14

# 0.2.7

- [Fixed] "Use actor portrait as feature icon" now correctly applies the actor's portrait to both embedded and standalone (+Features) non-compendium features instead of using the generic feature icon.


# 0.2.6

- You can pick default icons
- [Changed] Debug Mode setting moved from the custom Importer Configuration window to Foundry's native Module Settings panel. Requires a full Foundry reload (F5) after module update for the change to take effect.


# 0.2.5
- [Fixed] Domain Card import failing with `DataModelValidationError` when domain casing didn't match system enum values. Domains are now resolved case-insensitively against native and homebrew choices.

# 0.2.4
- removed duplicated chat message. chatDisplay was being added, and the system set it to true.

# 0.2.3
- The pasted text will undergo additional cleaning.
- CSS refactor to make maintenance easier.
- [Added] Class item export support for class, ancestry and community

# 0.2.2
- Bug Fix for Consumable

# 0.1.9
- +docs

# 0.1.8
- Bug fix: imported weapons work well now
- Uses default templates to prevent errors and make it easier to update in the future
- performance update for mass import
- generate code for weapon/armor features
- module template for you homebrew features

# 0.1.6
- enviroment only accept correct types
- can detect physical/magical damage type to create the damage action
- can detect direct damage
- It can detect spend hope to create actions

# 0.1.5
- import enviroment/adversary can also import the features the world
- Improved built in docs

# 0.1.4
- enviroments improvement and fix: Works for "Wondrous Environments"