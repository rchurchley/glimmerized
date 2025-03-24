import { formatHex } from 'culori'
import { black, white, themeShades } from '../glimmerized.ts'

const T = {
  editor: {
    bg: formatHex(themeShades.grey(3/32)) as string,
    fg: formatHex(themeShades.grey(29/32)) as string,
  },
  widget: {
    bg: formatHex(themeShades.grey(2/32)) as string,
    fg: formatHex(themeShades.grey(30/32)) as string,
  },
  input: {
    bg: formatHex(themeShades.grey(1/32)) as string,
    fg: formatHex(themeShades.grey(31/32)) as string,
  },
  selection: {
    bg: formatHex(themeShades.grey(1/2)) as string,
  },
  diff: {
    added: formatHex(themeShades.blue(1/2)) as string,
    modified: formatHex(themeShades.purple(1/2)) as string,
    deleted: formatHex(themeShades.red(1/2)) as string,
  },
  buttons: {
    primary: {
      bg: formatHex(themeShades.red(1/2)) as string,
      bgHover: formatHex(themeShades.red(3/4)) as string,
      fg: formatHex(white) as string,
    },
    secondary: {
      bg: formatHex(themeShades.blue(1/2)) as string,
      fg: formatHex(white) as string,
    },
    widget: {
      bg: formatHex(themeShades.purple(1/2)) as string,
      fg: formatHex(white) as string,
    },
    error: {
      bg: formatHex(themeShades.red(1/2)) as string,
      fg: formatHex(white) as string,
    },
    warning: {
      bg: formatHex(themeShades.yellow(1/2)) as string,
      fg: formatHex(black) as string,
    },
    info: {
      bg: formatHex(themeShades.green(1/2)) as string,
      fg: formatHex(white) as string,
    },
    hint: {
      bg: formatHex(themeShades.blue(1/2)) as string,
      fg: formatHex(black) as string,
    },
  },
  text: {
    major: formatHex(white) as string,
    minor: formatHex(themeShades.grey(1/2)) as string,
    accent: formatHex(themeShades.red(3/4)) as string,
    added: formatHex(themeShades.blue(3/4)) as string,
    modified: formatHex(themeShades.purple(3/4)) as string,
    deleted: formatHex(themeShades.red(3/4)) as string,
    conflict: formatHex(themeShades.yellow(3/4)) as string,
    invalid: formatHex(themeShades.red(3/4)) as string,
    error: formatHex(themeShades.red(3/4)) as string,
    warning: formatHex(themeShades.yellow(3/4)) as string,
    info: formatHex(themeShades.green(3/4)) as string,
    debug: formatHex(themeShades.blue(3/4)) as string,
    syntax: [
      formatHex(themeShades.red(3/4)) as string,
      formatHex(themeShades.blue(3/4)) as string,
      formatHex(themeShades.green(3/4)) as string,
      formatHex(themeShades.yellow(3/4)) as string,
      formatHex(themeShades.purple(3/4)) as string,
    ],
  },
  ansi: {
    red: formatHex(themeShades.red(3/4)) as string,
    green: formatHex(themeShades.green(3/4)) as string,
    blue: formatHex(themeShades.blue(3/4)) as string,
    cyan: formatHex(themeShades.grey(3/4)) as string,
    magenta: formatHex(themeShades.purple(3/4)) as string,
    yellow: formatHex(themeShades.yellow(3/4)) as string,
    black: formatHex(black) as string,
    white: formatHex(themeShades.grey(29/32)) as string,
    brightRed: formatHex(themeShades.red(1/2)) as string,
    brightGreen: formatHex(themeShades.green(1/2)) as string,
    brightBlue: formatHex(themeShades.blue(1/2)) as string,
    brightCyan: formatHex(themeShades.grey(1/2)) as string,
    brightMagenta: formatHex(themeShades.purple(1/2)) as string,
    brightYellow: formatHex(themeShades.yellow(1/2)) as string,
    brightBlack: formatHex(themeShades.grey(3/32)) as string,
    brightWhite: formatHex(white) as string,
  },
}

