<template>
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
  <div v-if="events.length">
    <vue-cal
      class="vuecal--blue-theme"
      style="height: 800px"
      :events="events"
      :selected-date="selectedDate"
      hide-weekends
      :time-from="8 * 60"
      :time-to="19 * 60"
      active-view="month"
      :disable-views="['years', 'year', 'day']"
      events-on-month-view
    />
  </div>
  <div v-if="!events.length">
    <br />
    <h1>Loading...</h1>
  </div>

  <input type="date" v-model="newApplyForLunchDate" />
  <button @click="applyForLunch">ランチを申し込む</button>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import firebase from "firebase";

const templateClass = ["willBeHeld", "held", "notHeld"];
const templateMsg = [
  {
    title: "Lunch応募中",
    contentFull: "ランダムランチに応募中です。\n結果は当日分かります。",
  },
  {
    title: "Lunch開催",
    contentFull: "本日ランダムランチが開催されます",
  },
  {
    title: "Lunchリスケ",
    contentFull: "本日のランダムランチはメンバー不足のため中止されました。",
  },
];
const icon =
  '<i class="v-icon material-icons mt-1" style="font-size: small">local_cafe</i>';

export default {
  name: "Calendar",
  components: {
    VueCal,
  },
  data() {
    return {
      selectedDate: new Date(),
      events: [],
    };
  },
  created: function () {
    this.ref = firebase.database().ref("lunch");
  },
  mounted() {
    this.ref.on("value", () => this.getEvents());
  },
  methods: {
    getEvents() {
      this.events = [];
      this.ref.on("value", (snapshot) => {
        for (const [key, record] of Object.entries(snapshot.val())) {
          key;
          let event = {
            start: record.day + " 12:00",
            end: record.day + " 13:00",
            title: icon + templateMsg[record.state].title,
            contentFull: templateMsg[record.state].contentFull,
            class: templateClass[record.state],
          };
          this.events.push(event);
        }
      });
    },
    // TODO: 追加後に重複データが描画されてしまう
    applyForLunch() {
      firebase.auth().onAuthStateChanged((user) => {
        if (this.newApplyForLunchDate) {
          this.ref.push({
            email: user.email,
            state: "0",
            day: this.newApplyForLunchDate,
          });
        }
      });
    },
  },
};
</script>

<style>
.vuecal__event.held {
  background-color: rgba(255, 125, 125, 0.9);
  border: 1px solid rgb(235, 105, 105);
  color: #fff;
}
.vuecal__event.willBeHeld {
  background-color: rgba(124, 207, 99, 0.9);
  border: 1px solid rgb(104, 187, 79);
  color: #fff;
}
.vuecal__event.notHeld {
  background-color: rgba(137, 177, 223, 0.9);
  border: 1px solid rgb(117, 157, 203);
  color: #fff;
}
</style>
