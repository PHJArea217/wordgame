# \(Reverse) Guess the Word Game

This is a simple "game" I wrote based off an old CGI script I had for my private
web server. It was originally created to demonstrate binary search, but it's
also quite a fun game in itself.

## Instructions:

1. Think of a word in English, German, French, Spanish, Italian, or Dutch,
and then click on Start. Your word should be a common word, rather than a
specific name.
2. You will be presented a word. Click on "Before" or "After" depending on
whether your word is before or after the word shown according to the dictionary.
 - You should determine whether your word is "before" or "after" according to
   English-language collation, as described in the following bullet points.
    - Every character is a single letter. For example, the Spanish "ll" is
      considered two letters for the purpose of this game.
    - Punctuation like ' and - are ignored \(they appear to be artifacts of the
      underlying dictionaries).
    - Accented letters \(á, ü, œ, etc.) are equivalent to their non-accented
     counterparts, but words with accents are considered to be right "after"
     their equivalent word without accents. That means that, for example, the
     word "für" comes right after "fur" but before "furious."
 - The German ß character is equivalent to "ss", again, taking into account the
   above collation rules.
 - If the displayed word is a truncation of your word \(e.g. your word was
   "computer" and the displayed word was "compute"), then your word is said to
   come "after" the displayed word.
3. Repeat this process for each next word.
 - If you made a mistake, press the "back" button on your browser or click the
   "Go Back" link. The generator script is idempotent and does not store any
   server-side state.
4. Eventually, you will see your word; typically, this will take 18 to 20 steps.
5. If you do not see your word, either you may have made a mistake or the word
does not exist in the dictionary \(e.g., it may be a *proper* noun, slang, or a
made-up word).

## Example:

Let's say that your word is "computer."

1. On the first screen, you see the word "nothing." "Computer" comes before
"nothing" in the dictionary, so you would click "Before."
2. On the second screen, you see the word "bee." "Computer" comes after "bee"
in the dictionary, so you would click "After."

---

[Start - no JS](https://us-central1-webclockbackend.cloudfunctions.net/gtw)

Please do not link directly to the above links as they are subject to change
at any time. If you want to share this on Facebook, Twitter, etc., use this
page instead.

---

Copyright 2018 Peter Jin. View this project on
[GitHub](https://github.com/PHJArea217/wordgame) and
[GitLab](https://gitlab.com/PHJArea217/wordgame).

Dictionaries from the [wordlist](https://packages.ubuntu.com/cosmic/wordlist)
packages from the Ubuntu package repositories.