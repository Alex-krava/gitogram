import Issues from './issues.vue';

export default {
    title: 'Issues',
    component: Issues,
};

export const Default = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { Issues },
    template: `<issues v-bind="$props" />`,
});
