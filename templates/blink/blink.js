black       = '{{black}}';
red         = '{{red-light}}';
green       = '{{green-light}}';
yellow      = '{{yellow-light}}';
blue        = '{{blue-light}}';
magenta     = '{{purple-light}}';
cyan        = '{{indigo-light}}';
white       = '{{grey-lighter}}';
lightBlack  = '{{grey-darker}}';
lightRed    = '{{red-dark}}';
lightGreen  = '{{green-dark}}';
lightYellow = '{{yellow-dark}}';
lightBlue   = '{{blue-dark}}';
lightMagenta= '{{purple-dark}}';
lightCyan   = '{{indigo-dark}}';
lightWhite  = '{{white}}';

t.prefs_.set('color-palette-overrides',
                 [ black, red, green, yellow, blue, magenta, cyan, white,
                   lightBlack, lightRed, lightGreen, lightYellow, lightBlue, lightMagenta, lightCyan, lightWhite ]);

t.prefs_.set('cursor-color', 'rgba(0, 0, 0, 0.5)');
t.prefs_.set('foreground-color', '{{white}}');
t.prefs_.set('background-color', '{{black}}');
