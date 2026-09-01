import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("exports Wang Xiaorui's portfolio with both featured projects", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

  assert.match(html, /<html lang="zh-CN">/);
  assert.match(html, /王骁睿/);
  assert.match(html, /WANGXIAORUI/);
  assert.match(html, /实时人脸与人体关键点分析/);
  assert.match(html, /微构体中填充导电介质的仿真优化/);
  assert.match(html, /NUS_SOC_Visual_Computing_Project_26Summer/);
  assert.match(html, /Mathmatical_modeling_HUASHUCUP/);
  assert.doesNotMatch(html, /待补充|你的名字|codex-preview/);
});
