import{_ as a,c as l,o as p,X as n,k as s}from"./chunks/framework.6b1ef901.js";const d=JSON.parse('{"title":"通用样式","description":"","frontmatter":{"title":"通用样式"},"headers":[],"relativePath":"docs/common-css.md","filePath":"docs/common-css.md"}'),o={name:"docs/common-css.md"},e=n(`<h1 id="通用样式" tabindex="-1">通用样式 <a class="header-anchor" href="#通用样式" aria-label="Permalink to &quot;通用样式&quot;">​</a></h1><p>组件内部导入了部分通用样式，如内外边距，flex等。默认全局样式引入的时候会默认导入，如进行按需加载，部分内容可按需进行导入</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki rose-pine-moon vp-code-dark"><code><span class="line"><span style="color:#908CAA;font-style:italic;">//</span><span style="color:#6E6A86;font-style:italic;"> main.ts</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">//</span><span style="color:#6E6A86;font-style:italic;"> 全部引入</span></span>
<span class="line"><span style="color:#3E8FB0;">import </span><span style="color:#F6C177;">&#39;bin-ui-design/dist/styles/index.css&#39;</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">//</span><span style="color:#6E6A86;font-style:italic;"> 按需引入</span></span>
<span class="line"><span style="color:#3E8FB0;">import </span><span style="color:#F6C177;">&#39;bin-ui-design/dist/styles/base.css&#39;</span></span>
<span class="line"><span style="color:#3E8FB0;">import </span><span style="color:#F6C177;">&#39;bin-ui-design/dist/styles/icon.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">//</span><span style="color:#6E6A86;font-style:italic;"> 扩展基础样式</span></span>
<span class="line"><span style="color:#3E8FB0;">import </span><span style="color:#F6C177;">&#39;bin-ui-design/dist/styles/common/common.css&#39;</span></span>
<span class="line"><span style="color:#3E8FB0;">import </span><span style="color:#F6C177;">&#39;bin-ui-design/dist/styles/common/flex.css&#39;</span></span>
<span class="line"><span style="color:#3E8FB0;">import </span><span style="color:#F6C177;">&#39;bin-ui-design/dist/styles/common/reset.css&#39;</span></span>
<span class="line"><span style="color:#3E8FB0;">import </span><span style="color:#F6C177;">&#39;bin-ui-design/dist/styles/common/scrollbar.css&#39;</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#357B42;font-style:italic;">// main.ts</span></span>
<span class="line"><span style="color:#357B42;font-style:italic;">// 全部引入</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;bin-ui-design/dist/styles/index.css&#39;</span></span>
<span class="line"><span style="color:#357B42;font-style:italic;">// 按需引入</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;bin-ui-design/dist/styles/base.css&#39;</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;bin-ui-design/dist/styles/icon.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#357B42;font-style:italic;">// 扩展基础样式</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;bin-ui-design/dist/styles/common/common.css&#39;</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;bin-ui-design/dist/styles/common/flex.css&#39;</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;bin-ui-design/dist/styles/common/reset.css&#39;</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;bin-ui-design/dist/styles/common/scrollbar.css&#39;</span></span></code></pre></div><h2 id="reset-css" tabindex="-1">reset.css <a class="header-anchor" href="#reset-css" aria-label="Permalink to &quot;reset.css&quot;">​</a></h2><p>基础样式用于初始化默认样式，这里的reset样式已经集成了部分样式变量，更方便使用。使用时直接导入即可。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki rose-pine-moon vp-code-dark"><code><span class="line"><span style="color:#9CCFD8;">body</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">color</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">var</span><span style="color:#908CAA;">(</span><span style="color:#E0DEF4;font-style:italic;">--bin-color-text-primary</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">font-size</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">var</span><span style="color:#908CAA;">(</span><span style="color:#E0DEF4;font-style:italic;">--bin-font-size-default</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">font-family</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">var</span><span style="color:#908CAA;">(</span><span style="color:#E0DEF4;font-style:italic;">--bin-font-family</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">-webkit-font-smoothing</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">antialiased</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">-moz-osx-font-smoothing</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">grayscale</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">-webkit-tap-highlight-color</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">transparent</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#9CCFD8;">ul</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">0</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">0</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">list-style</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">none</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#9CCFD8;">ul</span><span style="color:#E0DEF4;"> </span><span style="color:#9CCFD8;">li</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">0</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">0</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">list-style</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">none</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CCFD8;">article</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">aside</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">blockquote</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">body</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">button</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">code</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">dd</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">details</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">div</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">dl</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">dt</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">fieldset</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">figcaption</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">figure</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">footer</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">form</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">header</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">hgroup</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">hr</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">input</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">legend</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">li</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">menu</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">nav</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">ol</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">p</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">pre</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">section</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">td</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">textarea</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">th</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">ul</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">0</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">0</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CCFD8;">a</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">color</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">var</span><span style="color:#908CAA;">(</span><span style="color:#E0DEF4;font-style:italic;">--bin-color-primary</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">text-decoration</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">none</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  &amp;</span><span style="color:#908CAA;">:</span><span style="color:#F6C177;">hover {</span></span>
<span class="line"><span style="color:#F6C177;">    color: </span><span style="color:#EB6F92;font-style:italic;">var</span><span style="color:#908CAA;">(</span><span style="color:#E0DEF4;font-style:italic;">--bin-color-primary-light1</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#9CCFD8;">outline</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">none</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0DEF4;">  &amp;</span><span style="color:#908CAA;font-style:italic;">:</span><span style="color:#C4A7E7;font-style:italic;">focus</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#9CCFD8;">color</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">var</span><span style="color:#908CAA;">(</span><span style="color:#E0DEF4;font-style:italic;">--bin-color-primary-light1</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#9CCFD8;">outline</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">none</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#E0DEF4;">  &amp;</span><span style="color:#908CAA;font-style:italic;">:</span><span style="color:#C4A7E7;font-style:italic;">active</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#9CCFD8;">color</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">var</span><span style="color:#908CAA;">(</span><span style="color:#E0DEF4;font-style:italic;">--bin-color-primary-active</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#E0DEF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CCFD8;">h1</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">h2</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">h3</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">h4</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">h5</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">h6</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">color</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">var</span><span style="color:#908CAA;">(</span><span style="color:#E0DEF4;font-style:italic;">--bin-color-text-primary</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">font-weight</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">inherit</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  &amp;</span><span style="color:#908CAA;">:</span><span style="color:#F6C177;">first-child {</span></span>
<span class="line"><span style="color:#F6C177;">    margin-top: </span><span style="color:#EA9A97;">0</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#E0DEF4;">  &amp;</span><span style="color:#908CAA;font-style:italic;">:</span><span style="color:#C4A7E7;font-style:italic;">last-child</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#9CCFD8;">margin-bottom</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">0</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#E0DEF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CCFD8;">h1</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">font-size</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">calc</span><span style="color:#908CAA;">(</span><span style="color:#F6C177;">--bin-font-size-default </span><span style="color:#3E8FB0;">+</span><span style="color:#F6C177;"> </span><span style="color:#EA9A97;">6</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CCFD8;">h2</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">font-size</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">calc</span><span style="color:#908CAA;">(</span><span style="color:#F6C177;">--bin-font-size-default </span><span style="color:#3E8FB0;">+</span><span style="color:#F6C177;"> </span><span style="color:#EA9A97;">4</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CCFD8;">h3</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">font-size</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">calc</span><span style="color:#908CAA;">(</span><span style="color:#F6C177;">--bin-font-size-default </span><span style="color:#3E8FB0;">+</span><span style="color:#F6C177;"> </span><span style="color:#EA9A97;">2</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CCFD8;">h4</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">h5</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">h6</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">p</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">font-size</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">inherit</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CCFD8;">p</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">line-height</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">1.8</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  &amp;</span><span style="color:#908CAA;">:</span><span style="color:#F6C177;">first-child {</span></span>
<span class="line"><span style="color:#F6C177;">    margin-top: </span><span style="color:#EA9A97;">0</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#E0DEF4;">  &amp;</span><span style="color:#908CAA;font-style:italic;">:</span><span style="color:#C4A7E7;font-style:italic;">last-child</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#9CCFD8;">margin-bottom</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">0</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#E0DEF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CCFD8;">sup</span><span style="color:#908CAA;">,</span></span>
<span class="line"><span style="color:#9CCFD8;">sub</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">font-size</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">calc</span><span style="color:#908CAA;">(</span><span style="color:#F6C177;">--bin-font-size-default </span><span style="color:#3E8FB0;">-</span><span style="color:#F6C177;"> </span><span style="color:#EA9A97;">1</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CCFD8;">small</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">font-size</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">calc</span><span style="color:#908CAA;">(</span><span style="color:#F6C177;">--bin-font-size-default </span><span style="color:#3E8FB0;">-</span><span style="color:#F6C177;"> </span><span style="color:#EA9A97;">2</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CCFD8;">hr</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-top</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">20</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-bottom</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">20</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">border</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">0</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">border-top</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">var</span><span style="color:#908CAA;">(</span><span style="color:#E0DEF4;font-style:italic;">--bin-border-base-light</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#0444AC;">body</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">color</span><span style="color:#002339;">: </span><span style="color:#1AB394;">var</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">--bin-color-text-primary</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">font-size</span><span style="color:#002339;">: </span><span style="color:#1AB394;">var</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">--bin-font-size-default</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">font-family</span><span style="color:#002339;">: </span><span style="color:#1AB394;">var</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">--bin-font-family</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">-webkit-font-smoothing</span><span style="color:#002339;">: </span><span style="color:#174781;">antialiased</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">-moz-osx-font-smoothing</span><span style="color:#002339;">: </span><span style="color:#174781;">grayscale</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">-webkit-tap-highlight-color</span><span style="color:#002339;">: </span><span style="color:#174781;">transparent</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#0444AC;">ul</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin</span><span style="color:#002339;">: </span><span style="color:#174781;">0</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding</span><span style="color:#002339;">: </span><span style="color:#174781;">0</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">list-style</span><span style="color:#002339;">: </span><span style="color:#174781;">none</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#0444AC;">ul</span><span style="color:#002339;"> </span><span style="color:#0444AC;">li</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin</span><span style="color:#002339;">: </span><span style="color:#174781;">0</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding</span><span style="color:#002339;">: </span><span style="color:#174781;">0</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">list-style</span><span style="color:#002339;">: </span><span style="color:#174781;">none</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0444AC;">article</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">aside</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">blockquote</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">body</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">button</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">code</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">dd</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">details</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">div</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">dl</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">dt</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">fieldset</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">figcaption</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">figure</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">footer</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">form</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">header</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">hgroup</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">hr</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">input</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">legend</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">li</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">menu</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">nav</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">ol</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">p</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">pre</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">section</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">td</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">textarea</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">th</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">ul</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin</span><span style="color:#002339;">: </span><span style="color:#174781;">0</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding</span><span style="color:#002339;">: </span><span style="color:#174781;">0</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0444AC;">a</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">color</span><span style="color:#002339;">: </span><span style="color:#1AB394;">var</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">--bin-color-primary</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">text-decoration</span><span style="color:#002339;">: </span><span style="color:#174781;">none</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  &amp;:hover {</span></span>
<span class="line"><span style="color:#002339;">    </span><span style="color:#174781;">color</span><span style="color:#002339;">: </span><span style="color:#1AB394;">var</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">--bin-color-primary-light1</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">    </span><span style="color:#DC3EB7;">outline</span><span style="color:#002339;">: </span><span style="color:#174781;">none</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">  &amp;</span><span style="color:#DF8618;font-style:italic;">:focus</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">    </span><span style="color:#DC3EB7;">color</span><span style="color:#002339;">: </span><span style="color:#1AB394;">var</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">--bin-color-primary-light1</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">    </span><span style="color:#DC3EB7;">outline</span><span style="color:#002339;">: </span><span style="color:#174781;">none</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  }</span></span>
<span class="line"><span style="color:#002339;">  &amp;</span><span style="color:#DF8618;font-style:italic;">:active</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">    </span><span style="color:#DC3EB7;">color</span><span style="color:#002339;">: </span><span style="color:#1AB394;">var</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">--bin-color-primary-active</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">  }</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0444AC;">h1</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">h2</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">h3</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">h4</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">h5</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">h6</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">color</span><span style="color:#002339;">: </span><span style="color:#1AB394;">var</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">--bin-color-text-primary</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">font-weight</span><span style="color:#002339;">: </span><span style="color:#174781;">inherit</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  &amp;:first-child {</span></span>
<span class="line"><span style="color:#002339;">    margin-top: </span><span style="color:#174781;">0</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  }</span></span>
<span class="line"><span style="color:#002339;">  &amp;</span><span style="color:#DF8618;font-style:italic;">:last-child</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">    </span><span style="color:#DC3EB7;">margin-bottom</span><span style="color:#002339;">: </span><span style="color:#174781;">0</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  }</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0444AC;">h1</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">font-size</span><span style="color:#002339;">: </span><span style="color:#1AB394;">calc</span><span style="color:#002339;">(--bin-font-size-default </span><span style="color:#7B30D0;">+</span><span style="color:#002339;"> </span><span style="color:#174781;">6</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0444AC;">h2</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">font-size</span><span style="color:#002339;">: </span><span style="color:#1AB394;">calc</span><span style="color:#002339;">(--bin-font-size-default </span><span style="color:#7B30D0;">+</span><span style="color:#002339;"> </span><span style="color:#174781;">4</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0444AC;">h3</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">font-size</span><span style="color:#002339;">: </span><span style="color:#1AB394;">calc</span><span style="color:#002339;">(--bin-font-size-default </span><span style="color:#7B30D0;">+</span><span style="color:#002339;"> </span><span style="color:#174781;">2</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0444AC;">h4</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">h5</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">h6</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">p</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">font-size</span><span style="color:#002339;">: </span><span style="color:#174781;">inherit</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0444AC;">p</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">line-height</span><span style="color:#002339;">: </span><span style="color:#174781;">1.8</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  &amp;:first-child {</span></span>
<span class="line"><span style="color:#002339;">    margin-top: </span><span style="color:#174781;">0</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  }</span></span>
<span class="line"><span style="color:#002339;">  &amp;</span><span style="color:#DF8618;font-style:italic;">:last-child</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">    </span><span style="color:#DC3EB7;">margin-bottom</span><span style="color:#002339;">: </span><span style="color:#174781;">0</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  }</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0444AC;">sup</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#0444AC;">sub</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">font-size</span><span style="color:#002339;">: </span><span style="color:#1AB394;">calc</span><span style="color:#002339;">(--bin-font-size-default </span><span style="color:#7B30D0;">-</span><span style="color:#002339;"> </span><span style="color:#174781;">1</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0444AC;">small</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">font-size</span><span style="color:#002339;">: </span><span style="color:#1AB394;">calc</span><span style="color:#002339;">(--bin-font-size-default </span><span style="color:#7B30D0;">-</span><span style="color:#002339;"> </span><span style="color:#174781;">2</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0444AC;">hr</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-top</span><span style="color:#002339;">: </span><span style="color:#174781;">20</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-bottom</span><span style="color:#002339;">: </span><span style="color:#174781;">20</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">border</span><span style="color:#002339;">: </span><span style="color:#174781;">0</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">border-top</span><span style="color:#002339;">: </span><span style="color:#1AB394;">var</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">--bin-border-base-light</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">}</span></span></code></pre></div><h2 id="flex-css" tabindex="-1">flex.css <a class="header-anchor" href="#flex-css" aria-label="Permalink to &quot;flex.css&quot;">​</a></h2><p><a href="https://github.com/lzxb/flex.css" target="_blank" rel="noreferrer">flex.css</a> 兼容样式 ， <code>flex.css</code> 扩展了换行属性<code>wrap</code></p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki rose-pine-moon vp-code-dark"><code><span class="line"><span style="color:#908CAA;">[</span><span style="color:#C4A7E7;font-style:italic;">flex</span><span style="color:#3E8FB0;">~=</span><span style="color:#F6C177;">&#39;wrap:wrap&#39;</span><span style="color:#908CAA;">]</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">-webkit-flex-wrap</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">wrap</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">-ms-flex-wrap</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">wrap</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">flex-wrap</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">wrap</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">[</span><span style="color:#DF8618;font-style:italic;">flex</span><span style="color:#7B30D0;">~=</span><span style="color:#A44185;">&#39;wrap:wrap&#39;</span><span style="color:#002339;">] {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">-webkit-flex-wrap</span><span style="color:#002339;">: </span><span style="color:#174781;">wrap</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">-ms-flex-wrap</span><span style="color:#002339;">: </span><span style="color:#174781;">wrap</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">flex-wrap</span><span style="color:#002339;">: </span><span style="color:#174781;">wrap</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span></code></pre></div>`,9),t=s("div",{flex:"main:center cross:center",style:{height:"80px",border:"1px solid #1089ff"}},[s("div",{style:{background:"#fff",padding:"15px"}},"看看我是不是居中的")],-1),c=n(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki rose-pine-moon vp-code-dark"><code><span class="line"><span style="color:#908CAA;font-style:italic;">&lt;!--</span></span>
<span class="line"><span style="color:#6E6A86;font-style:italic;">  将dist目录下的css文件引入到你的页面中，根据你的需要引入</span></span>
<span class="line"><span style="color:#6E6A86;font-style:italic;">  flex.css 使用flex属性匹配</span></span>
<span class="line"><span style="color:#6E6A86;font-style:italic;">  data-flex.css 使用data-flex属性匹配（React使用）</span></span>
<span class="line"><span style="color:#6E6A86;font-style:italic;">  如果使用了webpack打包，npm安装后，并且配置了ES6编译器的话，</span></span>
<span class="line"><span style="color:#6E6A86;font-style:italic;">  flex 属性匹配可以直接使用：</span></span>
<span class="line"><span style="color:#6E6A86;font-style:italic;">    import &#39;flex.css&#39;;</span></span>
<span class="line"><span style="color:#6E6A86;font-style:italic;">  data-flex 属性匹配可以直接使用(react使用)</span></span>
<span class="line"><span style="color:#6E6A86;font-style:italic;">    import &#39;flex.css/dist/data-flex.css&#39;;</span></span>
<span class="line"><span style="color:#6E6A86;font-style:italic;">  </span><span style="color:#908CAA;font-style:italic;">--&gt;</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">&lt;!--</span><span style="color:#6E6A86;font-style:italic;"> flex属性匹配，简单的子元素居中例子： </span><span style="color:#908CAA;font-style:italic;">--&gt;</span></span>
<span class="line"><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">div</span><span style="color:#E0DEF4;"> </span><span style="color:#C4A7E7;font-style:italic;">flex</span><span style="color:#908CAA;">=</span><span style="color:#F6C177;">&quot;main:center cross:center&quot;</span><span style="color:#E0DEF4;"> </span><span style="color:#C4A7E7;font-style:italic;">style</span><span style="color:#908CAA;">=</span><span style="color:#F6C177;">&quot;height: 80px; border:1px solid #1089ff&quot;</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#6E6A86;">&lt;</span><span style="color:#9CCFD8;">div</span><span style="color:#E0DEF4;"> </span><span style="color:#C4A7E7;font-style:italic;">style</span><span style="color:#908CAA;">=</span><span style="color:#F6C177;">&quot;background: #fff;padding: 15px;&quot;</span><span style="color:#6E6A86;">&gt;</span><span style="color:#E0DEF4;">看看我是不是居中的</span><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span></span>
<span class="line"><span style="color:#6E6A86;">&lt;/</span><span style="color:#9CCFD8;">div</span><span style="color:#6E6A86;">&gt;</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#357B42;font-style:italic;">&lt;!--</span></span>
<span class="line"><span style="color:#357B42;font-style:italic;">  将dist目录下的css文件引入到你的页面中，根据你的需要引入</span></span>
<span class="line"><span style="color:#357B42;font-style:italic;">  flex.css 使用flex属性匹配</span></span>
<span class="line"><span style="color:#357B42;font-style:italic;">  data-flex.css 使用data-flex属性匹配（React使用）</span></span>
<span class="line"><span style="color:#357B42;font-style:italic;">  如果使用了webpack打包，npm安装后，并且配置了ES6编译器的话，</span></span>
<span class="line"><span style="color:#357B42;font-style:italic;">  flex 属性匹配可以直接使用：</span></span>
<span class="line"><span style="color:#357B42;font-style:italic;">    import &#39;flex.css&#39;;</span></span>
<span class="line"><span style="color:#357B42;font-style:italic;">  data-flex 属性匹配可以直接使用(react使用)</span></span>
<span class="line"><span style="color:#357B42;font-style:italic;">    import &#39;flex.css/dist/data-flex.css&#39;;</span></span>
<span class="line"><span style="color:#357B42;font-style:italic;">  --&gt;</span></span>
<span class="line"><span style="color:#357B42;font-style:italic;">&lt;!-- flex属性匹配，简单的子元素居中例子： --&gt;</span></span>
<span class="line"><span style="color:#0071CE;">&lt;</span><span style="color:#0444AC;">div</span><span style="color:#0071CE;"> </span><span style="color:#DF8618;font-style:italic;">flex</span><span style="color:#0071CE;">=</span><span style="color:#A44185;">&quot;main:center cross:center&quot;</span><span style="color:#0071CE;"> </span><span style="color:#DF8618;font-style:italic;">style</span><span style="color:#0071CE;">=</span><span style="color:#A44185;">&quot;height: 80px; border:1px solid #1089ff&quot;</span><span style="color:#0071CE;">&gt;</span></span>
<span class="line"><span style="color:#0071CE;">  &lt;</span><span style="color:#0444AC;">div</span><span style="color:#0071CE;"> </span><span style="color:#DF8618;font-style:italic;">style</span><span style="color:#0071CE;">=</span><span style="color:#A44185;">&quot;background: #fff;padding: 15px;&quot;</span><span style="color:#0071CE;">&gt;看看我是不是居中的&lt;/</span><span style="color:#0444AC;">div</span><span style="color:#0071CE;">&gt;</span></span>
<span class="line"><span style="color:#0071CE;">&lt;/</span><span style="color:#0444AC;">div</span><span style="color:#0071CE;">&gt;</span></span></code></pre></div><p>flex 属性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki rose-pine-moon vp-code-dark"><code><span class="line"><span style="color:#e0def4;">dir：主轴方向</span></span>
<span class="line"><span style="color:#e0def4;">    top：从上到下</span></span>
<span class="line"><span style="color:#e0def4;">    right：从右到左</span></span>
<span class="line"><span style="color:#e0def4;">    bottom：从下到上</span></span>
<span class="line"><span style="color:#e0def4;">    left：从左到右（默认）</span></span>
<span class="line"><span style="color:#e0def4;"></span></span>
<span class="line"><span style="color:#e0def4;">main：主轴对齐方式</span></span>
<span class="line"><span style="color:#e0def4;">    right：从右到左</span></span>
<span class="line"><span style="color:#e0def4;">    left：从左到右（默认）</span></span>
<span class="line"><span style="color:#e0def4;">    justify：两端对齐</span></span>
<span class="line"><span style="color:#e0def4;">    center：居中对齐</span></span>
<span class="line"><span style="color:#e0def4;"></span></span>
<span class="line"><span style="color:#e0def4;">cross：交叉轴对齐方式</span></span>
<span class="line"><span style="color:#e0def4;">    top：从上到下（默认）</span></span>
<span class="line"><span style="color:#e0def4;">    bottom：从上到下</span></span>
<span class="line"><span style="color:#e0def4;">    baseline：基线对齐</span></span>
<span class="line"><span style="color:#e0def4;">    center：居中对齐</span></span>
<span class="line"><span style="color:#e0def4;">    stretch：高度并排铺满</span></span>
<span class="line"><span style="color:#e0def4;"></span></span>
<span class="line"><span style="color:#e0def4;">box：子元素设置</span></span>
<span class="line"><span style="color:#e0def4;">    mean：子元素平分空间</span></span>
<span class="line"><span style="color:#e0def4;">    first：第一个子元素不要多余空间，其他子元素平分多余空间</span></span>
<span class="line"><span style="color:#e0def4;">    last：最后一个子元素不要多余空间，其他子元素平分多余空间</span></span>
<span class="line"><span style="color:#e0def4;">    justify：两端第一个元素不要多余空间，其他子元素平分多余空间</span></span>
<span class="line"><span style="color:#e0def4;"></span></span>
<span class="line"><span style="color:#e0def4;">flex-box:</span></span>
<span class="line"><span style="color:#e0def4;">  取值范围(0-10)，单独设置子元素多余空间的如何分配，设置为0，则子元素不占用多余的多余空间</span></span>
<span class="line"><span style="color:#e0def4;">  多余空间分配 = 当前flex-box值/子元素的flex-box值相加之和</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">dir：主轴方向</span></span>
<span class="line"><span style="color:#002339;">    top：从上到下</span></span>
<span class="line"><span style="color:#002339;">    right：从右到左</span></span>
<span class="line"><span style="color:#002339;">    bottom：从下到上</span></span>
<span class="line"><span style="color:#002339;">    left：从左到右（默认）</span></span>
<span class="line"><span style="color:#002339;"></span></span>
<span class="line"><span style="color:#002339;">main：主轴对齐方式</span></span>
<span class="line"><span style="color:#002339;">    right：从右到左</span></span>
<span class="line"><span style="color:#002339;">    left：从左到右（默认）</span></span>
<span class="line"><span style="color:#002339;">    justify：两端对齐</span></span>
<span class="line"><span style="color:#002339;">    center：居中对齐</span></span>
<span class="line"><span style="color:#002339;"></span></span>
<span class="line"><span style="color:#002339;">cross：交叉轴对齐方式</span></span>
<span class="line"><span style="color:#002339;">    top：从上到下（默认）</span></span>
<span class="line"><span style="color:#002339;">    bottom：从上到下</span></span>
<span class="line"><span style="color:#002339;">    baseline：基线对齐</span></span>
<span class="line"><span style="color:#002339;">    center：居中对齐</span></span>
<span class="line"><span style="color:#002339;">    stretch：高度并排铺满</span></span>
<span class="line"><span style="color:#002339;"></span></span>
<span class="line"><span style="color:#002339;">box：子元素设置</span></span>
<span class="line"><span style="color:#002339;">    mean：子元素平分空间</span></span>
<span class="line"><span style="color:#002339;">    first：第一个子元素不要多余空间，其他子元素平分多余空间</span></span>
<span class="line"><span style="color:#002339;">    last：最后一个子元素不要多余空间，其他子元素平分多余空间</span></span>
<span class="line"><span style="color:#002339;">    justify：两端第一个元素不要多余空间，其他子元素平分多余空间</span></span>
<span class="line"><span style="color:#002339;"></span></span>
<span class="line"><span style="color:#002339;">flex-box:</span></span>
<span class="line"><span style="color:#002339;">  取值范围(0-10)，单独设置子元素多余空间的如何分配，设置为0，则子元素不占用多余的多余空间</span></span>
<span class="line"><span style="color:#002339;">  多余空间分配 = 当前flex-box值/子元素的flex-box值相加之和</span></span></code></pre></div><h2 id="common-css" tabindex="-1">common.css <a class="header-anchor" href="#common-css" aria-label="Permalink to &quot;common.css&quot;">​</a></h2><p>边框和部分常用样式</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki rose-pine-moon vp-code-dark"><code><span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">m0</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">0</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">m5</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">5</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">m10</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">10</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">m15</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">15</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">m20</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">20</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">m8</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">8</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">m16</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">16</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">m24</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">24</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mt-5</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-top</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">5</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mt-10</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-top</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">10</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mt-15</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-top</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">15</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mt-20</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-top</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">20</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mt-8</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-top</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">8</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mt-16</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-top</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">16</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mt-24</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-top</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">24</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mr-5</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-right</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">5</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mr-10</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-right</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">10</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mr-15</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-right</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">15</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mr-20</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-right</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">20</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mr-8</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-right</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">8</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mr-16</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-right</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">16</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mr-24</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-right</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">24</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mb-5</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-bottom</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">5</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mb-10</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-bottom</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">10</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mb-15</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-bottom</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">15</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mb-20</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-bottom</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">20</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mb-8</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-bottom</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">8</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mb-16</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-bottom</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">16</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">mb-24</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-bottom</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">24</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">ml-5</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-left</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">5</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">ml-10</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-left</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">10</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">ml-15</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-left</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">15</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">ml-20</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-left</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">20</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">ml-8</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-left</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">8</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">ml-16</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-left</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">16</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">ml-24</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">margin-left</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">24</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">p0</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">0</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">p5</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">5</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">p10</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">10</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">p15</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">15</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">p20</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">20</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">p8</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">8</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">p16</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">16</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">p24</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">24</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pt-5</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-top</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">5</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pt-10</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-top</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">10</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pt-15</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-top</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">15</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pt-20</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-top</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">20</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pt-8</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-top</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">8</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pt-16</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-top</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">16</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pt-24</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-top</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">24</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pr-5</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-right</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">5</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pr-10</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-right</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">10</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pr-15</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-right</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">15</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pr-20</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-right</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">20</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pr-8</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-right</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">8</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pr-16</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-right</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">16</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pr-24</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-right</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">24</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pb-5</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-bottom</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">5</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pb-10</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-bottom</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">10</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pb-15</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-bottom</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">15</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pb-20</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-bottom</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">20</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pb-8</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-bottom</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">8</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pb-16</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-bottom</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">16</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pb-24</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-bottom</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">24</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pl-5</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-left</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">5</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pl-10</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-left</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">10</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pl-15</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-left</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">15</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pl-20</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-left</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">20</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pl-8</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-left</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">8</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pl-16</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-left</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">16</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">pl-24</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">padding-left</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">24</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">t-center</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">text-align</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">center</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">t-right</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">text-align</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">right</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">t-ellipsis</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">display</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">inline-block</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">width</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">100</span><span style="color:#3E8FB0;">%</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">white-space</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">nowrap</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">overflow</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">hidden</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">text-overflow</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">ellipsis</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">f-s-12</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">font-size</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">12</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">f-s-14</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">font-size</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">14</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">f-s-16</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">font-size</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">16</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">f-s-18</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">font-size</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">18</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">f-s-20</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">font-size</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">20</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">f-s-22</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">font-size</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">22</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">f-color-blue</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">color</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">#</span><span style="color:#3E8FB0;">1089ff</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">f-color-red</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">color</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">#</span><span style="color:#3E8FB0;">f5222d</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">f-color-333</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">color</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">#</span><span style="color:#3E8FB0;">333333</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">f-color-666</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">color</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">#</span><span style="color:#3E8FB0;">666666</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">f-color-999</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">color</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">#</span><span style="color:#3E8FB0;">999999</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">link</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">cursor</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">pointer</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">color</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">#</span><span style="color:#3E8FB0;">1089ff</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">link-red</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">cursor</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">pointer</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">color</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">#</span><span style="color:#3E8FB0;">f5222d</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">.</span><span style="color:#C4A7E7;font-style:italic;">g-relative</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">position</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">relative</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"><span style="color:#908CAA;">[</span><span style="color:#C4A7E7;font-style:italic;">border-box</span><span style="color:#908CAA;">]</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">-webkit-box-sizing</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">border-box</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">-moz-box-sizing</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">border-box</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">box-sizing</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">border-box</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;">[</span><span style="color:#C4A7E7;font-style:italic;">t-ellipsis</span><span style="color:#908CAA;">]</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">display</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">inline-block</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">width</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">100</span><span style="color:#3E8FB0;">%</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">white-space</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">nowrap</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">overflow</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">hidden</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">text-overflow</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">ellipsis</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;">[</span><span style="color:#C4A7E7;font-style:italic;">v-cloak</span><span style="color:#908CAA;">]</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">display</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">none</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#DF8618;font-style:italic;">.m0</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin</span><span style="color:#002339;">: </span><span style="color:#174781;">0</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.m5</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin</span><span style="color:#002339;">: </span><span style="color:#174781;">5</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.m10</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin</span><span style="color:#002339;">: </span><span style="color:#174781;">10</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.m15</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin</span><span style="color:#002339;">: </span><span style="color:#174781;">15</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.m20</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin</span><span style="color:#002339;">: </span><span style="color:#174781;">20</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.m8</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin</span><span style="color:#002339;">: </span><span style="color:#174781;">8</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.m16</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin</span><span style="color:#002339;">: </span><span style="color:#174781;">16</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.m24</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin</span><span style="color:#002339;">: </span><span style="color:#174781;">24</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mt-5</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-top</span><span style="color:#002339;">: </span><span style="color:#174781;">5</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mt-10</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-top</span><span style="color:#002339;">: </span><span style="color:#174781;">10</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mt-15</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-top</span><span style="color:#002339;">: </span><span style="color:#174781;">15</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mt-20</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-top</span><span style="color:#002339;">: </span><span style="color:#174781;">20</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mt-8</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-top</span><span style="color:#002339;">: </span><span style="color:#174781;">8</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mt-16</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-top</span><span style="color:#002339;">: </span><span style="color:#174781;">16</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mt-24</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-top</span><span style="color:#002339;">: </span><span style="color:#174781;">24</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mr-5</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-right</span><span style="color:#002339;">: </span><span style="color:#174781;">5</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mr-10</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-right</span><span style="color:#002339;">: </span><span style="color:#174781;">10</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mr-15</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-right</span><span style="color:#002339;">: </span><span style="color:#174781;">15</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mr-20</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-right</span><span style="color:#002339;">: </span><span style="color:#174781;">20</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mr-8</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-right</span><span style="color:#002339;">: </span><span style="color:#174781;">8</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mr-16</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-right</span><span style="color:#002339;">: </span><span style="color:#174781;">16</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mr-24</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-right</span><span style="color:#002339;">: </span><span style="color:#174781;">24</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mb-5</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-bottom</span><span style="color:#002339;">: </span><span style="color:#174781;">5</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mb-10</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-bottom</span><span style="color:#002339;">: </span><span style="color:#174781;">10</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mb-15</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-bottom</span><span style="color:#002339;">: </span><span style="color:#174781;">15</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mb-20</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-bottom</span><span style="color:#002339;">: </span><span style="color:#174781;">20</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mb-8</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-bottom</span><span style="color:#002339;">: </span><span style="color:#174781;">8</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mb-16</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-bottom</span><span style="color:#002339;">: </span><span style="color:#174781;">16</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.mb-24</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-bottom</span><span style="color:#002339;">: </span><span style="color:#174781;">24</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.ml-5</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-left</span><span style="color:#002339;">: </span><span style="color:#174781;">5</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.ml-10</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-left</span><span style="color:#002339;">: </span><span style="color:#174781;">10</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.ml-15</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-left</span><span style="color:#002339;">: </span><span style="color:#174781;">15</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.ml-20</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-left</span><span style="color:#002339;">: </span><span style="color:#174781;">20</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.ml-8</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-left</span><span style="color:#002339;">: </span><span style="color:#174781;">8</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.ml-16</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-left</span><span style="color:#002339;">: </span><span style="color:#174781;">16</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.ml-24</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">margin-left</span><span style="color:#002339;">: </span><span style="color:#174781;">24</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.p0</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding</span><span style="color:#002339;">: </span><span style="color:#174781;">0</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.p5</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding</span><span style="color:#002339;">: </span><span style="color:#174781;">5</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.p10</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding</span><span style="color:#002339;">: </span><span style="color:#174781;">10</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.p15</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding</span><span style="color:#002339;">: </span><span style="color:#174781;">15</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.p20</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding</span><span style="color:#002339;">: </span><span style="color:#174781;">20</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.p8</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding</span><span style="color:#002339;">: </span><span style="color:#174781;">8</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.p16</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding</span><span style="color:#002339;">: </span><span style="color:#174781;">16</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.p24</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding</span><span style="color:#002339;">: </span><span style="color:#174781;">24</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pt-5</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-top</span><span style="color:#002339;">: </span><span style="color:#174781;">5</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pt-10</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-top</span><span style="color:#002339;">: </span><span style="color:#174781;">10</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pt-15</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-top</span><span style="color:#002339;">: </span><span style="color:#174781;">15</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pt-20</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-top</span><span style="color:#002339;">: </span><span style="color:#174781;">20</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pt-8</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-top</span><span style="color:#002339;">: </span><span style="color:#174781;">8</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pt-16</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-top</span><span style="color:#002339;">: </span><span style="color:#174781;">16</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pt-24</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-top</span><span style="color:#002339;">: </span><span style="color:#174781;">24</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pr-5</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-right</span><span style="color:#002339;">: </span><span style="color:#174781;">5</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pr-10</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-right</span><span style="color:#002339;">: </span><span style="color:#174781;">10</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pr-15</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-right</span><span style="color:#002339;">: </span><span style="color:#174781;">15</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pr-20</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-right</span><span style="color:#002339;">: </span><span style="color:#174781;">20</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pr-8</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-right</span><span style="color:#002339;">: </span><span style="color:#174781;">8</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pr-16</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-right</span><span style="color:#002339;">: </span><span style="color:#174781;">16</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pr-24</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-right</span><span style="color:#002339;">: </span><span style="color:#174781;">24</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pb-5</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-bottom</span><span style="color:#002339;">: </span><span style="color:#174781;">5</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pb-10</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-bottom</span><span style="color:#002339;">: </span><span style="color:#174781;">10</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pb-15</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-bottom</span><span style="color:#002339;">: </span><span style="color:#174781;">15</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pb-20</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-bottom</span><span style="color:#002339;">: </span><span style="color:#174781;">20</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pb-8</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-bottom</span><span style="color:#002339;">: </span><span style="color:#174781;">8</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pb-16</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-bottom</span><span style="color:#002339;">: </span><span style="color:#174781;">16</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pb-24</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-bottom</span><span style="color:#002339;">: </span><span style="color:#174781;">24</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pl-5</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-left</span><span style="color:#002339;">: </span><span style="color:#174781;">5</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pl-10</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-left</span><span style="color:#002339;">: </span><span style="color:#174781;">10</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pl-15</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-left</span><span style="color:#002339;">: </span><span style="color:#174781;">15</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pl-20</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-left</span><span style="color:#002339;">: </span><span style="color:#174781;">20</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pl-8</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-left</span><span style="color:#002339;">: </span><span style="color:#174781;">8</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pl-16</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-left</span><span style="color:#002339;">: </span><span style="color:#174781;">16</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.pl-24</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">padding-left</span><span style="color:#002339;">: </span><span style="color:#174781;">24</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.t-center</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">text-align</span><span style="color:#002339;">: </span><span style="color:#174781;">center</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.t-right</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">text-align</span><span style="color:#002339;">: </span><span style="color:#174781;">right</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.t-ellipsis</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">display</span><span style="color:#002339;">: </span><span style="color:#174781;">inline-block</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">width</span><span style="color:#002339;">: </span><span style="color:#174781;">100</span><span style="color:#7B30D0;">%</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">white-space</span><span style="color:#002339;">: </span><span style="color:#174781;">nowrap</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">overflow</span><span style="color:#002339;">: </span><span style="color:#174781;">hidden</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">text-overflow</span><span style="color:#002339;">: </span><span style="color:#174781;">ellipsis</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.f-s-12</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">font-size</span><span style="color:#002339;">: </span><span style="color:#174781;">12</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.f-s-14</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">font-size</span><span style="color:#002339;">: </span><span style="color:#174781;">14</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.f-s-16</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">font-size</span><span style="color:#002339;">: </span><span style="color:#174781;">16</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.f-s-18</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">font-size</span><span style="color:#002339;">: </span><span style="color:#174781;">18</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.f-s-20</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">font-size</span><span style="color:#002339;">: </span><span style="color:#174781;">20</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.f-s-22</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">font-size</span><span style="color:#002339;">: </span><span style="color:#174781;">22</span><span style="color:#7B30D0;">px</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.f-color-blue</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">color</span><span style="color:#002339;">: </span><span style="color:#174781;">#1089ff</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.f-color-red</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">color</span><span style="color:#002339;">: </span><span style="color:#174781;">#f5222d</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.f-color-333</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">color</span><span style="color:#002339;">: </span><span style="color:#174781;">#333333</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.f-color-666</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">color</span><span style="color:#002339;">: </span><span style="color:#174781;">#666666</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.f-color-999</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">color</span><span style="color:#002339;">: </span><span style="color:#174781;">#999999</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.link</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">cursor</span><span style="color:#002339;">: </span><span style="color:#174781;">pointer</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">color</span><span style="color:#002339;">: </span><span style="color:#174781;">#1089ff</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.link-red</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">cursor</span><span style="color:#002339;">: </span><span style="color:#174781;">pointer</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">color</span><span style="color:#002339;">: </span><span style="color:#174781;">#f5222d</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">.g-relative</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">position</span><span style="color:#002339;">: </span><span style="color:#174781;">relative</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#002339;">[</span><span style="color:#DF8618;font-style:italic;">border-box</span><span style="color:#002339;">] {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">-webkit-box-sizing</span><span style="color:#002339;">: </span><span style="color:#174781;">border-box</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">-moz-box-sizing</span><span style="color:#002339;">: </span><span style="color:#174781;">border-box</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">box-sizing</span><span style="color:#002339;">: </span><span style="color:#174781;">border-box</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">[</span><span style="color:#DF8618;font-style:italic;">t-ellipsis</span><span style="color:#002339;">] {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">display</span><span style="color:#002339;">: </span><span style="color:#174781;">inline-block</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">width</span><span style="color:#002339;">: </span><span style="color:#174781;">100</span><span style="color:#7B30D0;">%</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">white-space</span><span style="color:#002339;">: </span><span style="color:#174781;">nowrap</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">overflow</span><span style="color:#002339;">: </span><span style="color:#174781;">hidden</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">text-overflow</span><span style="color:#002339;">: </span><span style="color:#174781;">ellipsis</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">[</span><span style="color:#DF8618;font-style:italic;">v-cloak</span><span style="color:#002339;">] {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">display</span><span style="color:#002339;">: </span><span style="color:#174781;">none</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span></code></pre></div><h2 id="scrollbar-css" tabindex="-1">scrollbar.css <a class="header-anchor" href="#scrollbar-css" aria-label="Permalink to &quot;scrollbar.css&quot;">​</a></h2><p>用于重置默认滚动条的样式，也可以使用内部scrollbar组件</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki rose-pine-moon vp-code-dark"><code><span class="line"><span style="color:#908CAA;font-style:italic;">::</span><span style="color:#C4A7E7;font-style:italic;">-webkit-scrollbar</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">width</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">var</span><span style="color:#908CAA;">(</span><span style="color:#E0DEF4;font-style:italic;">--bin-scrollbar-width</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">height</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">var</span><span style="color:#908CAA;">(</span><span style="color:#E0DEF4;font-style:italic;">--bin-scrollbar-width</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">::</span><span style="color:#C4A7E7;font-style:italic;">-webkit-scrollbar-track</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">background</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">var</span><span style="color:#908CAA;">(</span><span style="color:#E0DEF4;font-style:italic;">--bin-scrollbar-track</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">::</span><span style="color:#C4A7E7;font-style:italic;">-webkit-scrollbar-thumb</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">background</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">var</span><span style="color:#908CAA;">(</span><span style="color:#E0DEF4;font-style:italic;">--bin-scrollbar-color</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">border-radius</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">var</span><span style="color:#908CAA;">(</span><span style="color:#E0DEF4;font-style:italic;">--bin-scrollbar-radius</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">transition</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">0.2</span><span style="color:#3E8FB0;">s</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">::</span><span style="color:#C4A7E7;font-style:italic;">-webkit-scrollbar-thumb</span><span style="color:#908CAA;font-style:italic;">:</span><span style="color:#C4A7E7;font-style:italic;">hover</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#9CCFD8;">background</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">var</span><span style="color:#908CAA;">(</span><span style="color:#E0DEF4;font-style:italic;">--bin-scrollbar-color-hover</span><span style="color:#908CAA;">);</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#DF8618;font-style:italic;">::-webkit-scrollbar</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">width</span><span style="color:#002339;">: </span><span style="color:#1AB394;">var</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">--bin-scrollbar-width</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">height</span><span style="color:#002339;">: </span><span style="color:#1AB394;">var</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">--bin-scrollbar-width</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">::-webkit-scrollbar-track</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">background</span><span style="color:#002339;">: </span><span style="color:#1AB394;">var</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">--bin-scrollbar-track</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">::-webkit-scrollbar-thumb</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">background</span><span style="color:#002339;">: </span><span style="color:#1AB394;">var</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">--bin-scrollbar-color</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">border-radius</span><span style="color:#002339;">: </span><span style="color:#1AB394;">var</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">--bin-scrollbar-radius</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">transition</span><span style="color:#002339;">: </span><span style="color:#174781;">0.2</span><span style="color:#7B30D0;">s</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DF8618;font-style:italic;">::-webkit-scrollbar-thumb:hover</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#DC3EB7;">background</span><span style="color:#002339;">: </span><span style="color:#1AB394;">var</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">--bin-scrollbar-color-hover</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#002339;">}</span></span></code></pre></div>`,9),r=[e,t,c];function y(i,A,C,E,D,F){return p(),l("div",null,r)}const B=a(o,[["render",y]]);export{d as __pageData,B as default};
