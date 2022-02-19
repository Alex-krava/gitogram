import StatsTitle from './stats-title.vue';

export default {
    title: 'StatsTitle',
    component: StatsTitle,
};

export const Default = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { StatsTitle },
    template: `<stats-title v-bind="$props" />`,
});
