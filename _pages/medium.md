---
layout: page
title: Medium
permalink: /medium/
nav: true
nav_order: 2
---

<!-- Bootstrap 5 CSS & Font Awesome -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<!-- Custom styling for Medium posts -->
<style>
  .post {
    width: 820px;
    margin: 0 auto;
  }

  nav > .container {
    width: 820px !important;
    margin: 0 auto;
  }

  .publications-container {
    max-width: 820px;
    margin: 0 auto;
  }
  .year-divider {
    position: relative;
    margin-top: 3rem;
    margin-bottom: 2rem;
    text-align: right;
    color: rgba(0, 0, 0, 0.15);
    font-size: 2.5rem;
    font-weight: bold;
  }
  .year-divider::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .medium-header {
    background: linear-gradient(135deg, #6b21a8 0%, #3b82f6 100%);
    padding: 2rem 0;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    color: white;
    width: 820px !important;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .medium-header-content {
    max-width: 820px;
    margin: 0 auto;
    position: relative;
    padding: 0 1rem;
    color: white !important;
  }
  .medium-header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
    border-radius: 0.5rem;
    opacity: 0.5;
  }
  .medium-post-item {
    margin-bottom: 2rem;
    display: flex;
    align-items: flex-start;
  }
  .medium-post-image-container {
    width: 150px;
    height: 150px;
    overflow: hidden;
    margin-right: 1.5rem;
    flex-shrink: 0;
    background-color: #f8f9fa;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .medium-post-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .medium-post-content {
    flex-grow: 1;
  }
  .medium-post-title {
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  .medium-post-title a {
    color: #212529;
    text-decoration: none;
  }
  .medium-post-title a:hover {
    color: #0d6efd;
    text-decoration: none !important;
    
  }
  .medium-post-meta {
    font-size: 0.85rem;
    color: #6c757d;
    margin-bottom: 0.75rem;
  }
  .medium-post-excerpt {
    margin-bottom: 0.75rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .medium-btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
  }
  .medium-btn-outline {
    border: 1px solid #dee2e6;
    color: #495057;
    text-decoration: none;
  }
  .medium-btn-outline:hover {
    background-color: #f8f9fa;
    color: #212529;
    text-decoration: none !important;
  }
  .medium-btn-primary {
    background-color: #b788de;
    color: white;
    text-decoration: none !important;
  }
  .medium-btn-primary:hover {
    background-color: #a357de;
    color: white;
    text-decoration: none !important;
  }

  .medium-post-item > a {
    text-decoration: none;
  }

  .search-container {
    max-width: 820px;
    margin: 0 auto 2rem auto;
  }
  .search-box {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    font-size: 1rem;
  }
  #back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    z-index: 999;
  }
  @media (max-width: 767.98px) {
    .medium-post-item {
      flex-direction: column;
    }
    .medium-post-image-container {
      width: 100%;
      height: 200px;
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
</style>

<div class="medium-header position-relative">
  <div class="medium-header-content">
    <p class="lead mb-0" style="color: white; text-align: center">A Journey Towards <b>Hope</b>. </p>
  </div>
</div>

<div class="search-container px-3">
  <input type="text" class="search-box" id="medium-search" placeholder="Type to filter articles...">
</div>

<div class="publications-container px-3">
  {% assign posts_by_year = site.data.medium_posts | group_by_exp: "post", "post.date | date: '%Y'" | sort: "name" | reverse %}
  
  {% for year in posts_by_year %}
    <div class="year-divider">{{ year.name }}</div>
    
    {% for post in year.items %}
      <div class="medium-post-item">
        <div class="medium-post-image-container">
          {% if post.first_image %}
            <img src="{{ post.first_image }}" alt="{{ post.title }}" class="medium-post-image">
          {% else %}
            <i class="fab fa-medium fa-3x text-secondary"></i>
          {% endif %}
        </div>
        
        <div class="medium-post-content">
          <h3 class="medium-post-title h5">
            <a href="{{ post.url }}" target="_blank">{{ post.title }}</a>
          </h3>
          
          <div class="medium-post-meta">
            <i class="far fa-calendar-alt me-1"></i> {{ post.date | date: "%B %-d, %Y" }}
          </div>
          
          <div class="medium-post-excerpt">
            {{ post.content | strip_html | truncatewords: 28 }}
          </div>
          
          <div>
            <a href="{{ post.url }}" target="_blank" class="medium-btn medium-btn-primary">
              <i class="fab fa-medium me-1"></i> Read
            </a>
            
            <a href="https://twitter.com/intent/tweet?url={{ post.url | url_encode }}&text={{ post.title | url_encode }}" target="_blank" class="medium-btn medium-btn-outline">
              <i class="fab fa-twitter me-1"></i> Share
            </a>
            
            <a href="javascript:void(0);" onclick="navigator.clipboard.writeText('{{ post.url }}')" class="medium-btn medium-btn-outline">
              <i class="far fa-copy me-1"></i> Copy Link
            </a>
          </div>
        </div>
      </div>
    {% endfor %}
  {% endfor %}
</div>


<!-- JavaScript for search functionality and back to top button -->
<script>
  document.addEventListener("DOMContentLoaded", function() {
    // Search functionality
    const searchBox = document.getElementById('medium-search');
    const postItems = document.querySelectorAll('.medium-post-item');
    
    searchBox.addEventListener('keyup', function() {
      const searchTerm = this.value.toLowerCase();
      
      postItems.forEach(item => {
        const title = item.querySelector('.medium-post-title').textContent.toLowerCase();
        const content = item.querySelector('.medium-post-excerpt').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
    
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
</script>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>