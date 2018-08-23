<template>
  <div>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 class="header my-0 mr-md-auto font-weight-normal">Secret Santa App</h5>
    </div>
    <!-- Begin page content -->
    <main role="main" class="container">
      <nuxt/>
    </main>
    <footer class="footer">
      <div class="container">
        <span class="text-muted">Copyright &copy; {{ currentYear }}. All Rights reserved.</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style>

body {
  font-size: 14px;
  padding-bottom: 60px;
}

.footer {
  position:fixed;
  bottom:0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}
</style>
