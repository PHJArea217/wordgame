# Guess the Word Game

This is a somewhat addicting game where you have to think of a word and select
"Before" or "After" depending on whether the word appears before another word
in the dictionary, and it will try to guess the word.

It is based off of Google Cloud Functions, and it has a non-Javascript version
in addition to a Javascript version. The non-Javascript version is based off of
an old CGI script I wrote for my own server. The Javascript version has yet to
be written.

# Online Version

To play the online version, visit https://www.peterjin.org/gtw.html

A direct link to the non-Javascript version of the game is located at
https://us-central1-webclockbackend.cloudfunctions.net/gtw \(please note that
this link is subject to change.)

# Todo list

- [ ] Use a CDN for the non-Javascript version
- [ ] Javascript version
- [ ] English-only version
- [ ] Huffman encoding to compress wordlist
- [ ] Randomization \(without breaking existing flow)

# Deployment

Go to the "Pipelines/Jobs" section of GitLab CI, then download the ZIP artifacts
file. Set memory allocation to 128 MB. Use HTTP trigger and Node.js 6 runtime.
Set function to execute as "callback" and upload the previously-downloaded ZIP
file to any Cloud Storage Bucket.

# License

Copyright 2018 Peter H. Jin

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files \(the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.