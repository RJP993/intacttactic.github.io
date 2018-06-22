#!/bin/sh
set +e
#uglifycss styles/*.css > min.css
echo "SKIPPED STEP: Minify CSS"
cd scripts/
tsc || { echo "TypeScript compile failed"; exit 1; }
echo "Compiled TypeScript"
cd ../
uglifyjs scripts/script.js > min.js
echo "Minified JavaScript"
#uglifyjs scripts/amazon-ad-common.js > amazon-ad-common-min.js
#uglifyjs scripts/amazon-ad-desktop.js > amazon-ad-desktop-min.js
#uglifyjs scripts/amazon-ad-tablet.js > amazon-ad-tablet-min.js
#uglifyjs scripts/amazon-ad-mobile-large.js > amazon-ad-mobile-large-min.js
echo "SKIPPED STEP: Minify Ad Scripts"
echo "Edit compile.sh to unskip steps"
