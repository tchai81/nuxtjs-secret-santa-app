<template>
    <div v-if="unmatched.length" class="card">
      <div class="card-body">
        <h5 class="card-title">Unmatched Employees ({{unmatched.length}})</h5>
        <p class="card-text">
          <ul>
            <li :key="index" v-for="(employee, index) in unmatched">
              {{employee.name}} - {{employee.gender}} - {{employee.manager}}
            </li>
          </ul>
        </p>
      </div>
    </div>
</template>

<script>
export default {
  computed: {
    unmatched() {
      return this.$store.state.santa.result.unmatched
    }
  }
}
</script>