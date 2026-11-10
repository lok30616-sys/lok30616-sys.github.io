const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");

vm.runInThisContext(fs.readFileSync(path.join(__dirname, "lab-tools.js"), "utf8"));
const lab = globalThis.PortfolioLab;

test("snake_case renames export headers", function () {
  assert.equal(lab.snakeCase("Ticket Id"), "ticket_id");
  assert.equal(lab.snakeCase("createdAt"), "created_at");
  assert.equal(lab.snakeCase("GA4 Client ID"), "ga4_client_id");
  assert.equal(lab.snakeCase("工單編號"), "工單編號");
});

test("utm builder keeps existing query and hash", function () {
  var built = lab.buildUtm("example.com/pricing?plan=pro#top", {
    source: "newsletter",
    medium: "email",
    campaign: "spring launch",
    content: "",
    term: "",
  });
  var url = new URL(built.href);
  assert.equal(url.protocol, "https:");
  assert.equal(url.searchParams.get("plan"), "pro");
  assert.equal(url.searchParams.get("utm_source"), "newsletter");
  assert.equal(url.searchParams.get("utm_medium"), "email");
  assert.equal(url.searchParams.get("utm_campaign"), "spring launch");
  assert.equal(url.searchParams.get("utm_content"), null);
  assert.equal(url.hash, "#top");
});

test("utm builder rejects non-http urls", function () {
  assert.equal(lab.buildUtm("", {}).error, "empty");
  assert.equal(lab.buildUtm("javascript:alert(1)", {}).error, "bad");
  assert.equal(lab.buildUtm("http://", {}).error, "bad");
});

test("unix parser treats 10 digits as seconds and 13 as milliseconds", function () {
  assert.equal(lab.parseInstant("1700000000").ms, 1700000000000);
  assert.equal(lab.parseInstant("1700000000000").ms, 1700000000000);
  assert.equal(lab.parseInstant("1700000000.5").ms, 1700000000500);
  var iso = lab.parseInstant("2024-11-10T12:25:00.000Z");
  assert.equal(iso.ms, Date.parse("2024-11-10T12:25:00.000Z"));
  assert.equal(lab.parseInstant("not a date").error, "bad");
  assert.equal(lab.parseInstant("  ").error, "empty");
});

test("hong kong time is utc plus eight", function () {
  var formatted = lab.formatInstant(Date.parse("2024-11-10T12:25:00.000Z"));
  assert.equal(formatted.seconds, "1731241500");
  assert.equal(formatted.milliseconds, "1731241500000");
  assert.equal(formatted.utc, "2024-11-10T12:25:00Z");
  assert.equal(formatted.hongKong, "2024-11-10 20:25:00 HKT");
});

test("field mapper pairs lines, snake-cases gaps, and quotes unsafe names", function () {
  var mapped = lab.mapFields("Ticket Id\ncreated_at\nChannel Group\n", "ticket_id\n\n");
  assert.equal(mapped.rows.length, 3);
  assert.equal(mapped.generated, 2);
  assert.match(mapped.sql, /`Ticket Id` AS ticket_id/);
  assert.match(mapped.sql, /\n  created_at,/);
  assert.match(mapped.sql, /`Channel Group` AS channel_group/);
  assert.equal(JSON.parse(mapped.json)["Ticket Id"], "ticket_id");
  assert.equal(JSON.parse(mapped.json).created_at, "created_at");
});

test("field mapper accepts one comma-separated row and reports extras", function () {
  var mapped = lab.mapFields("a, b", "alpha, beta, extra");
  assert.equal(mapped.rows[0].dst, "alpha");
  assert.equal(mapped.rows[1].dst, "beta");
  assert.deepEqual(mapped.extra, ["extra"]);

  var clash = lab.mapFields("Ticket Id, ticket id", "");
  assert.equal(clash.rows[0].collision, true);
  assert.equal(clash.rows[1].collision, true);
  assert.equal(clash.rows[0].dst, "ticket_id");
});