const colors = {
  "activityBar.background": T.input.bg,
  "activityBar.foreground": T.input.fg,
  "activityBar.inactiveForeground": T.input.fg + "55",
  "activityBarBadge.background": T.buttons.primary.bg,
  "activityBarBadge.foreground": T.buttons.primary.fg,
  "badge.background": T.buttons.secondary.bg,
  "badge.foreground": T.buttons.secondary.fg,
  "breadcrumb.activeSelectionForeground": T.text.accent,
  "breadcrumb.focusForeground": T.text.major,
  "breadcrumb.foreground": T.editor.fg,
  "button.background": T.buttons.primary.bg,
  "button.foreground": T.buttons.primary.fg,
  "button.hoverBackground": T.buttons.primary.bgHover,
  "debugExceptionWidget.background": T.widget.bg,
  "debugToolBar.background": T.widget.bg,
  "debugToolBar.border": T.buttons.primary.bg,
  "diffEditor.insertedTextBackground": T.diff.added + "33",
  "diffEditor.removedTextBackground": T.diff.deleted + "33",
  "dropdown.background": T.input.bg,
  "dropdown.border": T.input.fg,
  "dropdown.listBackground": T.input.bg,
  "editor.background": T.editor.bg,
  "editor.findMatchBackground": T.selection.bg + "88",
  "editor.findMatchHighlightBackground": "#00000000",
  "editor.findMatchHighlightBorder": T.selection.bg + "88",
  "editor.findRangeHighlightBackground": T.editor.fg + "33",
  "editor.foreground": T.editor.fg,
  "editor.hoverHighlightBackground": T.editor.fg + "33",
  "editor.inactiveSelectionBackground": T.editor.fg + "33",
  "editor.lineHighlightBackground": T.widget.bg,
  "editor.selectionBackground": T.selection.bg + "44",
  "editor.selectionHighlightBackground": T.editor.fg + "33",
  "editor.selectionHighlightBorder": T.text.accent + "cc",
  "editor.wordHighlightBackground": T.editor.fg + "33",
  "editor.wordHighlightBorder": T.editor.fg + "55",
  "editorBracketMatch.background": "#00000000",
  "editorBracketMatch.border": T.selection.bg,
  "editorCodeLens.foreground": T.text.minor,
  "editorCursor.foreground": T.editor.fg,
  "editorError.foreground": T.buttons.error.bg + "80",
  "editorGroup.border": T.widget.bg,
  "editorGroupHeader.noTabsBackground": T.widget.bg,
  "editorGroupHeader.tabsBackground": T.widget.bg,
  "editorGutter.addedBackground": T.diff.added,
  "editorGutter.deletedBackground": T.diff.deleted,
  "editorGutter.modifiedBackground": T.diff.modified,
  "editorHint.foreground": T.buttons.hint.bg + "80",
  "editorHoverWidget.background": T.widget.bg,
  "editorIndentGuide.activeBackground1": T.text.minor,
  "editorIndentGuide.background1": T.text.minor + "55",
  "editorInfo.foreground": T.buttons.info.bg + "80",
  "editorLineNumber.activeForeground": T.editor.fg,
  "editorLineNumber.foreground": T.text.minor,
  "editorLink.activeForeground": T.text.major,
  "editorMarkerNavigation.background": T.widget.bg,
  "editorMarkerNavigationError.background": T.buttons.error.bg + "80",
  "editorMarkerNavigationInfo.background": T.buttons.info.bg + "80",
  "editorMarkerNavigationWarning.background": T.buttons.warning.bg + "80",
  "editorOverviewRuler.addedForeground": T.diff.added,
  "editorOverviewRuler.commonContentForeground": T.editor.bg,
  "editorOverviewRuler.currentContentForeground": T.diff.deleted,
  "editorOverviewRuler.deletedForeground": T.diff.deleted,
  "editorOverviewRuler.errorForeground": T.buttons.error.bg,
  "editorOverviewRuler.findMatchForeground": T.selection.bg + "33",
  "editorOverviewRuler.incomingContentForeground": T.diff.added,
  "editorOverviewRuler.infoForeground": T.buttons.info.bg,
  "editorOverviewRuler.modifiedForeground": T.diff.modified,
  "editorOverviewRuler.rangeHighlightForeground": T.text.minor + "cc",
  "editorOverviewRuler.selectionHighlightForeground": T.text.minor + "cc",
  "editorOverviewRuler.warningForeground": T.buttons.warning.bg,
  "editorOverviewRuler.wordHighlightForeground": T.text.minor + "cc",
  "editorOverviewRuler.wordHighlightStrongForeground": T.text.minor + "cc",
  "editorRuler.foreground": T.text.minor + "80",
  "editorSuggestWidget.background": T.widget.bg,
  "editorSuggestWidget.border": T.buttons.secondary.bg,
  "editorSuggestWidget.foreground": T.widget.fg,
  "editorSuggestWidget.highlightForeground": T.widget.fg,
  "editorSuggestWidget.selectedBackground": T.selection.bg + "80",
  "editorUnnecessaryCode.opacity": "#000000c0",
  "editorWarning.foreground": T.buttons.error.bg + "80",
  "editorWhitespace.foreground": T.text.minor + "33",
  "editorWidget.background": T.widget.bg,
  "errorForeground": T.buttons.error.bg,
  "extensionButton.prominentBackground": T.buttons.primary.bg,
  "extensionButton.prominentForeground": T.buttons.primary.fg,
  "extensionButton.prominentHoverBackground": T.buttons.primary.bgHover,
  "focusBorder": T.buttons.secondary.bg,
  "foreground": T.text.major,
  "gitDecoration.addedResourceForeground": T.text.added,
  "gitDecoration.conflictingResourceForeground": T.text.conflict,
  "gitDecoration.deletedResourceForeground": T.text.deleted,
  "gitDecoration.ignoredResourceForeground": T.text.minor,
  "gitDecoration.modifiedResourceForeground": T.text.modified,
  "gitDecoration.untrackedResourceForeground": T.text.added,
  "input.background": T.input.bg,
  "input.placeholderForeground": T.text.minor,
  "inputOption.activeBorder": T.buttons.secondary.bg,
  "inputValidation.errorBackground": T.buttons.error.bg,
  "inputValidation.errorBorder": T.buttons.error.bg,
  "inputValidation.errorForeground": T.buttons.error.fg,
  "inputValidation.infoBackground": T.buttons.info.bg,
  "inputValidation.infoBorder": T.buttons.info.bg,
  "inputValidation.infoForeground": T.buttons.info.fg,
  "inputValidation.warningBackground": T.buttons.warning.bg,
  "inputValidation.warningBorder": T.buttons.warning.bg,
  "inputValidation.warningForeground": T.buttons.warning.fg,
  "list.activeSelectionBackground": T.editor.bg,
  "list.activeSelectionForeground": T.text.major,
  "list.errorForeground": T.text.error,
  "list.focusBackground": T.editor.bg,
  "list.focusForeground": T.text.major,
  "list.highlightForeground": T.text.major,
  "list.hoverBackground": T.editor.bg,
  "list.hoverForeground": T.text.major,
  "list.inactiveSelectionBackground": T.editor.bg,
  "list.inactiveSelectionForeground": T.editor.fg,
  "list.invalidItemForeground": T.text.invalid,
  "list.warningForeground": T.text.warning,
  "listFilterWidget.background": T.widget.bg,
  "listFilterWidget.noMatchesOutline": T.buttons.error.bg,
  "merge.currentContentBackground": T.diff.deleted + "55",
  "merge.currentHeaderBackground": T.diff.deleted + "80",
  "merge.incomingContentBackground": T.diff.added + "55",
  "merge.incomingHeaderBackground": T.diff.added + "80",
  "notificationCenterHeader.background": T.widget.bg,
  "notificationCenterHeader.foreground": T.widget.fg,
  "notificationLink.foreground": T.text.accent,
  "notifications.background": T.widget.bg,
  "notifications.foreground": T.widget.fg,
  "panel.background": T.widget.bg,
  "panelTitle.activeForeground": T.widget.fg,
  "panelTitle.inactiveForeground": T.widget.fg,
  "peekView.border": T.buttons.secondary.bg,
  "peekViewEditor.background": T.editor.bg,
  "peekViewEditor.matchHighlightBackground": T.selection.bg + "cc",
  "peekViewResult.background": T.editor.bg,
  "peekViewResult.fileForeground": T.editor.fg,
  "peekViewResult.lineForeground": T.editor.fg,
  "peekViewResult.matchHighlightBackground": T.selection.bg + "6f",
  "peekViewResult.selectionBackground": T.selection.bg,
  "peekViewResult.selectionForeground": T.editor.fg,
  "peekViewTitle.background": T.widget.bg,
  "peekViewTitleDescription.foreground": T.widget.fg,
  "peekViewTitleLabel.foreground": T.widget.fg,
  "pickerGroup.border": T.text.minor,
  "pickerGroup.foreground": T.text.accent,
  "progressBar.background": T.buttons.primary.bg,
  "scrollbarSlider.activeBackground": T.widget.fg + "55",
  "scrollbarSlider.background": T.widget.fg + "33",
  "scrollbarSlider.hoverBackground": T.widget.fg + "33",
  "selection.background": T.selection.bg + "80",
  "sideBar.background": T.widget.bg,
  "sideBar.border": T.input.bg,
  "sideBar.foreground": T.widget.fg,
  "sideBarSectionHeader.background": T.widget.bg,
  "sideBarSectionHeader.foreground": T.widget.fg,
  "statusBar.background": T.buttons.secondary.bg,
  "statusBar.debuggingBackground": T.buttons.primary.bg,
  "statusBar.debuggingForeground": T.buttons.primary.fg,
  "statusBar.foreground": T.buttons.secondary.fg,
  "statusBar.noFolderBackground": T.buttons.widget.bg,
  "statusBar.noFolderForeground": T.buttons.widget.fg,
  "tab.activeBackground": T.editor.bg,
  "tab.activeBorder": T.buttons.primary.bg,
  "tab.activeForeground": T.text.major,
  "tab.activeModifiedBorder": T.diff.modified,
  "tab.hoverBorder": T.text.major,
  "tab.inactiveBackground": T.widget.bg,
  "tab.inactiveForeground": T.text.minor,
  "tab.inactiveModifiedBorder": T.diff.modified + "80",
  "tab.unfocusedActiveForeground": T.widget.fg,
  "tab.unfocusedInactiveForeground": T.widget.fg,
  "terminal.ansiBlack": T.ansi.black,
  "terminal.ansiBlue": T.ansi.blue,
  "terminal.ansiBrightBlack": T.ansi.brightBlack,
  "terminal.ansiBrightBlue": T.ansi.brightBlue,
  "terminal.ansiBrightCyan": T.ansi.brightCyan,
  "terminal.ansiBrightGreen": T.ansi.brightGreen,
  "terminal.ansiBrightMagenta": T.ansi.brightMagenta,
  "terminal.ansiBrightRed": T.ansi.brightRed,
  "terminal.ansiBrightWhite": T.ansi.brightWhite,
  "terminal.ansiBrightYellow": T.ansi.brightYellow,
  "terminal.ansiCyan": T.ansi.cyan,
  "terminal.ansiGreen": T.ansi.green,
  "terminal.ansiMagenta": T.ansi.magenta,
  "terminal.ansiRed": T.ansi.red,
  "terminal.ansiWhite": T.ansi.white,
  "terminal.ansiYellow": T.ansi.yellow,
  "terminal.background": T.ansi.black,
  "terminal.foreground": T.ansi.brightWhite,
  "textBlockQuote.background": T.widget.bg,
  "textCodeBlock.background": T.widget.bg,
  "textLink.activeForeground": T.widget.fg,
  "textLink.foreground": T.text.accent,
  "textPreformat.foreground": T.widget.fg
}

