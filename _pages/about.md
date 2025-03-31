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

I am currently a first-year Ph.D. student in the [School of Computer Science at Wuhan University](https://cs.whu.edu.cn/), advised by Prof. [Mang Ye](https://scholar.google.com/citations?user=j-HxRy0AAAAJ&hl=zh-CN). Previously, I received my bachelor degree from the [School of Mathematics and Statistics at Wuhan University](https://maths.whu.edu.cn/) in 2024. If you are interested in collaborating with me or want to have a chat, always feel free to contact me through e-mail or [Wechat](https://github.com/user-attachments/assets/7777009a-aa6c-4ed9-aa4c-5da9204c03a5).

My research mainly focuses on **Multimodal Large Language Models** and **Parameter-Efficient Fine-Tuning**.




# 🔥 News
<div style="max-height: 200px; overflow-y: auto;">
<ul>
  <li><em>2025.02:</em> 🚀 LoRASculpt was accepted to <strong>CVPR 2025</strong>.</li>
</ul>
</div>

# 📝 Publications 

&dagger;: equal contribution, * : corresponding author

<hr>

<dl>
  <dt><img align="left" width="400" src="../images/paper/LoRASculpt.png" alt="LVLM_Safety_Survey"></dt>
  <dd><a href="https://arxiv.org/abs/2503.16843" class="publication-title">LoRASculpt: Sculpting LoRA for Harmonizing General and Specialized Knowledge in Multimodal Large Language Models</a></dd>
  <dd><strong>Jian Liang<sup>&dagger;</sup></strong>, Wenke Huang<sup>&dagger;</sup>, Guancheng Wan<sup>&dagger;</sup>, Qu yang, Mang Ye*</dd>
  <dd>Conference on Computer Vision and Pattern Recognition <strong>(CVPR)</strong>, 2025</dd>
</dl>

<hr>

## ⌛️ In Submission & Preprint
<hr>

<dl>
  <dt><img align="left" width="400" src="../images/paper/MLLMFT_Survey.png" alt="Client As Navigator"></dt>
  <dd><a href="https://arxiv.org/abs/2503.04543" class="publication-title">Keeping Yourself is Important in Downstream Tuning Multimodal Large Language Model</a></dd>
  <dd>Wenke Huang<sup>&dagger;</sup>, <strong>Jian Liang<sup>&dagger;</sup></strong> <strong><span class="co-first">(co-first)</span></strong>, Xianda Guo<sup>&dagger;</sup>, Yiyang Fang<sup>&dagger;</sup>, Guancheng Wan<sup>&dagger;</sup>, Xuankun Rong, Chi Wen, Zekun Shi, Qingyun Li, Didi Zhu, Yanbiao Ma, Ke Liang, Bin Yang, He Li, Jiawei Shao, Mang Ye*, Bo Du*</dd>
  <dd>Under Review</dd>
</dl>

<hr>

<dl>
  <dt><img align="left" width="400" src="../images/paper/SPIDER.png" alt="MLLM_Finetune_Survey"></dt>
  <dd><a href="https://arxiv.org/abs/2411.10928" class="publication-title">Learn from Downstream and Be Yourself in Multimodal Large Language Model Fine-Tuning</a></dd>

  <dd>Wenke Huang, <strong>Jian Liang</strong>, Zekun Shi, Didi Zhu, Guancheng Wan, He Li, Bo Du, Dacheng Tao, Mang Ye*</dd>
  <dd>Under Review</dd>
</dl>

<hr>


# 🎖 Honors and Awards
- Outstanding Graduate of School of Mathematics and Statistics, Wuhan University <span style="float: right;">*Wuhan University*</span>
- First Class Scholarship of Wuhan University (Award Rate: <strong>5% school-wide</strong>) <span style="float: right;">*Wuhan University*</span>
- <a href="https://edf.whu.edu.cn/info/1342/6057.htm">Xunteng Huang Memorial Scholarship</a> (Award Rate: <strong>2% department-wide</strong>)   <span style="float: right;">*Wuhan University*</span>
- <a href="https://edu.hicomputing.huawei.com/winnerlist#:~:text=%E6%98%B1%E6%AC%A3%EF%BC%8C-,%E6%A2%81%E5%81%A5,-%EF%BC%8C">Huawei Intelligent Base Scholarship</a>   <span style="float: right;">*Huawei*</span>



# 📖 Educations

- *2024.09 - now*, PhD Student, School of Computer Science, Wuhan University, China.
- *2020.09 - 2024.06*, Bachelor, School of Mathematics and Statistics, Wuhan University, China.

