<template>
    <div v-if="matched.length" class="card">
      <div class="card-body">
        <h5 class="card-title">Matched Employees ({{total}})</h5>
        <p class="card-text">
          <ul :class="[i !== matched.length - 1 ? 'pb-3 border-bottom' : '']" :key="i" v-for="(employees, i) in matched">
            <li :key="j" v-for="(employee, j) in employees">
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
    matched() {
      return this.$store.state.santa.result.matched
    },
    total() {
      let total=0
      this.$store.state.santa.result.matched.forEach((item)=> total = total + item.length)
      return total
    }
  }
}
</script>