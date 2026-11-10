/* Pure helpers for the lab page. No network, no DOM. */
(function (root) {
  "use strict";

  function snakeCase(name) {
    var s = String(name == null ? "" : name).trim().replace(/['"]/g, "");
    s = s.replace(/([a-z0-9])([A-Z])/g, "$1_$2");
    s = s.replace(/[^A-Za-z0-9\u0080-\uFFFF]+/g, "_");
    s = s.replace(/_+/g, "_").replace(/^_|_$/g, "");
    return s.toLowerCase();
  }

  function quoteIdent(name) {
    if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) return name;
    return "`" + String(name).replace(/`/g, "``") + "`";
  }

  function splitFields(text) {
    var raw = String(text || "").trim();
    if (!raw) return [];
    if (raw.indexOf("\n") === -1 && raw.indexOf(",") !== -1) {
      return raw.split(",").map(function (part) { return part.trim(); }).filter(Boolean);
    }
    return raw.split(/\r?\n/).map(function (part) { return part.trim(); }).filter(Boolean);
  }

  function buildUtm(rawUrl, fields) {
    var urlText = String(rawUrl || "").trim();
    if (!urlText) return { error: "empty" };
    if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(urlText)) urlText = "https://" + urlText;
    var url;
    try {
      url = new URL(urlText);
    } catch (e) {
      return { error: "bad" };
    }
    if (url.protocol !== "http:" && url.protocol !== "https:") return { error: "bad" };
    ["source", "medium", "campaign", "content", "term"].forEach(function (key) {
      var value = String((fields && fields[key]) || "").trim();
      if (value) url.searchParams.set("utm_" + key, value);
      else url.searchParams.delete("utm_" + key);
    });
    return { href: url.toString() };
  }

  function parseInstant(input) {
    var text = String(input || "").trim();
    if (!text) return { error: "empty" };
    if (/^[+-]?\d+(\.\d+)?$/.test(text)) {
      var n = Number(text);
      if (!isFinite(n)) return { error: "bad" };
      var ms = Math.abs(n) >= 1e11 ? n : n * 1000;
      return { ms: ms };
    }
    var parsed = Date.parse(text);
    if (isNaN(parsed)) return { error: "bad" };
    return { ms: parsed };
  }

  function formatSeconds(ms) {
    var sign = ms < 0 ? "-" : "";
    var abs = Math.abs(ms);
    var whole = Math.trunc(abs / 1000);
    var frac = Math.round(abs - whole * 1000);
    if (frac === 1000) {
      whole += 1;
      frac = 0;
    }
    if (frac === 0) return sign + String(whole);
    return sign + whole + "." + String(frac).padStart(3, "0").replace(/0+$/, "");
  }

  function formatHongKong(date) {
    var parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Hong_Kong",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    }).formatToParts(date);
    var get = function (type) {
      for (var i = 0; i < parts.length; i++) {
        if (parts[i].type === type) return parts[i].value;
      }
      return "";
    };
    return get("year") + "-" + get("month") + "-" + get("day") + " " + get("hour") + ":" + get("minute") + ":" + get("second") + " HKT";
  }

  function formatInstant(ms) {
    var date = new Date(ms);
    if (isNaN(date.getTime())) return null;
    var utc = date.toISOString().replace(".000Z", "Z");
    return {
      seconds: formatSeconds(ms),
      milliseconds: String(Math.round(ms)),
      utc: utc,
      hongKong: formatHongKong(date),
    };
  }

  function mapFields(sourceText, targetText) {
    var sources = splitFields(sourceText);
    var targets = splitFields(targetText);
    if (!sources.length) return { error: "empty" };
    var rows = sources.map(function (src, i) {
      var provided = i < targets.length ? targets[i] : "";
      var generated = !provided;
      var dst = snakeCase(provided || src);
      if (!dst) dst = "col_" + (i + 1);
      return { src: src, dst: dst, generated: generated, collision: false };
    });
    var counts = Object.create(null);
    rows.forEach(function (row) {
      counts[row.dst] = (counts[row.dst] || 0) + 1;
    });
    rows.forEach(function (row) {
      row.collision = counts[row.dst] > 1;
    });
    var lines = rows.map(function (row, i) {
      var comma = i < rows.length - 1 ? "," : "";
      var src = quoteIdent(row.src);
      if (row.src === row.dst && /^[A-Za-z_][A-Za-z0-9_]*$/.test(row.src)) {
        return "  " + src + comma;
      }
      return "  " + src + " AS " + quoteIdent(row.dst) + comma;
    });
    var jsonObj = {};
    rows.forEach(function (row) {
      jsonObj[row.src] = row.dst;
    });
    return {
      rows: rows,
      extra: targets.slice(sources.length),
      generated: rows.filter(function (row) { return row.generated; }).length,
      sql: "SELECT\n" + lines.join("\n"),
      json: JSON.stringify(jsonObj, null, 2),
    };
  }

  root.PortfolioLab = {
    snakeCase: snakeCase,
    buildUtm: buildUtm,
    parseInstant: parseInstant,
    formatInstant: formatInstant,
    mapFields: mapFields,
  };
})(typeof globalThis !== "undefined" ? globalThis : this);
