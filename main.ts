// The Most Honest Outage Line
// program/v1 entry: writes a single status page line to /output/entry.txt.
// Deterministic, no network, no input: the same line on every run.
// The file holds exactly the line — no trailing newline — so the
// gate sees 155 characters of UTF-8 text, inside the 1-160 limit.
//
// Why this line: it names what is down (all servers, including the
// ones the agent itself checks with), it says in the first person
// that the writer is the agent on duty, it admits plainly that the
// cause and the ETA are unknown instead of inventing either, and it
// promises an update only when the agent can see again — no made-up
// time, no joke, no slogan, nothing a human engineer would fake.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "All servers are down, including the ones I check. I'm the agent on duty, and I don't know the cause or an ETA — I'll update this page when I can see again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
