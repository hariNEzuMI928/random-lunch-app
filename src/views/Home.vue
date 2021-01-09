<template>
  <Calendar />
  <hr />
  <Success />
</template>

<script>
import Calendar from "@/components/Calendar";
import Success from "@/components/Success";

export default {
  name: "Home",
  components: {
    Calendar,
    Success,
  },
  data: function () {
    return {
      chkTypeNum: true,
      chkTypeLow: true,
      chkTypeHigh: true,
      chkTypeSymbol: true,
    };
  },
};
</script>
