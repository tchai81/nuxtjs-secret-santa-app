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
import { mapMutations } from 'vuex'
import Santa from '~/mixins/santa'
import Modal from '~/components/modal'
export default {
  mixins: [Santa],
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
      employees: ''
    }
  },
  methods: {
    ...mapMutations({
      setResult: 'santa/SET_RESULT',
      emptyResult: 'santa/EMPTY_RESULT'
    }),
    onProcess() {
      this.emptyResult()
      this.classObject['is-invalid'] = false
      const json = this.validateAndReturnJson(this.employees)
      if (!json) {
        this.classObject['is-invalid'] = true
      } else {
        const shuffled = this.shuffleArray(json)
        this.setResult(this.matchPairs(shuffled))
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
      const json = this.isJson(str)
      return json ? json : false
    }
  }
}
</script>

<style scoped>
.helpBlock {
  color: grey;
}
</style>