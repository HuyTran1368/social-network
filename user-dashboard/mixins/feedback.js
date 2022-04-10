import _ from "lodash";
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      feedback_loading: "feedback/loading",
      pagination: "feedback/pagination",
      feedbacks: "feedback/feedbacks",
    }),

    /**
     * @description pages_exists will return true
     * @returns boolean
     */
    pages_exists() {
      return !!_.get(this.pagination, "total_pages");
    },
  },
  methods: {
    ...mapActions({
      GET_FEEDBACKS: "feedback/GET_FEEDBACKS",
      DELETE_FEEDBACK: "feedback/DELETE_FEEDBACK",
      CREATE_FEEDBACK: "feedback/CREATE_FEEDBACK",
      UPDATE_FEEDBACK: "feedback/UPDATE_FEEDBACK",
    }),

    ...mapMutations({
      SET_LOADING: "feedback/SET_LOADING",
      UPDATE_NEW_FEEDBACK_DATA: "feedback/UPDATE_NEW_FEEDBACK_DATA",
    }),
  },
};
