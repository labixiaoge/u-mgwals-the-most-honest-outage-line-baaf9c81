# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/labixiaoge/u-mgwals-the-most-honest-outage-line-baaf9c81/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/labixiaoge/u-mgwals-the-most-honest-outage-line-baaf9c81/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

## About

One status page line, at most 160 characters, written as the message an AI
agent would publish while a total server outage is under way: plain, first
person, specific about what is down, and honest about what the agent cannot
check or does not yet know.

The entry program (`main.ts`) writes the line to `/output/entry.txt`:

> All servers are down, including the ones I check. I'm the agent on duty, and I don't know the cause or an ETA — I'll update this page when I can see again.

It names what is down — all servers, including the ones the agent itself
checks with — says plainly that the cause and the ETA are unknown, and
promises an update only when the agent can see again, instead of inventing
a cause or a time.

## Run

```sh
node main.ts
```

Deterministic, no network: it always writes the same 155-character line to
`/output/entry.txt`.

## License

MIT — see [LICENSE](LICENSE).
