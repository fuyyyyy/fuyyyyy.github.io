---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
  dl {
    margin-top: 1px;
    margin-bottom: 5px; /* 调整这个值以获得合适的间距 */
    clear: both;
  }

  img {
    display: block;
    margin: 0px 10px 10px 0px; /* 图片居中 上右下左*/ 
    max-width: 100%; /* 限制图片最大宽度 */
  }

  hr {
    border: 1px solid #ebebeb; /* 调整分隔线的颜色和样式 */
    /* margin: 10px;  */
    clear: both; 
  }


  dl dd {
  color: #; 
  margin-top: 1px; 
  margin-bottom: 1px;
}

  dl dd strong {
  font-weight: bold;
  }


  .publication-title {
    font-weight: bold;
  }

  .image-container {
    display: flex;
    justify-content: center;
    gap: 10px; /* 控制图片间距 */
    margin: 20px 0;
  }

  .image-container img {
    max-width: 150px; /* 控制最大宽度 */
    height: auto;
    margin: 0; /* 移除原来的 margin */
  }

  .co-first {
    color: #B02418;
  }
  
</style>

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>


# Short Bio

Hi there! My name is Yiyang Fang (方羿阳), I am currently a first-year Master student in the [School of Computer Science at Wuhan University](https://cs.whu.edu.cn/), advised by Prof. [Mang Ye](https://scholar.google.com/citations?user=j-HxRy0AAAAJ&hl=zh-CN). Previously, I received my bachelor degree from the [School of Computer Science and Technology at Shandong University](https://www.cs.sdu.edu.cn/) in 2024. If you are interested in collaborating with me or want to have a chat, always feel free to contact me through e-mail.

My research mainly focuses on **Multimodal Emotion Recognition**.




# 🔥 News
<div style="max-height: 200px; overflow-y: auto;">
<ul>
  <li><em>2025.02:</em> 🚀 EMOE was accepted to <strong>CVPR 2025</strong>.</li>
</ul>
</div>

# 📝 Publications 

&dagger;: equal contribution, * : corresponding author

<hr>

<dl>
  <dt><img align="left" width="400" src="../images/paper/EMOE.png" alt="EMOE"></dt>
  <dd><a class="publication-title">EMOE: Modality-Specific Enhanced Dynamic Emotion Experts</a></dd>
  <dd><strong>Yiyang Fang<sup>&dagger;</sup></strong>, Wenke Huang<sup>&dagger;</sup>, Guancheng Wan<sup>&dagger;</sup>, Kehua Su*, Mang Ye*</dd>
  <dd>Conference on Computer Vision and Pattern Recognition <strong>(CVPR)</strong>, 2025</dd>
</dl>

<hr>

## ⌛️ In Submission & Preprint
<hr>

<dl>
  <dt><img align="left" width="400" src="../images/paper/SEPM.png" alt="SEPM"></dt>
  <dd><a class="publication-title">Catch Your Emotion: Sharpening Emotion Perception in Multimodal Large Language Models</a></dd>
  <dd><strong>Yiyang Fang<sup>&dagger;</sup></strong>, Jian Liang<sup>&dagger;</sup>, Wenke Huang<sup>&dagger;</sup>, He Li, Kehua Su*, Mang Ye*</dd>
  <dd>Under Review</dd>
</dl>

<hr>

<dl>
  <dt><img align="left" width="400" src="../images/paper/MLLM_survey.png" alt="MLLM_survey"></dt>
  <dd><a href="https://arxiv.org/abs/2503.04543" class="publication-title">Keeping Yourself is Important in Downstream Tuning Multimodal Large Language Model</a></dd>
  <dd>Wenke Huang<sup>&dagger;</sup>, Jian Liang<sup>&dagger;</sup>, Xianda Guo<sup>&dagger;</sup>, <strong>Yiyang Fang<sup>&dagger;</sup></strong> <strong><span class="co-first">(co-first)</span></strong>, Guancheng Wan<sup>&dagger;</sup>, Xuankun Rong, Chi Wen, Zekun Shi, Qingyun Li, Didi Zhu, Yanbiao Ma, Ke Liang, Bin Yang, He Li, Jiawei Shao, Mang Ye*, Bo Du*</dd>
  <dd>Under Review</dd>
</dl>

<hr>


# 📖 Educations

- *2024.09 - now*, Master Student, School of Computer Science, Wuhan University, China.
- *2020.09 - 2024.06*, Bachelor, School of Computer Science and Technology, Shandong University, China.

