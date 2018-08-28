<template>
    <div class="card mb-4">
      <div class="card-body">
        <h5 class="card-title">Unmatched Employees ({{total}})</h5>
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
    },
    total() {
      return this.$store.state.santa.result.unmatched.length
    }
  }
}
</script>