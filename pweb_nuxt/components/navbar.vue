<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container px-5">
        <a class="navbar-brand" href="/">CACA NUXT</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
            <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
            <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>
            <li class="nav-item"><router-link to="/pricing" class="nav-link">Pricing</router-link></li>
            <li class="nav-item"><router-link to="/faq" class="nav-link">FAQ</router-link></li>
            <li class="nav-item dropdown" ref="blogDropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" @click="toggleDropdown('blogDropdown')" aria-expanded="false">Blog</a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                    <li><router-link to="/blog-home">Blog Home</router-link></li>
                    <li><router-link to="/blog-post">Blog Post</router-link></li>
                </ul>
                </li>
            <!-- Dropdown for Portfolio -->
            <li class="nav-item dropdown" ref="portfolioDropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" @click="toggleDropdown('portfolioDropdown')" aria-expanded="false">Portfolio</a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                    <li><router-link to="/portfolio-item">Portfolio Item</router-link></li>
                    <li><router-link to="/portfolio-overview">Portfolio Overview</router-link></li>
                </ul>
                </li>
        </ul>
      </div>
    </div>
  </nav>
  </template>
  
  <script>
  export default {
    mounted() {
      // Include the Bootstrap and Core theme scripts dynamically
      const bootstrapScript = document.createElement('script');
      bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js';
      bootstrapScript.defer = true;
      document.head.appendChild(bootstrapScript);
  
      const coreThemeScript = document.createElement('script');
      coreThemeScript.defer = true;
      document.head.appendChild(coreThemeScript);
    },
    methods: {
    toggleDropdown(dropdownRef) {
      const dropdown = this.$refs[dropdownRef].querySelector('.dropdown-menu');
      dropdown.classList.toggle('show');
    },
    closeNavbar() {
      // Tutup navbar ketika tombol toggler diklik
      const navbar = document.querySelector('.navbar-collapse');
      navbar.classList.remove('show');
    }
  }
  // Component logic goes here
}
</script>
  
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>
  