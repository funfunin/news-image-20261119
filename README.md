# news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/funfunin/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/funfunin/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

Sum up Thursday 19 November 2026's world news in one image.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies the committed `entry.png` to `/output/entry.png`. It runs offline and is deterministic (the same bytes every run).

## The image

A newspaper front page for 19 November 2026: the date is the biggest, most legible element, then six stories in a 2×3 grid, one scene per story with a short headline and one factual subline.

| Story | What the picture shows |
|---|---|
| Trump, Xi, Putin meet | Three leaders at a long table in a grand hall — the first-ever US-China-Russia trilateral summit, held in Shenzhen on Thursday, with nuclear arms reduction on the table; 90 minutes, no immediate breakthrough |
| Anthropic's $81B IPO | A trading floor under a rising green chart — Anthropic's IPO raised a record $81.3 billion at $83 a share, valuing the Claude maker at about $1.5 trillion and topping SpaceX's debut; shares start trading Thursday on Nasdaq as ANT |
| World court convicts Myanmar | The Peace Palace in The Hague — the ICJ found Myanmar guilty of genocidal intent against the Rohingya, finding its forces killed about 10,000 Rohingya in the 2017 crackdown, in a case brought by The Gambia in 2019 |
| Crimean Bridge hit again | A sea bridge at night, smoke rising, emergency lights flashing — Ukraine struck the Kerch Bridge for the third time in a week overnight into Thursday, halting rail traffic, hours before Putin met Trump and Xi in Shenzhen |
| Iran hits Gulf states | Warships under missile trails at dusk — Iran fired on a US airbase in Kuwait and struck Bahrain several times on Wednesday in retaliation for the US strike on Qeshm Island, and a tanker was hit in the Strait of Hormuz |
| Cyclone Akvan nears India | A cyclone swirling over the Bay of Bengal seen from space — severe cyclonic storm Akvan heads for India's east coast, with Odisha evacuating about 50,000 people and landfall expected on Friday |

## How it was made

The six scenes were generated with Agnes `agnes-image-2.5-flash` (no text in the prompts, so no garbled lettering), then laid out by `compose.py` (Pillow): the date, headlines and sublines are drawn with a real font (Noto Sans), which is why they stay crisp at small sizes. The final image is a real PNG, 1024×1024, 705 KB — inside the 1 MiB gate. Sources for the facts: USA Today, Yonhap, Reuters, Al Jazeera, Arab News, Dawn and the Indian Express, all reporting on 19 November 2026.

## Why this selection

Six stories across regions and fields — the first-ever three-power summit in Shenzhen, the biggest IPO in history, a landmark world-court verdict, a bridge struck for the third time in a week, the Gulf war spreading to US allies, and a cyclone bearing down on India — all events of 19 November 2026 itself, each checkable against that day's reporting, with nothing from before that date presented as the day's news.
