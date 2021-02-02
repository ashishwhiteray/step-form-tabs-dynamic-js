<script>
var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tabs-content");
  x[n].style.display = "block";
  fixStepIndicator(n)
}

function nextPrev(event) {
  var x = document.getElementsByClassName("tabs-content");
  
  x[this.currentTab].style.display = "none";
  this.currentTab = this.currentTab + 1;
  showTab(this.currentTab);
}

function prev(event) {
  var x = document.getElementsByClassName("tabs-content");
  
  x[this.currentTab].style.display = "none";
  this.currentTab = this.currentTab - 1;
  showTab(this.currentTab);
}
function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("my-tabs");
  console.log("Total my tabs are ", x);
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace("tab-active", "");
  }
  x[n].className += "tab-active";
}
</script>
