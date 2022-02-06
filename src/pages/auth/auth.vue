<template lang="pug">
.auth
  .auth__container
    .auth__content
      .g-container
        logo.auth__logo
        span.auth__text More than just one repository. This is our digital world.
        c-button.auth__button Authorize with github
          icon.auth__icon(name="github")

        .auth__img-container
          img.auth__img(src="@/assets/img/desktop/desktop.png"
                        srcset="@/assets/img/desktop/desktop@2x.png 2x, @/assets/img/desktop/desktop@3x.png 3x")
    .auth__footer
      c-footer
</template>

<script>
import Logo from "@/components/logo/logo";
import Icon from "@/components/icons/icon";
import CButton from "@/components/button/button";
import CFooter from "@/components/footer/footer";
export default {
  name: "Auth",
  components: {
    Logo,
    Icon,
    CButton,
    CFooter,
  },
};
</script>

<style src="./_auth.scss" lang="scss" scoped />
