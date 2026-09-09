---
layout: page
title: Courses Taught
lede: "Detailed pedagogical teaching activities — courses taught, semester by semester, most recent first."
---

<div class="table-wrap">
<table>
  <thead>
    <tr>
      <th>Course</th>
      <th>Institution</th>
      <th>Level</th>
      <th>Term</th>
      <th>Hours</th>
      <th>Credits / Notes</th>
    </tr>
  </thead>
  <tbody>
    {% for c in site.data.courses %}
    <tr>
      <td>{% if c.url %}<a href="{{ c.url }}" target="_blank" rel="noopener">{{ c.title }}</a>{% else %}{{ c.title }}{% endif %}</td>
      <td>{{ c.institution }}</td>
      <td>{{ c.level }}</td>
      <td>{{ c.term }}</td>
      <td>{{ c.hours | default: "—" }}</td>
      <td>{{ c.credits }}{% if c.credits and c.note %} · {% endif %}{{ c.note }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
</div>
