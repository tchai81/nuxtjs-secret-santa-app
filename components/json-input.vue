<template>
  <section>
    <div class="row mb-2">
      <div class="col-md-6">
        <small class="helpBlock form-text textmuted">
          // INPUT STRUCTURE: [{ "name": "Emp1",  "gender": "M", "manager": "Alex" }]
        </small>
      </div>
      <div class="col-md-6 text-right">
        <a href="#" @click="onShowSpecs">specs</a>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-md-12">
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
    <modal v-if="showSpecs" @close="showSpecs = false" />
  </section>
</template>

<script>
import { sampleData2 as Employees } from '~/mock/data/employees'
import { mapMutations, mapActions } from 'vuex'
import Modal from '~/components/modal'
export default {
  components: {
    Modal
  },
  data() {
    return {
      showSpecs: false,
      classObject: {
        'form-control': true,
        'is-invalid': false
      },
      employees: JSON.stringify(Employees)
    }
  },
  methods: {
    ...mapMutations({
      emptyResult: 'santa/EMPTY_RESULT'
    }),
    ...mapActions({
      processResult: 'santa/processResult'
    }),
    onProcess() {
      this.emptyResult()
      this.classObject['is-invalid'] = false
      const json = this.validateAndReturnJson(this.employees)
      if (!json) {
        this.classObject['is-invalid'] = true
      } else {
        this.processResult(json)
      }
    },
    onShowSpecs() {
      this.showSpecs = true
    },
    isJson(str) {
      try {
        return JSON.parse(str)
      } catch (e) {
        return false
      }
    },
    validateAndReturnJson(str) {
      if (!str) return false
      return this.isJson(str)
    }
  }
}
</script>

<style scoped>
.helpBlock {
  color: grey;
}
</style>