# news-image-20261119 — a one-day newspaper front page for 19 November 2026

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)

This entry hands in one 1024×1024 front page that sums up Thursday
19 November 2026 in six stories, each checked against reporting
from that day. The picture is built once, stored as `entry.png`
beside the program, and the program's only job is to carry it
into the folder the grader collects.

## The six stories

- A first-ever three-way summit brings the American, Chinese and
  Russian leaders to one table, with nuclear arms on the agenda.
- The AI company Anthropic lists on the public market in a
  record-breaking debut.
- The world court finds Myanmar responsible for genocidal intent
  against the Rohingya people.
- The Crimean Bridge is struck for the third time in a week, and
  rail traffic over it stops.
- Iran strikes at Gulf states after an American strike, hitting
  bases and shipping in the region.
- A severe cyclone bears down on India's east coast as tens of
  thousands of people are moved out of its path.

## How to run

Run it with Node 22:

```sh
node main.ts
```

It writes `entry.png` to the output folder — `/output` inside the
grader, or whatever directory the `MAKEFUN_OUTPUT_DIR` environment
variable names when you run it yourself. The program refuses to
hand in an image that is missing, larger than 1 MiB, or not a PNG.

Bounty: https://make.fun/bounty/news-image-20261119
