import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("exports the personal homepage framework", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

  assert.match(html, /<html lang="zh-CN">/);
  assert.match(html, /个人主页/);
  assert.match(html, /关于我/);
  assert.match(html, /项目/);
  assert.match(html, /经历/);
  assert.match(html, /保持联系/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});
