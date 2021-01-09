<template>
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
  <vue-cal
    class="vuecal--blue-theme"
    :events="events"
    :selected-date="selectedDate"
    hide-weekends
    :time-from="8 * 60"
    :time-to="19 * 60"
    active-view="month"
    :disable-views="['years', 'year', 'day']"
    events-on-month-view
    :on-event-click="onEventClick"
  />
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

const icon = '<i class="v-icon material-icons mt-1">local_cafe</i>';
const templateMsg = {
  held: {
    title: icon + "Lunch開催",
    contentFull: "本日ランダムランチが開催されます",
  },
  willBeHeld: {
    title: icon + "Lunch応募中",
    contentFull: "ランダムランチに応募中です。\n結果は当日分かります。",
  },
  notHeld: {
    title: icon + "Lunchリスケ",
    contentFull: "本日のランダムランチはメンバー不足のため中止されました。",
  },
};

export default {
  name: "Calendar",
  components: {
    VueCal,
  },
  data() {
    return {
      selectedDate: new Date(),
      events: [
        {
          start: "2021-01-12 12:00",
          end: "2021-01-12 13:00",
          title: templateMsg.held.title,
          contentFull: templateMsg.held.contentFull,
          class: "held",
          background: true,
        },
        {
          start: "2021-01-13 12:00",
          end: "2021-01-13 13:00",
          title: templateMsg.held.title,
          contentFull: templateMsg.held.contentFull,
          class: "held",
          background: true,
        },
        {
          start: "2021-01-15 12:00",
          end: "2021-01-15 13:00",
          title: templateMsg.willBeHeld.title,
          contentFull: templateMsg.willBeHeld.contentFull,
          class: "willBeHeld",
          background: true,
        },
        {
          start: "2021-01-018 12:00",
          end: "2021-01-18 13:00",
          title: templateMsg.notHeld.title,
          contentFull: templateMsg.notHeld.contentFull,
          class: "notHeld",
          background: true,
        },
        {
          start: "2021-01-20 12:00",
          end: "2021-01-20 13:00",
          title: templateMsg.willBeHeld.title,
          contentFull: templateMsg.willBeHeld.contentFull,
          class: "willBeHeld",
          background: true,
        },
      ],
    };
  },
  // methods: {
  // },
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
