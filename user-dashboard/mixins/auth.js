import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      emailRules: [
        (v) => !!v || this.$t("E-mail is required."),
        (v) => /.+@.+\..+/.test(v) || this.$t("E-mail must be valid."),
      ],
      passwordRules: [
        (v) => !!v || this.$t("Password is required."),
        (v) =>
          (v && v.length > 7) || this.$t("Password must be min 8 characters."),
      ],
    };
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
      login_data: "auth/login_data",
      register_data: "auth/register_data",
    }),
  },
  methods: {
    ...mapActions({
      LOGIN: "auth/LOGIN",
      REGISTER: "auth/REGISTER",
    }),

    ...mapMutations({
      SET_USER: "auth/SET_USER",
      SET_JWT_TOKEN: "auth/SET_JWT_TOKEN",
      SET_LOGIN_DATA: "auth/SET_LOGIN_DATA",
    }),
  },
};