#!/bin/bash

printf '['
cat /usr/share/dict/{american-english,dutch,french,italian,ngerman,spanish} |
sort -f | uniq -i | tr -d '"<>' | sed -n 's/^\(.*\)$/\"\1\",/p' | tee >(sha256sum >&2)
printf '""]'
