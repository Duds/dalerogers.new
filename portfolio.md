---
layout: page
title: Portfolio
permalink: /portfolio/
---

{% for post in site.categories.case-study %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt }}</p>
{% endfor %}