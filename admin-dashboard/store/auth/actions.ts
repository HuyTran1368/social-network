import { ActionTypes } from "./action-types";
import { ActionTree } from "vuex";
import { AuthState } from "./index";
import { RootState } from "../index";
import { MutationTypes } from "./mutation-types";

const actions: ActionTree<AuthState, RootState> = {
  /**
   * login
   * @param param0
   */
  async [ActionTypes.SIGN_IN]({ commit, state }) {
    try {
      const response = await this.$axios.$post("/admin/auth/sign-in", {
        data: state.sign_in_data,
      });

      if (response.user && response.access_token) {
        commit(MutationTypes.SET_HAS_USER, { data: true });
        commit(MutationTypes.SET_USER, { data: response.user });
      }

      return response;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   * login
   * @param param0
   */
  async [ActionTypes.VERIFY]({ commit, state }) {
    try {
      const { user } = await this.$axios.$get("/admin/auth/verify");

      if (user) {
        commit(MutationTypes.SET_HAS_USER, { data: true });
        commit(MutationTypes.SET_USER, { data: user });
      }

      return user;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   * login
   * @param param0
   */
  async [ActionTypes.AUTO_SIGN_IN]({ commit, state }) {
    try {
      const response = await this.$axios.$get("/admin/auth/auto-sign-in");

      const { user, is_error } = response.body;

      if (user) {
        commit(MutationTypes.SET_HAS_USER, { data: true });
        commit(MutationTypes.SET_USER, { data: user });
      }

      return { user, is_error };
    } catch (err) {
      console.error(err);
    }
  },

  /**
   * sign up
   * @param param0
   */
  async [ActionTypes.SIGN_UP]({ state }) {
    try {
      const response = await this.$axios.$post("/admin/auth/sign-up", {
        data: state.sign_up_data,
      });

      return response;
    } catch (err) {
      console.error(err);
    }
  },
};

export default actions;