const tokenColors = [
  {
    "name": "Comment",
    "scope": ["comment", "punctuation.definition.comment"],
    "settings": {
      "fontStyle": "italic",
      "foreground": T.text.minor
    }
  },
  {
    "name": "Punctuation",
    "scope": [
      "punctuation",
      "punctuation.section.class.end",
      "meta.tag",
      "punctuation.definition.tag",
      "punctuation.separator.inheritance.php",
      "punctuation.definition.tag.html",
      "punctuation.definition.tag.begin.html",
      "punctuation.definition.tag.end.html",
      "keyword.other.template",
      "keyword.other.substitution"
    ],
    "settings": { "foreground": T.text.minor }
  },
  {
    "name": "Keywords",
    "scope": [
      "keyword",
      "keyword.control",
      "keyword.control.flow",
      "keyword.control.from",
      "keyword.control.import",
      "keyword.control.as",
      "keyword.other",
      "keyword.other.using",
      "keyword.other.namespace",
      "keyword.other.class",
      "keyword.other.new",
      "keyword.other.event",
      "keyword.other.await",
      "keyword.other.var",
      "keyword.other.package",
      "keyword.other.import",
      "keyword.other.special-method",
      "storage.type.ts",
      "storage.modifier",
      "storage.type.function"
    ],
    "settings": { "foreground": T.text.syntax[0] }
  },
  {
    "name": "Types & Classes",
    "scope": [
      "entity.name.namespace",
      "entity.name.type.class",
      "entity.name.type.enum",
      "entity.name.type.interface",
      "entity.name.type",
      "entity.name",
      "keyword.type",
      "meta.use.php",
      "storage.modifier.import",
      "storage.modifier.package",
      "storage.type.primitive",
      "storage.type.struct",
      "storage.type",
      "support.class",
      "support.type.sys-types",
      "support.type",
    ],
    "settings": { "foreground": T.text.syntax[4] }
  },
  {
    "name": "Constants",
    "scope": [
      "constant.character",
      "constant.escape",
      "constant.language",
      "constant.numeric",
      "constant.other.key",
      "constant.other.symbol",
      "keyword.other.unit",
      "support.constant",
    ],
    "settings": { "foreground": T.text.syntax[3] }
  },
  {
    "name": "Variables",
    "scope": [
      "entity.name.variable.local",
      "entity.name.variable.parameter",
      "entity.name.variable",
      "string constant.other.placeholder",
      "variable.other.constant",
      "variable.other.enummember",
      "variable.other.event",
      "variable.other.readwrite",
      "variable.parameter",
      "variable",
    ],
    "settings": { "foreground": T.text.major }
  },
  {
    "name": "Functions",
    "scope": [
      "entity.name.function",
      "entity.name.function.member",
      "entity.name.function.preprocessor",
      "meta.function-call",
      "support.function",
      "variable.function.constructor",
      "variable.function",
    ],
    "settings": { "foreground": T.text.syntax[1] }
  },
  {
    "name": "Properties",
    "scope": [
      "variable.other.property",
      "variable.other.object.property"
    ],
    "settings": {
      "fontStyle": "",
      "foreground": T.text.syntax[1]
    }
  },
  {
    "name": "Strings",
    "scope": ["string"],
    "settings": { "foreground": T.text.syntax[2] }
  },
  {
    "name": "Interpolation",
    "scope": [
      "punctuation.section.embedded",
      "variable.interpolation"
    ],
    "settings": { "foreground": T.editor.fg }
  },
  {
    "name": "Language methods",
    "scope": ["variable.language"],
    "settings": { "fontStyle": "italic" }
  },
  {
    "name": "Tag",
    "scope": [
      "entity.name.tag",
      "meta.tag.sgml"
    ],
    "settings": { "foreground": T.text.syntax[0] }
  },
  {
    "name": "Invalid",
    "scope": ["invalid"],
    "settings": { "fontStyle": "bold", "foreground": T.text.invalid }
  },
  {
    "name": "Inherited Class",
    "scope": ["entity.other.inherited-class"],
    "settings": { "fontStyle": "italic" }
  },
  {
    "name": "Hash keys",
    "scope": ["constant.language.symbol.hashkey"],
    "settings": { "foreground": T.text.syntax[0] }
  },
  {
    "name": "Attributes",
    "scope": ["entity.other.attribute-name"],
    "settings": { "fontStyle": "italic", "foreground": T.text.syntax[4] }
  },
  {
    "name": "Regular Expressions",
    "scope": ["string.regexp"],
    "settings": { "foreground": T.text.syntax[2] }
  },
  {
    "name": "Escape Characters",
    "scope": ["constant.character.escape"],
    "settings": { "foreground": T.text.syntax[3] }
  },
  {
    "name": "URL",
    "scope": ["*url*", "*link*", "*uri*"],
    "settings": { "fontStyle": "underline" }
  },
  {
    "name": "Italic",
    "scope": ["markup.italic"],
    "settings": { "fontStyle": "italic" }
  },
  {
    "name": "Bold",
    "scope": ["markup.bold", "markup.bold string"],
    "settings": { "fontStyle": "bold" }
  },
  {
    "name": "Bold-Italic",
    "scope": [
      "markup.bold markup.italic",
      "markup.italic markup.bold",
      "markup.quote markup.bold",
      "markup.bold markup.italic string",
      "markup.italic markup.bold string",
      "markup.quote markup.bold string"
    ],
    "settings": { "fontStyle": "bold" }
  },
  {
    "name": "Underline",
    "scope": ["markup.underline"],
    "settings": { "fontStyle": "underline" }
  },
  {
    "name": "Strike",
    "scope": ["markup.strike"],
    "settings": { "fontStyle": "strikethrough" }
  },
  {
    "name": "Quote",
    "scope": ["markup.quote"],
    "settings": { "fontStyle": "italic" }
  },
  {
    "name": "Heading",
    "scope": ["markup.heading"],
    "settings": { "foreground": T.text.syntax[1] }
  },
  {
    "name": "Markup - Separator (---)",
    "scope": ["meta.separator"],
    "settings": { "fontStyle": "bold", "foreground": T.text.minor }
  },
  {
    "name": "Markdown - Heading Punctuation",
    "scope": ["heading.1.markdown punctuation.definition.heading.markdown"],
    "settings": { "foreground": T.text.syntax[1] }
  },
  {
    "name": "Markdown - Heading Punctuation",
    "scope": ["heading.2.markdown punctuation.definition.heading.markdown"],
    "settings": { "foreground": T.text.syntax[1] + "d0" }
  },
  {
    "name": "Markdown - Heading Punctuation",
    "scope": ["heading.3.markdown punctuation.definition.heading.markdown"],
    "settings": { "foreground": T.text.syntax[1] + "a0" }
  },
  {
    "name": "Markdown - Heading Punctuation",
    "scope": ["heading.4.markdown punctuation.definition.heading.markdown"],
    "settings": { "foreground": T.text.syntax[1] + "80" }
  },
  {
    "name": "Markdown - Heading",
    "scope": ["markup.heading.markdown", "entity.name.section.markdown"],
    "settings": { "fontStyle": "bold", "foreground": T.text.syntax[1] }
  },
  {
    "name": "Markdown - Link",
    "scope": ["string.other.link.title.markdown"],
    "settings": { "foreground": T.text.syntax[0] }
  },
  {
    "name": "Markdown - Link Description (e.g. images)",
    "scope": ["string.other.link.description.markdown"],
    "settings": { "foreground": T.text.syntax[3] }
  },
  {
    "name": "Markdown - Link URL",
    "scope": [
      "markup.underline.link.markdown",
      "meta.link.inline.markdown markup.underline.link.markdown",
      "meta.image.inline.markdown markup.underline.link.image.markdown"
    ],
    "settings": { "foreground": T.text.minor }
  },
  {
    "name": "Markdown - Link Anchor",
    "scope": ["constant.other.reference.link.markdown"],
    "settings": { "foreground": T.text.minor }
  },
  {
    "name": "Markdown - Code",
    "scope": ["markup.inline.raw.string.markdown"],
    "settings": { "fontStyle": "bold" }
  },
  {
    "name": "Markdown - List Bullets",
    "scope": ["punctuation.definition.list.begin.markdown"],
    "settings": { "foreground": T.text.syntax[0] }
  },
  {
    "name": "JSON Key",
    "scope": [
      "source.json meta.structure.dictionary.json support.type.property-name.json",
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    "settings": { "foreground": T.text.syntax[0] }
  },
  {
    "name": "YAML string",
    "scope": [
      "string.unquoted.plain.out.yaml",
      "meta.structure.dictionary.value.json string.quoted.double.json"
    ],
    "settings": { "foreground": T.text.syntax[1] }
  },
  {
    "name": "HTML string",
    "scope": ["string.quoted.double.html", "string.quoted.double.xml"],
    "settings": { "foreground": T.text.syntax[1] }
  },
  {
    "name": "CSS Classes",
    "scope": ["entity.other.attribute-name.class"],
    "settings": { "foreground": T.text.syntax[4] }
  },
  {
    "name": "CSS IDs",
    "scope": ["source.sass keyword.control"],
    "settings": { "foreground": T.text.syntax[3] }
  },
  {
    "name": "CSS Properties",
    "scope": [
      "source.css support.type.property-name",
      "source.sass support.type.property-name",
      "source.scss support.type.property-name",
      "source.less support.type.property-name",
      "source.stylus support.type.property-name",
      "source.postcss support.type.property-name"
    ],
    "settings": { "foreground": T.text.syntax[1] }
  },
  {
    "name": "Inserted",
    "scope": ["markup.inserted, markup.inserted.git_gutter"],
    "settings": { "foreground": T.text.added }
  },
  {
    "name": "Deleted",
    "scope": ["markup.deleted, markup.deleted.git_gutter"],
    "settings": { "foreground": T.text.deleted }
  },
  {
    "name": "Changed",
    "scope": ["markup.changed, markup.changed.git_gutter"],
    "settings": { "foreground": T.text.modified }
  },
  {
    "scope": "token.info-token",
    "settings": {
      "foreground": T.text.info
    }
  },
  {
    "scope": "token.warn-token",
    "settings": {
      "foreground": T.text.warning
    }
  },
  {
    "scope": "token.error-token",
    "settings": {
      "foreground": T.text.error
    }
  },
  {
    "scope": "token.debug-token",
    "settings": {
      "foreground": T.text.debug
    }
  }
]

const theme = {
  name: "Glimmerized",
  type: "dark",
  colors: colors,
  tokenColors: tokenColors,
  semanticHighlighting: true
}

console.log(JSON.stringify(theme, null, 2))
