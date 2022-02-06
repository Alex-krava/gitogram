<template lang="pug">
.auth
  .auth__container
    .auth__content
      .g-container
        logo.auth__logo
        span.auth__text More than just one repository. This is our digital world.
        c-button.auth__button(@click="handlingClickAuthorize") Authorize with github
          icon.auth__icon(name="github")

        .auth__img-container
          img.auth__img(src="@/assets/img/desktop/desktop.png"
                        srcset="@/assets/img/desktop/desktop@2x.png 2x, @/assets/img/desktop/desktop@3x.png 3x")
    .auth__footer
      c-footer
</template>

<script>
import env from "@/env.js";

import Logo from "@/components/logo/logo";
import Icon from "@/components/icons/icon";
import CButton from "@/components/button/button";
import CFooter from "@/components/footer/footer";
import { getAuthToken } from "../../api/rest/authToken";

export default {
  name: "Auth",
  components: {
    Logo,
    Icon,
    CButton,
    CFooter,
  },
  async created() {
    await this.init();
  },
  methods: {
    async init() {
      const code = new URLSearchParams(window.location.search).get("code");

      if (code) {
        try {
          const { data } = await getAuthToken(code);
          localStorage.setItem("token", data.token);
          await this.$router.replace({ name: "Home" });
        } catch (error) {
          console.log(new Error(error).message);
        }
      }
    },
    handlingClickAuthorize() {
      const gitHubAuthLink = "https://github.com/login/oauth/authorize";
      const params = new URLSearchParams();
      params.append("client_id", env.clientId);
      params.append("scope", "repo:status read:user");

      window.location.href = `${gitHubAuthLink}?${params}`;
    },
  },
};
</script>

<style src="./_auth.scss" lang="scss" scoped />
