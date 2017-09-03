<template>
  <div class="container" id="cnt1">
    <div class="col-md-3">
    </div>

    <div class="col-md-6" id="panel1">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">
            <span class="fa fa-question-circle"></span>   Satisfaction Survey</h3>
        </div>
        <div class="panel-body two-col">
          <div class="row">
            <div class="col-md-6">
              <div class="well well-sm">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="">
                    Service is timely
                  </label>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="well well-sm">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="">
                    Staff is friendly
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="well well-sm margin-bottom-none">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="">
                    Support is timely
                  </label>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="well well-sm margin-bottom-none">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="">
                    Help resources are available
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-12">
              <div class="well well-sm">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="">
                    Will purchase next version
                  </label>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="panel-footer">
          <div class="row">
            <div class="col-md-6">
              <button type="button" class="btn btn-success btn-sm btn-block">
                <span class="fa fa-send"></span>Submit</button>
            </div>
            <div class="col-md-6">
              <button type="button" class="btn btn-primary btn-sm btn-block">
                View Result</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #cnt1 {
    background-color: rgba(215, 212, 212, 0.88);
    margin-bottom: 70px;
  }

  #panel1 {
    padding:20px;
  }

  .panel-body:not(.two-col) {
    padding: 0px;
  }

  .panel-body .radio, .panel-body .checkbox {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .panel-body .list-group {
    margin-bottom: 0;
  }

  .margin-bottom-none {
    margin-bottom: 0;
  }
</style>
