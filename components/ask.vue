<template>
  <form id="form" @submit.prevent="submitForm()">
    <div class="st-section-heading st-style2 text-center adj-top">
      <h2 id="qual">ERC Qualifier</h2>
      <div class="st-seperator">
        <div class="st-seperator-left-bar wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s"></div>
        <img src="../assets/img/seperator-icon1.png" alt="demo" class="st-seperator-icon" />
        <div class="st-seperator-right-bar wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s"></div>
      </div>
      <p>
        Answer these three simple questions to see if you qualify for the
        Employee Retention Credit
      </p>
    </div>
    <div class="form-group row">
      <label class="col-5">Do you own or control a US-based for-profit Business that was in
        existence prior to the pandemic?</label>
      <div class="col-7">
        <div class="custom-control custom-radio custom-control-inline">
          <input v-model="form.usBusiness" name="usBusiness" id="usBusinessYes" type="radio" class="custom-control-input"
            required="required" value="yes" />
          <label for="usBusinessYes" class="custom-control-label">Yes</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
          <input v-model="form.usBusiness" name="usBusiness" id="usBusinessNo" type="radio" class="custom-control-input"
            required="required" value="no" />
          <label for="usBusinessNo" class="custom-control-label">No</label>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-5">Did your Business Lose Revenue During the 2020 Pandemic?</label>
      <div class="col-7">
        <div class="custom-control custom-radio custom-control-inline">
          <input v-model="form.revenueLoss" name="revenueLoss" id="revenueLossYes" type="radio"
            aria-describedby="revenueLossHelpBlock" required="required" class="custom-control-input" value="yes" />
          <label for="revenueLossYes" class="custom-control-label">Yes</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
          <input v-model="form.revenueLoss" name="revenueLoss" id="revenueLossNo" type="radio"
            aria-describedby="revenueLossHelpBlock" required="required" class="custom-control-input" value="no" />
          <label for="revenueLossNo" class="custom-control-label">No</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
          <input v-model="form.revenueLoss" name="revenueLoss" id="revenueLossUnknown" type="radio"
            aria-describedby="revenueLossHelpBlock" required="required" class="custom-control-input" value="unknown" />
          <label for="revenueLossUnknown" class="custom-control-label">Not Sure</label>
        </div>
        <span id="revenueLossHelpBlock" class="form-text text-muted small">Did your business operations suffer a
          significant decline in gross
          receipts during the COVID-19 pandemic?</span>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-5">Did your business have to close, even partially, during the
        Pandemic?</label>
      <div class="col-7">
        <div class="custom-control custom-radio custom-control-inline">
          <input v-model="form.closure" name="closure" id="closureFull" type="radio" aria-describedby="closureHelpBlock"
            required="required" class="custom-control-input" value="full" />
          <label for="closureFull" class="custom-control-label">Yes - Full</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
          <input v-model="form.closure" name="closure" id="closurePart" type="radio" aria-describedby="closureHelpBlock"
            required="required" class="custom-control-input" value="part" />
          <label for="closurePart" class="custom-control-label">Yes - Partial</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
          <input v-model="form.closure" name="closure" id="closureNo" type="radio" aria-describedby="closureHelpBlock"
            required="required" class="custom-control-input" value="no" />
          <label for="closureNo" class="custom-control-label">No</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
          <input v-model="form.closure" name="closure" id="closureUnknown" type="radio"
            aria-describedby="closureHelpBlock" required="required" class="custom-control-input" value="unknown" />
          <label for="closureUnknown" class="custom-control-label">
            Not Sure
          </label>
        </div>
        <span id="closureHelpBlock" class="form-text text-muted small">
          Did your business operations suffer a complete or partial closure due
          to a governmental order related to COVID-19?
        </span>
      </div>
    </div>
    <div class="form-group row">
      <div class="offset-5 col-2">
        <button id="qualbtn" type="submit" value="submit" class="btn btn-primary">
          Check Eligibility
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
const router = useRouter();
const emits = defineEmits([
  "showQuestionnaire",
  "showUnqualified",
  "showAnswer",
]);

const form = ref({
  usBusiness: "",
  revenueLoss: "",
  closure: "",
});

function submitForm() {
  const { usBusiness, revenueLoss, closure } = form.value;

  if (usBusiness === "no" || revenueLoss === "no" || closure === "no") {
    emits("showUnqualified", true);
    emits("showAnswer", false);
    emits("showQuestionnaire", false);
    return true;
  }

  // navigate to page /book with query params
  router.push({
    path: "/book",
    // query: {
    //   usBusiness,
    //   revenueLoss,
    //   closure,
    // },
  });
}
</script>
