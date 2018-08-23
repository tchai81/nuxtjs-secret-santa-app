<template>
  <section>
    <div class="row mb-4">
      <div class="col-md-12">
        <small class="helpBlock form-text textmuted">
          // INPUT STRUCTURE: [{ "name": "Emp1",  "gender": "M", "manager": "Alex" }]
        </small>
        <textarea 
          v-model="employees"
          :class="classObject" 
          rows="5" ></textarea>
          <div class="invalid-feedback">
            Please enter a valid JSON string
          </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <button @click="onProcess" class="btn btn-primary">Process</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import Santa from '~/mixins/santa'
export default {
  mixins: [Santa],
  data() {
    return {
      classObject: {
        'form-control': true,
        'is-invalid': false
      },
      employees: ''
    }
  },
  methods: {
    ...mapMutations({
      setResult: 'santa/SET_RESULT'
    }),
    onProcess() {
      this.classObject['is-invalid'] = false
      if (!this.validate(this.employees)) {
        this.classObject['is-invalid'] = true
      } else {
        const shuffled = this.shuffleArray(JSON.parse(this.employees))
        this.setResult(this.matchPairs(shuffled))
      }
    },
    isJson(str) {
      try {
        JSON.parse(str)
      } catch (e) {
        return false
      }
      return true
    },
    validate(str) {
      if (!str) return false
      if (!this.isJson(str)) return false
      return true
    }
  }
}
</script>

<style scoped>
.helpBlock {
  color: grey;
}
</style>