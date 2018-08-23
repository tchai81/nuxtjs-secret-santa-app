<template>
  <section>
    <div class="row mb-4">
      <div class="col-md-12">
        <json-input />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <matched />
      </div>
      <div class="col-md-6">
        <unmatched />
      </div>
    </div>
  </section>
</template>

<script>
import JsonInput from '~/components/json-input'
import Matched from '~/components/matched'
import Unmatched from '~/components/unmatched'
export default {
  components: {
    JsonInput,
    Matched,
    Unmatched
  }
}
</script>