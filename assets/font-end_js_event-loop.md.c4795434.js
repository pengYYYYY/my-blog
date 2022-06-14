import{_ as s,o as a,c as l,a as e}from"./app.9ef6ba01.js";var o="/assets/GjVvTD.7808366a.png",n="/assets/hhZMFq.9e80935f.png",p="/assets/Lgi6hI.370ab9cb.png",t="/assets/Xqlyuu.40ca1600.png",c="/assets/OIprvT.888bc869.png";const g='{"title":"JS\u4E2D\u7684\u4E8B\u4EF6\u5FAA\u73AF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B","slug":"\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B"},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u6709\u4E8B\u4EF6\u5FAA\u73AF","slug":"\u4E3A\u4EC0\u4E48\u6709\u4E8B\u4EF6\u5FAA\u73AF"},{"level":3,"title":"\u7EBF\u7A0B\u6A21\u578B","slug":"\u7EBF\u7A0B\u6A21\u578B"},{"level":3,"title":"\u6D88\u606F\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\u7C7B\u578B","slug":"\u6D88\u606F\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\u7C7B\u578B"},{"level":3,"title":"\u4EFB\u52A1\u4F18\u5148\u7EA7\u95EE\u9898","slug":"\u4EFB\u52A1\u4F18\u5148\u7EA7\u95EE\u9898"},{"level":3,"title":"\u89E3\u51B3\u5355\u4E2A\u4EFB\u52A1\u6267\u884C\u65F6\u957F\u8FC7\u4E45\u7684\u95EE\u9898","slug":"\u89E3\u51B3\u5355\u4E2A\u4EFB\u52A1\u6267\u884C\u65F6\u957F\u8FC7\u4E45\u7684\u95EE\u9898"},{"level":2,"title":"\u6D4F\u89C8\u5668\u4E2D\u7684 Event Loop","slug":"\u6D4F\u89C8\u5668\u4E2D\u7684-event-loop"},{"level":2,"title":"Node \u4E2D\u7684 Event Loop","slug":"node-\u4E2D\u7684-event-loop"},{"level":3,"title":"timer","slug":"timer"},{"level":3,"title":"I/O\uFF0Ccallback\u9636\u6BB5","slug":"i-o\uFF0Ccallback\u9636\u6BB5"},{"level":3,"title":"idle,prepare","slug":"idle-prepare"},{"level":3,"title":"poll","slug":"poll"},{"level":3,"title":"check","slug":"check"},{"level":3,"title":"close callbacks","slug":"close-callbacks"},{"level":3,"title":"NodeJS\u4E2D\u5B8F\u961F\u5217\u4E3B\u8981\u67094\u4E2A","slug":"nodejs\u4E2D\u5B8F\u961F\u5217\u4E3B\u8981\u67094\u4E2A"},{"level":3,"title":"\u7248\u672C\u5DEE\u5F02","slug":"\u7248\u672C\u5DEE\u5F02"}],"relativePath":"font-end/js/event-loop.md","lastUpdated":1655193129000}',r={name:"font-end/js/event-loop.md"},i=e('<h1 id="js\u4E2D\u7684\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1">JS\u4E2D\u7684\u4E8B\u4EF6\u5FAA\u73AF <a class="header-anchor" href="#js\u4E2D\u7684\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a></h1><p><code>JS</code> \u4E2D\u7684\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236</p><h2 id="\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B" tabindex="-1">\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B <a class="header-anchor" href="#\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B" aria-hidden="true">#</a></h2><p><code>JS</code> \u662F\u5355\u7EBF\u7A0B\u6267\u884C\u7684\uFF0C\u8BB2\u5230\u7EBF\u7A0B\uFF0C\u90A3\u4E48\u4E5F\u5F97\u8BF4\u4E00\u4E0B\u8FDB\u7A0B\uFF0C\u672C\u8D28\u4E0A\u6765\u8BF4\uFF0C\u4E24\u4E2A\u540D\u8BCD\u90FD\u662F <code>CPU</code> \u5DE5\u4F5C\u65F6\u95F4\u7247\u7684\u4E00\u4E2A\u63CF\u8FF0\u3002</p><p>\u8FDB\u7A0B\u63CF\u8FF0\u4E86 <code>CPU</code> \u5728\u8FD0\u884C\u6307\u4EE4\u53CA\u52A0\u8F7D\u548C\u4FDD\u5B58\u4E0A\u4E0B\u6587\u6240\u9700\u7684\u65F6\u95F4\uFF0C\u653E\u5728\u5E94\u7528\u4E0A\u6765\u8BF4\u5C31\u4EE3\u8868\u4E86\u4E00\u4E2A\u7A0B\u5E8F\u3002\u7EBF\u7A0B\u662F\u8FDB\u7A0B\u4E2D\u7684\u66F4\u5C0F\u5355\u4F4D\uFF0C\u63CF\u8FF0\u4E86\u6267\u884C\u4E00\u6BB5\u6307\u4EE4\u6240\u9700\u7684\u65F6\u95F4\u3002</p><p>\u5F53\u4F60\u6253\u5F00\u4E00\u4E2A Tab \u9875\u65F6\uFF0C\u5176\u5B9E\u5C31\u662F\u521B\u5EFA\u4E86\u4E00\u4E2A\u8FDB\u7A0B\uFF0C\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u53EF\u4EE5\u6709\u591A\u4E2A\u7EBF\u7A0B\uFF0C\u6BD4\u5982\u6E32\u67D3\u7EBF\u7A0B\u3001JS \u5F15\u64CE\u7EBF\u7A0B\u3001HTTP \u8BF7\u6C42\u7EBF\u7A0B\u7B49\u7B49\uFF0C\u5F53\u4F60\u53D1\u8D77\u4E00\u4E2A\u8BF7\u6C42\u65F6\uFF0C\u5176\u5B9E\u5C31\u662F\u521B\u5EFA\u4E86\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u5F53\u8BF7\u6C42\u7ED3\u675F\u540E\uFF0C\u8BE5\u7EBF\u7A0B\u53EF\u80FD\u5C31\u4F1A\u88AB\u9500\u6BC1\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u6709\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1">\u4E3A\u4EC0\u4E48\u6709\u4E8B\u4EF6\u5FAA\u73AF <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u6709\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a></h2><p>\u56E0\u4E3A\u6BCF\u4E00\u4E2A\u6E32\u67D3\u8FDB\u7A0B\u90FD\u53EA\u6709\u4E00\u4E2A\u4E3B\u7EBF\u7A0B\uFF0C\u5E76\u4E14\u4E3B\u7EBF\u7A0B\u975E\u5E38\u5FD9\uFF0C\u8981\u5904\u7406Dom,\u53C8\u8981\u8BA1\u7B97\u6837\u5F0F\uFF0C\u8FD8\u8981\u5904\u7406\u5E03\u5C40\uFF0C\u540C\u65F6\u8FD8\u9700\u8981\u5904\u7406 JavaScript \u4EFB\u52A1\u4EE5\u53CA\u5404\u79CD\u8F93\u5165\u4E8B\u4EF6\u3002\u6240\u4EE5\u4F1A\u6709\u5404\u79CD\u7C7B\u578B\u7684\u4EFB\u52A1\u5728\u4E3B\u7EBF\u7A0B\u4E2D\u6709\u6761\u4E0D\u7D0A\u5730\u6267\u884C\uFF0C\u6240\u4EE5\u9700\u8981\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF\u7CFB\u7EDF\u6765\u7EDF\u4E00\u7684\u8C03\u5EA6\u8FD9\u4E9B\u4EFB\u52A1\u3002\u901A\u8FC7\u6D88\u606F\u961F\u5217\u8FDB\u884C\u6D88\u606F\u6536\u96C6\u3002</p><h3 id="\u7EBF\u7A0B\u6A21\u578B" tabindex="-1">\u7EBF\u7A0B\u6A21\u578B <a class="header-anchor" href="#\u7EBF\u7A0B\u6A21\u578B" aria-hidden="true">#</a></h3><p><img src="'+o+`" alt="img"></p><ol><li>\u6DFB\u52A0\u4E00\u4E2A\u6D88\u606F\u961F\u5217;</li><li>IO \u7EBF\u7A0B\u4E2D\u4EA7\u751F\u7684\u65B0\u4EFB\u52A1\u6DFB\u52A0\u8FDB\u6D88\u606F\u961F\u5217\u5C3E\u90E8;</li><li>\u6E32\u67D3\u4E3B\u7EBF\u7A0B\u4F1A\u5FAA\u73AF\u5730\u4ECE\u6D88\u606F\u961F\u5217\u5934\u90E8\u4E2D\u8BFB\u53D6\u4EFB\u52A1\uFF0C\u6267\u884C\u4EFB\u52A1</li></ol><p>\u7B80\u5355\u7684\u4EE3\u7801\u5B9E\u73B0</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">queue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">init</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">task</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">task</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">function</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#82AAFF;">task</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6D88\u606F\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\u7C7B\u578B" tabindex="-1">\u6D88\u606F\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\u7C7B\u578B <a class="header-anchor" href="#\u6D88\u606F\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\u7C7B\u578B" aria-hidden="true">#</a></h3><p>\u5982 \u8F93\u5165\u4E8B\u4EF6(\u9F20\u6807\u6EDA\u52A8\u3001\u70B9\u51FB\u3001\u79FB\u52A8)\u3001\u5FAE\u4EFB\u52A1\u3001\u6587\u4EF6\u8BFB\u5199\u3001WebSocket\u3001JavaScript \u5B9A\u65F6 \u5668\u7B49\u7B49\u3002 \u9664\u6B64\u4E4B\u5916\uFF0C\u6D88\u606F\u961F\u5217\u4E2D\u8FD8\u5305\u542B\u4E86\u5F88\u591A\u4E0E\u9875\u9762\u76F8\u5173\u7684\u4E8B\u4EF6\uFF0C\u5982 JavaScript \u6267\u884C\u3001\u89E3\u6790DOM\u3001\u6837\u5F0F\u8BA1\u7B97\u3001\u5E03\u5C40\u8BA1\u7B97\u3001CSS \u52A8\u753B\u7B49\u3002</p><p>\u4EE5\u4E0A\u8FD9\u4E9B\u4E8B\u4EF6\u90FD\u662F\u5728\u4E3B\u7EBF\u7A0B\u4E2D\u6267\u884C\u7684\uFF0C\u6240\u4EE5\u5728\u7F16\u5199 Web \u5E94\u7528\u65F6\uFF0C\u4F60\u8FD8\u9700\u8981\u8861\u91CF\u8FD9\u4E9B\u4E8B\u4EF6\u6240 \u5360\u7528\u7684\u65F6\u957F\uFF0C\u5E76\u60F3\u529E\u6CD5\u89E3\u51B3\u5355\u4E2A\u4EFB\u52A1\u5360\u7528\u4E3B\u7EBF\u7A0B\u8FC7\u4E45\u7684\u95EE\u9898\u3002</p><h3 id="\u4EFB\u52A1\u4F18\u5148\u7EA7\u95EE\u9898" tabindex="-1">\u4EFB\u52A1\u4F18\u5148\u7EA7\u95EE\u9898 <a class="header-anchor" href="#\u4EFB\u52A1\u4F18\u5148\u7EA7\u95EE\u9898" aria-hidden="true">#</a></h3><p>\u4E8B\u4EF6\u6709\u5206\u4E3B\u6B21\u5148\u540E\uFF0C\u901A\u8FC7\u533A\u5206\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u6765\u4FDD\u8BC1\u6267\u884C\u6548\u7387\u3002</p><p>\u6211\u4EEC\u628A\u6D88\u606F\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\u79F0\u4E3A\u5B8F\u4EFB\u52A1\uFF0C\u6BCF\u4E2A\u5B8F\u4EFB\u52A1\u4E2D\u90FD\u5305\u542B\u4E86\u4E00\u4E2A\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u5728\u6267\u884C \u5B8F\u4EFB\u52A1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C DOM \u6709\u53D8\u5316\uFF0C\u90A3\u4E48\u5C31\u4F1A\u5C06\u8BE5\u53D8\u5316\u6DFB\u52A0\u5230\u5FAE\u4EFB\u52A1\u5217\u8868\u4E2D\uFF0C\u8FD9\u6837\u5C31\u4E0D \u4F1A\u5F71\u54CD\u5230\u5B8F\u4EFB\u52A1\u7684\u7EE7\u7EED\u6267\u884C\uFF0C\u56E0\u6B64\u4E5F\u5C31\u89E3\u51B3\u4E86\u6267\u884C\u6548\u7387\u7684\u95EE\u9898\u3002</p><p>\u5B8F\u4EFB\u52A1\u4E2D\u7684\u4E3B\u8981\u529F\u80FD\u90FD\u76F4\u63A5\u5B8C\u6210\u4E4B\u540E\uFF0C\u8FD9\u65F6\u5019\uFF0C\u6E32\u67D3\u5F15\u64CE\u5E76\u4E0D\u7740\u6025\u53BB\u6267\u884C\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C \u800C\u662F\u6267\u884C\u5F53\u524D\u5B8F\u4EFB\u52A1\u4E2D\u7684\u5FAE\u4EFB\u52A1\uFF0C\u56E0\u4E3A DOM \u53D8\u5316\u7684\u4E8B\u4EF6\u90FD\u4FDD\u5B58\u5728\u8FD9\u4E9B\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\uFF0C\u8FD9 \u6837\u4E5F\u5C31\u89E3\u51B3\u4E86\u5B9E\u65F6\u6027\u95EE\u9898\u3002</p><h3 id="\u89E3\u51B3\u5355\u4E2A\u4EFB\u52A1\u6267\u884C\u65F6\u957F\u8FC7\u4E45\u7684\u95EE\u9898" tabindex="-1">\u89E3\u51B3\u5355\u4E2A\u4EFB\u52A1\u6267\u884C\u65F6\u957F\u8FC7\u4E45\u7684\u95EE\u9898 <a class="header-anchor" href="#\u89E3\u51B3\u5355\u4E2A\u4EFB\u52A1\u6267\u884C\u65F6\u957F\u8FC7\u4E45\u7684\u95EE\u9898" aria-hidden="true">#</a></h3><p>\u56E0\u4E3A\u6240\u6709\u7684\u4EFB\u52A1\u90FD\u662F\u5728\u5355\u7EBF\u7A0B\u4E2D\u6267\u884C\u7684\uFF0C\u6240\u4EE5\u6BCF\u6B21\u53EA\u80FD\u6267\u884C\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u800C\u5176\u4ED6\u4EFB\u52A1\u5C31\u90FD\u5904\u4E8E \u7B49\u5F85\u72B6\u6001\u3002</p><p><img src="`+n+'" alt="img"></p><h2 id="\u6D4F\u89C8\u5668\u4E2D\u7684-event-loop" tabindex="-1">\u6D4F\u89C8\u5668\u4E2D\u7684 Event Loop <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u4E2D\u7684-event-loop" aria-hidden="true">#</a></h2><p><img src="'+p+'" alt="img"></p><p>Event Loop \u6267\u884C\u987A\u5E8F:</p><ol><li>\u9996\u5148\u6267\u884C\u540C\u6B65\u4EE3\u7801\uFF0C\u8FD9\u5C5E\u4E8E\u5B8F\u4EFB\u52A1</li><li>\u5F53\u6267\u884C\u5B8C\u6240\u6709\u540C\u6B65\u4EE3\u7801\u540E\uFF0C\u6267\u884C\u6808\u4E3A\u7A7A\uFF0C\u67E5\u8BE2\u662F\u5426\u6709\u5F02\u6B65\u4EE3\u7801\u9700\u8981\u6267\u884C</li><li>\u6267\u884C\u6240\u6709\u5FAE\u4EFB\u52A1</li><li>\u5F53\u6267\u884C\u5B8C\u6240\u6709\u5FAE\u4EFB\u52A1\u540E\uFF0C\u5982\u6709\u5FC5\u8981\u4F1A\u6E32\u67D3\u9875\u9762</li><li>\u7136\u540E\u5F00\u59CB\u4E0B\u4E00\u8F6E Event Loop\uFF0C\u6267\u884C\u5B8F\u4EFB\u52A1\u4E2D\u7684\u5F02\u6B65\u4EE3\u7801\uFF0C\u4E5F\u5C31\u662F setTimeout \u4E2D\u7684\u56DE\u8C03\u51FD\u6570</li></ol><p>\u5FAE\u4EFB\u52A1\u5305\u62EC: <code>process.nextTick</code>\uFF0C<code>promise</code> \uFF0C<code>MutationObserver</code>\uFF0C\u5176\u4E2D <code>process.nextTick</code> \u4E3A <code>Node</code> \u72EC\u6709\u3002 \u5B8F\u4EFB\u52A1\u5305\u62EC <code>script</code>,<code>setTimeout</code>, <code>setInterval</code>,<code>setImmediate</code>,<code>I/O</code>,<code>UI rendering</code>\u3002</p><h2 id="node-\u4E2D\u7684-event-loop" tabindex="-1">Node \u4E2D\u7684 Event Loop <a class="header-anchor" href="#node-\u4E2D\u7684-event-loop" aria-hidden="true">#</a></h2><blockquote><p>node.js\u8FD0\u884C\u6D41\u7A0B</p></blockquote><p><img src="'+t+'" alt="img"></p><p>Node.js\u7684\u8FD0\u884C\u673A\u5236\u5982\u4E0B:</p><ul><li>V8\u5F15\u64CE\u89E3\u6790JavaScript\u811A\u672C\u3002</li><li>\u89E3\u6790\u540E\u7684\u4EE3\u7801\uFF0C\u8C03\u7528Node API\u3002</li><li>libUv\u5E93\u8D1F\u8D23Node API\u7684\u6267\u884C\u3002\u5B83\u5C06\u4E0D\u540C\u7684\u4EFB\u52A1\u5206\u914D\u7ED9\u4E0D\u540C\u7684\u7EBF\u7A0B\uFF0C\u5F62\u6210\u4E00\u4E2AEvent Loop\uFF08\u4E8B\u4EF6\u5FAA\u73AF\uFF09\uFF0C\u4EE5\u5F02\u6B65\u7684\u65B9\u5F0F\u5C06\u4EFB\u52A1\u7684\u6267\u884C\u7ED3\u679C\u8FD4\u56DE\u7ED9V8\u5F15\u64CE\u3002</li><li>V8\u5F15\u64CE\u518D\u5C06\u7ED3\u679C\u8FD4\u56DE\u7ED9\u7528\u6237\u3002</li></ul><blockquote><p>\u516D\u4E2A\u9636\u6BB5</p></blockquote><p><img src="'+c+`" alt="img"></p><p>Node \u4E2D\u7684 Event Loop \u548C\u6D4F\u89C8\u5668\u4E2D\u7684\u662F\u5B8C\u5168\u4E0D\u76F8\u540C\u7684\u4E1C\u897F\u3002 Node \u7684 Event Loop \u5206\u4E3A 6 \u4E2A\u9636\u6BB5\uFF0C\u5B83\u4EEC\u4F1A\u6309\u7167\u987A\u5E8F\u53CD\u590D\u8FD0\u884C\u3002\u6BCF\u5F53\u8FDB\u5165\u4E00\u4E2A\u9636\u6BB5\u7684\u65F6\u5019\uFF0C\u90FD\u4F1A\u4ECE\u5BF9\u5E94\u7684\u56DE\u8C03\u961F\u5217\u4E2D\u53D6\u51FA\u51FD\u6570\u53BB\u6267\u884C\u3002\u5F53\u961F\u5217\u4E3A\u7A7A\u6216\u8005\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570\u6570\u91CF\u8FBE\u5230\u7CFB\u7EDF\u7684\u9600\u503C\uFF0C\u5C31\u4F1A\u8FDB\u5165\u4E0B\u4E00\u4E2A\u9636\u6BB5\u3002</p><h3 id="timer" tabindex="-1">timer <a class="header-anchor" href="#timer" aria-hidden="true">#</a></h3><p><code>timers</code> \u9636\u6BB5\u4F1A\u6267\u884C <code>setTimeout</code> \u548C <code>setInterval</code> \u7684\u56DE\u8C03\uFF0C\u5E76\u4E14\u662F\u7531 poll \u9636\u6BB5\u63A7\u5236\u7684\u3002 \u6240\u4EE5\u5728node\u4E2D\u7684\u5B9A\u65F6\u5668\u6307\u5B9A\u7684\u65F6\u95F4\u4E5F\u4E0D\u662F\u51C6\u786E\u65F6\u95F4\uFF0C\u53EA\u80FD\u662F\u5C3D\u5FEB\u6267\u884C\u3002</p><h3 id="i-o\uFF0Ccallback\u9636\u6BB5" tabindex="-1">I/O\uFF0Ccallback\u9636\u6BB5 <a class="header-anchor" href="#i-o\uFF0Ccallback\u9636\u6BB5" aria-hidden="true">#</a></h3><p>\u6267\u884C\u9664\u4E86<code>close</code>\u4E8B\u4EF6\u7684<code>callbacks</code>\u3001\u88AB<code>timers</code>\u8BBE\u5B9A\u7684<code>callbacks</code>,<code>setImmediate()</code>\u8BBE\u5B9A\u7684<code>callbacks</code>\u8FD9\u4E9B\u4E4B\u5916\u7684<code>callbacks</code>\uFF0C<code>I/O</code>\u9636\u6BB5\u4F1A\u6267\u884C\u4E0A\u4E00\u8F6E\u5FAA\u73AF\u4E2D\u5C11\u6570\u672A\u6267\u884C\u7684<code>I/O</code>\u56DE\u8C03.</p><h3 id="idle-prepare" tabindex="-1">idle,prepare <a class="header-anchor" href="#idle-prepare" aria-hidden="true">#</a></h3><p>\u4EC5\u4F9B <code>node</code> \u5185\u90E8\u4F7F\u7528.</p><h3 id="poll" tabindex="-1">poll <a class="header-anchor" href="#poll" aria-hidden="true">#</a></h3><p>\u8FD9\u4E00\u9636\u6BB5\u4E2D\uFF0C\u7CFB\u7EDF\u4F1A\u505A\u4E24\u4EF6\u4E8B\u60C5</p><ol><li>\u56DE\u5230 <code>timer</code> \u9636\u6BB5\u6267\u884C\u56DE\u8C03</li><li>\u6267\u884C <code>I/O</code> \u56DE\u8C03</li></ol><ul><li>\u5982\u679C <code>poll</code> \u961F\u5217\u4E0D\u4E3A\u7A7A\uFF0C\u4F1A\u904D\u5386\u56DE\u8C03\u961F\u5217\u5E76\u540C\u6B65\u6267\u884C\uFF0C\u76F4\u5230\u961F\u5217\u4E3A\u7A7A\u6216\u8005\u8FBE\u5230\u7CFB\u7EDF\u9650\u5236</li><li>\u5982\u679C <code>poll</code> \u961F\u5217\u4E3A\u7A7A\u65F6\uFF0C\u4F1A\u6709\u4E24\u4EF6\u4E8B\u53D1\u751F <ul><li>\u5982\u679C\u6709 <code>setImmediate</code> <code>\u56DE\u8C03\u9700\u8981\u6267\u884C\uFF0Cpoll</code> \u9636\u6BB5\u4F1A\u505C\u6B62\u5E76\u4E14\u8FDB\u5165\u5230 check \u9636\u6BB5\u6267\u884C\u56DE\u8C03</li><li>\u5982\u679C\u6CA1\u6709 <code>setImmediate</code> \u56DE\u8C03\u9700\u8981\u6267\u884C\uFF0C\u4F1A\u7B49\u5F85\u56DE\u8C03\u88AB\u52A0\u5165\u5230\u961F\u5217\u4E2D\u5E76\u7ACB\u5373\u6267\u884C\u56DE\u8C03\uFF0C\u8FD9\u91CC\u540C\u6837\u4F1A\u6709\u4E2A\u8D85\u65F6\u65F6\u95F4\u8BBE\u7F6E\u9632\u6B62\u4E00\u76F4\u7B49\u5F85\u4E0B\u53BB</li></ul></li></ul><p>\u5F53\u7136\u8BBE\u5B9A\u4E86 timer \u7684\u8BDD\u4E14 poll \u961F\u5217\u4E3A\u7A7A\uFF0C\u5219\u4F1A\u5224\u65AD\u662F\u5426\u6709 timer \u8D85\u65F6\uFF0C\u5982\u679C\u6709\u7684\u8BDD\u4F1A\u56DE\u5230 timer \u9636\u6BB5\u6267\u884C\u56DE\u8C03\u3002</p><h3 id="check" tabindex="-1">check <a class="header-anchor" href="#check" aria-hidden="true">#</a></h3><p><code>check</code> \u9636\u6BB5\u6267\u884C <code>setImmediate</code></p><h3 id="close-callbacks" tabindex="-1">close callbacks <a class="header-anchor" href="#close-callbacks" aria-hidden="true">#</a></h3><p>\u6267\u884Csocket.on(&#39;close&#39;, ....)\u8FD9\u4E9Bcallbacks</p><h3 id="nodejs\u4E2D\u5B8F\u961F\u5217\u4E3B\u8981\u67094\u4E2A" tabindex="-1">NodeJS\u4E2D\u5B8F\u961F\u5217\u4E3B\u8981\u67094\u4E2A <a class="header-anchor" href="#nodejs\u4E2D\u5B8F\u961F\u5217\u4E3B\u8981\u67094\u4E2A" aria-hidden="true">#</a></h3><p>\u7531\u4E0A\u9762\u7684\u4ECB\u7ECD\u53EF\u4EE5\u770B\u5230\uFF0C\u56DE\u8C03\u4E8B\u4EF6\u4E3B\u8981\u4F4D\u4E8E4\u4E2A <code>macrotask queue</code> \u4E2D\uFF1A</p><ol><li>Timers Queue</li><li>IO Callbacks Queue</li><li>Check Queue</li><li>Close Callbacks Queue</li></ol><p>\u4E0D\u540C\u7C7B\u578B\u7684 <code>macrotask queue</code> \u4F1A\u88AB\u653E\u5165\u4E0D\u540C\u7684\u5B8F\u4EFB\u52A1\u961F\u5217\u4E2D\u3002\u5728\u6D4F\u89C8\u5668\u4E2D</p><p>NodeJs\u7684\u5FAE\u4EFB\u52A1\u961F\u5217\u4E3B\u8981\u67092\u4E2A\uFF1A</p><p><code>Next Tick Queue</code>\uFF1A\u662F\u653E\u7F6Eprocess.nextTick(callback)\u7684\u56DE\u8C03\u4EFB\u52A1\u7684 <code>Other Micro Queue</code>\uFF1A\u653E\u7F6E\u5176\u4ED6microtask\uFF0C\u6BD4\u5982Promise\u7B49</p><h3 id="\u7248\u672C\u5DEE\u5F02" tabindex="-1">\u7248\u672C\u5DEE\u5F02 <a class="header-anchor" href="#\u7248\u672C\u5DEE\u5F02" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">timer1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">promise1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">timer2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">promise2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h4 id="timers-\u9636\u6BB5\u7684\u6267\u884C\u65F6\u673A\u53D8\u5316" tabindex="-1">timers \u9636\u6BB5\u7684\u6267\u884C\u65F6\u673A\u53D8\u5316 <a class="header-anchor" href="#timers-\u9636\u6BB5\u7684\u6267\u884C\u65F6\u673A\u53D8\u5316" aria-hidden="true">#</a></h4><blockquote><p>node11</p></blockquote><p>\u5982\u679C\u662F node11 \u7248\u672C\u4E00\u65E6\u6267\u884C\u4E00\u4E2A\u9636\u6BB5\u91CC\u7684\u4E00\u4E2A\u5B8F\u4EFB\u52A1(setTimeout,setInterval\u548CsetImmediate)\u5C31\u7ACB\u523B\u6267\u884C\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u8FD9\u5C31\u8DDF\u6D4F\u89C8\u5668\u7AEF\u8FD0\u884C\u4E00\u81F4\uFF0C\u6700\u540E\u7684\u7ED3\u679C\u4E3Atimer1=&gt;promise1=&gt;timer2=&gt;promise2</p><blockquote><p>node10</p></blockquote><p>\u5982\u679C\u662F node10 \u53CA\u5176\u4E4B\u524D\u7248\u672C\u8981\u770B\u7B2C\u4E00\u4E2A\u5B9A\u65F6\u5668\u6267\u884C\u5B8C\uFF0C\u7B2C\u4E8C\u4E2A\u5B9A\u65F6\u5668\u662F\u5426\u5728\u5B8C\u6210\u961F\u5217\u4E2D.</p><ul><li>\u5982\u679C\u662F\u7B2C\u4E8C\u4E2A\u5B9A\u65F6\u5668\u8FD8\u672A\u5728\u5B8C\u6210\u961F\u5217\u4E2D\uFF0C\u6700\u540E\u7684\u7ED3\u679C\u4E3A<code>timer1=&gt;promise1=&gt;timer2=&gt;promise2</code></li><li>\u5982\u679C\u662F\u7B2C\u4E8C\u4E2A\u5B9A\u65F6\u5668\u5DF2\u7ECF\u5728\u5B8C\u6210\u961F\u5217\u4E2D\uFF0C\u5219\u6700\u540E\u7684\u7ED3\u679C\u4E3A<code>timer1=&gt;timer2=&gt;promise1=&gt;promise2</code></li></ul><h4 id="check-\u9636\u6BB5\u7684\u6267\u884C\u65F6\u673A\u53D8\u5316" tabindex="-1">check \u9636\u6BB5\u7684\u6267\u884C\u65F6\u673A\u53D8\u5316 <a class="header-anchor" href="#check-\u9636\u6BB5\u7684\u6267\u884C\u65F6\u673A\u53D8\u5316" aria-hidden="true">#</a></h4><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">setImmediate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">immediate1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setImmediate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">immediate2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">promise resolve</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setImmediate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">immediate3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setImmediate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">immediate4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5982\u679C\u662F node11 \u540E\u7684\u7248\u672C\uFF0C\u4F1A\u8F93<code>immediate1=&gt;immediate2=&gt;promise resolve=&gt;immediate3=&gt;immediate4</code></li><li>\u5982\u679C\u662F node11 \u524D\u7684\u7248\u672C\uFF0C\u4F1A\u8F93<code>\u51FAimmediate1=&gt;immediate2=&gt;immediate3=&gt;immediate4=&gt;promise resolve</code></li></ul><h4 id="nexttick-\u961F\u5217\u7684\u6267\u884C\u65F6\u673A\u53D8\u5316" tabindex="-1">nextTick \u961F\u5217\u7684\u6267\u884C\u65F6\u673A\u53D8\u5316 <a class="header-anchor" href="#nexttick-\u961F\u5217\u7684\u6267\u884C\u65F6\u673A\u53D8\u5316" aria-hidden="true">#</a></h4><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">setImmediate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">timeout1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setImmediate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">timeout2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">nextTick</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">next tick</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setImmediate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">timeout3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setImmediate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">timeout4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5982\u679C\u662F node11 \u540E\u7684\u7248\u672C\uFF0C\u4F1A\u8F93\u51FAtimeout1=&gt;timeout2=&gt;next tick=&gt;timeout3=&gt;timeout4</li><li>\u5982\u679C\u662F node11 \u524D\u7684\u7248\u672C\uFF0C\u4F1A\u8F93\u51FAtimeout1=&gt;timeout2=&gt;timeout3=&gt;timeout4=&gt;next tick</li></ul><h4 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h4><p>\u5982\u679C\u662F node11 \u7248\u672C\u4E00\u65E6\u6267\u884C\u4E00\u4E2A\u9636\u6BB5\u91CC\u7684\u4E00\u4E2A\u5B8F\u4EFB\u52A1(setTimeout,setInterval\u548CsetImmediate)\u5C31\u7ACB\u523B\u6267\u884C\u5BF9\u5E94\u7684\u5FAE\u4EFB\u52A1\u961F\u5217\u3002</p><p><a href="https://juejin.cn/post/6844904079353708557#heading-4" target="_blank" rel="noopener noreferrer">\u6398\u91D1\u53C2\u8003\u6587\u7AE0</a></p>`,74),F=[i];function y(D,d,A,C,h,m){return a(),l("div",null,F)}var v=s(r,[["render",y]]);export{g as __pageData,v as default};
